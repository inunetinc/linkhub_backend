const axios = require('axios');

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
const PAYSTACK_BASE_URL = 'https://api.paystack.co';

/**
 * Initialize a Paystack transaction
 * @param {Object} params
 * @param {string} params.email - Customer email
 * @param {number} params.amount - Amount in the smallest currency unit (kobo for NGN, cents for USD)
 * @param {string} params.reference - Unique transaction reference
 * @param {string} [params.currency] - Currency code (default: NGN)
 * @param {Object} [params.metadata] - Additional metadata
 * @param {string} [params.callback_url] - URL to redirect after payment
 * @returns {Promise<Object>} - Paystack initialization response
 */
async function initializeTransaction({ email, amount, reference, currency = 'NGN', metadata = {}, callback_url }) {
  try {
    const response = await axios.post(
      `${PAYSTACK_BASE_URL}/transaction/initialize`,
      {
        email,
        amount, // Amount in kobo/cents
        reference,
        currency,
        metadata,
        callback_url
      },
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Paystack initialize error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Failed to initialize payment');
  }
}

/**
 * Verify a Paystack transaction
 * @param {string} reference - Transaction reference
 * @returns {Promise<Object>} - Paystack verification response
 */
async function verifyTransaction(reference) {
  try {
    const response = await axios.get(
      `${PAYSTACK_BASE_URL}/transaction/verify/${encodeURIComponent(reference)}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Paystack verify error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Failed to verify payment');
  }
}

/**
 * Generate a unique transaction reference
 * @param {string} prefix - Prefix for the reference
 * @returns {string} - Unique reference
 */
function generateReference(prefix = 'LH') {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 8);
  return `${prefix}_${timestamp}_${randomPart}`.toUpperCase();
}

/**
 * Convert amount to kobo/cents (smallest currency unit)
 * @param {number} amount - Amount in main currency unit
 * @returns {number} - Amount in smallest unit
 */
function toSmallestUnit(amount) {
  return Math.round(amount * 100);
}

/**
 * Validate Paystack webhook signature
 * @param {string} body - Raw request body
 * @param {string} signature - X-Paystack-Signature header
 * @returns {boolean} - Whether signature is valid
 */
function validateWebhookSignature(body, signature) {
  const crypto = require('crypto');
  const hash = crypto
    .createHmac('sha512', PAYSTACK_SECRET_KEY)
    .update(body)
    .digest('hex');
  return hash === signature;
}

module.exports = {
  initializeTransaction,
  verifyTransaction,
  generateReference,
  toSmallestUnit,
  validateWebhookSignature
};
