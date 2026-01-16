
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const http = require('http');
const { Server } = require('socket.io');
const cron = require('node-cron');
const { getVideoDurationInSeconds } = require('get-video-duration');
const twitchRoutes = require('./twitch');
const facebookRoutes = require('./facebook');
const instagramRoutes = require('./instagram');
const twitterRoutes = require('./twitter');
const tiktokRoutes = require('./tiktok');
const paystack = require('./utils/paystack');
const { refreshAllChannels } = require('./services/analyticsRefresh');


dotenv.config();

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

// Generate a secure random code for OAuth token exchange
function generateSecureCode() {
  return crypto.randomBytes(32).toString('hex');
}

const { PrismaClient, Prisma } = require('./generated');
const { PrismaPg } = require('@prisma/adapter-pg');

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Multer for ad materials (images + videos)
const adMaterialStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const adUploadsDir = path.join(uploadsDir, 'ads');
    if (!fs.existsSync(adUploadsDir)) {
      fs.mkdirSync(adUploadsDir, { recursive: true });
    }
    cb(null, adUploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const adUpload = multer({
  storage: adMaterialStorage,
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB limit for videos
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image and video files are allowed!'), false);
    }
  }
});

let currentUserType = 'CREATOR';

const app = express();
const server = http.createServer(app);

// Socket.IO setup with CORS
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST'],
    credentials: true
  }
});

// Store online users: Map<userId, socketId>
const onlineUsers = new Map();

// Socket.IO authentication middleware
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) {
    return next(new Error('Authentication error: No token provided'));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.userId = decoded.id;
    socket.userType = decoded.type;
    socket.userName = decoded.name;
    next();
  } catch (err) {
    next(new Error('Authentication error: Invalid token'));
  }
});

// Socket.IO connection handler
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.userId} (${socket.userName})`);

  // Add user to online users
  onlineUsers.set(socket.userId, socket.id);

  // Join a room for the user (for private messaging)
  socket.join(socket.userId);

  // Handle sending messages
  socket.on('sendMessage', async (data) => {
    const { toUserId, content } = data;

    try {
      // Save message to database
      const message = await prisma.message.create({
        data: {
          fromUserId: socket.userId,
          toUserId,
          content
        },
        include: {
          fromUser: { select: { id: true, name: true, avatar: true, type: true } },
          toUser: { select: { id: true, name: true, avatar: true, type: true } }
        }
      });

      // Emit to sender
      socket.emit('newMessage', message);

      // Emit to recipient if online
      const recipientSocketId = onlineUsers.get(toUserId);
      if (recipientSocketId) {
        io.to(toUserId).emit('newMessage', message);
      }
    } catch (error) {
      console.error('Socket sendMessage error:', error);
      socket.emit('messageError', { error: 'Failed to send message' });
    }
  });

  // Handle typing indicator
  socket.on('typing', (data) => {
    const { toUserId, isTyping } = data;
    const recipientSocketId = onlineUsers.get(toUserId);
    if (recipientSocketId) {
      io.to(toUserId).emit('userTyping', {
        userId: socket.userId,
        userName: socket.userName,
        isTyping
      });
    }
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.userId}`);
    onlineUsers.delete(socket.userId);
  });
});

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'https://communistic-kaleb-pseudoexperimentally.ngrok-free.dev/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  try {
    console.log('Google profile:', JSON.stringify(profile, null, 2));

    let user = await prisma.user.findUnique({
      where: { googleId: profile.id }
    });

    if (!user) {
      const email = (profile.emails && profile.emails[0] && profile.emails[0].value) ? profile.emails[0].value : `${profile.id}@google.temp`;
      const name = profile.displayName ||
                   (profile.name && (profile.name.givenName || profile.name.familyName)) ?
                   `${profile.name.givenName || ''} ${profile.name.familyName || ''}`.trim() :
                   'Google User';

      console.log('Raw profile data:', {
        id: profile.id,
        emails: profile.emails,
        displayName: profile.displayName,
        name: profile.name
      });
      console.log('Processed data:', { email, name, googleId: profile.id });
      console.log('Data types:', {
        email: typeof email,
        name: typeof name,
        googleId: typeof profile.id
      });
      console.log('Data lengths:', {
        email: email ? email.length : 0,
        name: name ? name.length : 0,
        googleId: profile.id ? profile.id.length : 0
      });

      // Ensure we have valid strings
      if (!email || email.trim() === '' || !name || name.trim() === '') {
        console.error('Invalid data for user creation - empty strings:', { email: `"${email}"`, name: `"${name}"` });
        return done(new Error('Invalid user data from Google - empty values'), null);
      }

      try {
        const userData = {
          email: email.trim(),
          name: name.trim(),
          googleId: profile.id
        };
        console.log('Final user data object:', userData);

        user = await prisma.user.create({
          data: userData
        });
        console.log('User created successfully:', user);
      } catch (createError) {
        console.error('Prisma create error:', createError);
        return done(createError, null);
      }
    }

    return done(null, user);
  } catch (error) {
    console.error('Error in Google strategy:', error);
    return done(error, null);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Auth Routes
app.get('/auth/google',
  (req, res, next) => {
    // Set user type
    currentUserType = req.query.state === 'brand' ? 'BRAND' : 'CREATOR';
    next();
  },
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: `${FRONTEND_URL}/login` }),
  async (req, res) => {
    try {
      // Generate JWT
      const token = jwt.sign({ id: req.user.id, email: req.user.email, name: req.user.name, type: req.user.type }, process.env.JWT_SECRET);

      // Generate a secure one-time code instead of passing token in URL
      const secureCode = generateSecureCode();

      // Store token data securely in database with 5 minute expiry
      await prisma.oAuthToken.create({
        data: {
          code: secureCode,
          platform: 'YOUTUBE', // Using YOUTUBE as platform since it's Google auth
          tokenData: token,
          userToken: null,
          expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
        },
      });

      // Check if user has type set
      if (!req.user.type) {
        // Redirect to type selection with secure code only
        res.redirect(`${FRONTEND_URL}/select-type?auth_code=${secureCode}`);
      } else {
        // Redirect to dashboard with secure code only
        res.redirect(`${FRONTEND_URL}/dashboard?auth_code=${secureCode}`);
      }
    } catch (err) {
      console.error('Google OAuth callback error:', err);
      res.redirect(`${FRONTEND_URL}/login?error=auth_failed`);
    }
  }
);

// Secure endpoint to exchange auth code for token (for Google auth)
app.post('/auth/exchange', async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'Missing code' });
  }

  try {
    const oauthToken = await prisma.oAuthToken.findUnique({
      where: { code },
    });

    if (!oauthToken) {
      return res.status(400).json({ error: 'Invalid code' });
    }

    if (oauthToken.used) {
      return res.status(400).json({ error: 'Code already used' });
    }

    if (new Date() > oauthToken.expiresAt) {
      await prisma.oAuthToken.delete({ where: { code } });
      return res.status(400).json({ error: 'Code expired' });
    }

    // Mark as used
    await prisma.oAuthToken.update({
      where: { code },
      data: { used: true },
    });

    res.json({ token: oauthToken.tokenData });

    // Clean up after a short delay
    setTimeout(async () => {
      try {
        await prisma.oAuthToken.delete({ where: { code } });
      } catch (e) {}
    }, 1000);
  } catch (err) {
    console.error('Auth exchange error:', err);
    res.status(500).json({ error: 'Exchange failed' });
  }
});

// Routes
app.get('/', (req, res) => {
  res.send('API is running');
});

