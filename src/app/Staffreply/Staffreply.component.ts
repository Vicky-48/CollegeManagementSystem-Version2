import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-Staffreply',
  templateUrl: './Staffreply.component.html',
  styleUrls: ['./Staffreply.component.css']
})
export class StaffreplyComponent implements OnInit {
 querys:any="";
  constructor( private http :HttpClient) {
    let studentid =sessionStorage.getItem('loggedInUserid');
     this.http.get(`http://localhost:3000/Complients?studentid=${studentid}`).subscribe((data :any)=>{

     this.querys = data;

  })
  }

  getstatus:any;
  loggedInUser:any;
  ngOnInit() {
    const sessionUser = sessionStorage.getItem('loggedInUser'); // <-- retrieve user details from session storage
    // this.values=this.loggedInUser.firstname1;
    if (sessionUser) {
      this.loggedInUser = JSON.parse(sessionUser);
    }
    this.searchstatus().subscribe(data=>{
      this.getstatus=data
    })

  }
  searchstatus(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/Complients").pipe(
      map((data) => {
        return data.filter(
          (item:any) =>
            item.username===this.loggedInUser.firstname1
        );
      })
    );
  }
  }

