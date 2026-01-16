/**
 * Analytics Refresh Service
 * Refreshes subscriber counts and analytics for all connected channels
 * Runs hourly via cron job
 */

const { google } = require('googleapis');
const fetch = require('node-fetch');

// Platform-specific refresh functions

/**
 * Refresh YouTube channel analytics
 */
async function refreshYouTube(channel, prisma) {
  const { accessToken, refreshToken, channelId } = channel;

  if (!refreshToken) {
    console.log(`[YouTube] No refresh token for channel ${channel.channelName}, skipping`);
    return null;
  }

  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.YOUTUBE_CLIENT_ID,
      process.env.YOUTUBE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    // Refresh the token if needed
    const { credentials } = await oauth2Client.refreshAccessToken();
    oauth2Client.setCredentials(credentials);

    const youtube = google.youtube({ version: 'v3', auth: oauth2Client });
    const response = await youtube.channels.list({
      id: channelId,
      part: 'statistics,snippet',
    });

    const channelData = response.data.items?.[0];
    if (!channelData) {
      console.log(`[YouTube] Channel ${channelId} not found`);
      return null;
    }

    const subscribers = parseInt(channelData.statistics.subscriberCount) || 0;
    const viewCount = parseInt(channelData.statistics.viewCount) || 0;
    const videoCount = parseInt(channelData.statistics.videoCount) || 0;

    // Update channel in database
    await prisma.channel.update({
      where: { id: channel.id },
      data: {
        subscribers,
        thumbnail: channelData.snippet.thumbnails?.default?.url || channel.thumbnail,
        accessToken: credentials.access_token,
        refreshToken: credentials.refresh_token || refreshToken,
        tokenExpiresAt: credentials.expiry_date ? new Date(credentials.expiry_date) : null,
        lastRefreshedAt: new Date(),
        analytics: {
          viewCount,
          videoCount,
          subscriberCount: subscribers,
        },
      },
    });

    console.log(`[YouTube] Updated ${channel.channelName}: ${subscribers} subscribers`);
    return { subscribers, viewCount, videoCount };
  } catch (error) {
    console.error(`[YouTube] Error refreshing ${channel.channelName}:`, error.message);
    return null;
  }
}

/**
 * Refresh Instagram account analytics
 */
async function refreshInstagram(channel, prisma) {
  const { accessToken, channelId } = channel;

  if (!accessToken) {
    console.log(`[Instagram] No access token for ${channel.channelName}, skipping`);
    return null;
  }

  try {
    // Check if token needs refresh (Instagram long-lived tokens can be refreshed)
    let currentToken = accessToken;

    // Try to refresh the token if it's close to expiring
    if (channel.tokenExpiresAt) {
      const expiresIn = new Date(channel.tokenExpiresAt).getTime() - Date.now();
      // Refresh if expires in less than 7 days
      if (expiresIn < 7 * 24 * 60 * 60 * 1000) {
        try {
          const refreshRes = await fetch(
            `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${accessToken}`
          );
          const refreshData = await refreshRes.json();

          if (refreshData.access_token) {
            currentToken = refreshData.access_token;
            console.log(`[Instagram] Token refreshed for ${channel.channelName}`);
          }
        } catch (refreshErr) {
          console.log(`[Instagram] Token refresh failed, using existing token`);
        }
      }
    }

    // Fetch updated user data
    const response = await fetch(
      `https://graph.instagram.com/v24.0/me?fields=followers_count,media_count&access_token=${currentToken}`
    );
    const data = await response.json();

    if (data.error) {
      console.error(`[Instagram] API error for ${channel.channelName}:`, data.error.message);
      return null;
    }

    const followers = data.followers_count || 0;
    const mediaCount = data.media_count || 0;

    // Update channel in database
    await prisma.channel.update({
      where: { id: channel.id },
      data: {
        subscribers: followers,
        accessToken: currentToken,
        tokenExpiresAt: currentToken !== accessToken
          ? new Date(Date.now() + 60 * 24 * 60 * 60 * 1000) // 60 days
          : channel.tokenExpiresAt,
        lastRefreshedAt: new Date(),
        analytics: {
          followers,
          mediaCount,
        },
      },
    });

    console.log(`[Instagram] Updated ${channel.channelName}: ${followers} followers`);
    return { followers, mediaCount };
  } catch (error) {
    console.error(`[Instagram] Error refreshing ${channel.channelName}:`, error.message);
    return null;
  }
}

/**
 * Refresh TikTok account analytics
 */
