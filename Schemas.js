var Schema = require("mongoose").Schema;

var student = new Schema({
	name : {type : String, require : true},
	lastname : {type : String, require : true},
	identification : {type : String, require : true, unique : true},
	cellPhone : {type : String, require : true, unique : true},
	email : {type : String, require : true, unique : true},
	university : [{
		universityName : {type : String, require : true, unique : true},
		carrerName : {type : String, require : true}
	}]
});