import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { StaffattendenceService } from '../staffattendence.service';

@Component({
  selector: 'app-staffattendence',
  templateUrl: './staffattendence.component.html',
  styleUrls: ['./staffattendence.component.css']
})
export class StaffattendenceComponent implements OnInit {
  loggedInStaff:any;
  date=new Date().toLocaleDateString();
  time=new Date().toLocaleTimeString();
  constructor(private service:LoginService, private router:Router, private fb:FormBuilder,private user:StaffattendenceService) { }
  select:any="";

  staffvalidate(){
    var body={
      username:this.loggedInStaff.firstname1,
      data1:this.date,
      time1:this.time,
      select1:this.select,
    }
    this.user.addstaffattendenceInformation(body).subscribe(data=>{
      alert("Attendence submitted");
      // this.route.navigate(['/login']);
    })
}
  ngOnInit() {
    const sessionUser = sessionStorage.getItem('loggedInStaff'); // <-- retrieve user details from session storage
    // this.values=this.loggedInUser.firstname1;
    if (sessionUser) {
      this.loggedInStaff = JSON.parse(sessionUser);
    } else if (this.service.loggedInStaff !== null) {
      this.loggedInStaff = this.service.loggedInStaff;
    } else {
      alert('You are Loggedout. Login to countinue');
      this.router.navigate(['/login']);
    }
  }

}
