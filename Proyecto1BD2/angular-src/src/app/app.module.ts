import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import {AuthService} from './services/auth.service';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { StudentPageComponent } from './components/student-page/student-page.component';
import { AddSchoolComponent } from './components/add-school/add-school.component';
import { AddUniversityComponent } from './components/add-university/add-university.component';
import { UpdateProfesorComponent } from './components/update-profesor/update-profesor.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddCourseGroupComponent } from './components/add-course-group/add-course-group.component';
import { EnrollComponent } from './components/enroll/enroll.component';
import { GroupScheduleComponent } from './components/group-schedule/group-schedule.component';
import { GroupManagerComponent } from './components/group-manager/group-manager.component';
import { SubjectTopicManagerComponent } from './components/subject-topic-manager/subject-topic-manager.component';
import { GroupForumComponent } from './components/group-forum/group-forum.component';
import { GradeRegistryComponent } from './components/grade-registry/grade-registry.component';
import { GroupInboxComponent } from './components/group-inbox/group-inbox.component';
import { AttendanceRegistryComponent } from './components/attendance-registry/attendance-registry.component';




const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'profile', component: ProfileComponent},
  {path:'register-student', component: RegisterStudentComponent },
  {path:'add-school', component: AddSchoolComponent },
  {path:'add-university', component: AddUniversityComponent },
  {path:'add-course', component: AddCourseComponent },
  {path:'add-course-group', component: AddCourseGroupComponent },
  {path:'enroll', component: EnrollComponent },
  {path:'update-profesor', component: UpdateProfesorComponent },
  {path:'group-schedule', component: GroupScheduleComponent },
  {path:'group-manager', component: GroupManagerComponent },
  {path:'subject-topic-manager', component: SubjectTopicManagerComponent },
  {path:'group-forum', component: GroupForumComponent },
  {path:'grade-registry', component: GradeRegistryComponent },
  {path:'group-inbox', component: GroupInboxComponent },
  {path:'attendance-registry', component: AttendanceRegistryComponent }


]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    RegisterStudentComponent,
    StudentPageComponent,
    AddSchoolComponent,
    AddUniversityComponent,
    UpdateProfesorComponent,
    AddCourseComponent,
    AddCourseGroupComponent,
    EnrollComponent,
    GroupScheduleComponent,
    GroupManagerComponent,
    SubjectTopicManagerComponent,
    GroupForumComponent,
    GradeRegistryComponent,
    GroupInboxComponent,
    AttendanceRegistryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
