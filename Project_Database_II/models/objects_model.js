var mongoose = require('mongoose'),
                         Schema = mongoose.Schema;

var administratorSchema = new Schema({
	name : {type : String, require : true},
	lastname : {type : String, require : true},
	username : {type : String, require : true, unique : true},
	password : {type : String,, require : true},
	admiID : {type : String, require : true, unique : true},
	cellPhone : {type : String, require : true, unique : true},
	email : {type : String, require : true, unique : true}
});

mongoose.model('Administrator', administratorSchema );

var studentSchema = new Schema({
	name : {type : String, require : true},
	lastname : {type : String, require : true},
	username : {type : String, require : true, unique : true},
	password : {type : String,, require : true},
	studentID : {type : String, require : true, unique : true},
	cellPhone : {type : String, require : true, unique : true},
	email : {type : String, require : true, unique : true},
	university : [{
		universityName : {type : String, require : true},
		carrerName : {type : String, require : true}
	}]
});

mongoose.model('Student', studentSchema );

var profesorSchema = new Schema({
	name : {type : String, require : true},
	lastname : {type : String, require : true},
	username : {type : String, require : true, unique : true},
	password : {type : String,, require : true},
	profesorID : {type : String, require : true, unique : true},
	cellPhone : {type : String, require : true, unique : true},
	email : {type : String, require : true, unique : true},
	university : [{
		universityName : {type : String, require : true},
		universitySchool : {type : String, require : true}
	}]
});

mongoose.model('Profesor', profesorSchema );

var universitySchema = new Schema({
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
				subjectCode : {type : String, unique : true}
				name : String,
				requirement : [{
					requirementCode : String
				}],
				corequisite : [{
					corequisiteCode
				}],
				credit : Number
			}]
		}]
	}],
	school : [{
		schoolName : String
	}]
});

mongoose.model('University', universitySchema );

var schoolSchema = new Schema({
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
mongoose.model('School', schoolSchema);