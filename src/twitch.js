const express = require('express');
const fetch = require('node-fetch'); // Install if needed: npm i node-fetch@2
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const router = express.Router();

const { PrismaClient } = require('../src/generated');
const { PrismaPg } = require('@prisma/adapter-pg');

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const CLIENT_ID = process.env.TWITCH_CLIENT_ID;
const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET;
const REDIRECT_URI = process.env.TWITCH_REDIRECT_URI;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

// Generate a secure random code
function generateSecureCode() {
  return crypto.randomBytes(32).toString('hex');
}

// 1. Start OAuth — redirect user to Twitch
router.get('/oauth/start', (req, res) => {
  const userToken = req.query.token || ''; // Main app JWT

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: 'user:read:email', // Optional: gets email; remove if not needed
    state: userToken, // Pass main token back
    force_verify: 'true', // Always show consent for safety
  });

  res.redirect(`https://id.twitch.tv/oauth2/authorize?${params.toString()}`);
});

// 2. OAuth Callback — exchange code for token + fetch user data
router.get('/oauth/callback', async (req, res) => {
    console.log("reached")
  const code = req.query.code;
  const originalUserToken = req.query.state || '';

  if (!code) return res.status(400).send('No code provided');

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://id.twitch.tv/oauth2/token', {
      method: 'POST',
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
      }),
    });

    const tokenData = await tokenResponse.json();
    if (!tokenData.access_token) throw new Error('Failed to get access token');

    const accessToken = tokenData.access_token;
    const refreshToken = tokenData.refresh_token || null;
    // Twitch access tokens expire in ~4 hours
    const tokenExpiresAt = tokenData.expires_in
      ? new Date(Date.now() + tokenData.expires_in * 1000).toISOString()
      : null;

    // Fetch user data from Helix API
    const userResponse = await fetch('https://api.twitch.tv/helix/users', {
      headers: {
        'Client-ID': CLIENT_ID,
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    const userData = await userResponse.json();
    if (!userData.data || userData.data.length === 0) throw new Error('No user data');

    const twitchUser = userData.data[0];

    // Create short-lived JWT with Twitch user info and tokens
    const twitchJwtToken = jwt.sign(
      {
        twitchUser,
        accessToken,
        refreshToken,
        tokenExpiresAt,
      },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    // Generate a secure one-time code instead of passing token in URL
    const secureCode = generateSecureCode();

    // Store token data securely in database with 5 minute expiry
    await prisma.oAuthToken.create({
      data: {
        code: secureCode,
        platform: 'TWITCH',
        tokenData: twitchJwtToken,
        userToken: originalUserToken || null,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
      },
    });

    // Only pass the short-lived code in URL, not the actual token
    const redirectUrl = new URL(`${FRONTEND_URL}/dashboard`);
    redirectUrl.searchParams.set('oauth_code', secureCode);
    redirectUrl.searchParams.set('platform', 'twitch');

    res.redirect(redirectUrl.toString());
  } catch (err) {
    console.error('Twitch OAuth error:', err);
    res.status(500).send('Twitch authentication failed');
  }
});

// Secure endpoint to exchange code for token (called by frontend)
router.post('/oauth/exchange', async (req, res) => {
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

    await prisma.oAuthToken.update({
      where: { code },
      data: { used: true },
    });

    res.json({
      token: oauthToken.tokenData,
      userToken: oauthToken.userToken,
    });

    setTimeout(async () => {
      try {
        await prisma.oAuthToken.delete({ where: { code } });
      } catch (e) {}
    }, 1000);
  } catch (err) {
    console.error('Token exchange error:', err);
    res.status(500).json({ error: 'Exchange failed' });
  }
});

// 3. Save selected Twitch channel to DB
router.post('/channel', async (req, res) => {
  const twitchAuthHeader = req.headers.authorization;
  const userTokenHeader = req.headers['x-user-token'];
  const { twitchUser } = req.body; // Will contain id, login, display_name, profile_image_url, etc.

  if (!twitchAuthHeader || !twitchAuthHeader.startsWith('Bearer ') || !userTokenHeader || !twitchUser) {
    return res.status(400).json({ error: 'Missing data' });
  }

  const twitchToken = twitchAuthHeader.replace('Bearer ', '');

  try {
    // Verify short-lived twitch token and extract tokens
    const twitchPayload = jwt.verify(twitchToken, process.env.JWT_SECRET);
    const { accessToken, refreshToken, tokenExpiresAt } = twitchPayload;

    // Verify main user token
    const userPayload = jwt.verify(userTokenHeader, process.env.JWT_SECRET);
    const userId = userPayload.id;

    // Save to Channel table (upsert)
    const savedChannel = await prisma.channel.upsert({
      where: {
        userId_platform_channelId: {
          userId,
          platform: 'TWITCH',
          channelId: twitchUser.id,
        },
      },
      update: {
        channelName: twitchUser.display_name,
        thumbnail: twitchUser.profile_image_url || null,
        customUrl: twitchUser.login, // Twitch username
        verified: false, // Twitch doesn't expose affiliate/partner via public API
        description: twitchUser.description || null,
        subscribers: null, // Not available publicly
        // Store OAuth tokens for refresh
        accessToken: accessToken || null,
        refreshToken: refreshToken || null,
        tokenExpiresAt: tokenExpiresAt ? new Date(tokenExpiresAt) : null,
        lastRefreshedAt: new Date(),
      },
      create: {
        userId,
        platform: 'TWITCH',
        channelId: twitchUser.id,
        channelName: twitchUser.display_name,
        thumbnail: twitchUser.profile_image_url || null,
        customUrl: twitchUser.login,
        verified: false,
        description: twitchUser.description || null,
        // Store OAuth tokens for refresh
        accessToken: accessToken || null,
        refreshToken: refreshToken || null,
        tokenExpiresAt: tokenExpiresAt ? new Date(tokenExpiresAt) : null,
        lastRefreshedAt: new Date(),
      },
    });

    res.json({ success: true, channel: savedChannel });
  } catch (err) {
    console.error('Twitch save error:', err);
    res.status(401).json({ error: 'Invalid token' });
  }
});

module.exports = router;