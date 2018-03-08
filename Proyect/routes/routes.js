const express = require('express');
const router = express.Router();

const Student = require('../models/studentModel')

//retrieving data
router.get('/principal', (req, res, next)=>{
	Student.find(function(err, students){
		res.json(students);
	})
});

//add student
router.post('/Student', (req, res, next)=>{
	//logic to add student
	let newStudent = new Student({
		name: req.body.name,
		lastname: req.body.lastname,
		username: req.body.username,
		password: req.body.password,
		studentID: req.body.studentID,
		cellPhone: req.body.cellPhone,
		email: req.body.email,
		university.universityName: req.body.university.universityName,
		university.carrerName: req.body.university.carrerName
	});

	newStudent.save((err, student)=>{
		if(err)
		{
			res.json({msg:'Failed to add student'});
		}
		else{
			res.json({msg: 'Student added successfully'});
		}
	});
});

//add profesor
router.post('/registerProfesor', (req, res, next)=>{

});

router.delete('/Student/:id', (req, res, next)=>{
	Student.remove({_id: req.params.id}, function(err, result){
		if(err)
		{
			res.json(err);
		}
		else
		{
			res.json(result);
		}
	});
});

//add 

module.exports = router;