import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AdmissionComponent } from './admission/admission.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { ComplientsComponent } from './complients/complients.component';
import { ContactUsComponent } from './contactUs/contactUs.component';
import { DepartmentComponent } from './department/department.component';
// import { DepartmentChildComponent } from './departmentChild/departmentChild.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MARKComponent } from './MARK/MARK.component';
import { MenuComponent } from './menu/menu.component';
import { PlacementComponent } from './placement/placement.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { StaffattendenceComponent } from './staffattendence/staffattendence.component';
import { StaffhomeComponent } from './staffhome/staffhome.component';
import { StaffpagemenuComponent } from './staffpagemenu/staffpagemenu.component';
import { StaffprofileComponent } from './staffprofile/staffprofile.component';
import { StudentattendenceviewComponent } from './studentattendenceview/studentattendenceview.component';
import { StudentcomplientsviewComponent } from './studentcomplientsview/studentcomplientsview.component';
import { StudenthomeComponent } from './Studenthome/Studenthome.component';
import { StudentpageManuComponent } from './StudentpageManu/StudentpageManu.component';
import { UploadmarkComponent } from './uploadmark/uploadmark.component';
import { ViewstaffattendenceComponent } from './viewstaffattendence/viewstaffattendence.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
  path:'home',
  component:HomeComponent
},
{
  path:'department',
  component:DepartmentComponent
},
{
  path:'admission',
  component:AdmissionComponent
},
{
  path:'placement',
  component:PlacementComponent
},
{
  path:'contact',
  component:ContactUsComponent
},
{
  path:'menu',
  component:MenuComponent
},
{
  path:"",
  component:HomeComponent
},
{
  path:'footer',
  component:FooterComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'StudentpageManu',
  component:StudentpageManuComponent
},
{
  path:'attendence',
  component:AttendenceComponent
},
{
  path:'Studenthome',
  component:StudenthomeComponent
},
{
  path:'MARK',
  component:MARKComponent
},
{
  path:'complients',
  component:ComplientsComponent
},
{
  path:'profile',
  component:ProfileComponent
},
{
  path:'staffpagemenu',
  component:StaffpagemenuComponent
},
{
  path:'staffhome',
  component:StaffhomeComponent
},
{
  path:'staffprofile',
  component:StaffprofileComponent
},
{
  path:'staffattendence',
  component:StaffattendenceComponent
},
{
  path:'studentattendenceview',
  component:StudentattendenceviewComponent
},
{
  path:'studentcomplientsview',
  component:StudentcomplientsviewComponent
},
{
  path:'adminmenu',
  component:AdminmenuComponent
},
{
  path:'adminhome',
  component:AdminhomeComponent
},
{
  path:'adminprofile',
  component:AdminprofileComponent
},
{
  path:'viewstaffattendence',
  component:ViewstaffattendenceComponent
},
{
  path:'addstaff',
  component:AddstaffComponent
},
{
  path:'uploadmark',
  component:UploadmarkComponent
},
// {
//   path:'departmentChild',
//   component:DepartmentChildComponent
// }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
