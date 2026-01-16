const express = require('express');
const { google } = require('googleapis');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const dotenv = require('dotenv');
dotenv.config();

const { PrismaClient } = require('../src/generated');
const { PrismaPg } = require('@prisma/adapter-pg');

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const router = express.Router();

const CLIENT_ID = process.env.YOUTUBE_CLIENT_ID;
const CLIENT_SECRET = process.env.YOUTUBE_CLIENT_SECRET;
const REDIRECT_URI = 'https://communistic-kaleb-pseudoexperimentally.ngrok-free.dev/api/youtube/oauth/callback';
const FRONTEND_URL = 'https://linkhub-peach.vercel.app';
const SCOPES = ['https://www.googleapis.com/auth/youtube.readonly'];

// Generate a secure random code
function generateSecureCode() {
  return crypto.randomBytes(32).toString('hex');
}

function getOAuth2Client() {
  return new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
}

router.get('/oauth/start', (req, res) => {
  const oauth2Client = getOAuth2Client();
  const userToken = req.query.token || '';
  const autoRefresh = req.query.auto_refresh === 'true';

  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: autoRefresh ? 'none' : 'consent',
    state: JSON.stringify({ token: userToken, auto_refresh: autoRefresh }),
    redirect_uri: REDIRECT_URI,
  });

  res.redirect(url);
});

router.get('/oauth/callback', async (req, res) => {
  const code = req.query.code;
  let state = {};
  try {
    state = JSON.parse(req.query.state || '{}');
  } catch {}
  const originalUserToken = state.token || '';
  const autoRefresh = state.auto_refresh || false;

  if (!code) return res.status(400).send('Missing code');

  const oauth2Client = getOAuth2Client();

  try {
    const { tokens } = await oauth2Client.getToken({ code });
    oauth2Client.setCredentials(tokens);

    const youtube = google.youtube({ version: 'v3', auth: oauth2Client });
    const channelsRes = await youtube.channels.list({
      mine: true,
      part: 'id,snippet,statistics',
    });

    const channelList = (channelsRes.data.items || []).map(ch => ({
      id: ch.id,
      title: ch.snippet.title,
      thumbnail: ch.snippet.thumbnails?.default?.url || null,
      customUrl: ch.snippet.customUrl || null,
      verified: !!ch.snippet.customUrl,
      description: ch.snippet.description || null,
      stats: ch.statistics,
    }));

    // Include OAuth tokens for refresh capability
    const youtubeJwtToken = jwt.sign(
      {
        youtubeChannels: channelList,
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token,
        tokenExpiresAt: tokens.expiry_date ? new Date(tokens.expiry_date).toISOString() : null,
      },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    if (autoRefresh) {
      // Auto-refresh mode: close popup and reload opener
      res.send(`
        <script>
          if (window.opener) {
            window.opener.location.reload();
            window.close();
          } else {
            window.location.href = '/dashboard';
          }
        </script>
        <p>Updating channel data... This window will close automatically.</p>
      `);
      return;
    }

    // Generate a secure one-time code instead of passing token in URL
    const secureCode = generateSecureCode();

    // Store token data securely in database with 5 minute expiry
    await prisma.oAuthToken.create({
      data: {
        code: secureCode,
        platform: 'YOUTUBE',
        tokenData: youtubeJwtToken,
        userToken: originalUserToken || null,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
      },
    });

    // Only pass the short-lived code in URL, not the actual token
    const redirectUrl = new URL(`${FRONTEND_URL}/dashboard`);
    redirectUrl.searchParams.set('oauth_code', secureCode);
    redirectUrl.searchParams.set('platform', 'youtube');

    res.redirect(redirectUrl.toString());
  } catch (err) {
    console.error('YouTube OAuth error:', err);
    res.status(500).send('Authentication failed');
  }
});

// Secure endpoint to exchange code for token (called by frontend)
router.post('/oauth/exchange', async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'Missing code' });
  }

  try {
    // Find and validate the code
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
      // Clean up expired token
      await prisma.oAuthToken.delete({ where: { code } });
      return res.status(400).json({ error: 'Code expired' });
    }

    // Mark as used
    await prisma.oAuthToken.update({
      where: { code },
      data: { used: true },
    });

    // Return the token data securely via POST response
    res.json({
      token: oauthToken.tokenData,
      userToken: oauthToken.userToken,
    });

    // Clean up used token after short delay
    setTimeout(async () => {
      try {
        await prisma.oAuthToken.delete({ where: { code } });
      } catch (e) {
        // Ignore cleanup errors
      }
    }, 1000);
  } catch (err) {
    console.error('Token exchange error:', err);
    res.status(500).json({ error: 'Exchange failed' });
  }
});

