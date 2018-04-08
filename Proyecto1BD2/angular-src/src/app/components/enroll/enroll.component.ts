import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';

import {Router} from '@angular/router';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
	studentID: String;
	courseName: String;
	groupNumber: Number;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onEnroll() {
  	var courseEnroll = JSON.stringify({
  		studentID : this.studentID,
  		courseName : this.courseName,
  		groupNumber : this.groupNumber
  	});
  	this.authService.enroll(courseEnroll).subscribe(data => {
        if(data.success){

          this.router.navigate(['/']);
          console.log(data);  
        } else {

          this.router.navigate(['/enroll']);
          console.log(data);
        }
      });
  }

}
