import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Editstaffprofile',
  templateUrl: './Editstaffprofile.component.html',
  styleUrls: ['./Editstaffprofile.component.css']
})
export class EditstaffprofileComponent implements OnInit {

  visible :boolean=true;
  changetype :boolean=true;
  loggedInStaff:any="";
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
 this.http.patch<any>(environment.getStaff+this.loggedInStaff.id,this.formRegister.value).subscribe(()=>{
  alert("Staff Detail Succesfully Edited")
 })
}

  ngOnInit() {
    const sessionUser = sessionStorage.getItem('loggedInStaff'); // <-- retrieve user details from session storage
    // this.values=this.loggedInUser.firstname1;
    if (sessionUser) {
      this.loggedInStaff = JSON.parse(sessionUser);
    }
    this.formRegister.controls['firstname1'].setValue(this.loggedInStaff.firstname1)
    this.formRegister.controls['lastname1'].setValue(this.loggedInStaff.lastname1)
    this.formRegister.controls['email1'].setValue(this.loggedInStaff.email1)
    this.formRegister.controls['password1'].setValue(this.loggedInStaff.password1)
  }

}
