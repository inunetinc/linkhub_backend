const express = require('express');
const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const dotenv = require('dotenv');
dotenv.config();

const { PrismaClient } = require('../src/generated');
const { PrismaPg } = require('@prisma/adapter-pg');

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const router = express.Router();

const APP_ID = process.env.INSTAGRAM_APP_ID;
const APP_SECRET = process.env.INSTAGRAM_APP_SECRET;
const REDIRECT_URI = 'https://communistic-kaleb-pseudoexperimentally.ngrok-free.dev/api/instagram/oauth/callback';
const FRONTEND_URL = 'https://linkhub-peach.vercel.app/';

// Minimal scopes for Instagram Business Login
const SCOPES = 'instagram_business_basic';

// Generate a secure random code
function generateSecureCode() {
  return crypto.randomBytes(32).toString('hex');
}

console.log('Instagram OAuth Configured:', { APP_ID, REDIRECT_URI });

// 1. Start OAuth Flow using Instagram Login
router.get('/oauth/start', (req, res) => {
  try {
    const userToken = req.query.token || '';
    const autoRefresh = req.query.auto_refresh === 'true';

    const state = JSON.stringify({
      token: userToken,
      auto_refresh: autoRefresh,
    });

    const params = new URLSearchParams({
      client_id: APP_ID,
      redirect_uri: REDIRECT_URI,
      scope: SCOPES,
      response_type: 'code',
      state: state,
      force_reauth: 'true',
    });

    // Use Instagram's direct OAuth endpoint (Instagram Login)
    const authUrl = `https://www.instagram.com/oauth/authorize?${params.toString()}`;
    console.log('Redirecting to Instagram Login:', authUrl);
    res.redirect(authUrl);
  } catch (err) {
    console.error('OAuth start error:', err);
    res.status(500).json({ error: 'Failed to start OAuth' });
  }
});

