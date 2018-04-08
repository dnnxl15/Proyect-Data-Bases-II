import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
	authToken: any;
	user: any;
  school:any;
  course:any;
  courseGroup:any;
  university:any;
  universityCarrer:any;
  carrerSubject:any;
  courseEnroll:any;
  topics:any;
  evaluation:any;


  constructor(private http:Http) { }

  	registerProfesor(user)
  	{
  		let headers = new Headers({'Content-Type':'application/json'});
  		return this.http.post('http://localhost:3000/api/Profesor', user, {headers: headers}).map(res => res.json());
  	}

	registerStudent(user)
  	{
  		let headers = new Headers({'Content-Type':'application/json'});
  		return this.http.post('http://localhost:3000/api/Student', user, {headers: headers}).map(res => res.json());
  	}

    authenticateUser(user)
    {
      let headers = new Headers({'Content-Type':'application/json'});
      return this.http.post('http://localhost:3000/api/authenticate', user, {headers: headers}).map(res => res.json());
    }

    registerSchool(school)
    {
      let headers = new Headers({'Content-Type':'application/json'});
      return this.http.post('http://localhost:3000/api/school', school, {headers: headers}).map(res => res.json());
    }

    addCourse(course)
    {
      let headers = new Headers({'Content-Type':'application/json'});
      return this.http.post('http://localhost:3000/api/school/course', course, {headers: headers}).map(res => res.json());
    }

    addGroup(courseGroup)
    {
      let headers = new Headers({'Content-Type':'application/json'});
      return this.http.post('http://localhost:3000/api/school/course/group', courseGroup, {headers: headers}).map(res => res.json());
    }

     addUniversity(university)
    {
      let headers = new Headers({'Content-Type':'application/json'});
      return this.http.post('http://localhost:3000/api/University', university, {headers: headers}).map(res => res.json());
    }

     addUniversityCarrer(universityCarrer)
    {
      let headers = new Headers({'Content-Type':'application/json'});
      return this.http.post('http://localhost:3000/api/University/addCarrer', universityCarrer, {headers: headers}).map(res => res.json());
    }

    addCarrerSubject(carrerSubject)
    {
      let headers = new Headers({'Content-Type':'application/json'});
      return this.http.post('http://localhost:3000/api/University/addSubject', carrerSubject, {headers: headers}).map(res => res.json());
    }
    enroll(courseEnroll)
    {
      let headers = new Headers({'Content-Type':'application/json'});
      return this.http.post('http://localhost:3000/api/school/course/group/students', courseEnroll, {headers: headers}).map(res => res.json());
    }
    addTopic(topics)
    {
      let headers = new Headers({'Content-Type':'application/json'});
      return this.http.post('http://localhost:3000/api/University/subjects/topics', topics, {headers: headers}).map(res => res.json());
    }
    saveEval(evaluation)
    {
      let headers = new Headers({'Content-Type':'application/json'});
      return this.http.post('http://localhost:3000/api/school/course/group/eval', evaluation, {headers: headers}).map(res => res.json());
    }     
}