import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AttendenceService } from '../attendence.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {
  loggedInUser:any;
  date=new Date();
  time=new Date();
  constructor(private service:LoginService, private router:Router, private fb:FormBuilder,private user:AttendenceService ) {
// this.loggedInUser.subscribe((data:any)=>{
//   this.values="data"
//   alert(this.values)
// })
  }
  select:any="";

  validate(){
    var body={
      username:this.loggedInUser.firstname1,
      data1:this.date,
      time1:this.time,
      select1:this.select,
    }
    this.user.addattendenceInformation(body).subscribe(data=>{
      alert("Form submitted");
      // this.route.navigate(['/login']);
    })
}


  ngOnInit() {
    const sessionUser = sessionStorage.getItem('loggedInUser'); // <-- retrieve user details from session storage
    // this.values=this.loggedInUser.firstname1;
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

