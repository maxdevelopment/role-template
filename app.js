var logger = require('morgan');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var auth = require("./config/auth.js")();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(auth.initialize());

// Logs
app.use(logger('dev'));

// Static content
app.use(express.static(path.join(__dirname, 'public')));

// Auth route
var authRoute = require('./controllers/AuthController').create;
app.post('/api/auth', authRoute);

// Load routes
require('./config/boot')(app);

module.exports = app;
