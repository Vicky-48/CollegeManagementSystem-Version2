import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComplientService } from '../complient.service';
import { LoginService } from '../login.service';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-complients',
  templateUrl: './complients.component.html',
  styleUrls: ['./complients.component.css']
})
export class ComplientsComponent implements OnInit {


    constructor( private fb:FormBuilder,private service:LoginService,private router:Router,private user:ComplientService,private http:HttpClient) { }
    complient=this.fb.group({
    Staffname:[,Validators.required],
    Subject:[,Validators.required],
    Message:[,Validators.required]
    })

//     submitForm(){
//       let studentid:any=sessionStorage.getItem("loggedInUserid");
//       let updatedata={
//         studentid:studentid,
//         reply:"",
//         ...this.complient.value
//       }
// console.log(updatedata)
//       this.user.addComplientInformation(updatedata).subscribe(data=>{
//         alert("Form submitted");
//         this.complient.reset();
//       })
//   }

select:any="";
form1:any="";
form:any="";
loggedInUser:any;
validate(){
  var body={
    "username":this.loggedInUser.firstname1,
    "Staffname":this.complient.value.Staffname,
    "Subject":this.complient.value.Subject,
    "Message":this.complient.value.Message,
    "status":""
  }
  this.user.addComplientInformation(body).subscribe(data=>{
    alert("Queryssubmitted");
    // this.route.navigate(['/login']);
  })
}

getstatus:any;
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
  return this.http.get<any>(environment.getComplients).pipe(
    map((data) => {
      return data.filter(
        (item:any) =>
          item.username===this.loggedInUser.firstname1
      );
    })
  );
}
}