// Test route to create a user
app.post('/test-user', async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test User'
      }
    });
    res.json({ success: true, user });
  } catch (error) {
    console.error('Test user creation error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update user type
app.post('/api/user/type', async (req, res) => {
  try {
    const { type } = req.body;
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.update({
      where: { id: decoded.id },
      data: { type }
    });

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user profile
app.get('/api/user/profile', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        email: true,
        name: true,
        type: true,
        bio: true,
        location: true,
        website: true,
        avatar: true,
        niches: true,
        industry: true,
        createdAt: true,
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Map avatar to logoUrl for frontend compatibility
    res.json({
      ...user,
      logoUrl: user.avatar,
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update user profile
app.post('/api/user/profile', upload.single('logo'), async (req, res) => {
  try {
    const { name, bio, location, website, niches, industry } = req.body;
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Prepare update data
    const updateData = {
      ...(name && { name }),
      ...(bio !== undefined && { bio }),
      ...(location !== undefined && { location }),
      ...(website !== undefined && { website }),
      ...(industry && { industry })
    };

    // Handle niches array (comes as JSON string from FormData)
    if (niches) {
      try {
        const nichesArray = JSON.parse(niches);
        if (Array.isArray(nichesArray)) {
          updateData.niches = nichesArray;
        }
      } catch (e) {
        console.error('Error parsing niches:', e);
      }
    }

    // Handle logo upload
    if (req.file) {
      updateData.avatar = `/uploads/${req.file.filename}`;
    }

    const user = await prisma.user.update({
      where: { id: decoded.id },
      data: updateData
    });

    // Generate new token with updated user info
    const newToken = jwt.sign({
      id: user.id,
      email: user.email,
      name: user.name,
      type: user.type,
      bio: user.bio,
      location: user.location,
      website: user.website,
      avatar: user.avatar,
      niches: user.niches,
      industry: user.industry
    }, process.env.JWT_SECRET);

    res.json({ user, token: newToken });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get user's connected channels
app.get('/api/user/channels', async (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'No token' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const channels = await prisma.channel.findMany({
      where: { userId: decoded.id },
      orderBy: { createdAt: 'desc' },
    });

    res.json(channels);
  } catch (error) {
    console.error('Get user channels error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Delete a connected channel
app.delete('/api/user/channels/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'No token' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Verify channel belongs to user
    const channel = await prisma.channel.findUnique({
      where: { id },
    });

    if (!channel || channel.userId !== decoded.id) {
      return res.status(403).json({ error: 'Access denied' });
    }

    await prisma.channel.delete({
      where: { id },
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Delete channel error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Content Announcement Routes
// Create content announcement with thumbnail upload
app.post('/api/content-announcements', upload.single('thumbnail'), async (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { title, description, platforms, channelIds, scheduledAt, maxSlots } = req.body;

    if (!title || !platforms || !scheduledAt) {
      return res.status(400).json({ error: 'Title, platforms, and scheduled date are required' });
    }

    // Parse maxSlots (default to 1)
    const parsedMaxSlots = parseInt(maxSlots) || 1;

    // Parse platforms array
    let platformsArray;
    try {
      platformsArray = JSON.parse(platforms);
    } catch (error) {
      return res.status(400).json({ error: 'Invalid platforms format' });
    }

    // Parse channelIds array
    let channelIdsArray = [];
    if (channelIds) {
      try {
        channelIdsArray = JSON.parse(channelIds);
      } catch (error) {
        // Ignore parsing error, keep empty array
      }
    }

    // Validate platforms
    const validPlatforms = ['YOUTUBE', 'FACEBOOK', 'INSTAGRAM', 'TWITCH', 'TWITTER', 'TIKTOK'];
    const invalidPlatforms = platformsArray.filter(p => !validPlatforms.includes(p));
    if (invalidPlatforms.length > 0) {
      return res.status(400).json({ error: `Invalid platforms: ${invalidPlatforms.join(', ')}` });
    }

    const thumbnailUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const announcement = await prisma.contentAnnouncement.create({
      data: {
        creatorId: decoded.id,
        title,
        description,
        platforms: platformsArray,
        channelIds: channelIdsArray,
        scheduledAt: new Date(scheduledAt),
        thumbnail: thumbnailUrl,
        maxSlots: parsedMaxSlots,
        filledSlots: 0,
      },
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
    });

    res.status(201).json(announcement);
  } catch (error) {
    console.error('Create content announcement error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get all active content announcements (for brands to browse)
app.get('/api/content-announcements', async (req, res) => {
  try {
    // Get all active announcements
    const allAnnouncements = await prisma.contentAnnouncement.findMany({
      where: {
        status: 'ACTIVE',
        scheduledAt: {
          gte: new Date(), // Only future announcements
        },
      },
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            avatar: true,
            channels: {
              select: {
                id: true,
                channelName: true,
                platform: true,
                subscribers: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Filter out announcements where all slots are filled
    const availableAnnouncements = allAnnouncements.filter(
      announcement => announcement.filledSlots < announcement.maxSlots
    );

    res.json(availableAnnouncements);
  } catch (error) {
    console.error('Get content announcements error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get content announcements by creator
app.get('/api/content-announcements/creator/:creatorId', async (req, res) => {
  try {
    const { creatorId } = req.params;
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Only allow creators to see their own announcements
    if (decoded.id !== creatorId) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const announcements = await prisma.contentAnnouncement.findMany({
      where: {
        creatorId,
      },
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.json(announcements);
  } catch (error) {
    console.error('Get creator announcements error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update content announcement
app.put('/api/content-announcements/:id', upload.single('thumbnail'), async (req, res) => {
  try {
    const { id } = req.params;
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { title, description, platforms, scheduledAt } = req.body;

    if (!title || !platforms || !scheduledAt) {
      return res.status(400).json({ error: 'Title, platforms, and scheduled date are required' });
    }

    // Parse platforms array
    let platformsArray;
    try {
      platformsArray = JSON.parse(platforms);
    } catch (error) {
      return res.status(400).json({ error: 'Invalid platforms format' });
    }

    // Validate platforms
    const validPlatforms = ['YOUTUBE', 'FACEBOOK', 'INSTAGRAM', 'TWITCH', 'TWITTER', 'TIKTOK'];
    const invalidPlatforms = platformsArray.filter(p => !validPlatforms.includes(p));
    if (invalidPlatforms.length > 0) {
      return res.status(400).json({ error: `Invalid platforms: ${invalidPlatforms.join(', ')}` });
    }

    // Check if announcement exists and belongs to user
    const existingAnnouncement = await prisma.contentAnnouncement.findUnique({
      where: { id },
    });

    if (!existingAnnouncement) {
      return res.status(404).json({ error: 'Announcement not found' });
    }

    if (existingAnnouncement.creatorId !== decoded.id) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const thumbnailUrl = req.file ? `/uploads/${req.file.filename}` : existingAnnouncement.thumbnail;

    const updatedAnnouncement = await prisma.contentAnnouncement.update({
      where: { id },
      data: {
        title,
        description,
        platforms: platformsArray,
        scheduledAt: new Date(scheduledAt),
        thumbnail: thumbnailUrl,
      },
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
    });

    res.json(updatedAnnouncement);
  } catch (error) {
    console.error('Update content announcement error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update content announcement status
app.patch('/api/content-announcements/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Verify the announcement belongs to the user
    const announcement = await prisma.contentAnnouncement.findUnique({
      where: { id },
    });

    if (!announcement) {
      return res.status(404).json({ error: 'Announcement not found' });
    }

    if (announcement.creatorId !== decoded.id) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const validStatuses = ['ACTIVE', 'COMPLETED', 'CANCELLED'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const updatedAnnouncement = await prisma.contentAnnouncement.update({
      where: { id },
      data: { status },
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
    });

    res.json(updatedAnnouncement);
  } catch (error) {
    console.error('Update announcement status error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Delete content announcement permanently
app.delete('/api/content-announcements/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Verify the announcement belongs to the user
    const announcement = await prisma.contentAnnouncement.findUnique({
      where: { id },
    });

    if (!announcement) {
      return res.status(404).json({ error: 'Announcement not found' });
    }

    if (announcement.creatorId !== decoded.id) {
      return res.status(403).json({ error: 'Access denied' });
    }

    // First, unlink any collaboration requests that reference this announcement
    await prisma.collaborationRequest.updateMany({
      where: { announcementId: id },
      data: { announcementId: null },
    });

    // Delete the announcement permanently
    await prisma.contentAnnouncement.delete({
      where: { id },
    });

    res.json({ success: true, message: 'Announcement deleted successfully' });
  } catch (error) {
    console.error('Delete announcement error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Marketplace API - Get creators with filters
app.get('/api/marketplace/creators', async (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Extract query parameters
    const { search, niches, platforms, minReach, maxReach } = req.query;

    // Build where clause
    const where = {
      type: 'CREATOR', // Only show creators
      NOT: {
        id: decoded.id // Exclude current user
      }
    };

    // Search by name, bio, or location
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { bio: { contains: search, mode: 'insensitive' } },
        { location: { contains: search, mode: 'insensitive' } }
      ];
    }

    // Filter by niches
    if (niches) {
      const nicheArray = niches.split(',');
      where.niches = {
        hasSome: nicheArray
      };
    }

    // Fetch creators with their channels
    let creators = await prisma.user.findMany({
      where,
      select: {
        id: true,
        name: true,
        bio: true,
        location: true,
        avatar: true,
        niches: true,
        channels: {
          select: {
            id: true,
            platform: true,
            channelName: true,
            subscribers: true,
            thumbnail: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Filter by platforms if specified
    if (platforms) {
      const platformArray = platforms.split(',');
      creators = creators.filter(creator =>
        creator.channels.some(channel => platformArray.includes(channel.platform))
      );
    }

    // Calculate total reach and filter by reach range
    creators = creators.map(creator => {
      const totalReach = creator.channels.reduce((sum, channel) => sum + (channel.subscribers || 0), 0);
      return { ...creator, totalReach };
    });

    // Filter by reach range
    if (minReach) {
      const min = parseInt(minReach);
      creators = creators.filter(c => c.totalReach >= min);
    }

    if (maxReach) {
      const max = parseInt(maxReach);
      creators = creators.filter(c => c.totalReach <= max);
    }

    // Sort by total reach (highest first)
    creators.sort((a, b) => b.totalReach - a.totalReach);

    res.json({ creators, count: creators.length });
  } catch (error) {
    console.error('Marketplace creators error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Marketplace API - Get brands with filters (for creators to browse)
app.get('/api/marketplace/brands', async (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Extract query parameters
    const { search } = req.query;

    // Build where clause
    const where = {
      type: 'BRAND', // Only show brands
      NOT: {
        id: decoded.id // Exclude current user
      }
    };

    // Search by name or bio
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { bio: { contains: search, mode: 'insensitive' } },
        { location: { contains: search, mode: 'insensitive' } }
      ];
    }

    // Fetch brands
    const brands = await prisma.user.findMany({
      where,
      select: {
        id: true,
        name: true,
        bio: true,
        location: true,
        avatar: true,
        website: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json({ brands, count: brands.length });
  } catch (error) {
    console.error('Marketplace brands error:', error);
    res.status(500).json({ error: error.message });
  }
});

const youtubeRoutes = require('./youtube');

app.use('/api/youtube', youtubeRoutes);

app.use('/api/twitch', twitchRoutes);

app.use('/api/facebook', facebookRoutes);

app.use('/api/instagram', instagramRoutes);

app.use('/api/twitter', twitterRoutes);

app.use('/api/tiktok', tiktokRoutes);

// ============= AD CRUD APIs =============

// Create a new ad (Brand only)
app.post('/api/ads', adUpload.fields([
  { name: 'images', maxCount: 10 },
  { name: 'videos', maxCount: 5 }
]), async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Verify user is a brand
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user || user.type !== 'BRAND') {
      return res.status(403).json({ error: 'Only brands can create ads' });
    }

    const { title, description, targetNiches, talkingPoints, guidelines, scriptRequired } = req.body;

    // Process uploaded files
    const images = req.files?.images?.map(f => `/uploads/ads/${f.filename}`) || [];
    const videos = req.files?.videos?.map(f => `/uploads/ads/${f.filename}`) || [];

    // Extract video durations
    const videoDurations = [];
    if (req.files?.videos) {
      for (const videoFile of req.files.videos) {
        try {
          const duration = await getVideoDurationInSeconds(videoFile.path);
          videoDurations.push(Math.round(duration));
        } catch (err) {
          console.error('Error getting video duration:', err);
          videoDurations.push(0); // Default to 0 if can't read duration
        }
      }
    }

    // Parse targetNiches if it's a string
    let niches = [];
    if (targetNiches) {
      try {
        niches = typeof targetNiches === 'string' ? JSON.parse(targetNiches) : targetNiches;
      } catch (e) {
        niches = [];
      }
    }

    const ad = await prisma.ad.create({
      data: {
        brandId: decoded.id,
        title,
        description: description || null,
        targetNiches: niches,
        images,
        videos,
        videoDurations,
        talkingPoints: talkingPoints || null,
        guidelines: guidelines || null,
        scriptRequired: scriptRequired === 'true' || scriptRequired === true,
        status: 'DRAFT'
      },
      include: {
        brand: {
          select: { id: true, name: true, avatar: true, industry: true }
        }
      }
    });

    res.status(201).json(ad);
  } catch (error) {
    console.error('Create ad error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get all ads for current brand
app.get('/api/ads', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const ads = await prisma.ad.findMany({
      where: { brandId: decoded.id },
      include: {
        brand: {
          select: { id: true, name: true, avatar: true, industry: true }
        },
        adRequests: {
          include: {
            creator: {
              select: { id: true, name: true, avatar: true, niches: true }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(ads);
  } catch (error) {
    console.error('Get ads error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get single ad by ID
app.get('/api/ads/:id', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const ad = await prisma.ad.findUnique({
      where: { id: req.params.id },
      include: {
        brand: {
          select: { id: true, name: true, avatar: true, industry: true, bio: true, website: true }
        },
        adRequests: {
          include: {
            creator: {
              select: { id: true, name: true, avatar: true, niches: true, bio: true }
            }
          }
        }
      }
    });

    if (!ad) {
      return res.status(404).json({ error: 'Ad not found' });
    }

    res.json(ad);
  } catch (error) {
    console.error('Get ad error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update an ad
app.put('/api/ads/:id', adUpload.fields([
  { name: 'images', maxCount: 10 },
  { name: 'videos', maxCount: 5 }
]), async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Verify ownership
    const existingAd = await prisma.ad.findUnique({ where: { id: req.params.id } });
    if (!existingAd || existingAd.brandId !== decoded.id) {
      return res.status(403).json({ error: 'Not authorized to update this ad' });
    }

    const { title, description, targetNiches, talkingPoints, guidelines, status, existingImages, existingVideos, imageOrder, videoOrder, scriptRequired } = req.body;

    // Process new uploaded files
    const newImages = req.files?.images?.map(f => `/uploads/ads/${f.filename}`) || [];
    const newVideos = req.files?.videos?.map(f => `/uploads/ads/${f.filename}`) || [];

    // Parse existing files to keep
    let keepImages = [];
    let keepVideos = [];
    try {
      keepImages = existingImages ? JSON.parse(existingImages) : existingAd.images;
      keepVideos = existingVideos ? JSON.parse(existingVideos) : existingAd.videos;
    } catch (e) {
      keepImages = existingAd.images;
      keepVideos = existingAd.videos;
    }

    // Interleave images based on imageOrder if provided
    let finalImages = [...keepImages, ...newImages];
    if (imageOrder) {
      try {
        const order = JSON.parse(imageOrder);
        let existingIdx = 0;
        let newIdx = 0;
        finalImages = [];
        for (const type of order) {
          if (type === 'existing' && existingIdx < keepImages.length) {
            finalImages.push(keepImages[existingIdx++]);
          } else if (type === 'new' && newIdx < newImages.length) {
            finalImages.push(newImages[newIdx++]);
          }
        }
        // Add any remaining
        while (existingIdx < keepImages.length) finalImages.push(keepImages[existingIdx++]);
        while (newIdx < newImages.length) finalImages.push(newImages[newIdx++]);
      } catch (e) {
        console.error('Error parsing imageOrder:', e);
      }
    }

    // Interleave videos based on videoOrder if provided
    let finalVideos = [...keepVideos, ...newVideos];
    if (videoOrder) {
      try {
        const order = JSON.parse(videoOrder);
        let existingIdx = 0;
        let newIdx = 0;
        finalVideos = [];
        for (const type of order) {
          if (type === 'existing' && existingIdx < keepVideos.length) {
            finalVideos.push(keepVideos[existingIdx++]);
          } else if (type === 'new' && newIdx < newVideos.length) {
            finalVideos.push(newVideos[newIdx++]);
          }
        }
        // Add any remaining
        while (existingIdx < keepVideos.length) finalVideos.push(keepVideos[existingIdx++]);
        while (newIdx < newVideos.length) finalVideos.push(newVideos[newIdx++]);
      } catch (e) {
        console.error('Error parsing videoOrder:', e);
      }
    }

    // Parse targetNiches
    let niches = existingAd.targetNiches;
    if (targetNiches) {
      try {
        niches = typeof targetNiches === 'string' ? JSON.parse(targetNiches) : targetNiches;
      } catch (e) {}
    }

    const ad = await prisma.ad.update({
      where: { id: req.params.id },
      data: {
        ...(title && { title }),
        ...(description !== undefined && { description }),
        targetNiches: niches,
        images: finalImages,
        videos: finalVideos,
        ...(talkingPoints !== undefined && { talkingPoints }),
        ...(guidelines !== undefined && { guidelines }),
        ...(scriptRequired !== undefined && { scriptRequired: scriptRequired === 'true' || scriptRequired === true }),
        ...(status && { status })
      },
      include: {
        brand: {
          select: { id: true, name: true, avatar: true, industry: true }
        }
      }
    });

    res.json(ad);
  } catch (error) {
    console.error('Update ad error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Delete an ad
app.delete('/api/ads/:id', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Verify ownership
    const existingAd = await prisma.ad.findUnique({ where: { id: req.params.id } });
    if (!existingAd || existingAd.brandId !== decoded.id) {
      return res.status(403).json({ error: 'Not authorized to delete this ad' });
    }

    await prisma.ad.delete({ where: { id: req.params.id } });

    res.json({ success: true });
  } catch (error) {
    console.error('Delete ad error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ============= AD REQUEST APIs =============

// Brand sends ad request to creator
app.post('/api/ad-requests', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { adId, creatorId, message } = req.body;

    // Verify the ad belongs to this brand
    const ad = await prisma.ad.findUnique({ where: { id: adId } });
    if (!ad || ad.brandId !== decoded.id) {
      return res.status(403).json({ error: 'Not authorized' });
    }

    // Check if request already exists
    const existing = await prisma.adRequest.findUnique({
      where: { adId_creatorId: { adId, creatorId } }
    });
    if (existing) {
      return res.status(400).json({ error: 'Request already sent to this creator' });
    }

    const adRequest = await prisma.adRequest.create({
      data: {
        adId,
        creatorId,
        message: message || null,
        status: 'PENDING'
      },
      include: {
        ad: {
          include: {
            brand: { select: { id: true, name: true, avatar: true } }
          }
        },
        creator: { select: { id: true, name: true, avatar: true } }
      }
    });

    res.status(201).json(adRequest);
  } catch (error) {
    console.error('Create ad request error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get ad requests for brand (sent) or creator (received)
app.get('/api/ad-requests', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    let adRequests;
    if (user.type === 'BRAND') {
      // Get all requests for ads owned by this brand
      adRequests = await prisma.adRequest.findMany({
        where: {
          ad: { brandId: decoded.id }
        },
        include: {
          ad: true,
          creator: { select: { id: true, name: true, avatar: true, niches: true, bio: true } }
        },
        orderBy: { createdAt: 'desc' }
      });
    } else {
      // Get all requests sent to this creator
      adRequests = await prisma.adRequest.findMany({
        where: { creatorId: decoded.id },
        include: {
          ad: {
            include: {
              brand: { select: { id: true, name: true, avatar: true, industry: true } }
            }
          }
        },
        orderBy: { createdAt: 'desc' }
      });
    }

    res.json(adRequests);
  } catch (error) {
    console.error('Get ad requests error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update ad request status (creator accepts/rejects)
app.patch('/api/ad-requests/:id/status', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { status } = req.body;

    if (!['ACCEPTED', 'REJECTED'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    // Verify the request is for this creator
    const adRequest = await prisma.adRequest.findUnique({
      where: { id: req.params.id }
    });

    if (!adRequest || adRequest.creatorId !== decoded.id) {
      return res.status(403).json({ error: 'Not authorized' });
    }

    const updated = await prisma.adRequest.update({
      where: { id: req.params.id },
      data: { status },
      include: {
        ad: {
          include: {
            brand: { select: { id: true, name: true, avatar: true } }
          }
        },
        creator: { select: { id: true, name: true, avatar: true } }
      }
    });

    res.json(updated);
  } catch (error) {
    console.error('Update ad request error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ============= MESSAGING APIs =============

// Send a message
app.post('/api/messages', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { toUserId, content } = req.body;

    if (!toUserId || !content) {
      return res.status(400).json({ error: 'Recipient and content are required' });
    }

    const message = await prisma.message.create({
      data: {
        fromUserId: decoded.id,
        toUserId,
        content
      },
      include: {
        fromUser: { select: { id: true, name: true, avatar: true, type: true } },
        toUser: { select: { id: true, name: true, avatar: true, type: true } }
      }
    });

    res.status(201).json(message);
  } catch (error) {
    console.error('Send message error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get conversations (list of users you've messaged with)
app.get('/api/messages/conversations', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get all messages where user is sender or receiver
    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { fromUserId: decoded.id },
          { toUserId: decoded.id }
        ]
      },
      include: {
        fromUser: { select: { id: true, name: true, avatar: true, type: true } },
        toUser: { select: { id: true, name: true, avatar: true, type: true } }
      },
      orderBy: { createdAt: 'desc' }
    });

    // Group by conversation partner
    const conversationsMap = new Map();
    messages.forEach(msg => {
      const partnerId = msg.fromUserId === decoded.id ? msg.toUserId : msg.fromUserId;
      const partner = msg.fromUserId === decoded.id ? msg.toUser : msg.fromUser;

      if (!conversationsMap.has(partnerId)) {
        conversationsMap.set(partnerId, {
          partner,
          lastMessage: msg,
          unreadCount: 0 // Could implement read receipts later
        });
      }
    });

    const conversations = Array.from(conversationsMap.values());
    res.json(conversations);
  } catch (error) {
    console.error('Get conversations error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get messages with a specific user
app.get('/api/messages/:userId', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const partnerId = req.params.userId;

    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { fromUserId: decoded.id, toUserId: partnerId },
          { fromUserId: partnerId, toUserId: decoded.id }
        ]
      },
      include: {
        fromUser: { select: { id: true, name: true, avatar: true, type: true } },
        toUser: { select: { id: true, name: true, avatar: true, type: true } }
      },
      orderBy: { createdAt: 'asc' }
    });

    res.json(messages);
  } catch (error) {
    console.error('Get messages error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ============= COLLABORATION REQUESTS =============

// Create a collaboration request (Brand -> Creator) with existing ad
app.post('/api/collaboration-requests', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Verify user is a brand
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user || user.type !== 'BRAND') {
      return res.status(403).json({ error: 'Only brands can send collaboration requests' });
    }

    const { creatorId, channels, totalPrice, message, announcementId, isLongTermDeal, videoCount, adId, force } = req.body;

    if (!creatorId || !channels || channels.length === 0) {
      return res.status(400).json({ error: 'Creator and at least one channel are required' });
    }

    // Validate ad is provided and belongs to the brand
    if (!adId) {
      return res.status(400).json({ error: 'Campaign material is required. Please select an existing ad or create a new one.' });
    }

    const ad = await prisma.ad.findUnique({ where: { id: adId } });
    if (!ad || ad.brandId !== decoded.id) {
      return res.status(400).json({ error: 'Invalid ad selected' });
    }

    // If sponsoring an announcement, check if there are available slots
    if (announcementId) {
      const announcement = await prisma.contentAnnouncement.findUnique({
        where: { id: announcementId }
      });
      if (!announcement) {
        return res.status(404).json({ error: 'Announcement not found' });
      }
      if (announcement.filledSlots >= announcement.maxSlots) {
        return res.status(400).json({ error: 'All sponsor slots for this announcement are filled' });
      }
      if (announcement.status !== 'ACTIVE') {
        return res.status(400).json({ error: 'This announcement is no longer accepting sponsors' });
      }
    }

    // Check if there's already a pending request with the SAME channels
    // Allow multiple requests to same creator if different channels are selected
    // Skip this check if force is true (user explicitly wants to send anyway)
    if (!force) {
      const requestedChannelIds = channels.map(ch => ch.channelId).sort();

      const existingRequests = await prisma.collaborationRequest.findMany({
        where: {
          brandId: decoded.id,
          creatorId,
          status: 'PENDING'
        }
      });

      // Check if any existing request has overlapping channels
      for (const existingRequest of existingRequests) {
        const existingChannelIds = existingRequest.channels.map(ch => ch.channelId).sort();
        const hasOverlap = requestedChannelIds.some(id => existingChannelIds.includes(id));

        if (hasOverlap) {
          return res.status(400).json({
            error: 'You already have a pending request with this creator for one or more of the selected channels'
          });
        }
      }
    }

    // Parse long-term deal values
    const isLongTerm = isLongTermDeal === true;
    const vidCount = isLongTerm ? parseInt(videoCount) || null : null;

    // Create the collaboration request with the ad attached
    const collabRequest = await prisma.collaborationRequest.create({
      data: {
        brandId: decoded.id,
        creatorId,
        channels,
        totalPrice: parseFloat(totalPrice) || 0,
        message,
        announcementId: announcementId || null,
        isLongTermDeal: isLongTerm,
        videoCount: vidCount,
        adId: adId,
        status: 'PENDING'
      },
      include: {
        brand: { select: { id: true, name: true, avatar: true, industry: true } },
        creator: { select: { id: true, name: true, avatar: true, niches: true } },
        ad: true
      }
    });

    // Create a structured collaboration message with visual data
    const collabMessageData = {
      type: 'COLLAB_REQUEST',
      requestId: collabRequest.id,
      channels: channels,
      totalPrice: parseFloat(totalPrice) || 0,
      brandName: user.name,
      creatorName: collabRequest.creator.name,
      adTitle: ad.title,
      hasImages: ad.images?.length > 0,
      hasVideos: ad.videos?.length > 0
    };

    // Also create a message to notify the creator
    const createdMessage = await prisma.message.create({
      data: {
        fromUserId: decoded.id,
        toUserId: creatorId,
        content: JSON.stringify(collabMessageData)
      }
    });

    // Emit socket event for real-time notification
    io.to(creatorId).emit('newCollabRequest', collabRequest);
    io.to(creatorId).emit('newMessage', {
      id: createdMessage.id,
      fromUserId: decoded.id,
      toUserId: creatorId,
      content: JSON.stringify(collabMessageData),
      createdAt: new Date().toISOString(),
      fromUser: { id: decoded.id, name: user.name, avatar: user.avatar, type: 'BRAND' }
    });

    res.status(201).json(collabRequest);
  } catch (error) {
    console.error('Create collaboration request error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get collaboration requests (for both brands and creators)
app.get('/api/collaboration-requests', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    let requests;
    if (user.type === 'BRAND') {
      // Brands see requests they sent - full ad details always visible
      requests = await prisma.collaborationRequest.findMany({
        where: { brandId: decoded.id },
        include: {
          brand: { select: { id: true, name: true, avatar: true, industry: true } },
          creator: { select: { id: true, name: true, avatar: true, niches: true } },
          ad: { select: { id: true, title: true, images: true, videos: true, talkingPoints: true, guidelines: true } }
        },
        orderBy: { createdAt: 'desc' }
      });
    } else {
      // Creators see requests they received
      requests = await prisma.collaborationRequest.findMany({
        where: { creatorId: decoded.id },
        include: {
          brand: { select: { id: true, name: true, avatar: true, industry: true } },
          creator: { select: { id: true, name: true, avatar: true, niches: true } },
          ad: { select: { id: true, title: true, images: true, videos: true, talkingPoints: true, guidelines: true } }
        },
        orderBy: { createdAt: 'desc' }
      });

      // Hide ad details from creators until request is PAID or COMPLETED
      requests = requests.map(req => {
        if (!['PAID', 'COMPLETED'].includes(req.status) && req.ad) {
          // Only show ad title, hide actual content
          return {
            ...req,
            ad: {
              id: req.ad.id,
              title: req.ad.title,
              images: [], // Hide images
              videos: [], // Hide videos
              talkingPoints: null, // Hide talking points
              guidelines: null // Hide guidelines
            }
          };
        }
        return req;
      });
    }

    res.json(requests);
  } catch (error) {
    console.error('Get collaboration requests error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get count of actionable requests (for badge) - MUST be before /:id route
app.get('/api/collaboration-requests/count', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    let count;
    if (user.type === 'BRAND') {
      // Brands see accepted requests waiting for their action
      count = await prisma.collaborationRequest.count({
        where: {
          brandId: decoded.id,
          status: 'ACCEPTED'
        }
      });
    } else {
      // Creators: count PENDING requests (need accept/decline) + PAID requests without downloaded materials
      const pendingCount = await prisma.collaborationRequest.count({
        where: {
          creatorId: decoded.id,
          status: 'PENDING'
        }
      });
      const paidCount = await prisma.collaborationRequest.count({
        where: {
          creatorId: decoded.id,
          status: 'PAID',
          materialsDownloaded: false
        }
      });
      count = pendingCount + paidCount;
    }

    res.json({ count });
  } catch (error) {
    console.error('Get collaboration requests count error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Mark materials as downloaded for a specific request
app.post('/api/collaboration-requests/:id/mark-downloaded', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = req.params;

    // Find the request and verify ownership
    const request = await prisma.collaborationRequest.findUnique({
      where: { id }
    });

    if (!request) {
      return res.status(404).json({ error: 'Request not found' });
    }

    if (request.creatorId !== decoded.id) {
      return res.status(403).json({ error: 'Not authorized' });
    }

    // Mark materials as downloaded
    await prisma.collaborationRequest.update({
      where: { id },
      data: { materialsDownloaded: true }
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Mark materials downloaded error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Increment videos posted count for long-term deals (Creator confirms video posted)
app.post('/api/collaboration-requests/:id/video-posted', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user || user.type !== 'CREATOR') {
      return res.status(403).json({ error: 'Only creators can update video posted count' });
    }

    const request = await prisma.collaborationRequest.findUnique({
      where: { id: req.params.id }
    });

    if (!request) {
      return res.status(404).json({ error: 'Collaboration request not found' });
    }

    if (request.creatorId !== decoded.id) {
      return res.status(403).json({ error: 'You can only update your own collaborations' });
    }

    if (!request.isLongTermDeal) {
      return res.status(400).json({ error: 'This is not a long-term deal' });
    }

    if (request.status !== 'PAID') {
      return res.status(400).json({ error: 'Collaboration must be paid before posting videos' });
    }

    if (request.videosPosted >= request.videoCount) {
      return res.status(400).json({ error: 'All videos have already been posted' });
    }

    const newCount = request.videosPosted + 1;
    const isComplete = newCount >= request.videoCount;

    const updated = await prisma.collaborationRequest.update({
      where: { id: req.params.id },
      data: {
        videosPosted: newCount,
        status: isComplete ? 'COMPLETED' : 'PAID'
      }
    });

    res.json({
      success: true,
      videosPosted: updated.videosPosted,
      videoCount: updated.videoCount,
      isComplete
    });
  } catch (error) {
    console.error('Video posted error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Decrement videos posted count for long-term deals (Creator undo video post)
app.post('/api/collaboration-requests/:id/video-undo', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user || user.type !== 'CREATOR') {
      return res.status(403).json({ error: 'Only creators can update video posted count' });
    }

    const request = await prisma.collaborationRequest.findUnique({
      where: { id: req.params.id }
    });

    if (!request) {
      return res.status(404).json({ error: 'Collaboration request not found' });
    }

    if (request.creatorId !== decoded.id) {
      return res.status(403).json({ error: 'You can only update your own collaborations' });
    }

    if (!request.isLongTermDeal) {
      return res.status(400).json({ error: 'This is not a long-term deal' });
    }

    if (request.videosPosted <= 0) {
      return res.status(400).json({ error: 'No videos have been posted yet' });
    }

    const newCount = request.videosPosted - 1;

    const updated = await prisma.collaborationRequest.update({
      where: { id: req.params.id },
      data: {
        videosPosted: newCount,
        status: 'PAID' // Ensure status is back to PAID if it was COMPLETED
      }
    });

    res.json({
      success: true,
      videosPosted: updated.videosPosted,
      videoCount: updated.videoCount
    });
  } catch (error) {
    console.error('Video undo error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Mark non-long-term collaboration as completed (Creator confirms they have posted)
app.post('/api/collaboration-requests/:id/mark-completed', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user || user.type !== 'CREATOR') {
      return res.status(403).json({ error: 'Only creators can mark collaborations as completed' });
    }

    const request = await prisma.collaborationRequest.findUnique({
      where: { id: req.params.id }
    });

    if (!request) {
      return res.status(404).json({ error: 'Collaboration request not found' });
    }

    if (request.creatorId !== decoded.id) {
      return res.status(403).json({ error: 'You can only update your own collaborations' });
    }

    if (request.isLongTermDeal) {
      return res.status(400).json({ error: 'Long-term deals use video tracking instead' });
    }

    if (request.status !== 'PAID') {
      return res.status(400).json({ error: 'Collaboration must be paid before marking as completed' });
    }

    const updated = await prisma.collaborationRequest.update({
      where: { id: req.params.id },
      data: {
        status: 'COMPLETED'
      }
    });

    res.json({
      success: true,
      status: updated.status
    });
  } catch (error) {
    console.error('Mark completed error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Mark collaboration request as viewed
app.post('/api/collaboration-requests/:id/mark-viewed', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const request = await prisma.collaborationRequest.findUnique({
      where: { id: req.params.id }
    });

    if (!request) {
      return res.status(404).json({ error: 'Collaboration request not found' });
    }

    // Update the appropriate viewed field based on user type
    const updateData = {};
    if (user.type === 'CREATOR' && request.creatorId === decoded.id) {
      updateData.viewedByCreator = true;
      // For PAID requests, also mark materials as downloaded when creator views
      if (request.status === 'PAID') {
        updateData.materialsDownloaded = true;
      }
    } else if (user.type === 'BRAND' && request.brandId === decoded.id) {
      updateData.viewedByBrand = true;
    } else {
      return res.status(403).json({ error: 'You do not have access to this request' });
    }

    const updated = await prisma.collaborationRequest.update({
      where: { id: req.params.id },
      data: updateData
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Mark viewed error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get single collaboration request by ID
app.get('/api/collaboration-requests/:id', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const request = await prisma.collaborationRequest.findUnique({
      where: { id: req.params.id },
      include: {
        brand: { select: { id: true, name: true, avatar: true, industry: true } },
        creator: { select: { id: true, name: true, avatar: true, niches: true } },
        ad: { select: { id: true, title: true, images: true, videos: true, talkingPoints: true, guidelines: true } }
      }
    });

    if (!request) {
      return res.status(404).json({ error: 'Collaboration request not found' });
    }

    // Verify user is either the brand or creator
    if (request.brandId !== decoded.id && request.creatorId !== decoded.id) {
      return res.status(403).json({ error: 'Not authorized to view this request' });
    }

    res.json(request);
  } catch (error) {
    console.error('Get collaboration request error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update collaboration request status (Accept/Reject by Creator)
app.put('/api/collaboration-requests/:id', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { status } = req.body;

    if (!['ACCEPTED', 'REJECTED', 'CANCELLED'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    // Find the request
    const request = await prisma.collaborationRequest.findUnique({
      where: { id: req.params.id },
      include: {
        brand: { select: { id: true, name: true } },
        creator: { select: { id: true, name: true } }
      }
    });

    if (!request) {
      return res.status(404).json({ error: 'Request not found' });
    }

    // Verify authorization
    if (status === 'CANCELLED') {
      // Only brand can cancel
      if (request.brandId !== decoded.id) {
        return res.status(403).json({ error: 'Not authorized' });
      }
    } else {
      // Only creator can accept/reject
      if (request.creatorId !== decoded.id) {
        return res.status(403).json({ error: 'Not authorized' });
      }
    }

    // Update the request
    const updatedRequest = await prisma.collaborationRequest.update({
      where: { id: req.params.id },
      data: { status },
      include: {
        brand: { select: { id: true, name: true, avatar: true, industry: true } },
        creator: { select: { id: true, name: true, avatar: true, niches: true } },
        ad: { select: { id: true, title: true, images: true, videos: true } }
      }
    });

    // Send notification message
    const notifyUserId = status === 'CANCELLED' ? request.creatorId : request.brandId;
    const senderName = status === 'CANCELLED' ? request.brand.name : request.creator.name;
    const actionWord = status === 'ACCEPTED' ? 'accepted' : status === 'REJECTED' ? 'declined' : 'cancelled';

    const notificationMessage = `${senderName} has ${actionWord} the collaboration request.`;

    await prisma.message.create({
      data: {
        fromUserId: decoded.id,
        toUserId: notifyUserId,
        content: notificationMessage
      }
    });

    // Emit socket events
    io.to(notifyUserId).emit('collabRequestUpdated', updatedRequest);
    io.to(notifyUserId).emit('newMessage', {
      id: Date.now().toString(),
      fromUserId: decoded.id,
      toUserId: notifyUserId,
      content: notificationMessage,
      createdAt: new Date().toISOString()
    });

    res.json(updatedRequest);
  } catch (error) {
    console.error('Update collaboration request error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Attach ad to accepted collaboration request (Brand selects ad material)
app.put('/api/collaboration-requests/:id/attach-ad', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { adId } = req.body;

    // Find the request
    const request = await prisma.collaborationRequest.findUnique({
      where: { id: req.params.id }
    });

    if (!request) {
      return res.status(404).json({ error: 'Request not found' });
    }

    if (request.brandId !== decoded.id) {
      return res.status(403).json({ error: 'Not authorized' });
    }

    // Allow attaching ad if status is ACCEPTED or AD_SELECTED (retry scenario)
    if (request.status !== 'ACCEPTED' && request.status !== 'AD_SELECTED') {
      return res.status(400).json({ error: 'Request must be accepted first' });
    }

    // Verify the ad belongs to the brand
    const ad = await prisma.ad.findUnique({ where: { id: adId } });
    if (!ad || ad.brandId !== decoded.id) {
      return res.status(403).json({ error: 'Ad not found or not authorized' });
    }

    // Update the request with the ad - now goes to AD_SELECTED status (waiting for payment)
    const updatedRequest = await prisma.collaborationRequest.update({
      where: { id: req.params.id },
      data: {
        adId,
        status: 'AD_SELECTED' // Ad selected, waiting for payment
      },
      include: {
        brand: { select: { id: true, name: true, avatar: true, industry: true } },
        creator: { select: { id: true, name: true, avatar: true, niches: true } },
        ad: { select: { id: true, title: true, images: true, videos: true, talkingPoints: true, guidelines: true } }
      }
    });

    io.to(request.creatorId).emit('collabRequestUpdated', updatedRequest);

    res.json(updatedRequest);
  } catch (error) {
    console.error('Attach ad to collaboration error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Initialize payment for collaboration request (Paystack)
app.post('/api/collaboration-requests/:id/pay/initialize', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user for email
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Find the request
    const request = await prisma.collaborationRequest.findUnique({
      where: { id: req.params.id },
      include: {
        brand: { select: { id: true, name: true, avatar: true } },
        ad: { select: { id: true, title: true, images: true, videos: true, talkingPoints: true, guidelines: true } }
      }
    });

    if (!request) {
      return res.status(404).json({ error: 'Request not found' });
    }

    if (request.brandId !== decoded.id) {
      return res.status(403).json({ error: 'Not authorized' });
    }

    if (request.status !== 'AD_SELECTED') {
      return res.status(400).json({ error: 'Ad must be selected first before payment' });
    }

    const { callbackUrl, amount } = req.body;

    // Generate unique payment reference
    const reference = paystack.generateReference('COLLAB');

    // Update request with payment reference
    await prisma.collaborationRequest.update({
      where: { id: req.params.id },
      data: { paymentReference: reference }
    });

    // Initialize Paystack transaction
    const paystackResponse = await paystack.initializeTransaction({
      email: user.email,
      amount: paystack.toSmallestUnit(amount || request.totalPrice),
      reference,
      currency: 'NGN',
      metadata: {
        brandId: decoded.id,
        requestId: req.params.id,
        type: 'collaboration'
      },
      callback_url: callbackUrl
    });

    res.json({
      success: true,
      message: 'Payment initialized',
      reference,
      authorizationUrl: paystackResponse.data.authorization_url,
      accessCode: paystackResponse.data.access_code
    });
  } catch (error) {
    console.error('Initialize payment error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Verify payment for collaboration request (Paystack)
app.post('/api/collaboration-requests/:id/pay/verify', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { reference } = req.body;

    if (!reference) {
      return res.status(400).json({ error: 'Payment reference required' });
    }

    // Find the request
    const request = await prisma.collaborationRequest.findUnique({
      where: { id: req.params.id },
      include: {
        brand: { select: { id: true, name: true, avatar: true } },
        ad: { select: { id: true, title: true, images: true, videos: true, talkingPoints: true, guidelines: true } }
      }
    });

    if (!request) {
      return res.status(404).json({ error: 'Request not found' });
    }

    if (request.brandId !== decoded.id) {
      return res.status(403).json({ error: 'Not authorized' });
    }

    // Verify payment reference matches
    if (request.paymentReference !== reference) {
      return res.status(400).json({ error: 'Payment reference mismatch' });
    }

    // Verify payment with Paystack
    const verification = await paystack.verifyTransaction(reference);

    if (verification.data.status !== 'success') {
      return res.status(400).json({ error: 'Payment verification failed', status: verification.data.status });
    }

    // Update the request status to PAID
    const updatedRequest = await prisma.collaborationRequest.update({
      where: { id: req.params.id },
      data: {
        status: 'PAID'
      },
      include: {
        brand: { select: { id: true, name: true, avatar: true, industry: true } },
        creator: { select: { id: true, name: true, avatar: true, niches: true } },
        ad: { select: { id: true, title: true, images: true, videos: true, talkingPoints: true, guidelines: true } }
      }
    });

    // If this collaboration is linked to an announcement, update the filled slots
    if (request.announcementId) {
      const announcement = await prisma.contentAnnouncement.findUnique({
        where: { id: request.announcementId }
      });

      if (announcement) {
        const newFilledSlots = announcement.filledSlots + 1;
        const shouldComplete = newFilledSlots >= announcement.maxSlots;

        await prisma.contentAnnouncement.update({
          where: { id: request.announcementId },
          data: {
            filledSlots: newFilledSlots,
            status: shouldComplete ? 'COMPLETED' : 'ACTIVE'
          }
        });

        console.log(`Announcement ${request.announcementId} updated: ${newFilledSlots}/${announcement.maxSlots} slots filled${shouldComplete ? ' - marked as COMPLETED' : ''}`);
      }
    }

    // Notify creator that payment is complete and they can access ad material
    const notificationMessage = `Payment received! ${request.brand?.name || 'A brand'} has completed payment for your collaboration. You can now access the ad material.`;

    await prisma.message.create({
      data: {
        fromUserId: decoded.id,
        toUserId: request.creatorId,
        content: notificationMessage
      }
    });

    // Send real-time notification
    io.to(request.creatorId).emit('collabRequestUpdated', updatedRequest);
    io.to(request.creatorId).emit('newMessage', {
      id: Date.now().toString(),
      fromUserId: decoded.id,
      toUserId: request.creatorId,
      content: notificationMessage,
      createdAt: new Date().toISOString()
    });

    res.json({
      success: true,
      message: 'Payment verified',
      request: updatedRequest
    });
  } catch (error) {
    console.error('Verify payment error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Legacy endpoint - deprecated
app.put('/api/collaboration-requests/:id/pay', async (req, res) => {
  res.status(400).json({
    error: 'This endpoint is deprecated. Use /api/collaboration-requests/:id/pay/initialize instead.',
    newEndpoint: '/api/collaboration-requests/:id/pay/initialize'
  });
});

// Initialize checkout - creates pending collaboration requests and returns Paystack payment URL
// Used by the cart page for bulk purchases
app.post('/api/checkout/initialize', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Verify user is a brand
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user || user.type !== 'BRAND') {
      return res.status(403).json({ error: 'Only brands can checkout' });
    }

    const { items, adId, totalAmount, scriptRequired, callbackUrl } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'No items provided' });
    }

    if (!adId) {
      return res.status(400).json({ error: 'No ad material selected' });
    }

    // Verify the ad exists and belongs to the brand
    const ad = await prisma.ad.findUnique({ where: { id: adId } });
    if (!ad || ad.brandId !== decoded.id) {
      return res.status(400).json({ error: 'Invalid ad material' });
    }

    // Generate unique payment reference
    const reference = paystack.generateReference('CART');

    // Group items by creator
    const itemsByCreator = items.reduce((acc, item) => {
      if (!acc[item.creatorId]) {
        acc[item.creatorId] = [];
      }
      acc[item.creatorId].push(item);
      return acc;
    }, {});

    // Create PENDING collaboration requests for each creator
    const createdRequests = [];

    for (const [creatorId, creatorItems] of Object.entries(itemsByCreator)) {
      // Format channels data
      const channels = creatorItems.map(item => ({
        channelId: item.channelId,
        channelName: item.channelName,
        platform: item.platform,
        placement: item.placement,
        placementLabel: item.placementLabel,
        subscribers: item.subscribers,
        price: item.price
      }));

      const creatorTotal = creatorItems.reduce((sum, item) => sum + item.price, 0);

      // Get announcementId from items (if any item has it, use it)
      const announcementId = creatorItems.find(item => item.announcementId)?.announcementId || null;

      // Create the collaboration request as PAYMENT_PENDING
      const collabRequest = await prisma.collaborationRequest.create({
        data: {
          brandId: decoded.id,
          creatorId: creatorId,
          channels: channels,
          totalPrice: creatorTotal,
          message: `Collaboration request from ${user.name}. Ad material: ${ad.title}`,
          status: 'PAYMENT_PENDING',
          adId: adId,
          announcementId: announcementId,
          paymentReference: reference // Store the payment reference for verification
        },
        include: {
          brand: { select: { id: true, name: true, avatar: true, industry: true } },
          creator: { select: { id: true, name: true, avatar: true, niches: true } },
          ad: { select: { id: true, title: true, images: true, videos: true, talkingPoints: true, guidelines: true } }
        }
      });

      createdRequests.push(collabRequest);
    }

    // Initialize Paystack transaction
    const paystackResponse = await paystack.initializeTransaction({
      email: user.email,
      amount: paystack.toSmallestUnit(totalAmount), // Convert to kobo/cents
      reference,
      currency: 'NGN', // Change as needed
      metadata: {
        brandId: decoded.id,
        adId: adId,
        requestIds: createdRequests.map(r => r.id),
        itemCount: items.length
      },
      callback_url: callbackUrl
    });

    res.json({
      success: true,
      message: 'Payment initialized',
      reference,
      authorizationUrl: paystackResponse.data.authorization_url,
      accessCode: paystackResponse.data.access_code,
      requestIds: createdRequests.map(r => r.id)
    });

  } catch (error) {
    console.error('Checkout initialize error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Verify checkout payment - called after Paystack redirect or from frontend
app.post('/api/checkout/verify', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { reference } = req.body;

    if (!reference) {
      return res.status(400).json({ error: 'Payment reference required' });
    }

    // Verify payment with Paystack
    const verification = await paystack.verifyTransaction(reference);

    if (verification.data.status !== 'success') {
      // Delete the pending requests if payment failed
      await prisma.collaborationRequest.deleteMany({
        where: { paymentReference: reference }
      });
      return res.status(400).json({ error: 'Payment verification failed', status: verification.data.status });
    }

    // Get the user for notifications
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    // Find all pending requests with this reference and mark as PAID
    const pendingRequests = await prisma.collaborationRequest.findMany({
      where: { paymentReference: reference, status: 'PAYMENT_PENDING' },
      include: {
        brand: { select: { id: true, name: true, avatar: true, industry: true } },
        creator: { select: { id: true, name: true, avatar: true, niches: true } },
        ad: { select: { id: true, title: true, images: true, videos: true, talkingPoints: true, guidelines: true } }
      }
    });

    const updatedRequests = [];

    for (const request of pendingRequests) {
      // Update status to PAID
      const updatedRequest = await prisma.collaborationRequest.update({
        where: { id: request.id },
        data: { status: 'PAID' },
        include: {
          brand: { select: { id: true, name: true, avatar: true, industry: true } },
          creator: { select: { id: true, name: true, avatar: true, niches: true } },
          ad: { select: { id: true, title: true, images: true, videos: true, talkingPoints: true, guidelines: true } }
        }
      });

      updatedRequests.push(updatedRequest);

      // If this collaboration is linked to an announcement, update the filled slots
      if (request.announcementId) {
        const announcement = await prisma.contentAnnouncement.findUnique({
          where: { id: request.announcementId }
        });

        if (announcement) {
          const newFilledSlots = announcement.filledSlots + 1;
          const shouldComplete = newFilledSlots >= announcement.maxSlots;

          await prisma.contentAnnouncement.update({
            where: { id: request.announcementId },
            data: {
              filledSlots: newFilledSlots,
              status: shouldComplete ? 'COMPLETED' : 'ACTIVE'
            }
          });

          console.log(`Updated announcement ${request.announcementId}: filledSlots = ${newFilledSlots}, status = ${shouldComplete ? 'COMPLETED' : 'ACTIVE'}`);
        }
      }

      // Notify the creator
      const channelNames = request.channels.map(c => c.channelName).join(', ');
      const notificationMessage = `🎉 New paid collaboration! ${user.name} has purchased ad placements on your channels (${channelNames}) for $${request.totalPrice.toLocaleString()}. Check your Requests to view the ad material.`;

      await prisma.message.create({
        data: {
          fromUserId: decoded.id,
          toUserId: request.creatorId,
          content: notificationMessage
        }
      });

      // Send real-time notifications
      io.to(request.creatorId).emit('newCollabRequest', updatedRequest);
      io.to(request.creatorId).emit('newMessage', {
        id: Date.now().toString(),
        fromUserId: decoded.id,
        toUserId: request.creatorId,
        content: notificationMessage,
        createdAt: new Date().toISOString()
      });
    }

    res.json({
      success: true,
      message: 'Payment verified and checkout completed',
      totalAmount: verification.data.amount / 100,
      requestCount: updatedRequests.length,
      requests: updatedRequests
    });

  } catch (error) {
    console.error('Checkout verify error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Legacy checkout endpoint - kept for backward compatibility but now uses Paystack flow
app.post('/api/checkout', async (req, res) => {
  // Redirect to the new initialize endpoint
  res.status(400).json({
    error: 'This endpoint is deprecated. Use /api/checkout/initialize instead.',
    newEndpoint: '/api/checkout/initialize'
  });
});

// Paystack Webhook - handles payment events from Paystack
// This needs raw body for signature verification
app.post('/api/paystack/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  try {
    const signature = req.headers['x-paystack-signature'];
    const rawBody = req.body.toString();

    // Verify webhook signature
    if (!paystack.validateWebhookSignature(rawBody, signature)) {
      console.error('Invalid Paystack webhook signature');
      return res.status(400).json({ error: 'Invalid signature' });
    }

    const event = JSON.parse(rawBody);
    console.log('Paystack webhook event:', event.event);

    // Handle successful charge
    if (event.event === 'charge.success') {
      const { reference, metadata, amount } = event.data;

      // Check if this is a cart checkout or individual collaboration payment
      if (metadata?.requestIds) {
        // Cart checkout - multiple collaboration requests
        const pendingRequests = await prisma.collaborationRequest.findMany({
          where: {
            paymentReference: reference,
            status: 'PAYMENT_PENDING'
          },
          include: {
            brand: { select: { id: true, name: true, avatar: true } },
            creator: { select: { id: true, name: true, avatar: true } }
          }
        });

        for (const request of pendingRequests) {
          // Update status to PAID
          const updatedRequest = await prisma.collaborationRequest.update({
            where: { id: request.id },
            data: { status: 'PAID' },
            include: {
              brand: { select: { id: true, name: true, avatar: true, industry: true } },
              creator: { select: { id: true, name: true, avatar: true, niches: true } },
              ad: { select: { id: true, title: true, images: true, videos: true, talkingPoints: true, guidelines: true } }
            }
          });

          // If this collaboration is linked to an announcement, update the filled slots
          if (request.announcementId) {
            const announcement = await prisma.contentAnnouncement.findUnique({
              where: { id: request.announcementId }
            });

            if (announcement) {
              const newFilledSlots = announcement.filledSlots + 1;
              const shouldComplete = newFilledSlots >= announcement.maxSlots;

              await prisma.contentAnnouncement.update({
                where: { id: request.announcementId },
                data: {
                  filledSlots: newFilledSlots,
                  status: shouldComplete ? 'COMPLETED' : 'ACTIVE'
                }
              });

              console.log(`Webhook: Updated announcement ${request.announcementId}: filledSlots = ${newFilledSlots}, status = ${shouldComplete ? 'COMPLETED' : 'ACTIVE'}`);
            }
          }

          // Notify the creator
          const channelNames = request.channels?.map(c => c.channelName).join(', ') || 'your channels';
          const notificationMessage = `🎉 New paid collaboration! ${request.brand?.name || 'A brand'} has purchased ad placements on ${channelNames} for $${request.totalPrice?.toLocaleString() || amount / 100}. Check your Requests to view the ad material.`;

          await prisma.message.create({
            data: {
              fromUserId: request.brandId,
              toUserId: request.creatorId,
              content: notificationMessage
            }
          });

          // Send real-time notifications
          io.to(request.creatorId).emit('newCollabRequest', updatedRequest);
          io.to(request.creatorId).emit('newMessage', {
            id: Date.now().toString(),
            fromUserId: request.brandId,
            toUserId: request.creatorId,
            content: notificationMessage,
            createdAt: new Date().toISOString()
          });
        }

        console.log(`Processed ${pendingRequests.length} collaboration requests for reference ${reference}`);
      } else if (metadata?.requestId) {
        // Individual collaboration payment
        const request = await prisma.collaborationRequest.findUnique({
          where: { id: metadata.requestId },
          include: {
            brand: { select: { id: true, name: true, avatar: true } }
          }
        });

        if (request && request.paymentReference === reference) {
          const updatedRequest = await prisma.collaborationRequest.update({
            where: { id: request.id },
            data: { status: 'PAID' },
            include: {
              brand: { select: { id: true, name: true, avatar: true, industry: true } },
              creator: { select: { id: true, name: true, avatar: true, niches: true } },
              ad: { select: { id: true, title: true, images: true, videos: true, talkingPoints: true, guidelines: true } }
            }
          });

          // If this collaboration is linked to an announcement, update the filled slots
          if (request.announcementId) {
            const announcement = await prisma.contentAnnouncement.findUnique({
              where: { id: request.announcementId }
            });

            if (announcement) {
              const newFilledSlots = announcement.filledSlots + 1;
              const shouldComplete = newFilledSlots >= announcement.maxSlots;

              await prisma.contentAnnouncement.update({
                where: { id: request.announcementId },
                data: {
                  filledSlots: newFilledSlots,
                  status: shouldComplete ? 'COMPLETED' : 'ACTIVE'
                }
              });

              console.log(`Webhook: Updated announcement ${request.announcementId}: filledSlots = ${newFilledSlots}, status = ${shouldComplete ? 'COMPLETED' : 'ACTIVE'}`);
            }
          }

          // Notify creator
          const notificationMessage = `Payment received! ${request.brand?.name || 'A brand'} has completed payment for your collaboration. You can now access the ad material.`;

          await prisma.message.create({
            data: {
              fromUserId: request.brandId,
              toUserId: request.creatorId,
              content: notificationMessage
            }
          });

          io.to(request.creatorId).emit('collabRequestUpdated', updatedRequest);
          io.to(request.creatorId).emit('newMessage', {
            id: Date.now().toString(),
            fromUserId: request.brandId,
            toUserId: request.creatorId,
            content: notificationMessage,
            createdAt: new Date().toISOString()
          });

          console.log(`Processed individual collaboration payment for request ${request.id}`);
        }
      }
    }

    // Always respond with 200 to acknowledge receipt
    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Paystack webhook error:', error);
    // Still return 200 to prevent retries for processing errors
    res.status(200).json({ received: true, error: error.message });
  }
});

// ==================== BLOG ENDPOINTS ====================

// Multer for blog images
const blogImageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const blogUploadsDir = path.join(uploadsDir, 'blog');
    if (!fs.existsSync(blogUploadsDir)) {
      fs.mkdirSync(blogUploadsDir, { recursive: true });
    }
    cb(null, blogUploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'blog-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const blogUpload = multer({
  storage: blogImageStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit for blog images
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Helper function to generate slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 100);
}

// Helper function to estimate read time (words per minute)
function estimateReadTime(content) {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, ''); // Strip HTML tags
  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  return Math.ceil(wordCount / wordsPerMinute) || 1;
}

// PUBLIC: Get all published blog posts
app.get('/api/blog', async (req, res) => {
  try {
    const { category, tag, featured, limit = 20, offset = 0 } = req.query;

    const where = {
      published: true
    };

    if (category) {
      where.category = category;
    }

    if (tag) {
      where.tags = { has: tag };
    }

    if (featured === 'true') {
      where.featured = true;
    }

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        orderBy: { publishedAt: 'desc' },
        take: parseInt(limit),
        skip: parseInt(offset),
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          coverImage: true,
          author: true,
          category: true,
          tags: true,
          featured: true,
          views: true,
          readTime: true,
          publishedAt: true,
          createdAt: true
        }
      }),
      prisma.blogPost.count({ where })
    ]);

    res.json({ posts, total, limit: parseInt(limit), offset: parseInt(offset) });
  } catch (error) {
    console.error('Get blog posts error:', error);
    res.status(500).json({ error: error.message });
  }
});

// PUBLIC: Get single blog post by slug
app.get('/api/blog/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    const post = await prisma.blogPost.findUnique({
      where: { slug }
    });

    if (!post || !post.published) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Increment view count
    await prisma.blogPost.update({
      where: { id: post.id },
      data: { views: { increment: 1 } }
    });

    res.json(post);
  } catch (error) {
    console.error('Get blog post error:', error);
    res.status(500).json({ error: error.message });
  }
});

// PUBLIC: Get blog categories with post counts
app.get('/api/blog-categories', async (req, res) => {
  try {
    const categories = await prisma.blogPost.groupBy({
      by: ['category'],
      where: { published: true },
      _count: { id: true }
    });

    res.json(categories.map(c => ({
      category: c.category,
      count: c._count.id
    })));
  } catch (error) {
    console.error('Get blog categories error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Simple admin token for blog management
const ADMIN_BLOG_TOKEN = 'buydicg8oiuek72835rtfgcb72tqyegduicgrujkgdqwcfu7ir23gyc72';

const verifyAdminBlogToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token || token !== ADMIN_BLOG_TOKEN) {
    return res.status(401).json({ error: 'Invalid admin token' });
  }
  next();
};

// ADMIN: Get all blog posts (including drafts)
app.get('/api/admin/blog', verifyAdminBlogToken, async (req, res) => {
  try {

    const { status, category, limit = 50, offset = 0 } = req.query;

    const where = {};

    if (status === 'published') {
      where.published = true;
    } else if (status === 'draft') {
      where.published = false;
    }

    if (category) {
      where.category = category;
    }

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: parseInt(limit),
        skip: parseInt(offset)
      }),
      prisma.blogPost.count({ where })
    ]);

    res.json({ posts, total, limit: parseInt(limit), offset: parseInt(offset) });
  } catch (error) {
    console.error('Admin get blog posts error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ADMIN: Get single blog post by ID (including drafts)
app.get('/api/admin/blog/:id', verifyAdminBlogToken, async (req, res) => {
  try {
    const { id } = req.params;

    const post = await prisma.blogPost.findUnique({
      where: { id }
    });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error('Admin get blog post error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ADMIN: Create blog post
app.post('/api/admin/blog', verifyAdminBlogToken, blogUpload.single('coverImage'), async (req, res) => {
  try {
    const { title, excerpt, content, author, category, tags, published, featured } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    // Generate unique slug
    let slug = generateSlug(title);
    const existingPost = await prisma.blogPost.findUnique({ where: { slug } });
    if (existingPost) {
      slug = `${slug}-${Date.now()}`;
    }

    // Parse tags if it's a JSON string
    let parsedTags = [];
    if (tags) {
      try {
        parsedTags = typeof tags === 'string' ? JSON.parse(tags) : tags;
      } catch (e) {
        // If parsing fails, treat as comma-separated string
        parsedTags = tags.split(',').map(t => t.trim()).filter(t => t);
      }
    }

    const isPublished = published === 'true' || published === true;

    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        excerpt: excerpt || null,
        content,
        coverImage: req.file ? `/uploads/blog/${req.file.filename}` : null,
        author: author || 'LinkHub Team',
        category: category || 'GENERAL',
        tags: parsedTags,
        published: isPublished,
        featured: featured === 'true' || featured === true,
        readTime: estimateReadTime(content),
        publishedAt: isPublished ? new Date() : null
      }
    });

    res.status(201).json(post);
  } catch (error) {
    console.error('Create blog post error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ADMIN: Update blog post
app.put('/api/admin/blog/:id', verifyAdminBlogToken, blogUpload.single('coverImage'), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, excerpt, content, author, category, tags, published, featured } = req.body;

    const existingPost = await prisma.blogPost.findUnique({ where: { id } });
    if (!existingPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const updateData = {};

    if (title !== undefined) {
      updateData.title = title;
      // Update slug if title changed and post is still a draft
      if (!existingPost.published && title !== existingPost.title) {
        let slug = generateSlug(title);
        const existingSlug = await prisma.blogPost.findUnique({ where: { slug } });
        if (existingSlug && existingSlug.id !== id) {
          slug = `${slug}-${Date.now()}`;
        }
        updateData.slug = slug;
      }
    }

    if (excerpt !== undefined) updateData.excerpt = excerpt || null;
    if (content !== undefined) {
      updateData.content = content;
      updateData.readTime = estimateReadTime(content);
    }
    if (author !== undefined) updateData.author = author;
    if (category !== undefined) updateData.category = category;
    if (featured !== undefined) updateData.featured = featured === 'true' || featured === true;

    // Handle tags
    if (tags !== undefined) {
      try {
        updateData.tags = typeof tags === 'string' ? JSON.parse(tags) : tags;
      } catch (e) {
        updateData.tags = tags.split(',').map(t => t.trim()).filter(t => t);
      }
    }

    // Handle publishing
    if (published !== undefined) {
      const isPublished = published === 'true' || published === true;
      updateData.published = isPublished;
      // Set publishedAt only when first publishing
      if (isPublished && !existingPost.published) {
        updateData.publishedAt = new Date();
      }
    }

    // Handle cover image
    if (req.file) {
      updateData.coverImage = `/uploads/blog/${req.file.filename}`;
    }

    const post = await prisma.blogPost.update({
      where: { id },
      data: updateData
    });

    res.json(post);
  } catch (error) {
    console.error('Update blog post error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ADMIN: Delete blog post
app.delete('/api/admin/blog/:id', verifyAdminBlogToken, async (req, res) => {
  try {
    const { id } = req.params;

    const post = await prisma.blogPost.findUnique({ where: { id } });
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Delete cover image if exists
    if (post.coverImage) {
      const imagePath = path.join(__dirname, '..', post.coverImage);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await prisma.blogPost.delete({ where: { id } });

    res.json({ success: true });
  } catch (error) {
    console.error('Delete blog post error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ADMIN: Upload image for blog content (inline images)
app.post('/api/admin/blog/upload-image', verifyAdminBlogToken, blogUpload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    res.json({
      url: `/uploads/blog/${req.file.filename}`,
      filename: req.file.filename
    });
  } catch (error) {
    console.error('Upload blog image error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ==================== END BLOG ENDPOINTS ====================

// ==================== PAYOUT SETTINGS ENDPOINTS ====================

// Get creator's payout settings
app.get('/api/payout-settings', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user) return res.status(404).json({ error: 'User not found' });
    if (user.type !== 'CREATOR') return res.status(403).json({ error: 'Only creators can access payout settings' });

    let payoutSettings = await prisma.payoutSettings.findUnique({
      where: { userId: decoded.id }
    });

    // If no settings exist, return default empty state
    if (!payoutSettings) {
      payoutSettings = {
        id: null,
        userId: decoded.id,
        bankName: null,
        accountName: null,
        accountNumber: null,
        bankCode: null,
        payoutFrequency: 'IMMEDIATE',
        minimumPayout: 1000,
        isVerified: false,
        recipientCode: null
      };
    }

    // Calculate earnings from completed collaborations
    const completedCollabs = await prisma.collaborationRequest.findMany({
      where: {
        creatorId: decoded.id,
        status: 'COMPLETED'
      },
      select: {
        totalPrice: true
      }
    });

    const paidCollabs = await prisma.collaborationRequest.findMany({
      where: {
        creatorId: decoded.id,
        status: 'PAID'
      },
      select: {
        totalPrice: true
      }
    });

    const totalEarnings = completedCollabs.reduce((sum, c) => sum + (c.totalPrice || 0), 0);
    const pendingEarnings = paidCollabs.reduce((sum, c) => sum + (c.totalPrice || 0), 0);

    res.json({
      ...payoutSettings,
      totalEarnings,
      pendingEarnings,
      availableBalance: totalEarnings // For now, assume all completed earnings are available
    });
  } catch (error) {
    console.error('Get payout settings error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Create or update payout settings
app.post('/api/payout-settings', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user) return res.status(404).json({ error: 'User not found' });
    if (user.type !== 'CREATOR') return res.status(403).json({ error: 'Only creators can update payout settings' });

    const { bankName, accountName, accountNumber, bankCode, payoutFrequency, minimumPayout } = req.body;

    // Validate required fields for bank details
    if (bankName || accountNumber || accountName) {
      if (!bankName || !accountNumber || !accountName || !bankCode) {
        return res.status(400).json({ error: 'All bank details are required: bankName, accountName, accountNumber, bankCode' });
      }
    }

    // Validate payout frequency
    const validFrequencies = ['IMMEDIATE', 'WEEKLY', 'MONTHLY'];
    if (payoutFrequency && !validFrequencies.includes(payoutFrequency)) {
      return res.status(400).json({ error: 'Invalid payout frequency' });
    }

    const existingSettings = await prisma.payoutSettings.findUnique({
      where: { userId: decoded.id }
    });

    let payoutSettings;

    if (existingSettings) {
      // Update existing settings
      payoutSettings = await prisma.payoutSettings.update({
        where: { userId: decoded.id },
        data: {
          bankName: bankName || existingSettings.bankName,
          accountName: accountName || existingSettings.accountName,
          accountNumber: accountNumber || existingSettings.accountNumber,
          bankCode: bankCode || existingSettings.bankCode,
          payoutFrequency: payoutFrequency || existingSettings.payoutFrequency,
          minimumPayout: minimumPayout !== undefined ? minimumPayout : existingSettings.minimumPayout,
          // Reset verification if bank details changed
          isVerified: (accountNumber && accountNumber !== existingSettings.accountNumber) ? false : existingSettings.isVerified
        }
      });
    } else {
      // Create new settings
      payoutSettings = await prisma.payoutSettings.create({
        data: {
          userId: decoded.id,
          bankName,
          accountName,
          accountNumber,
          bankCode,
          payoutFrequency: payoutFrequency || 'IMMEDIATE',
          minimumPayout: minimumPayout || 1000
        }
      });
    }

    res.json(payoutSettings);
  } catch (error) {
    console.error('Update payout settings error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get list of Nigerian banks (for dropdown)
app.get('/api/banks', async (req, res) => {
  try {
    // Nigerian banks list with their codes
    const banks = [
      { code: '044', name: 'Access Bank' },
      { code: '023', name: 'Citibank Nigeria' },
      { code: '063', name: 'Diamond Bank' },
      { code: '050', name: 'Ecobank Nigeria' },
      { code: '084', name: 'Enterprise Bank' },
      { code: '070', name: 'Fidelity Bank' },
      { code: '011', name: 'First Bank of Nigeria' },
      { code: '214', name: 'First City Monument Bank' },
      { code: '058', name: 'Guaranty Trust Bank' },
      { code: '030', name: 'Heritage Bank' },
      { code: '301', name: 'Jaiz Bank' },
      { code: '082', name: 'Keystone Bank' },
      { code: '526', name: 'Parallex Bank' },
      { code: '076', name: 'Polaris Bank' },
      { code: '101', name: 'Providus Bank' },
      { code: '221', name: 'Stanbic IBTC Bank' },
      { code: '068', name: 'Standard Chartered Bank' },
      { code: '232', name: 'Sterling Bank' },
      { code: '100', name: 'Suntrust Bank' },
      { code: '032', name: 'Union Bank of Nigeria' },
      { code: '033', name: 'United Bank For Africa' },
      { code: '215', name: 'Unity Bank' },
      { code: '035', name: 'Wema Bank' },
      { code: '057', name: 'Zenith Bank' },
      { code: '999991', name: 'OPay' },
      { code: '999992', name: 'PalmPay' },
      { code: '999993', name: 'Kuda Bank' },
      { code: '999994', name: 'Moniepoint' }
    ];

    res.json(banks);
  } catch (error) {
    console.error('Get banks error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ==================== END PAYOUT SETTINGS ENDPOINTS ====================

// ==================== ADMIN DASHBOARD ENDPOINTS ====================

// ADMIN: Get all users (creators and brands)
app.get('/api/admin/users', verifyAdminBlogToken, async (req, res) => {
  try {
    const { type, search, limit = 50, offset = 0 } = req.query;

    const where = {};
    if (type) {
      where.type = type;
    }
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } }
      ];
    }

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        include: {
          channels: {
            select: {
              id: true,
              platform: true,
              channelName: true,
              subscribers: true
            }
          },
          _count: {
            select: {
              ads: true,
              contentAnnouncements: true,
              sentCollabRequests: true,
              receivedCollabRequests: true
            }
          }
        },
        orderBy: { createdAt: 'desc' },
        take: parseInt(limit),
        skip: parseInt(offset)
      }),
      prisma.user.count({ where })
    ]);

    res.json({ users, total, limit: parseInt(limit), offset: parseInt(offset) });
  } catch (error) {
    console.error('Admin get users error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ADMIN: Get analytics/stats
app.get('/api/admin/analytics', verifyAdminBlogToken, async (req, res) => {
  try {
    // Get counts
    const [
      totalUsers,
      totalCreators,
      totalBrands,
      totalChannels,
      totalAds,
      totalCollaborations,
      totalBlogPosts,
      totalMessages,
      recentUsers,
      recentCollaborations,
      collaborationsByStatus,
      usersByMonth
    ] = await Promise.all([
      prisma.user.count(),
      prisma.user.count({ where: { type: 'CREATOR' } }),
      prisma.user.count({ where: { type: 'BRAND' } }),
      prisma.channel.count(),
      prisma.ad.count(),
      prisma.collaborationRequest.count(),
      prisma.blogPost.count({ where: { published: true } }),
      prisma.contactMessage.count(),
      // Recent users (last 7 days)
      prisma.user.count({
        where: {
          createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
        }
      }),
      // Recent collaborations (last 7 days)
      prisma.collaborationRequest.count({
        where: {
          createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
        }
      }),
      // Collaborations by status
      prisma.collaborationRequest.groupBy({
        by: ['status'],
        _count: { status: true }
      }),
      // Users registered per month (last 6 months)
      prisma.$queryRaw`
        SELECT
          DATE_TRUNC('month', "createdAt") as month,
          COUNT(*) as count,
          "type"
        FROM "User"
        WHERE "createdAt" >= NOW() - INTERVAL '6 months'
        GROUP BY DATE_TRUNC('month', "createdAt"), "type"
        ORDER BY month DESC
      `
    ]);

    // Calculate total revenue from paid collaborations
    const paidCollaborations = await prisma.collaborationRequest.aggregate({
      where: { status: { in: ['PAID', 'COMPLETED'] } },
      _sum: { totalPrice: true },
      _count: true
    });

    // Channel distribution by platform
    const channelsByPlatform = await prisma.channel.groupBy({
      by: ['platform'],
      _count: { platform: true }
    });

    // Convert BigInt to Number for JSON serialization
    const usersByMonthSerialized = usersByMonth.map(item => ({
      month: item.month,
      count: Number(item.count),
      type: item.type
    }));

    res.json({
      overview: {
        totalUsers,
        totalCreators,
        totalBrands,
        totalChannels,
        totalAds,
        totalCollaborations,
        totalBlogPosts,
        totalMessages,
        recentUsers,
        recentCollaborations
      },
      revenue: {
        total: paidCollaborations._sum.totalPrice || 0,
        paidCount: paidCollaborations._count
      },
      collaborationsByStatus: collaborationsByStatus.reduce((acc, item) => {
        acc[item.status] = item._count.status;
        return acc;
      }, {}),
      channelsByPlatform: channelsByPlatform.reduce((acc, item) => {
        acc[item.platform] = item._count.platform;
        return acc;
      }, {}),
      usersByMonth: usersByMonthSerialized
    });
  } catch (error) {
    console.error('Admin analytics error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ADMIN: Get contact messages
app.get('/api/admin/messages', verifyAdminBlogToken, async (req, res) => {
  try {
    const { read, limit = 50, offset = 0 } = req.query;

    const where = {};
    if (read === 'true') where.read = true;
    if (read === 'false') where.read = false;

    const [messages, total, unreadCount] = await Promise.all([
      prisma.contactMessage.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: parseInt(limit),
        skip: parseInt(offset)
      }),
      prisma.contactMessage.count({ where }),
      prisma.contactMessage.count({ where: { read: false } })
    ]);

    res.json({ messages, total, unreadCount, limit: parseInt(limit), offset: parseInt(offset) });
  } catch (error) {
    console.error('Admin get messages error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ADMIN: Mark message as read
app.put('/api/admin/messages/:id/read', verifyAdminBlogToken, async (req, res) => {
  try {
    const { id } = req.params;
    const message = await prisma.contactMessage.update({
      where: { id },
      data: { read: true }
    });
    res.json(message);
  } catch (error) {
    console.error('Admin mark message read error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ADMIN: Delete message
app.delete('/api/admin/messages/:id', verifyAdminBlogToken, async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.contactMessage.delete({ where: { id } });
    res.json({ success: true });
  } catch (error) {
    console.error('Admin delete message error:', error);
    res.status(500).json({ error: error.message });
  }
});

// PUBLIC: Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const contactMessage = await prisma.contactMessage.create({
      data: { name, email, subject, message }
    });

    res.status(201).json({ success: true, id: contactMessage.id });
  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ADMIN: Get notifications
app.get('/api/admin/notifications', verifyAdminBlogToken, async (req, res) => {
  try {
    const { limit = 50, offset = 0 } = req.query;

    const [notifications, total] = await Promise.all([
      prisma.notification.findMany({
        include: {
          user: {
            select: { id: true, name: true, email: true, type: true }
          }
        },
        orderBy: { createdAt: 'desc' },
        take: parseInt(limit),
        skip: parseInt(offset)
      }),
      prisma.notification.count()
    ]);

    res.json({ notifications, total, limit: parseInt(limit), offset: parseInt(offset) });
  } catch (error) {
    console.error('Admin get notifications error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ADMIN: Create notification
app.post('/api/admin/notifications', verifyAdminBlogToken, async (req, res) => {
  try {
    const { title, message, type, userId, targetType } = req.body;

    if (!title || !message) {
      return res.status(400).json({ error: 'Title and message are required' });
    }

    const notification = await prisma.notification.create({
      data: {
        title,
        message,
        type: type || 'INFO',
        userId: userId || null,
        targetType: targetType || null
      },
      include: {
        user: {
          select: { id: true, name: true, email: true, type: true }
        }
      }
    });

    res.status(201).json(notification);
  } catch (error) {
    console.error('Admin create notification error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ADMIN: Delete notification
app.delete('/api/admin/notifications/:id', verifyAdminBlogToken, async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.notification.delete({ where: { id } });
    res.json({ success: true });
  } catch (error) {
    console.error('Admin delete notification error:', error);
    res.status(500).json({ error: error.message });
  }
});

// USER: Get notifications for current user
app.get('/api/notifications', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Get notifications for this user OR for all users of their type OR for everyone
    const notifications = await prisma.notification.findMany({
      where: {
        OR: [
          { userId: userId },
          { targetType: user.type },
          { userId: null, targetType: null }
        ]
      },
      orderBy: { createdAt: 'desc' },
      take: 50
    });

    res.json(notifications);
  } catch (error) {
    console.error('Get user notifications error:', error);
    res.status(500).json({ error: error.message });
  }
});

// USER: Mark notification as read
app.put('/api/notifications/:id/read', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    jwt.verify(token, process.env.JWT_SECRET);

    const { id } = req.params;
    const notification = await prisma.notification.update({
      where: { id },
      data: { read: true }
    });
    res.json(notification);
  } catch (error) {
    console.error('Mark notification read error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ==================== END ADMIN DASHBOARD ENDPOINTS ====================

// Manual analytics refresh endpoint (for testing/admin)
app.post('/api/admin/refresh-analytics', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Optionally add admin check here

    console.log('[Manual Refresh] Triggered by user:', decoded.email);
    const result = await refreshAllChannels(prisma);
    res.json({ success: true, ...result });
  } catch (error) {
    console.error('[Manual Refresh] Error:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Socket.IO enabled for real-time messaging');

  // Schedule analytics refresh every hour (at minute 0)
  cron.schedule('0 * * * *', async () => {
    console.log('[Cron] Running hourly analytics refresh...');
    try {
      await refreshAllChannels(prisma);
    } catch (error) {
      console.error('[Cron] Analytics refresh failed:', error);
    }
  });
  console.log('Analytics refresh scheduled to run every hour');

  // Run an initial refresh 30 seconds after server start
  setTimeout(async () => {
    console.log('[Cron] Running initial analytics refresh...');
    try {
      await refreshAllChannels(prisma);
    } catch (error) {
      console.error('[Cron] Initial analytics refresh failed:', error);
    }
  }, 30000);
});