router.get('/channels', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Missing token' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    res.json(payload.youtubeChannels || []);
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

router.post('/channel', async (req, res) => {
  const youtubeToken = req.headers.authorization?.replace('Bearer ', '');
  const userToken = req.headers['x-user-token'];
  const { channel } = req.body;

  if (!youtubeToken || !userToken || !channel) {
    console.log('Missing data:', { hasYoutubeToken: !!youtubeToken, hasUserToken: !!userToken, hasChannel: !!channel });
    return res.status(400).json({ error: 'Invalid request' });
  }

  try {
    // Check if tokens look like valid JWTs (should have 3 parts separated by dots)
    const ytParts = youtubeToken.split('.');
    const userParts = userToken.split('.');

    if (ytParts.length !== 3) {
      console.log('YouTube token malformed - parts:', ytParts.length, 'token preview:', youtubeToken.substring(0, 50));
      return res.status(400).json({ error: 'Invalid YouTube token format' });
    }
    if (userParts.length !== 3) {
      console.log('User token malformed - parts:', userParts.length);
      return res.status(400).json({ error: 'Invalid user token format' });
    }

    const youtubePayload = jwt.verify(youtubeToken, process.env.JWT_SECRET);
    const userPayload = jwt.verify(userToken, process.env.JWT_SECRET);
    const userId = userPayload.id;

    // Extract OAuth tokens from the YouTube JWT
    const { accessToken, refreshToken, tokenExpiresAt } = youtubePayload;

    const savedChannel = await prisma.channel.upsert({
      where: {
        userId_platform_channelId: {
          userId,
          platform: 'YOUTUBE',
          channelId: channel.id,
        },
      },
      update: {
        channelName: channel.title,
        thumbnail: channel.thumbnail || null,
        customUrl: channel.customUrl || null,
        verified: channel.verified || false,
        description: channel.description || null,
        subscribers: channel.stats?.subscriberCount ? parseInt(channel.stats.subscriberCount) : null,
        // Store OAuth tokens for refresh
        accessToken: accessToken || null,
        refreshToken: refreshToken || null,
        tokenExpiresAt: tokenExpiresAt ? new Date(tokenExpiresAt) : null,
        lastRefreshedAt: new Date(),
      },
      create: {
        userId,
        platform: 'YOUTUBE',
        channelId: channel.id,
        channelName: channel.title,
        thumbnail: channel.thumbnail || null,
        customUrl: channel.customUrl || null,
        verified: channel.verified || false,
        description: channel.description || null,
        subscribers: channel.stats?.subscriberCount ? parseInt(channel.stats.subscriberCount) : null,
        // Store OAuth tokens for refresh
        accessToken: accessToken || null,
        refreshToken: refreshToken || null,
        tokenExpiresAt: tokenExpiresAt ? new Date(tokenExpiresAt) : null,
        lastRefreshedAt: new Date(),
      },
    });

    res.json({ success: true, channel: savedChannel });
  } catch (err) {
    console.error('Save channel error:', err);
    res.status(401).json({ error: 'Invalid token' });
  }
});

module.exports = router;
