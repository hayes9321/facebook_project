var express = require('express');
var db = require('../models');
var passport = require('../config/ppConfig');
var router = express.Router();
var graph = require('fbgraph');
var request = require('request');

// graph.setAccessToken(access_token);

router.get('/', function(req, res) {
  request('http://www.facebook.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});
//GET serve an html form(click a button to generate post)

//POST create a

module.exports = router;
