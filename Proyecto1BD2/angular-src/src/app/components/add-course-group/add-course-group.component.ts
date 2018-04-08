import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';

import {Router} from '@angular/router';

@Component({
  selector: 'app-add-course-group',
  templateUrl: './add-course-group.component.html',
  styleUrls: ['./add-course-group.component.css']
})
export class AddCourseGroupComponent implements OnInit {
	nameCourse: String;

	groupID: Number;
	groupNumber: Number;
	profesorID: String;

	courseStart: Date;
	courseEnd: Date;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onAddGroup(){
    var courseGroup = JSON.stringify({
      nameCourse : this.nameCourse,
      groupID : this.groupID,
      groupNumber : this.groupNumber,
      profesorID : this.profesorID,
      courseStart : this.courseStart,
      courseEnd : this.courseEnd
    });
      this.authService.addGroup(courseGroup).subscribe(data => {
        if(data.success){

          this.router.navigate(['/']);
          console.log(data);  
        } else {

          this.router.navigate(['/add-course-group']);
          console.log(data);
        }
      });
  }
}
