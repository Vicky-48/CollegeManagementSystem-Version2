import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlacementComponent } from './placement/placement.component';
import { ContactUsComponent } from './contactUs/contactUs.component';
import { MenuComponent } from './menu/menu.component';
import { AdmissionComponent } from './admission/admission.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { StudentpageManuComponent } from './StudentpageManu/StudentpageManu.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { DepartmentComponent } from './department/department.component';
import { StudenthomeComponent } from './Studenthome/Studenthome.component';
import { MARKComponent } from './MARK/MARK.component';
import { ComplientsComponent } from './complients/complients.component';
import { StaffpagemenuComponent } from './staffpagemenu/staffpagemenu.component';
import { StaffhomeComponent } from './staffhome/staffhome.component';
import { StaffattendenceComponent } from './staffattendence/staffattendence.component';
import { StaffprofileComponent } from './staffprofile/staffprofile.component';
import { StudentattendenceviewComponent } from './studentattendenceview/studentattendenceview.component';
import { StudentcomplientsviewComponent } from './studentcomplientsview/studentcomplientsview.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ViewstaffattendenceComponent } from './viewstaffattendence/viewstaffattendence.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { UploadmarkComponent } from './uploadmark/uploadmark.component';
import { DepartmentchildComponent } from './departmentchild/departmentchild.component';
import { ContactformviewComponent } from './contactformview/contactformview.component';
import { StudentprofileComponent } from './Studentprofile/Studentprofile.component';
import { EditprofileComponent } from './Editprofile/Editprofile.component';
import { EditstaffprofileComponent } from './Editstaffprofile/Editstaffprofile.component';
import { StaffreplyComponent } from './Staffreply/Staffreply.component';
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";

@NgModule({
  declarations: [
    AppComponent,
    AdmissionComponent,
    ContactUsComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    PlacementComponent,
    RegisterComponent,
    LoginComponent,
      StudentpageManuComponent,
      AttendenceComponent,
      DepartmentComponent,
      StudenthomeComponent,
      MARKComponent,
      ComplientsComponent,
      StaffpagemenuComponent,
      StaffhomeComponent,
      StaffattendenceComponent,
      StaffprofileComponent,
      StudentattendenceviewComponent,
      StudentcomplientsviewComponent,
      AdminmenuComponent,
      AdminhomeComponent,
      ViewstaffattendenceComponent,
      AddstaffComponent,
      UploadmarkComponent,
      DepartmentComponent,
      DepartmentchildComponent,
      ContactformviewComponent,
      StudentprofileComponent,
      EditprofileComponent,
      StaffprofileComponent,
      EditstaffprofileComponent,
      StaffreplyComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
