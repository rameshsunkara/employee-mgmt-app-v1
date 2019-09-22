const axios = require('axios');
const {
  QUOTES_API_URI,
  QUOTES_API_TIMEOUT,
} = require('../config/application-properties');

const QUOTES = axios.create({
  baseURL: QUOTES_API_URI,
  timeout: QUOTES_API_TIMEOUT,
});

const getQuote = async () => {
  try {
    const response = await QUOTES.get('');

    if (Array.isArray(response.data)) {
      return response.data[0];
    }
    throw Error('Invalid Quotes format');
  } catch (error) {
    console.error('Unable to fetch Quotes, please check your proxy settings');
    throw error;
  }
};

module.exports = getQuote;
