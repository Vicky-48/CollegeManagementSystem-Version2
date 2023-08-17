import { Component, OnInit } from '@angular/core';
import { ComplientService } from '../complient.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber, map } from 'rxjs';

@Component({
  selector: 'app-studentcomplientsview',
  templateUrl: './studentcomplientsview.component.html',
  styleUrls: ['./studentcomplientsview.component.css']
})
export class StudentcomplientsviewComponent implements OnInit {
  Complients:any
  constructor(private service:ComplientService,private fb:FormBuilder,private route:Router,private http:HttpClient) {
    this.service.getComplients().subscribe((value) => {
      this.Complients= value;
      // console.log(this.Complients)
    })
  }
  query=this.fb.group({
    Message:[,Validators.required],
})

submitForm(id:any){
  // alert("submit")
  let replymessage:any =this.query.controls['Message'].value;
  // console.log(replymessage);
this.http.get(`http://localhost:3000/Complients/${id}`).subscribe((data :any)=>{
  this.http.patch(`http://localhost:3000/Complients/${id}`,{reply:replymessage}).subscribe((data :any)=>{
    alert("Query Submited");
  })
})


  // this.service.addQueryreplay(this.query.value).subscribe(data=>{
  //   alert("Query submitted");
  //   this.query.reset();
  // }
  // )
}
getstaffdetails:any;
getstaffname:any;
  ngOnInit( ) {
    const staffname=sessionStorage.getItem("loggedInStaff");
    if (staffname){
     this.getstaffdetails=JSON.parse(staffname)
    }
    this.searchComplient().subscribe(data=>{
      this.getstaffname=data
    })
  }
searchComplient(): Observable<any> {
  return this.http.get<any>("http://localhost:3000/Complients").pipe(
    map((data) => {
      return data.filter(
        (item:any) =>
          item.Staffname===this.getstaffdetails.firstname1
      );
    })
  );
}
}
