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

const APP_ID = process.env.FACEBOOK_APP_ID;
const APP_SECRET = process.env.FACEBOOK_APP_SECRET;
const REDIRECT_URI = 'https://communistic-kaleb-pseudoexperimentally.ngrok-free.dev/api/facebook/oauth/callback';
const FRONTEND_URL = 'https://linkhub-peach.vercel.app/';

const SCOPES = 'pages_show_list,pages_read_engagement,pages_read_user_content,read_insights,instagram_manage_insights';

// Generate a secure random code
function generateSecureCode() {
  return crypto.randomBytes(32).toString('hex');
}

router.get('/oauth/start', (req, res) => {
  const userToken = req.query.token || '';
  const params = new URLSearchParams({
    client_id: APP_ID,
    redirect_uri: REDIRECT_URI,
    scope: SCOPES,
    state: userToken,
    response_type: 'code',
  });
  res.redirect(`https://www.facebook.com/v20.0/dialog/oauth?${params.toString()}`);
});

router.get('/oauth/callback', async (req, res) => {
  const code = req.query.code;
  const originalUserToken = req.query.state || '';

  if (!code) return res.status(400).send('No code provided');

  try {
    const tokenUrl = `https://graph.facebook.com/v20.0/oauth/access_token?client_id=${APP_ID}&client_secret=${APP_SECRET}&code=${code}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
    const tokenRes = await fetch(tokenUrl);
    const tokenData = await tokenRes.json();
    if (tokenData.error) throw new Error(tokenData.error.message);

    const shortLivedToken = tokenData.access_token;

    // Exchange for long-lived token (60 days)
    let accessToken = shortLivedToken;
    let tokenExpiresAt = null;

    try {
      const longLivedRes = await fetch(
        `https://graph.facebook.com/v20.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${APP_ID}&client_secret=${APP_SECRET}&fb_exchange_token=${shortLivedToken}`
      );
      const longLivedData = await longLivedRes.json();

      if (longLivedData.access_token) {
        accessToken = longLivedData.access_token;
        // Long-lived tokens expire in ~60 days
        tokenExpiresAt = new Date(Date.now() + (longLivedData.expires_in || 5184000) * 1000).toISOString();
        console.log('[Facebook] Long-lived token obtained, expires:', tokenExpiresAt);
      }
    } catch (err) {
      console.error('[Facebook] Failed to exchange for long-lived token:', err);
    }

    const fields = 'id,name,category,about,fan_count,picture.width(400).height(400){url},access_token';
    const pagesRes = await fetch(`https://graph.facebook.com/v20.0/me/accounts?fields=${fields}&access_token=${accessToken}`);
    const pagesData = await pagesRes.json();
    if (pagesData.error) throw new Error(pagesData.error.message);

    if (!pagesData.data?.length) {
      return res.send('No managed Facebook Pages found.');
    }

    const pageList = pagesData.data.map(p => ({
      id: p.id,
      name: p.name,
      picture: p.picture?.data?.url || null,
      description: p.about || p.category || '',
      followers: p.fan_count || 0,
      pageAccessToken: p.access_token || null, // Page-specific token for API calls
    }));

    const facebookJwtToken = jwt.sign(
      {
        facebookPages: pageList,
        userAccessToken: accessToken,
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
        platform: 'FACEBOOK',
        tokenData: facebookJwtToken,
        userToken: originalUserToken || null,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
      },
    });

    // Only pass the short-lived code in URL, not the actual token
    const redirectUrl = new URL(`${FRONTEND_URL}/dashboard`);
    redirectUrl.searchParams.set('oauth_code', secureCode);
    redirectUrl.searchParams.set('platform', 'facebook');

    res.redirect(redirectUrl.toString());
  } catch (err) {
    console.error('Facebook callback error:', err.message);
    res.status(500).send(`Facebook auth failed: ${err.message}`);
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

// POST /channel - Save selected Page
router.post('/channel', async (req, res) => {
  const authHeader = req.headers.authorization;
  const userTokenHeader = req.headers['x-user-token'];
  const { page } = req.body;

  console.log('Save request received:', { pageId: page?.id, hasAuth: !!authHeader, hasUserToken: !!userTokenHeader });

  if (!authHeader?.startsWith('Bearer ') || !userTokenHeader || !page?.id) {
    return res.status(400).json({ error: 'Missing auth, user token, or page data' });
  }

  const fbToken = authHeader.split(' ')[1];

  try {
    // Verify the Facebook JWT
    const payload = jwt.verify(fbToken, process.env.JWT_SECRET);

    // Must have facebookPages array
    if (!Array.isArray(payload.facebookPages)) {
      return res.status(400).json({ error: 'Invalid token payload' });
    }

    // Find the selected page in the list
    const selectedPage = payload.facebookPages.find(p => p.id === page.id);
    if (!selectedPage) {
      return res.status(400).json({ error: 'Page not in authorized list' });
    }

    // Verify main user token
    const userPayload = jwt.verify(userTokenHeader, process.env.JWT_SECRET);
    const userId = userPayload.id;

    // Extract tokens from Facebook JWT
    const { userAccessToken, tokenExpiresAt } = payload;
    // Get page-specific access token
    const pageAccessToken = selectedPage.pageAccessToken || null;

    // Save to DB
    const savedChannel = await prisma.channel.upsert({
      where: {
        userId_platform_channelId: {
          userId,
          platform: 'FACEBOOK',
          channelId: page.id,
        },
      },
      update: {
        channelName: page.name,
        thumbnail: page.picture || null,
        description: page.description || '',
        subscribers: page.followers || null,
        customUrl: null,
        verified: false,
        // Store OAuth tokens for refresh (use page token for page-specific calls)
        accessToken: pageAccessToken || userAccessToken || null,
        tokenExpiresAt: tokenExpiresAt ? new Date(tokenExpiresAt) : null,
        lastRefreshedAt: new Date(),
      },
      create: {
        userId,
        platform: 'FACEBOOK',
        channelId: page.id,
        channelName: page.name,
        thumbnail: page.picture || null,
        description: page.description || '',
        subscribers: page.followers || null,
        customUrl: null,
        verified: false,
        // Store OAuth tokens for refresh
        accessToken: pageAccessToken || userAccessToken || null,
        tokenExpiresAt: tokenExpiresAt ? new Date(tokenExpiresAt) : null,
        lastRefreshedAt: new Date(),
      },
    });

    console.log('SUCCESS: Page saved!', savedChannel.channelName, savedChannel.subscribers + ' followers');

    res.json({ success: true, channel: savedChannel });
  } catch (err) {
    console.error('Save failed:', err.message);
    res.status(401).json({ error: 'Invalid or expired token' });
  }
});

module.exports = router;
