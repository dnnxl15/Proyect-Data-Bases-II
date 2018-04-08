import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';

import {Router} from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courseID: Number;
  nameCourse: String;

  nameSchool: String;

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
        
        this.router.navigate(['/add-course']);
        console.log(data);
      }
    });
  }

}
