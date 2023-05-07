import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedInUser:any;
  constructor(private service:LoginService, private router:Router) { }

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

