import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';

import {Router} from '@angular/router';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {
	nameSchool: String;

	courseID: Number;
	nameCourse: String;

	groupID: Number;
	groupNumber: Number;
	profesorID: String;

	start: Date;
	end: Date;


  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onAddCourse(){
    var schoolCourse = JSON.stringify({
      nameSchool : this.nameSchool,
      courseID : this.courseID,
      nameCourse : this.nameCourse
    
    });
     this.authService.addCourse(schoolCourse).subscribe(data => {
       if(data.success){

        this.router.navigate(['/']);
        console.log(data);
      } else {
        
        this.router.navigate(['/']);
        console.log(data);
      }
    });
    }

  

  onRegisterSchool(){
    var school = JSON.stringify({
      nameSchool: this.nameSchool
    
    });

    this.authService.registerSchool(school).subscribe(data => {
       if(data.success){

        this.router.navigate(['/']);
        console.log(data);
      } else {
        
        this.router.navigate(['/']);
        console.log(data);
      }
    });

}
}
