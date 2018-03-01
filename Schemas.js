var Schema = require("mongoose").Schema;

var student = new Schema({
	name : {type : String, require : true},
	lastname : {type : String, require : true},
	studentID : {type : String, require : true, unique : true},
	cellPhone : {type : String, require : true, unique : true},
	email : {type : String, require : true, unique : true},
	university : [{
		universityName : {type : String, require : true},
		carrerName : {type : String, require : true}
	}]
});

var profesor = new Schema({
	name : {type : String, require : true},
	lastname : {type : String, require : true},
	profesorID : {type : String, require : true, unique : true},
	cellPhone : {type : String, require : true, unique : true},
	email : {type : String, require : true, unique : true},
	university : [{
		universityName : {type : String, require : true},
		universitySchool : {type : String, require : true}
	}]
})

var university = new Schema({
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
				subjectCode : String,
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
})