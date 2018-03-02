var mongoose = require('mongoose'),
                         Schema = mongoose.Schema;
                         
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

mongoose.model('University', universitySchema );