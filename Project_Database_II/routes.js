var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('Home page');
});

// About page route.
router.get('/signUp/administrator', function (req, res) {
  res.send('Sign up administrator');
});

router.get('/signUp/student', function (req, res) {
  res.send('Sign up student');
});

router.get('/signUp/profesor', function (req, res) {
  res.send('Sign up profesor');
});

router.get('/signUp/student', function (req, res) {
  res.send('Sign up student');
});

module.exports = router;