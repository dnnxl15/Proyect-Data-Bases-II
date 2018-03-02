var crypto = require('crypto');
var mongoose = require('mongoose');
	Student = mongoose.model('Student');

function hashPW(pwd){
	return crypto.createHash('sha256').update(pwd).
		digest('base64').toString();
}

exports.student_signUp = function(req, res) {
	var student = new Student({name: req.body.name})
	student.set('lastname', req.body.lastname);
	student.set('username', req.body.username);
	student.set('password', req.body.password);
	student.set('studentID', req.body.studentID);
	student.set('cellPhone', req.body.cellPhone);
	student.set('email', req.body.email);
	student.set('universityName', req.body.university.universityName);
	student.set('carrerName', req.body.university.carrerName);
	student.save(function(err){
		if(err){
			res.session.error = err;
			res.redirect('/signup/student');
		}
		else{
			req.
		}
	})
    res.send('NOT IMPLEMENTED: sign signUp');
};


