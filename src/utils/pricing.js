/**
 * Pricing calculation utilities for LinkHub
 * Calculates per-platform pricing based on follower count and niche multipliers
 */

// Platform base rates per 1K followers/subscribers
const PLATFORM_RATES = {
  YOUTUBE: 0.05,      // $0.05 per 1K subscribers
  INSTAGRAM: 0.03,    // $0.03 per 1K followers
  TIKTOK: 0.04,       // $0.04 per 1K followers
  TWITTER: 0.02,      // $0.02 per 1K followers
  FACEBOOK: 0.025,    // $0.025 per 1K followers
  TWITCH: 0.06        // $0.06 per 1K followers
};

// Niche multipliers
const NICHE_MULTIPLIERS = {
  // Premium niches (1.5x)
  TECH: 1.5,
  FINANCE: 1.5,
  BUSINESS: 1.5,

  // Standard niches (1.0x)
  GAMING: 1.0,
  FASHION: 1.0,
  FITNESS: 1.0,
  EDUCATION: 1.0,
  HEALTH_WELLNESS: 1.0,
  SPORTS: 1.0,

  // Lifestyle niches (0.8x)
  BEAUTY: 0.8,
  FOOD: 0.8,
  TRAVEL: 0.8,
  MUSIC: 0.8,
  COMEDY: 0.8,
  LIFESTYLE: 0.8
};

// Minimum price per post (to avoid zero pricing for small creators)
const MINIMUM_PRICE = 50; // $50 minimum per post

/**
 * Calculate the average niche multiplier for a creator
 * @param {string[]} niches - Array of niche enums (e.g., ['TECH', 'GAMING'])
 * @returns {number} - Average multiplier
 */
function calculateNicheMultiplier(niches) {
  if (!niches || niches.length === 0) {
    return 1.0; // Default multiplier if no niche selected
  }

  const multipliers = niches.map(niche => NICHE_MULTIPLIERS[niche] || 1.0);
  const average = multipliers.reduce((sum, val) => sum + val, 0) / multipliers.length;

  return average;
}

/**
 * Calculate price for a single channel/platform
 * @param {string} platform - Platform enum (e.g., 'YOUTUBE')
 * @param {number} followerCount - Number of followers/subscribers
 * @param {string[]} niches - Array of creator's niches
 * @returns {number} - Calculated price in dollars
 */
function calculateChannelPrice(platform, followerCount, niches) {
  const platformRate = PLATFORM_RATES[platform] || 0.03; // Default to Instagram rate
  const nicheMultiplier = calculateNicheMultiplier(niches);

  // Calculate base price: (followers / 1000) * rate * niche multiplier
  const basePrice = (followerCount / 1000) * platformRate * nicheMultiplier;

  // Apply minimum price
  return Math.max(basePrice, MINIMUM_PRICE);
}

/**
 * Calculate prices for all of a creator's channels
 * @param {Array} channels - Array of channel objects with platform and subscribers
 * @param {string[]} niches - Array of creator's niches
 * @returns {Object} - Object with platform as key and price as value
 */
function calculateAllChannelPrices(channels, niches) {
  const prices = {};

  channels.forEach(channel => {
    const followerCount = channel.subscribers || 0;
    prices[channel.platform] = calculateChannelPrice(
      channel.platform,
      followerCount,
      niches
    );
  });

  return prices;
}

/**
 * Calculate total reach across all platforms
 * @param {Array} channels - Array of channel objects
 * @returns {number} - Total follower count
 */
function calculateTotalReach(channels) {
  return channels.reduce((total, channel) => {
    return total + (channel.subscribers || 0);
  }, 0);
}

/**
 * Get niche category (Premium, Standard, Lifestyle) for display
 * @param {string} niche - Niche enum
 * @returns {string} - Category name
 */
function getNicheCategory(niche) {
  const multiplier = NICHE_MULTIPLIERS[niche] || 1.0;

  if (multiplier >= 1.5) return 'Premium';
  if (multiplier >= 1.0) return 'Standard';
  return 'Lifestyle';
}

/**
 * Format niche enum to display name
 * @param {string} niche - Niche enum (e.g., 'HEALTH_WELLNESS')
 * @returns {string} - Display name (e.g., 'Health & Wellness')
 */
function formatNicheDisplay(niche) {
  const nicheMap = {
    TECH: 'Tech',
    GAMING: 'Gaming',
    BEAUTY: 'Beauty',
    FASHION: 'Fashion',
    FITNESS: 'Fitness',
    FINANCE: 'Finance',
    FOOD: 'Food',
    TRAVEL: 'Travel',
    LIFESTYLE: 'Lifestyle',
    EDUCATION: 'Education',
    SPORTS: 'Sports',
    MUSIC: 'Music',
    COMEDY: 'Comedy',
    BUSINESS: 'Business',
    HEALTH_WELLNESS: 'Health & Wellness'
  };

  return nicheMap[niche] || niche;
}

module.exports = {
  PLATFORM_RATES,
  NICHE_MULTIPLIERS,
  MINIMUM_PRICE,
  calculateNicheMultiplier,
  calculateChannelPrice,
  calculateAllChannelPrices,
  calculateTotalReach,
  getNicheCategory,
  formatNicheDisplay
};