// 2. OAuth Callback - Per Meta docs
router.get('/oauth/callback', async (req, res) => {
  try {
    const code = req.query.code;
    const errorCode = req.query.error;
    const errorMsg = req.query.error_description;

    if (errorCode) {
      return res.send(`
        <html>
          <body style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>Instagram Authentication Failed</h2>
            <p><strong>Error:</strong> ${errorMsg || errorCode}</p>
            <p><a href="javascript:window.close()">Close this window</a></p>
          </body>
        </html>
      `);
    }

    if (!code) {
      return res.status(400).send('Missing authorization code');
    }

    let state = {};
    try {
      state = JSON.parse(req.query.state || '{}');
    } catch (e) {
      console.error('State parse error:', e);
    }

    const originalUserToken = state.token || '';
    const autoRefresh = state.auto_refresh || false;

    // Step 1: Exchange code for access token (per Meta docs)
    console.log('Step 1: Exchanging code for access token...');
    const tokenResponse = await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: APP_ID,
        client_secret: APP_SECRET,
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
      }).toString(),
    });

    const tokenData = await tokenResponse.json();
    console.log('Token response status:', tokenResponse.status);

    if (tokenData.error) {
      console.error('Token error:', JSON.stringify(tokenData.error, null, 2));
      return res.send(`
        <html>
          <body style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>Token Exchange Failed</h2>
            <p><strong>Error Code:</strong> ${tokenData.error.code}</p>
            <p><strong>Message:</strong> ${tokenData.error.message}</p>
            <p><a href="javascript:window.close()">Close this window</a></p>
          </body>
        </html>
      `);
    }

    if (!tokenData.access_token) {
      console.error('No access token in response:', tokenData);
      return res.send(`
        <html>
          <body style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>No Access Token Received</h2>
            <p>Response: ${JSON.stringify(tokenData)}</p>
            <p><a href="javascript:window.close()">Close this window</a></p>
          </body>
        </html>
      `);
    }

    const shortLivedToken = tokenData.access_token;
    const userId = tokenData.user_id;

    // Exchange short-lived token for long-lived token (60 days)
    console.log('Step 1.5: Exchanging for long-lived token...');
    let accessToken = shortLivedToken;
    let tokenExpiresAt = null;

    try {
      // Use POST with body instead of GET with query params to protect client_secret
      const longLivedResponse = await fetch('https://graph.instagram.com/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'ig_exchange_token',
          client_secret: APP_SECRET,
          access_token: shortLivedToken,
        }).toString(),
      });
      const longLivedData = await longLivedResponse.json();

      if (longLivedData.access_token) {
        accessToken = longLivedData.access_token;
        // Long-lived tokens expire in 60 days (5184000 seconds)
        tokenExpiresAt = new Date(Date.now() + (longLivedData.expires_in || 5184000) * 1000).toISOString();
        console.log('Long-lived token obtained, expires:', tokenExpiresAt);
      }
    } catch (err) {
      console.error('Failed to exchange for long-lived token:', err);
      // Continue with short-lived token
    }

    console.log('Step 2: Getting user info from /me endpoint...');

    // Step 2: Get user info using /me endpoint (per Meta docs)
    // Use Authorization header instead of access_token in URL for better security
    const meResponse = await fetch(
      `https://graph.instagram.com/v24.0/me?fields=user_id,username,name,biography,profile_picture_url,followers_count,media_count,account_type`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    const meData = await meResponse.json();
    console.log('Me endpoint response:', meData);

    if (meData.error) {
      console.error('Me endpoint error:', meData.error);
      return res.send(`
        <html>
          <body style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>Failed to Get User Info</h2>
            <p><strong>Error:</strong> ${meData.error.message}</p>
            <p><a href="javascript:window.close()">Close this window</a></p>
          </body>
        </html>
      `);
    }

    // Extract user from response
    const userData = Array.isArray(meData.data) ? meData.data[0] : meData;

    if (!userData || !userData.user_id) {
      console.error('Invalid user data:', userData);
      return res.send(`
        <html>
          <body style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>Invalid User Data</h2>
            <p>Could not retrieve user information from Instagram.</p>
            <p><a href="javascript:window.close()">Close this window</a></p>
          </body>
        </html>
      `);
    }

    // Create Instagram account object (per Meta docs)
    const instagramAccount = {
      id: userData.user_id,
      username: userData.username,
      name: userData.name || userData.username,
      biography: userData.biography || '',
      profile_picture_url: userData.profile_picture_url || null,
      followers_count: userData.followers_count || 0,
      media_count: userData.media_count || 0,
      account_type: userData.account_type || 'Business',
    };

    console.log('Account retrieved:', instagramAccount.username);

    // Create JWT with Instagram account and tokens
    const instagramJwtToken = jwt.sign(
      {
        instagramAccounts: [instagramAccount],
        accessToken: accessToken,
        tokenExpiresAt: tokenExpiresAt,
      },
      process.env.JWT_SECRET,
      { expiresIn: '60m' } // Short-lived token valid for 1 hour
    );

    if (autoRefresh) {
      res.send(`
        <script>
          if (window.opener) {
            window.opener.location.reload();
            window.close();
          } else {
            window.location.href = '/dashboard';
          }
        </script>
        <p>Syncing Instagram account... This window will close automatically.</p>
      `);
      return;
    }

    // Generate a secure one-time code instead of passing token in URL
    const secureCode = generateSecureCode();

    // Store token data securely in database with 5 minute expiry
    await prisma.oAuthToken.create({
      data: {
        code: secureCode,
        platform: 'INSTAGRAM',
        tokenData: instagramJwtToken,
        userToken: originalUserToken || null,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
      },
    });

    // Only pass the short-lived code in URL, not the actual token
    const redirectUrl = new URL(`${FRONTEND_URL}/dashboard`);
    redirectUrl.searchParams.set('oauth_code', secureCode);
    redirectUrl.searchParams.set('platform', 'instagram');

    res.redirect(redirectUrl.toString());
  } catch (err) {
    console.error('Callback error:', err);
    res.status(500).send(`
      <html>
        <body style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Authentication Error</h2>
          <p>${err.message}</p>
          <p><a href="javascript:window.close()">Close this window</a></p>
        </body>
      </html>
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

// 3. Get Instagram accounts from JWT
router.get('/accounts', (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'Missing authorization token' });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    res.json(payload.instagramAccounts || []);
  } catch (err) {
    console.error('Verify token error:', err);
    res.status(401).json({ error: 'Invalid token' });
  }
});

// 4. Save selected Instagram account to database
router.post('/account', async (req, res) => {
  try {
    const instagramToken = req.headers.authorization?.replace('Bearer ', '');
    const userToken = req.headers['x-user-token'];
    const { account } = req.body;

    if (!instagramToken || !userToken || !account) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    // Verify Instagram token
    let instagramPayload;
    try {
      instagramPayload = jwt.verify(instagramToken, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ error: 'Invalid Instagram token' });
    }

    // Verify user token
    let userPayload;
    try {
      userPayload = jwt.verify(userToken, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ error: 'Invalid user token' });
    }

    const userId = userPayload.id;

    // Verify the account is in the authorized list
    const authorizedAccount = instagramPayload.instagramAccounts?.find(
      (acc) => acc.id === account.id
    );
    if (!authorizedAccount) {
      return res.status(403).json({ error: 'Account not in authorized list' });
    }

    // Extract tokens from Instagram JWT
    const { accessToken, tokenExpiresAt } = instagramPayload;

    // Save to database
    const savedChannel = await prisma.channel.upsert({
      where: {
        userId_platform_channelId: {
          userId,
          platform: 'INSTAGRAM',
          channelId: account.id,
        },
      },
      update: {
        channelName: account.username,
        thumbnail: account.profile_picture_url || null,
        customUrl: account.username,
        verified: false,
        description: account.biography || null,
        subscribers: account.followers_count || 0,
        analytics: {
          mediaCount: account.media_count || 0,
          followers: account.followers_count || 0,
        },
        // Store OAuth tokens for refresh
        accessToken: accessToken || null,
        tokenExpiresAt: tokenExpiresAt ? new Date(tokenExpiresAt) : null,
        lastRefreshedAt: new Date(),
      },
      create: {
        userId,
        platform: 'INSTAGRAM',
        channelId: account.id,
        channelName: account.username,
        thumbnail: account.profile_picture_url || null,
        customUrl: account.username,
        verified: false,
        description: account.biography || null,
        subscribers: account.followers_count || 0,
        analytics: {
          mediaCount: account.media_count || 0,
          followers: account.followers_count || 0,
        },
        // Store OAuth tokens for refresh
        accessToken: accessToken || null,
        tokenExpiresAt: tokenExpiresAt ? new Date(tokenExpiresAt) : null,
        lastRefreshedAt: new Date(),
      },
    });

    console.log('Instagram account saved:', savedChannel.channelName);
    res.json({ success: true, channel: savedChannel });
  } catch (err) {
    console.error('Save account error:', err);
    res.status(500).json({ error: 'Failed to save account' });
  }
});

module.exports = router;
