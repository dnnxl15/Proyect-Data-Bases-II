const express = require('express');
const router = express.Router();

const Student = require('../models/studentModel')
const Profesor = require('../models/profesorModel')
const School = require('../models/schoolModel')
const University = require('../models/universityModel')

//----------------------
// Students 
//----------------------

//Description: Retrieving data
//Author: Danny Xie Li

router.get('/principal/student', (req, res, next)=>{
	Student.find(function(err, students){
		res.json(students);
	})
});

//Description: Buscar por id estudiante
//Author: Danny Xie Li

router.get('/principal/main/:id', (req, res, next)=>{
	Student.find({studentID: req.params.id},function(err, students){
		res.json(students);
	})
});

//Description: Add student
//Author: Danny Xie Li

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
		universityName: req.body.universityName,
		carrerName: req.body.carrerName
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

// Description: Delete a student by ID
// Author: Johan Torres

router.delete('/principal/main/:id', (req, res, next)=>{
	Student.remove({studentID: req.params.id}, function(err, result){
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

// Description: Update student details
// Author: Johan Torres

router.put('/principal/main/:id', (req, res, next)=>{
	Student.findOneAndUpdate({ studentID: req.params.id }, {
		$set: {
			name: req.body.name,
			lastname: req.body.lastname,
			username: req.body.username,
			password: req.body.password,
			cellPhone: req.body.cellPhone,
			email: req.body.email,
			universityName: req.body.universityName,
			carrerName: req.body.carrerName
		}
	},
	function(err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log("Update successful");
		}
	});
});

//----------------------
// Profesor 
//----------------------

//Description: Buscar por id profesor
//Author: Danny Xie Li

router.get('/principal/main/:id', (req, res, next)=>{
	Profesor.find({profesorID: req.params.id},function(err, profesors){
		res.json(profesors);
	})
});

//Description: retrieving data profesor
//Author: Danny Xie Li

router.get('/principal/profesor', (req, res, next)=>{
	Profesor.find(function(err, profesors){
		res.json(profesors);
	})
});

//Description: Add profesor
//Author: Danny Xie Li

router.post('/Profesor', (req, res, next)=>{
	//logic to add student
	let newProfesor = new Profesor({
		name: req.body.name,
		lastname: req.body.lastname,
		username: req.body.username,
		password: req.body.password,
		profesorID: req.body.profesorID,
		cellPhone: req.body.cellPhone,
		email: req.body.email,
		universityName: req.body.universityName,
		universitySchool: req.body.universitySchool
	});

	newProfesor.save((err, student)=>{
		if(err)
		{
			res.json({msg:'Failed to add profesor'});
		}
		else{
			res.json({msg: 'Profesor added successfully'});
		}
	});
});

// Description: Delete a profesor by ID
// Author: Johan Torres

router.delete('/principal/main/:id', (req, res, next)=>{
	Profesor.remove({profesorID: req.params.id}, function(err, result){
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

// Description: Update profesor details
// Author: Johan Torres

router.put('/principal/main/:id', (req, res, next)=>{
	Profesor.findOneAndUpdate({ profesorID: req.params.id }, {
		$set: {
			name: req.body.name,
			lastname: req.body.lastname,
			username: req.body.username,
			password: req.body.password,
			cellPhone: req.body.cellPhone,
			email: req.body.email,
			universityName: req.body.universityName,
			universitySchool: req.body.universitySchool
		}
	},
	function(err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log("Update successful");
		}
	});
});

//----------------------
// School 
//----------------------

//Description: Add school
//Author: Danny Xie Li

router.post('/School', (req, res, next)=>{
	//logic to add student
	let newSchool = new School({
		name: req.body.name
	});

	newSchool.save((err, school)=>{
		if(err)
		{
			res.json({msg:'Failed to add school'});
		}
		else{
			res.json({msg: 'School added successfully'});
		}
	});
});

//Description: Retrieving all the data school
//Author: Danny Xie Li

router.get('/principal/school', (req, res, next)=>{
	School.find(function(err, schools){
		res.json(schools);
	})
});

//Description: Buscar por el nombre de la escuela
//Author: Danny Xie Li

router.get('/principal/main/school/:name', (req, res, next)=>{
	School.find({name: req.params.name},function(err, schools){
		res.json(schools);
	})
});

// Description: Delete a school by ID
// Author: Johan Torres

router.delete('/principal/main/school/:name', (req, res, next)=>{
	School.remove({name: req.params.name}, function(err, result){
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

// Description: Update school details
// Author: Johan Torres

router.put('/principal/main/school/:id', (req, res, next)=>{
	School.findOneAndUpdate({ _id: req.params.id }, {
		$set: {
			name: req.body.name
		}
	},
	function(err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log("Update successful");
		}
	});
});

//----------------------
// University 
//----------------------

//Description: Retrieving all the university
//Author: Danny Xie Li

router.get('/principal/university', (req, res, next)=>{
	University.find(function(err, universitys){
		res.json(universitys);
	})
});

//Description: Add school
//Author: Danny Xie Li
/////////////////////////////////////

router.post('/University', (req, res, next)=>{
	//logic to add student
	let newUniversity = new University({
		name: req.body.name,
		legalNumber: req.body.legalNumber
	});

	newUniversity.save((err, school)=>{
		if(err)
		{
			res.json({msg:'Failed to add university'});
		}
		else{
			res.json({msg: 'University added successfully'});
		}
	});
});

// Description: Delete a university
// Author: Johan Torres

router.delete('/principal/main/university/:name', (req, res, next)=>{
	University.remove({name: req.params.name}, function(err, result){
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

// Description: Update university details
// Author: Johan Torres

router.put('/principal/main/university/:id', (req, res, next)=>{
	University.findOneAndUpdate({ _id: req.params.id }, {
		$set: {
			name: req.body.name,
			legalNumber: req.body.legalNumber
		}
	},
	function(err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log("Update successful");
		}
	});
});

/// ADD SCHOOLS TO UNIVERSITY ///

// Description: Add schools to a university
// Author: Johan Torres

router.put('/principal/main/university/:name', (req, res, next)=>{
	University.findOneAndUpdate({name: req.params.name}, {
		$set: {
			"school.schoolName": req.body.school.schoolName
		}
	},
	function(err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log("Update successful");
		}
	});
});

/// ADD CAREERS TO UNIVERSITY ///

// Description: Add careers to a university
// Author: Johan Torres

router.put('/principal/main/university/:name', (req, res, next)=>{
	University.findOneAndUpdate({name: req.params.name}, {
		$set: {
			"carrer.carrerCode": req.body.carrer.carrerCode,
			"carrer.carrerName": req.body.carrer.carrerName,
			"carrer.curriculum.curriculimID": req.body.carrer.curriculum.curriculimID,
			"carrer.curriculum.subject.subjectCode": req.body.carrer.curriculum.subject.subjectCode,
			"carrer.curriculum.subject.name": req.body.carrer.curriculum.subject.name,
			"carrer.curriculum.subject.requirement.requirementCode": req.body.carrer.curriculum.subject.requirement.requirementCode,
			"carrer.curriculum.subject.corequisite.corequisiteCode": req.body.carrer.curriculum.subject.corequisite.corequisiteCode,
			"carrer.curriculum.subject.credit": req.body.carrer.curriculum.subject.credit
		}
	},
	function(err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log("Update successful");
		}
	});
});


/// ADD COURSES TO SCHOOL ///

// Description: Add courses to a school
// Author: Johan Torres

router.put('/principal/main/school/:name', (req, res, next)=>{
	School.findOneAndUpdate({name: req.params.name}, {
		$set: {
			"course.courseID": req.body.course.courseID,
			"course.name": req.body.course.name
		}
	},
	function(err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log("Update successful");
		}
	});
});


/// ADD GROUPS TO A COURSE ///

// Description: Add groups to a course
// Author: Johan Torres

router.put('/principal/main/school/:name', (req, res, next)=>{
	School.findOneAndUpdate({"course.name": req.params.name}, {
		$set: {
			"course.courseGroup.groupID": req.body.course.courseGroup.groupID,
			"course.courseGroup.groupNumber": req.body.course.courseGroup.groupNumber,
			"course.courseGroup.profesorID": req.body.course.courseGroup.profesorID,
			"course.courseGroup.schedule.day.start": req.body.course.courseGroup.schedule.day.start,
			"course.courseGroup.schedule.day.end": req.body.course.courseGroup.schedule.day.end
		}
	},
	function(err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log("Update successful");
		}
	});
});

module.exports = router;