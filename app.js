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

// Setup route
var setup = require('./config/setup').create;
app.get('/api/setup', setup);

// Auth route
var authRoute = require('./controllers/AuthController').create;
app.post('/api/auth', authRoute);

// Job form route
var formRoute = require('./controllers/FormController').create;
app.post('/api/form', formRoute);

// Load routes
require('./config/boot')(app);

module.exports = app;
