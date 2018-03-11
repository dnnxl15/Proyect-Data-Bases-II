const mongoose = require('mongoose');

const universitySchema = mongoose.Schema(
{
	name : {type : String, require : true, unique : true},
	legalNumber : {type : String, require : true, unique : true},
	localization : [{
		latitude : {type : Number, require : true},
		longitude : {type : Number, require : true}
	}],
	carrer : [{
		carrerCode : String,
		carrerName : String,
		curriculum : [{
			curriculimID : Number,
			subject : [{
				subjectCode : {type : String, unique : true},
				name : String,
				requirement : [{
					requirementCode : String
				}],
				corequisite : [{
					corequisiteCode: String
				}],
				credit : Number
			}]
		}]
	}],
	school : [{
		schoolName : String
	}]
});

const University = module.exports = mongoose.model('University', universitySchema);

var arrayUniversity = []
var arraySubject = []

module.exports.getUniversityByLegalNumber = function(legalNumber, callback){
	const query = {legalNumber: legalNumber}
	University.find(query, function(err, result){
		if(err)
		{
			console.log(err);
		}
		else {
			arrayUniversity.push(result.name),
			console.log(arrayUniversity);
		}
	})
}

module.exports.getSubjectByCarrer = function(carrerName, callback){
	const query = {carrerName: carrer.carrerName}
	University.find(query, function(err, result){
		if(err)
		{
			console.log(err);
		}
		else {
			arraySubject.push(result.name),
			console.log(arraySubject);
		}
	})
}