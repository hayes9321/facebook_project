var express = require('express');
var router = express.Router();

router.get('/signup', function(req, res) {
  res.render('auth/signup');
});

router.get('/login', function(req, res) {
  res.render('auth/login');
});

<<<<<<< HEAD
=======
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  failureFlash: 'Invalid username and/or password',
  successFlash: 'You have logged in'
}));

router.get('/facebook', passport.authenticate('facebook', {
  scope: ['public_profile', 'email']
}));

router.get('/callback/facebook', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  failureFlash: 'An error occurred, please try later',
  successFlash: 'You have logged in with Facebook'
}));

router.get('/logout', function(req, res) {
  req.logout();
  req.flash('success', 'You have logged out');
  res.redirect('/');
});

>>>>>>> brian-finished
module.exports = router;
