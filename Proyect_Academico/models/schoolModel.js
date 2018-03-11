
const mongoose = require('mongoose');

const schoolSchema = mongoose.Schema(
{
	name : {type : String, require : true},
	course : [{
		courseID : {type : Number, unique : true},
		name : String,
		courseGroup : [{
			groupID : Number,
			groupNumber : Number,
			profesorID : String,
			schedule : [{
				day : [{
					start : Date,
					end : Date
				}]
			}], 
			student : [{
				studentID : String
			}]
		}]
	}]
});

const School = module.exports = mongoose.model('School', schoolSchema);

var arrayCourses = []
var arrayCourseGroups = []

module.exports.getCourseBySchool = function(name, callback){
	const query = {name: name}
	School.find(query, function(err, result){
		if(err)
		{
			console.log(err);
		}
		else {
			arrayCourses.push(result.name),
			console.log(arrayCourses);
		}
	})
}

module.exports.getGroupsByCourses = function(name, callback){
	const query = {name: course.name}
	School.find(query, function(err, result){
		if (err)
		{
			console.log(err);
		}
		else{
			arrayCourseGroups.push(result.course.courseGroup),
			console.log(arrayCourseGroups);
		}
	})
}