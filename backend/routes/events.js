const express = require('express');
const router = express.Router();
const client = require('../services/contentfulClient').client;

router.get('/', function(req, res, next) {
  // TODO: filter data, just send "fields" to frontend
  // TODO: figure out how to distinguish between past/current events
  client.getEntries()
    //JSON filtered
    .then(response => {const filteredItems = response.items.map(item => {
      return {
        eventName: item.fields.eventName,
        description: item.fields.description,
        image: item.fields.image,
        dateAndTime: item.fields.dateAndTime
      };
    });
    res.send(filteredItems);      //Filtered data
    //res.send(response.items);   //All data
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

module.exports = router;
