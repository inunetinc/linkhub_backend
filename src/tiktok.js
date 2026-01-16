const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const router = express.Router();
const { PrismaClient } = require('../src/generated');
const { PrismaPg } = require('@prisma/adapter-pg');

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// TikTok App Credentials (from your TikTok Developer Console)
const CLIENT_KEY = process.env.TIKTOK_CLIENT_KEY;
const CLIENT_SECRET = process.env.TIKTOK_CLIENT_SECRET;

// IMPORTANT: Must match EXACTLY what is in your TikTok app's Valid OAuth Redirect URIs
const REDIRECT_URI = process.env.TIKTOK_REDIRECT_URI || 'http://localhost:5000/api/tiktok/oauth/callback';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

// Your approved scopes - using all you enabled
const SCOPES = 'user.info.basic,user.info.profile,user.info.stats';

// Generate a secure random code
function generateSecureCode() {
  return crypto.randomBytes(32).toString('hex');
}

// Validate credentials
if (!CLIENT_KEY || !CLIENT_SECRET) {
  throw new Error('TIKTOK_CLIENT_KEY and TIKTOK_CLIENT_SECRET must be set in .env');
}

router.get('/oauth/start', (req, res) => {
  const userToken = req.query.token || '';
  const csrfState = Buffer.from(JSON.stringify({ userToken })).toString('base64');

  const params = new URLSearchParams({
    client_key: CLIENT_KEY,
    response_type: 'code',
    scope: SCOPES,
    redirect_uri: REDIRECT_URI,
    state: csrfState,
  });

  const authUrl = `https://www.tiktok.com/v2/auth/authorize/?${params.toString()}`;
  console.log('[TikTok OAuth] Starting login flow →', authUrl);
  res.redirect(authUrl);
});

