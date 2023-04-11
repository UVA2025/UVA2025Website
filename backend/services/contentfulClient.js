const contentful = require('contentful');
require('dotenv').config();

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE
});

exports.client = client;
