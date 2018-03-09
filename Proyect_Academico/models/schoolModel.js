
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