router.get('/oauth/callback', async (req, res) => {
  const code = req.query.code;
  const state = req.query.state;

  console.log('[TikTok Callback] Received:', { code: !!code, state: !!state });

  if (!code || !state) {
    console.error('[TikTok] Missing code or state');
    return res.status(400).send('Authorization failed: missing code or state.');
  }

  let decodedState;
  try {
    decodedState = JSON.parse(Buffer.from(state, 'base64').toString());
  } catch (err) {
    console.error('[TikTok] Invalid state:', err.message);
    return res.status(400).send('Invalid state parameter.');
  }

  const { userToken: originalUserToken } = decodedState;

  try {
    // Step 1: Exchange code for access token
    console.log('[TikTok] Exchanging code for access token...');
    const tokenRes = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_key: CLIENT_KEY,
        client_secret: CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
      }),
    });

    const tokenData = await tokenRes.json();
    console.log('[TikTok] Token response:', JSON.stringify(tokenData, null, 2));

    if (!tokenData.access_token) {
      throw new Error(tokenData.message || 'Failed to obtain access token');
    }

    const accessToken = tokenData.access_token;
    const refreshToken = tokenData.refresh_token || null;
    // TikTok access tokens expire in ~24 hours, refresh tokens in 365 days
    const tokenExpiresAt = tokenData.expires_in
      ? new Date(Date.now() + tokenData.expires_in * 1000).toISOString()
      : null;

    // Step 2: Fetch user profile with all your approved fields
    console.log('[TikTok] Fetching user profile...');
    const fields = 'open_id,union_id,avatar_url,display_name,bio_description,profile_deep_link,is_verified,follower_count,following_count,likes_count,video_count';

    const userRes = await fetch(`https://open.tiktokapis.com/v2/user/info/?fields=${fields}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const userData = await userRes.json();
    console.log('[TikTok] Full user info response:', JSON.stringify(userData, null, 2));

    if (userData.error && userData.error.code !== 'ok') {
      throw new Error(userData.error.message || 'User info API failed');
    }

    if (!userData.data || !userData.data.user) {
      throw new Error('No user data returned from TikTok');
    }

    const user = userData.data.user;

    // Build clean account object
    const tiktokAccount = {
      id: user.open_id,
      username: user.display_name?.startsWith('@') ? user.display_name : `@${user.display_name || 'tiktokuser'}`,
      name: user.display_name || 'TikTok User',
      picture: user.avatar_url || null,
      bio: user.bio_description || '',
      verified: user.is_verified || false,
      followers: user.follower_count || 0,
      following: user.following_count || 0,
      likes: user.likes_count || 0,
      videoCount: user.video_count || 0,
    };

    console.log('[TikTok] SUCCESS! Account data:', tiktokAccount);

    // JWT with array and tokens (consistent with other platforms)
    const tiktokJwtToken = jwt.sign(
      {
        tiktokAccounts: [tiktokAccount],
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
        platform: 'TIKTOK',
        tokenData: tiktokJwtToken,
        userToken: originalUserToken || null,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
      },
    });

    // Only pass the short-lived code in URL, not the actual token
    const redirectUrl = new URL(`${FRONTEND_URL}/dashboard`);
    redirectUrl.searchParams.set('oauth_code', secureCode);
    redirectUrl.searchParams.set('platform', 'tiktok');

    console.log('[TikTok] Redirecting to dashboard with secure code');
    res.redirect(redirectUrl.toString());
  } catch (err) {
    console.error('[TikTok] OAuth flow failed:', err.message);
    res.status(500).send(`
      <h2>TikTok Connection Failed</h2>
      <p><strong>Error:</strong> ${err.message}</p>
      <p>Check server logs for details. Try again in a few minutes.</p>
      <a href="${FRONTEND_URL}/dashboard">← Back to Dashboard</a>
    `);
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

// Save selected TikTok account to database
router.post('/channel', async (req, res) => {
  const authHeader = req.headers.authorization;
  const userTokenHeader = req.headers['x-user-token'];
  const { account } = req.body;

  if (!authHeader?.startsWith('Bearer ') || !userTokenHeader || !account?.id) {
    return res.status(400).json({ error: 'Missing data' });
  }

  const tiktokToken = authHeader.replace('Bearer ', '');

  try {
    const payload = jwt.verify(tiktokToken, process.env.JWT_SECRET);
    const selectedAccount = payload.tiktokAccounts?.find(a => a.id === account.id);

    if (!selectedAccount) {
      return res.status(400).json({ error: 'Account not authorized' });
    }

    const userPayload = jwt.verify(userTokenHeader, process.env.JWT_SECRET);
    const userId = userPayload.id;

    // Extract tokens from TikTok JWT
    const { accessToken, refreshToken, tokenExpiresAt } = payload;

    const savedChannel = await prisma.channel.upsert({
      where: {
        userId_platform_channelId: {
          userId,
          platform: 'TIKTOK',
          channelId: account.id,
        },
      },
      update: {
        channelName: selectedAccount.name,
        thumbnail: selectedAccount.picture || null,
        customUrl: selectedAccount.username.replace(/^@/, ''),
        description: selectedAccount.bio || 'TikTok Creator',
        subscribers: selectedAccount.followers || null,
        verified: selectedAccount.verified,
        // Store OAuth tokens for refresh
        accessToken: accessToken || null,
        refreshToken: refreshToken || null,
        tokenExpiresAt: tokenExpiresAt ? new Date(tokenExpiresAt) : null,
        lastRefreshedAt: new Date(),
      },
      create: {
        userId,
        platform: 'TIKTOK',
        channelId: account.id,
        channelName: selectedAccount.name,
        thumbnail: selectedAccount.picture || null,
        customUrl: selectedAccount.username.replace(/^@/, ''),
        description: selectedAccount.bio || 'TikTok Creator',
        subscribers: selectedAccount.followers || null,
        verified: selectedAccount.verified,
        // Store OAuth tokens for refresh
        accessToken: accessToken || null,
        refreshToken: refreshToken || null,
        tokenExpiresAt: tokenExpiresAt ? new Date(tokenExpiresAt) : null,
        lastRefreshedAt: new Date(),
      },
    });

    console.log('[TikTok] Account saved:', selectedAccount.username);
    res.json({ success: true, channel: savedChannel });
  } catch (err) {
    console.error('[TikTok] Save error:', err.message);
    res.status(401).json({ error: 'Invalid or expired token' });
  }
});

module.exports = router;