async function refreshTikTok(channel, prisma) {
  const { accessToken, refreshToken, channelId } = channel;

  if (!refreshToken) {
    console.log(`[TikTok] No refresh token for ${channel.channelName}, skipping`);
    return null;
  }

  try {
    let currentToken = accessToken;
    let newRefreshToken = refreshToken;

    // Refresh token if expired or close to expiring
    const needsRefresh = !channel.tokenExpiresAt ||
      new Date(channel.tokenExpiresAt).getTime() < Date.now() + 60 * 60 * 1000; // 1 hour buffer

    if (needsRefresh) {
      const refreshRes = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_key: process.env.TIKTOK_CLIENT_KEY,
          client_secret: process.env.TIKTOK_CLIENT_SECRET,
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        }),
      });

      const refreshData = await refreshRes.json();

      if (refreshData.access_token) {
        currentToken = refreshData.access_token;
        newRefreshToken = refreshData.refresh_token || refreshToken;
        console.log(`[TikTok] Token refreshed for ${channel.channelName}`);
      } else {
        console.log(`[TikTok] Token refresh failed for ${channel.channelName}`);
        return null;
      }
    }

    // Fetch updated user data
    const fields = 'follower_count,following_count,likes_count,video_count';
    const response = await fetch(`https://open.tiktokapis.com/v2/user/info/?fields=${fields}`, {
      headers: { Authorization: `Bearer ${currentToken}` },
    });

    const data = await response.json();

    if (data.error?.code !== 'ok' || !data.data?.user) {
      console.error(`[TikTok] API error for ${channel.channelName}:`, data.error?.message);
      return null;
    }

    const user = data.data.user;
    const followers = user.follower_count || 0;

    // Update channel in database
    await prisma.channel.update({
      where: { id: channel.id },
      data: {
        subscribers: followers,
        accessToken: currentToken,
        refreshToken: newRefreshToken,
        tokenExpiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // ~24 hours
        lastRefreshedAt: new Date(),
        analytics: {
          followers,
          following: user.following_count || 0,
          likes: user.likes_count || 0,
          videoCount: user.video_count || 0,
        },
      },
    });

    console.log(`[TikTok] Updated ${channel.channelName}: ${followers} followers`);
    return { followers };
  } catch (error) {
    console.error(`[TikTok] Error refreshing ${channel.channelName}:`, error.message);
    return null;
  }
}

/**
 * Refresh Twitter account analytics
 */
async function refreshTwitter(channel, prisma) {
  const { accessToken, refreshToken, channelId } = channel;

  if (!refreshToken) {
    console.log(`[Twitter] No refresh token for ${channel.channelName}, skipping`);
    return null;
  }

  try {
    let currentToken = accessToken;

    // Twitter tokens expire in ~2 hours, always try to refresh
    const refreshRes = await fetch('https://api.twitter.com/2/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(
          `${process.env.TWITTER_CLIENT_ID}:${process.env.TWITTER_CLIENT_SECRET}`
        ).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
    });

    const refreshData = await refreshRes.json();

    if (refreshData.access_token) {
      currentToken = refreshData.access_token;
      console.log(`[Twitter] Token refreshed for ${channel.channelName}`);
    } else {
      console.log(`[Twitter] Token refresh failed for ${channel.channelName}, trying existing token`);
    }

    // Fetch updated user data
    const response = await fetch(
      `https://api.twitter.com/2/users/${channelId}?user.fields=public_metrics`,
      { headers: { Authorization: `Bearer ${currentToken}` } }
    );

    const data = await response.json();

    if (data.errors || !data.data) {
      console.error(`[Twitter] API error for ${channel.channelName}:`, data.errors?.[0]?.message);
      return null;
    }

    const metrics = data.data.public_metrics || {};
    const followers = metrics.followers_count || 0;

    // Update channel in database
    await prisma.channel.update({
      where: { id: channel.id },
      data: {
        subscribers: followers,
        accessToken: currentToken,
        refreshToken: refreshData.refresh_token || refreshToken,
        tokenExpiresAt: refreshData.expires_in
          ? new Date(Date.now() + refreshData.expires_in * 1000)
          : null,
        lastRefreshedAt: new Date(),
        analytics: {
          followers,
          following: metrics.following_count || 0,
          tweets: metrics.tweet_count || 0,
        },
      },
    });

    console.log(`[Twitter] Updated ${channel.channelName}: ${followers} followers`);
    return { followers };
  } catch (error) {
    console.error(`[Twitter] Error refreshing ${channel.channelName}:`, error.message);
    return null;
  }
}

/**
 * Refresh Facebook page analytics
 */
