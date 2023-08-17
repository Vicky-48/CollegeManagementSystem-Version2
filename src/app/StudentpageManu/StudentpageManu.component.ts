import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-StudentpageManu',
  templateUrl: './StudentpageManu.component.html',
  styleUrls: ['./StudentpageManu.component.css']
})
export class StudentpageManuComponent implements OnInit {
  loggedInUser:any;
  constructor(private service:LoginService,private user:UserService, private router:Router) { }
  EditProfile(){
    this.user.getstudentdetails=this.loggedInUser
    }
  ngOnInit() {
    const sessionUser = sessionStorage.getItem('loggedInUser'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.loggedInUser = JSON.parse(sessionUser);
    } else if (this.service.loggedInUser !== null) {
      this.loggedInUser = this.service.loggedInUser;
    } else {
      alert('You are Loggedout. Login to countinue');
      this.router.navigate(['/login']);
    }
  }

}
