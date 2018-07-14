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

/* GET events. */
router.get('/events', function(req, res, next) {
  res.render('events', { title: 'Events' });
});

/* GET comming-soon. */
router.get('/comming-soon', function(req, res, next) {
  res.render('comming-soon', { title: 'Comming soon' });
});

/* GET projekt. */
router.get('/projekt', function(req, res, next) {
  res.render('projekt', { title: 'Unsere Projekt' });
});

/* GET baubeschreibung. */
router.get('/baubeschreibung', function(req, res, next) {
  res.render('baubeschreibung', { title: 'Baubeschreibung' });
});

module.exports = router;
