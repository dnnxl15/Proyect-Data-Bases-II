import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';

import {Router} from '@angular/router';

@Component({
  selector: 'app-group-manager',
  templateUrl: './group-manager.component.html',
  styleUrls: ['./group-manager.component.css']
})
export class GroupManagerComponent implements OnInit {
  nameCourse: String;
  groupNumber: Number;
  subjectTopic: String;
  subjectSubtopic: String;

  examValue: Number;
  projectValue: Number;
  quizValue: Number;
  homeworkValue: Number;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onAddTopic(){
  	var topics = JSON.stringify({
  		nameCourse : this.nameCourse,
  		groupNumber : this.groupNumber,
  		subjectTopic : this.subjectTopic,
  		subjectSubtopic : this.subjectSubtopic
  	});
  	this.authService.addTopic(topics).subscribe(data => {
        if(data.success){

          this.router.navigate(['/']);
          console.log(data);  
        } else {

          this.router.navigate(['/group-manager']);
          console.log(data);
        }
      });
  }

  onManageEval(){
  	var evaluation = JSON.stringify({
  		nameCourse : this.nameCourse,
  		examValue : this.examValue,
  		projectValue : this.projectValue,
  		quizValue : this.quizValue,
  		homeworkValue : this.homeworkValue
  	});

  	this.authService.saveEval(evaluation).subscribe(data => {
        if(data.success){

          this.router.navigate(['/']);
          console.log(data);  
        } else {

          this.router.navigate(['/group-manager']);
          console.log(data);
        }
      });
  }

}
