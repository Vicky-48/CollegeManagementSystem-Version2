import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Editprofile',
  templateUrl: './Editprofile.component.html',
  styleUrls: ['./Editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  visible :boolean=true;
  changetype :boolean=true;
  loggedInUser:any="";
  constructor(
    private fb:FormBuilder,private user:UserService,private route:Router,private http:HttpClient
  ) { }
  formRegister=this.fb.group({
    firstname1:[,Validators.required],
    lastname1:[,Validators.required],
    email1:[,Validators.required],
    password1:[,Validators.required]
  },
  )
showPassword(){
  this.visible=!this.visible;
  this.changetype=!this.changetype;

}
EditProfile(){
 this.http.patch<any>(environment.getUser+this.loggedInUser.id,this.formRegister.value).subscribe(()=>{
  alert("Student Detail Succesfully Edited")
 })
}

  ngOnInit() {
    const sessionUser = sessionStorage.getItem('loggedInUser'); // <-- retrieve user details from session storage
    // this.values=this.loggedInUser.firstname1;
    if (sessionUser) {
      this.loggedInUser = JSON.parse(sessionUser);
    }
    this.formRegister.controls['firstname1'].setValue(this.loggedInUser.firstname1)
    this.formRegister.controls['lastname1'].setValue(this.loggedInUser.lastname1)
    this.formRegister.controls['email1'].setValue(this.loggedInUser.email1)
    this.formRegister.controls['password1'].setValue(this.loggedInUser.password1)
  }

}

