const express = require('express');
const router = express.Router();
const client = require('../services/contentfulClient').client;

router.get('/', function(req, res, next) {
  // TODO: figure out how to distinguish between past/current events
  client.getEntries()
    .then(response => {const filteredItems = response.items.map(item => {
      console.log("response", response);
      return {
        eventName: item.fields.eventName,
        content: item.fields.description.content,
        image: item.fields.image.fields,
        dateAndTime: item.fields.dateAndTime,
        id: item.sys.id
      };
    });
    console.log("filteredItems", filteredItems);
    res.send(filteredItems);
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get('/:eventId', function(req, res, next) {
  const eventId = req.params.eventId;
  console.log("HELLO");
  client.getEntry(eventId)
    .then(response => {
      const event = {
        eventName: response.fields.eventName,
        content: response.fields.description.content,
        image: response.fields.image.fields,
        dateAndTime: response.fields.dateAndTime,
        id: response.sys.id
      };
      res.send(event);
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

module.exports = router;
