require('dotenv').config();

const config = {
  PORT: process.env.PORT,
  SSL_STORE_ID: process.env.SSL_STORE_ID,
  SSL_STORE_PASSWORD: process.env.SSL_STORE_PASSWORD,
}

module.exports = config;