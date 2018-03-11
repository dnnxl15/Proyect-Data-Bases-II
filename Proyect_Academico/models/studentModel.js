const mongoose = require('mongoose');
const University = require('../models/universityModel')

const studentSchema = mongoose.Schema({
	name : {type : String, require : true},
	lastname : {type : String, require : true},
	username : {type : String, require : true, unique : true},
	password : {type : String, require : true},
	studentID : {type : String, require : true, unique : true},
	cellPhone : {type : String, require : true, unique : true},
	email : {type : String, require : true, unique : true},
	universityName : {type : String, require : true},
	carrerName : {type : String, require : true}
});

const Student = module.exports = mongoose.model('Student', studentSchema);

var carrerCourses = []

module.exports.getCoursesByStudent = function(username, callback){
	const query = {username: username}
	Student.find(query, function(err, result){
		if (err)
		{
			console.log(err);
		}
		else {
			const carrer = {carrerN: result.carrerName}
			Student.find(carrerN, function(err, result){
				if (err) {
					console.log(err);
				}
				else {
					University.find(result, function(err, res2){
						if (err) {
							console.log(err);
						}
						else {
							carrerCourses.push(res2.carrer.subject),
							console.log(carrerCourses);
						}
					})
				}
			})
		}
	})
}