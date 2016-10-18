require('dotenv').config();
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
<<<<<<< HEAD
=======
app.use(session({
  secret: process.env.SESSION_SECRET || 'coolsecret',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.alerts = req.flash();
  next();
});
>>>>>>> brian-finished

app.get('/', function(req, res) {
  res.render('index');
});

<<<<<<< HEAD
app.get('/profile', function(req, res) {
=======
app.get('/profile', isLoggedIn, function(req, res) {
>>>>>>> brian-finished
  res.render('profile');
});

app.use('/auth', require('./controllers/auth'));

app.use('/post', require('./controllers/post'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
