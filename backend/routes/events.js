const express = require('express');
const router = express.Router();
const client = require('../services/contentfulClient').client;

router.get('/', function(req, res, next) {
  client.getEntries()
    .then((response) => res.send(response.items))
    .catch(console.error);
});

module.exports = router;
