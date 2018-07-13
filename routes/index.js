var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET Datenschutz. */
router.get('/datenschutz', function(req, res, next) {
  res.render('datenschutz', { title: 'Datenschutz' });
});

/* GET impressum. */
router.get('/impressum', function(req, res, next) {
  res.render('impressum', { title: 'Impressum' });
});

module.exports = router;
