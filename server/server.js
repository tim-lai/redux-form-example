process.env.NODE_ENV = process.env.NODE_ENV||'development';
console.log('currently within the ' + process.env.NODE_ENV + ' node environment');

var express = require('express');
var React = require('react');
var Router = require('react-router');
var path = require('path');

//requirements for webpack middleware
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('./../webpack.config.js');
var compiler = webpack(webpackConfig);

//authentication requirements
// var passport = require('passport');
// var session = require('express-session');
// var GitHubStrategy = require('passport-github2').Strategy;


var bodyParser  = require('body-parser');
var app = express();

//database connection
// var db = require('./database/dbconfig.js');

//build routers
// app.use(bodyParser.json());
// app.use(session({ secret: 'super secret' }));
// app.use(passport.initialize());
// app.use(passport.session());

//if the user navigates to the home page
app.get('/', function(req, res) {
  //if logged in, redirect to profile page
  // if(req.user) {
  //   res.redirect('/profile');
  // } 
  //otherwise, send to landing page
  // else {
    res.sendFile(path.resolve(__dirname, '..', 'index.html'));
  // }
})

//the static middleware is not used at the moment because of the redirect immediately above
app.use(express.static(path.join(__dirname,'/../')));


//routes user to login page
app.get('/login', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'));
})

//routes user to create account page
app.get('/createaccount', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'));
})

//routes user to profile page
app.get('/profile', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'));
//   if(req.user) {
//     res.sendFile(path.resolve(__dirname, '..', 'index.html'));
//   } else {
//     res.redirect('/')
//   }
})

//use webpack Middleware to build index.html script
app.use(webpackMiddleware(compiler));



app.listen(8080);
module.exports = app;
