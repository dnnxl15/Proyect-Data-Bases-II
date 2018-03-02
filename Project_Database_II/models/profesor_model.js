var mongoose = require('mongoose'),
                         Schema = mongoose.Schema;
                         
var profesorSchema = new Schema({
	name : {type : String, require : true},
	lastname : {type : String, require : true},
	username : {type : String, require : true, unique : true},
	password : {type : String, require : true},
	profesorID : {type : String, require : true, unique : true},
	cellPhone : {type : String, require : true, unique : true},
	email : {type : String, require : true, unique : true},
	university : [{
		universityName : {type : String, require : true},
		universitySchool : {type : String, require : true}
	}]
});

mongoose.model('Profesor', profesorSchema );