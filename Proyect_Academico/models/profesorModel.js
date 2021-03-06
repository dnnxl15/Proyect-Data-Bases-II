const mongoose = require('mongoose');

const profesorSchema = mongoose.Schema(
{
		name : {type : String, require : true},
		lastname : {type : String, require : true},
		username : {type : String, require : true, unique : true},
		password : {type : String, require : true},
		profesorID : {type : String, require : true, unique : true},
		cellPhone : {type : String, require : true, unique : true},
		email : {type : String, require : true, unique : true},
		universityName : {type : String, require : true},
		universitySchool : {type : String, require : true}
});

const Profesor = module.exports = mongoose.model('Profesor', profesorSchema);

arrayProfesor = []

module.exports.getProfesorBySchool = function(universitySchool, callback){
	const query = {universitySchool: universitySchool}
	Profesor.find(query, function(err, result){
		if(err)
		{
			console.log(err);
		}
		else {
			arrayProfesor.push(result.name),
			console.log(arrayProfesor);
		}
	})
}