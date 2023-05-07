import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-staffhome',
  templateUrl: './staffhome.component.html',
  styleUrls: ['./staffhome.component.css']
})
export class StaffhomeComponent implements OnInit {
  loggedInStaffs:any;
  constructor(private service:LoginService, private router:Router) { }

  ngOnInit() {
    const sessionUser = sessionStorage.getItem('loggedInStaff'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.loggedInStaffs = JSON.parse(sessionUser);
    } else if (this.service.loggedInStaff !== null) {
      this.loggedInStaffs = this.service.loggedInStaff;
    } else {
      alert('You are Loggedout. Login to countinue');
      this.router.navigate(['/login']);
    }
  }

}
