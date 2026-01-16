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

// Twitter/X OAuth 2.0 with PKCE (required for all apps)
const CLIENT_ID = process.env.TWITTER_CLIENT_ID;
const CLIENT_SECRET = process.env.TWITTER_CLIENT_SECRET;

// Update this with your current ngrok URL every time it changes
const REDIRECT_URI = process.env.TWITTER_REDIRECT_URI || 'http://localhost:5000/api/twitter/oauth/callback';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

// Scopes: read user profile + followers count + tweet read/write
const SCOPES = 'tweet.read users.read follows.read';

// Generate a secure random code for token exchange
function generateSecureCode() {
  return crypto.randomBytes(32).toString('hex');
}

if (!CLIENT_ID || !CLIENT_SECRET) {
  throw new Error('TWITTER_CLIENT_ID and TWITTER_CLIENT_SECRET must be set in .env');
}

// Generate PKCE code verifier and challenge
const generatePKCE = () => {
  const verifier = crypto.randomBytes(64).toString('base64url');
  const challenge = crypto.createHash('sha256').update(verifier).digest('base64url');
  return { verifier, challenge };
};

router.get('/oauth/start', (req, res) => {
  const userToken = req.query.token || '';

  const { verifier, challenge } = generatePKCE();

  // Encode state with user token and verifier (for PKCE)
  const state = Buffer.from(JSON.stringify({ userToken, verifier })).toString('base64');

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: SCOPES,
    state,
    code_challenge: challenge,
    code_challenge_method: 'S256',
  });

  const authUrl = `https://twitter.com/i/oauth2/authorize?${params.toString()}`;
  console.log('[Twitter] Starting OAuth →', authUrl);
  res.redirect(authUrl);
});

router.get('/oauth/callback', async (req, res) => {
  const code = req.query.code;
  const state = req.query.state;

  if (!code || !state) {
    return res.status(400).send('Missing code or state parameter.');
  }

  let decodedState;
  try {
    decodedState = JSON.parse(Buffer.from(state, 'base64').toString());
  } catch (err) {
    return res.status(400).send('Invalid state parameter.');
  }

  const { userToken: originalUserToken, verifier } = decodedState;

  if (!verifier) {
    return res.status(400).send('Missing code verifier in state.');
  }

  try {
    // Exchange code for access token using PKCE
    const tokenParams = new URLSearchParams({
      code,
      grant_type: 'authorization_code',
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code_verifier: verifier,
    });

    const tokenRes = await fetch('https://api.twitter.com/2/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
      },
      body: tokenParams,
    });

    const tokenData = await tokenRes.json();

    if (tokenData.error || !tokenData.access_token) {
      console.error('[Twitter] Token error:', tokenData);
      throw new Error(tokenData.error_description || 'Failed to get access token');
    }

    const accessToken = tokenData.access_token;
    const refreshToken = tokenData.refresh_token || null;
    // Twitter access tokens expire in ~2 hours
    const tokenExpiresAt = tokenData.expires_in
      ? new Date(Date.now() + tokenData.expires_in * 1000).toISOString()
      : null;

    // Fetch user profile with public metrics (followers, following, tweet count)
    const userRes = await fetch('https://api.twitter.com/2/users/me?user.fields=profile_image_url,description,public_metrics,verified,username,name', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userData = await userRes.json();

    if (userData.errors) {
      console.error('[Twitter] User fetch error:', userData.errors);
      throw new Error(userData.errors[0]?.message || 'Failed to fetch user data');
    }

    const user = userData.data;
    const metrics = user.public_metrics || {};

    const twitterAccount = {
      id: user.id,
      username: user.username,
      name: user.name || `@${user.username}`,
      picture: user.profile_image_url ? user.profile_image_url.replace('_normal', '_400x400') : null,
      bio: user.description || '',
      followers: metrics.followers_count || 0,
      following: metrics.following_count || 0,
      tweets: metrics.tweet_count || 0,
      verified: user.verified || false,
    };

    console.log('[Twitter] SUCCESS! Connected account:', `@${twitterAccount.username}`, twitterAccount.followers + ' followers');

    // Wrap in array for frontend consistency (same as Instagram/Facebook)
    const twitterJwtToken = jwt.sign(
      {
        twitterAccounts: [twitterAccount],
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
        platform: 'TWITTER',
        tokenData: twitterJwtToken,
        userToken: originalUserToken || null,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
      },
    });

    // Only pass the short-lived code in URL, not the actual token
    const redirectUrl = new URL(`${FRONTEND_URL}/dashboard`);
    redirectUrl.searchParams.set('oauth_code', secureCode);
    redirectUrl.searchParams.set('platform', 'twitter');

    res.redirect(redirectUrl.toString());
  } catch (err) {
    console.error('[Twitter] OAuth failed:', err.message);
    res.status(500).send(`
      <h2>Twitter Connection Failed</h2>
      <p><strong>Error:</strong> ${err.message}</p>
      <p>Try again or check server logs.</p>
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

// Save selected Twitter account to database
router.post('/channel', async (req, res) => {
  const authHeader = req.headers.authorization;
  const userTokenHeader = req.headers['x-user-token'];
  const { account } = req.body;

  if (!authHeader?.startsWith('Bearer ') || !userTokenHeader || !account?.id) {
    return res.status(400).json({ error: 'Missing authentication or account data' });
  }

  const twitterToken = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(twitterToken, process.env.JWT_SECRET);
    const selectedAccount = payload.twitterAccounts?.find(a => a.id === account.id);

    if (!selectedAccount) {
      return res.status(400).json({ error: 'Account not found in session' });
    }

    const userPayload = jwt.verify(userTokenHeader, process.env.JWT_SECRET);
    const userId = userPayload.id;

    // Extract tokens from Twitter JWT
    const { accessToken, refreshToken, tokenExpiresAt } = payload;

    const savedChannel = await prisma.channel.upsert({
      where: {
        userId_platform_channelId: {
          userId,
          platform: 'TWITTER',
          channelId: account.id,
        },
      },
      update: {
        channelName: selectedAccount.name,
        thumbnail: selectedAccount.picture || null,
        customUrl: selectedAccount.username,
        description: selectedAccount.bio || 'Twitter Account',
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
        platform: 'TWITTER',
        channelId: account.id,
        channelName: selectedAccount.name,
        thumbnail: selectedAccount.picture || null,
        customUrl: selectedAccount.username,
        description: selectedAccount.bio || 'Twitter Account',
        subscribers: selectedAccount.followers || null,
        verified: selectedAccount.verified,
        // Store OAuth tokens for refresh
        accessToken: accessToken || null,
        refreshToken: refreshToken || null,
        tokenExpiresAt: tokenExpiresAt ? new Date(tokenExpiresAt) : null,
        lastRefreshedAt: new Date(),
      },
    });

    console.log('[Twitter] Account saved:', selectedAccount.username);
    res.json({ success: true, channel: savedChannel });
  } catch (err) {
    console.error('[Twitter] Save failed:', err.message);
    res.status(401).json({ error: 'Invalid or expired token' });
  }
});

module.exports = router;