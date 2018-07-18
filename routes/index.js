var express = require('express');
var router = express.Router();
const _ = require('lodash');

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

/* GET Die Wohnungen. */
router.get('/cookie-policy', function(req, res, next) {
  res.render('cookie-policy', { title: 'Cookie-policy' });
});
// login router
const passwordHash = require('password-hash');

const authenticateUsers = [
{
  username: "demo",
  email: "demo@demo.com",
  password: "sha1$6ed08632$1$1996fdf8facb80cfd691d62f936b80dcb879dfde"
},
{
  username: "tmchut",
  email: "tmchut@yahoo.com",
  password: "sha1$7a66f1fd$1$b13c34479c112a772d57ec282203ee406ac1efa8"
}
];
//user: demo Pass: demo
//console.log(passwordHash.generate('demo'));
/* GET Login */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login'});
});
/* POST Login */
router.post('/login', function(req, res) {
  if (!req.body.username || !req.body.password) {
    req.flash('warning', 'field required!');
    res.render('login', { title: 'Login'});
  } else {
    if (_.isUndefined(_.find(authenticateUsers, function(o) { 
      return (o.username == req.body.username || o.email == req.body.username) && passwordHash.verify(req.body.password, o.password); 
    })) === true) {
      req.flash('warning', 'field not matched!');
      res.render('login', { title: 'Login'});
    } else {
      req.session.authenticated = true;
      req.session.username = _.find(authenticateUsers, function(o) { 
      return (o.username == req.body.username || o.email == req.body.username) && passwordHash.verify(req.body.password, o.password); 
    }).username;
      res.redirect('/bretonen');
    }
  }
});
/* GET Logout */
router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;
