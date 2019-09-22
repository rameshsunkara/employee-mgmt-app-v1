const axios = require('axios');
const {
  JOKES_API_URI,
  JOKES_API_TIMEOUT,
} = require('../config/application-properties');

const JOKES = axios.create({
  baseURL: JOKES_API_URI,
  timeout: JOKES_API_TIMEOUT,
});

const getJoke = async () => {
  try {
    const response = await JOKES.get('');

    if (
      response &&
      response.data &&
      response.data.value &&
      response.data.value.joke
    ) {
      return response.data.value.joke;
    }

    throw Error('Invalid Jokes Data');
  } catch (error) {
    console.error('Unable to fetch jokes, please check your proxy settings');
    throw error;
  }
};

module.exports = getJoke;
