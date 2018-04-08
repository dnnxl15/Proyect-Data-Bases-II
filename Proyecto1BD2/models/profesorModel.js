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

module.exports.addProfesor = function(newUser, callback){
      newUser.save(callback);
}

module.exports.getProfesorByUsername = function(username, callback){
  const query = {username: username}
  Profesor.findOne(query, callback);
}

module.exports.comparePassword = function(oldPassword, newPassword){
  if(oldPassword = newPassword){
  	return true;
  }
  else{
  	return false;
  }
}

function confirm(oldPassword, newPassword){
  if(oldPassword.equals(newPassword)){
  	return true;
  }
  else{
  	return false;
  }
}