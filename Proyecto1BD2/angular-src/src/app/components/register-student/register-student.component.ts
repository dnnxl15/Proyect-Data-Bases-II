import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';

import {Router} from '@angular/router';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
	name: String;
 	lastname: String;
	username: String;
	password: String;
	studentID: String;
	cellPhone: String;
	email: String;
	universityName: String;
	carrer: String;

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  ngOnInit() {
  }

onRegisterSubmit(){
    var user = JSON.stringify({
      name: this.name,
      lastname: this.lastname,
	    username: this.username,
	    password: this.password,
	    studentID: this.studentID,
	    cellPhone: this.cellPhone,
	    email: this.email,
	    universityName: this.universityName,
	    carrer: this.carrer
    });
    this.authService.registerStudent(user).subscribe(data => {
       if(data.success){

        this.router.navigate(['/login']);
        console.log(data);
      } else {
        
        this.router.navigate(['/register-student']);
        console.log(data);
      }
    });
  }
}
