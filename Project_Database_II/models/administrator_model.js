var mongoose = require('mongoose'),
                         Schema = mongoose.Schema;

var administratorSchema = new Schema({
	name : {type : String, require : true},
	lastname : {type : String, require : true},
	username : {type : String, require : true, unique : true},
	password : {type : String, require : true},
	admiID : {type : String, require : true, unique : true},
	cellPhone : {type : String, require : true, unique : true},
	email : {type : String, require : true, unique : true}
});

mongoose.model('Administrator', administratorSchema );