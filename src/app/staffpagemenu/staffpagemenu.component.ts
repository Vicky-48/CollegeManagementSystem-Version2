import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
// import { LoginService } from '../login.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-staffpagemenu',
  templateUrl: './staffpagemenu.component.html',
  styleUrls: ['./staffpagemenu.component.css']
})
export class StaffpagemenuComponent implements OnInit {

  loggedInStaff:any;
  constructor(private service:LoginService,private user:UserService, private router:Router) { }
  EditProfile(){
    this.user.getstudentdetails=this.loggedInStaff
    }
  ngOnInit() {
    const sessionUser = sessionStorage.getItem('loggedInStaff'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.loggedInStaff = JSON.parse(sessionUser);
    } else if (this.service.loggedInStaff !== null) {
      this.loggedInStaff = this.service.loggedInStaff;
    }
    // else {
    //   alert('You are Loggedout. Login to countinue');
    //   this.router.navigate(['/login']);
    // }
  }


}

