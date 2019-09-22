const DEFAULT_API_TIMEOUT = 500;

module.exports = {
  PORT: 3000,
  EMPLOYEE_API_URI: 'http://localhost:3000/api',
  EMPLOYEE_API_TIMEOUT: DEFAULT_API_TIMEOUT,
  DB: 'mongodb+srv://ramesh:ram@employee-service-db-sa5cc.mongodb.net/test',
  QUOTES_API_URI: 'https://ron-swanson-quotes.herokuapp.com/v2/quotes',
  QUOTES_API_TIMEOUT: DEFAULT_API_TIMEOUT,
  JOKES_API_URI: 'http://api.icndb.com/jokes/random',
  JOKES_API_TIMEOUT: DEFAULT_API_TIMEOUT,
};