async function refreshFacebook(channel, prisma) {
  const { accessToken, channelId } = channel;

  if (!accessToken) {
    console.log(`[Facebook] No access token for ${channel.channelName}, skipping`);
    return null;
  }

  try {
    // Facebook page tokens don't expire if the user token was long-lived
    // Fetch updated page data
    const response = await fetch(
      `https://graph.facebook.com/v20.0/${channelId}?fields=fan_count,followers_count&access_token=${accessToken}`
    );

    const data = await response.json();

    if (data.error) {
      console.error(`[Facebook] API error for ${channel.channelName}:`, data.error.message);
      return null;
    }

    const followers = data.fan_count || data.followers_count || 0;

    // Update channel in database
    await prisma.channel.update({
      where: { id: channel.id },
      data: {
        subscribers: followers,
        lastRefreshedAt: new Date(),
        analytics: {
          fanCount: followers,
        },
      },
    });

    console.log(`[Facebook] Updated ${channel.channelName}: ${followers} followers`);
    return { followers };
  } catch (error) {
    console.error(`[Facebook] Error refreshing ${channel.channelName}:`, error.message);
    return null;
  }
}

/**
 * Refresh Twitch channel analytics
 */
async function refreshTwitch(channel, prisma) {
  const { accessToken, refreshToken, channelId } = channel;

  if (!refreshToken) {
    console.log(`[Twitch] No refresh token for ${channel.channelName}, skipping`);
    return null;
  }

  try {
    let currentToken = accessToken;

    // Twitch tokens expire in ~4 hours, refresh if needed
    const needsRefresh = !channel.tokenExpiresAt ||
      new Date(channel.tokenExpiresAt).getTime() < Date.now() + 30 * 60 * 1000; // 30 min buffer

    if (needsRefresh) {
      const refreshRes = await fetch('https://id.twitch.tv/oauth2/token', {
        method: 'POST',
        body: new URLSearchParams({
          client_id: process.env.TWITCH_CLIENT_ID,
          client_secret: process.env.TWITCH_CLIENT_SECRET,
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        }),
      });

      const refreshData = await refreshRes.json();

      if (refreshData.access_token) {
        currentToken = refreshData.access_token;
        console.log(`[Twitch] Token refreshed for ${channel.channelName}`);

        // Update tokens in database
        await prisma.channel.update({
          where: { id: channel.id },
          data: {
            accessToken: currentToken,
            refreshToken: refreshData.refresh_token || refreshToken,
            tokenExpiresAt: new Date(Date.now() + (refreshData.expires_in || 14400) * 1000),
            lastRefreshedAt: new Date(),
          },
        });
      } else {
        console.log(`[Twitch] Token refresh failed for ${channel.channelName}`);
      }
    }

    // Twitch doesn't provide subscriber count via public API
    // We can only update the lastRefreshedAt
    console.log(`[Twitch] Refreshed token for ${channel.channelName} (no public subscriber count)`);
    return { refreshed: true };
  } catch (error) {
    console.error(`[Twitch] Error refreshing ${channel.channelName}:`, error.message);
    return null;
  }
}

/**
 * Main function to refresh all channels
 */
async function refreshAllChannels(prisma) {
  console.log('\n========================================');
  console.log('[Analytics Refresh] Starting hourly refresh...');
  console.log(`[Analytics Refresh] Time: ${new Date().toISOString()}`);
  console.log('========================================\n');

  try {
    // Get all channels that have tokens stored
    const channels = await prisma.channel.findMany({
      where: {
        OR: [
          { accessToken: { not: null } },
          { refreshToken: { not: null } },
        ],
      },
      include: {
        user: {
          select: { id: true, name: true, type: true },
        },
      },
    });

    console.log(`[Analytics Refresh] Found ${channels.length} channels to refresh\n`);

    let successCount = 0;
    let errorCount = 0;

    for (const channel of channels) {
      // Add a small delay between API calls to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));

      let result = null;

      switch (channel.platform) {
        case 'YOUTUBE':
          result = await refreshYouTube(channel, prisma);
          break;
        case 'INSTAGRAM':
          result = await refreshInstagram(channel, prisma);
          break;
        case 'TIKTOK':
          result = await refreshTikTok(channel, prisma);
          break;
        case 'TWITTER':
          result = await refreshTwitter(channel, prisma);
          break;
        case 'FACEBOOK':
          result = await refreshFacebook(channel, prisma);
          break;
        case 'TWITCH':
          result = await refreshTwitch(channel, prisma);
          break;
        default:
          console.log(`[Analytics Refresh] Unknown platform: ${channel.platform}`);
      }

      if (result) {
        successCount++;
      } else {
        errorCount++;
      }
    }

    console.log('\n========================================');
    console.log(`[Analytics Refresh] Completed!`);
    console.log(`[Analytics Refresh] Success: ${successCount}, Errors: ${errorCount}`);
    console.log('========================================\n');

    return { success: successCount, errors: errorCount };
  } catch (error) {
    console.error('[Analytics Refresh] Fatal error:', error);
    return { success: 0, errors: -1, error: error.message };
  }
}

module.exports = {
  refreshAllChannels,
  refreshYouTube,
  refreshInstagram,
  refreshTikTok,
  refreshTwitter,
  refreshFacebook,
  refreshTwitch,
};
