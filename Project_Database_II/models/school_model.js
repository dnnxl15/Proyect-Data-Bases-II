var mongoose = require('mongoose'),
                         Schema = mongoose.Schema;
                         
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