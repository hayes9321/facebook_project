var express = require('express');
var db = require('../models');
var passport = require('../config/ppConfig');
var bodyParser = require("body-parser");
var router = express.Router();
var graph = require('fbgraph');
var request = require('request');
var fs = require("fs");
var helperFunction = require('../controllers/helperFunctions');

router.use(bodyParser.urlencoded({extended: false}));

// graph.setAccessToken(access_token);

//use a mathematical structure called a Markov chain to model the statistical 
//likelihood of a word in a title being followed by some other word in a title.

router.get('/results', function(req, res) {
  var url = "https://graph.facebook.com/v2.8/me/posts?access_token=" + req.user.facebookToken;
  var fileContents = fs.readFileSync('data.json');
  var data = JSON.parse(fileContents);
  

  request(url, function(error, response, body){
    if (!error && response.statusCode == 200) {
      var dataObj = JSON.parse(body);
   //    console.log(dataObj);
	  // res.render("results", {results: dataObj.data});

	  var postArray = dataObj.data.filter(function(post){
	  	return post.message;
	  });

    var results = new helperFunction.Map([]);

	  for(var i = 0; i < postArray.length; i++){
	  	var post = postArray[i].message;
      helperFunction.processMessage(results,post);
	  }
    res.send(results);
	  
    }
    else {
      console.log("error = " + error);
      console.log(response.statusCode);
    }
  });
});


module.exports = router;
