const mongoose = require('mongoonse');

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