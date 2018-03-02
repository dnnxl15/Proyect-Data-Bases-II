var express = require('express');
module.exports = function(app){
	var student_controller = require('./controllers/users_controller');
	app.use('/static', express.static('./static')).
		use('/lib', express.static('../lib'));

/**
// Home page route.
app.get('/', function (req, res) {
  res.send('Home page');
});

// About page route.
app.get('/signUp/administrator', function (req, res) {
  res.send('Sign up administrator');
});

app.get('/signUp/student', function (req, res) {
  res.send('Sign up student');
});

app.get('/signUp/profesor', function (req, res) {
  res.send('Sign up profesor');
});

app.get('/signUp/student', function (req, res) {
  res.send('Sign up student');
});**/

app.post('/signup/student', student_controller.student_signUp);

}