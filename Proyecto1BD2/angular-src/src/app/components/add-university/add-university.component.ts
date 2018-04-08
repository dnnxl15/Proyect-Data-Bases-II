import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';

import {Router} from '@angular/router';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent implements OnInit {

  nameUniversity: String;
  legaldentification: String;

  nameUniversityCarrer: String;
  carrerName: String;
  carrerCode: String;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onRegisterUniversity()
  {
    var university = JSON.stringify({
      nameUniversity : this.nameUniversity,
      legaldentification : this.legaldentification
    });

     this.authService.addUniversity(university).subscribe(data => {
       if(data.success){

        this.router.navigate(['/']);
        console.log(data);
      } else {
        
        this.router.navigate(['/']);
        console.log(data);
      }
    });
    }

    onRegisterCarrer()
  {
    var universityCarrer = JSON.stringify({
      nameUniversityCarrer : this.nameUniversityCarrer,
      carrerName : this.carrerName,    
      carrerCode:  this.carrerCode
    });

     this.authService.addUniversityCarrer(universityCarrer).subscribe(data => {
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
