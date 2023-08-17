import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-Studentprofile',
  templateUrl: './Studentprofile.component.html',
  styleUrls: ['./Studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {
  Studentinfo:any;
  constructor(private service:UserService) {
    // this.service.getStudentinfo().subscribe((value) => {
    //   this.Studentinfo= value;
    // })

   }

  ngOnInit() {
    const sessionUser = sessionStorage.getItem('loggedInUser'); // <-- retrieve user details from session storage
    // this.values=this.loggedInUser.firstname1;
    if (sessionUser) {
      this.Studentinfo = JSON.parse(sessionUser);
    }
  }

}
