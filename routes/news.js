/*
var express = require('express');
var router = express.Router();


 GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with news');
});

module.exports = router;

*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Generic Title' });
});

module.exports = router;

