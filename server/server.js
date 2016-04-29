var express = require('express');
var app = module.exports = express();

var bodyParser = require('body-parser');
var morgan = require('morgan');
var logger = require('./config/logger.js');

/*
  Set up routers for the different APIs
*/
// var someRouter = require(./routers/someRouter.js)

// configuration variables for server port and mongodb URI
var port = process.env.PORT || 4443;

app.use(require('morgan')('combined', { 'stream': logger.stream }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(__dirname + '/../client'));

/*
   Middleware to configure routes for each api
*/
//app.use('/api/some', someRouter);

app.listen(port, function() {
   console.log('Kinectsit API server listening on port: ', port);
});