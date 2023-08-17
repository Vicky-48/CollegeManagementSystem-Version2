import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-staffprofile',
  templateUrl: './staffprofile.component.html',
  styleUrls: ['./staffprofile.component.css']
})
export class StaffprofileComponent implements OnInit {

  Staffinfo:any;
  constructor(private service:UserService) {
    // this.service.getStudentinfo().subscribe((value) => {
    //   this.Studentinfo= value;
    // })

   }

  ngOnInit() {
    const sessionUser = sessionStorage.getItem('loggedInStaff'); // <-- retrieve user details from session storage
    // this.values=this.loggedInUser.firstname1;
    if (sessionUser) {
      this.Staffinfo = JSON.parse(sessionUser);
    }
  }

}
