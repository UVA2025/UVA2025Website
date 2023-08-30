/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["CONTENTFUL_ACCESS_TOKEN","CONTENTFUL_SPACE"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	CONTENTFUL_ACCESS_TOKEN
	CONTENTFUL_SPACE
Amplify Params - DO NOT EDIT */

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const contentful = require('contentful');

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE
});

/**********************
 * Example get method *
 **********************/

app.get('/events/:id', (req, res) => {
  const eventId = req.params.id; // Changed from req.params.eventId
  res.send(eventId);
  // client.getEntry(eventId)
  //   .then(response => {
  //     const event = {
  //       eventName: response.fields.eventName,
  //       content: response.fields.description.content,
  //       image: response.fields.image.fields,
  //       dateAndTime: response.fields.dateAndTime,
  //       id: response.sys.id
  //     };
  //     res.send(event);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.sendStatus(500); // Sending an error response
  //   });
});

app.get('/events/:id/*', function(req, res) {
  // Add your code here
  // res.json({success: 'get call succeed!', url: req.url});
  const eventId = req.params.id; // Changed from req.params.eventId
  res.send(eventId);
});

/****************************
* Example post method *
****************************/

app.post('/events/:id', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/events/:id/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/events/:id', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/events/:id/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/events/:id', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/events/:id/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
