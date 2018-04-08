import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';

import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  lastname: String;
  username: String;
  password: String;
  profesorID: String;
  cellPhone: String;
  email: String;
  universityName: String;
  universitySchool: String;

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
	    profesorID: this.profesorID,
	    cellPhone: this.cellPhone,
	    email: this.email,
	    universityName: this.universityName,
	    universitySchool: this.universitySchool
    });
    this.authService.registerProfesor(user).subscribe(data => {
       if(data.success){

        this.router.navigate(['/login']);
        console.log(data);
      } else {
        
        this.router.navigate(['/register']);
        console.log(data);
      }
    });
  }
}
