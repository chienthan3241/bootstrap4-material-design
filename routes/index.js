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

/* GET lageplan. */
router.get('/lageplan', function(req, res, next) {
  res.render('lageplan', { title: 'Lageplan' });
});

/* GET gesamtansicht. */
router.get('/gesamtansicht', function(req, res, next) {
  res.render('gesamtansicht', { title: 'Gesamtansicht' });
});

/* GET Die Wohnungen. */
router.get('/wohnungen', function(req, res, next) {
  res.render('wohnungen', { title: 'Die Wohnungen' });
});

/* GET Die Wohnungen. */
router.get('/kontakt', function(req, res, next) {
  res.render('kontakt', { title: 'Kontakt' });
});

module.exports = router;
