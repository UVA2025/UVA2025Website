const express = require('express');
const router = express.Router();
const client = require('../services/contentfulClient').client;

router.get('/', function(req, res, next) {
  // TODO: figure out how to distinguish between past/current events
  client.getEntries()
    .then(response => {const filteredItems = response.items.map(item => {
      return {
        eventName: item.fields.eventName,
        content: item.fields.description.content,
        image: item.fields.image.fields,
        dateAndTime: item.fields.dateAndTime
      };
    });
    res.send(filteredItems);
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

module.exports = router;
