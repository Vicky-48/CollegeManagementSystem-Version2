import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cpasswordvalid } from '../cpasswordvalid.validator';
import { UserService } from '../user.service';
import { NGXLogger } from 'ngx-logger';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { DeactivateComponent } from '../deactivate.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,DeactivateComponent {
  visible :boolean=true;
  changetype :boolean=true;
  constructor(
    private fb:FormBuilder,private user:UserService,private route:Router,private ngx:NGXLogger,private http:HttpClient
  ) { }
  formRegister=this.fb.group({
    firstname1:[,Validators.required],
    lastname1:[,Validators.required],
    email1:[,Validators.required],
    password1:[,Validators.required],
    cpassword1:[,Validators.required],
  },
  {validator:cpasswordvalid('password1','cpassword1'),
}
  )
submitForm(){


    this.user.addUserInformation(this.formRegister.value).subscribe(data=>{
      alert("Form submitted");
      this.ngx.info("Form submitted");
      const logData = {
        message : `User Register In : ${this.formRegister.value.email1}`,
        level : 'INFO',
        timestamp : new Date().toLocaleString()
      }
      this.http.post(environment.getStudentRegister,logData).subscribe({
      });
      this.route.navigate(['/login']);
    })
}
showPassword(){
  this.visible=!this.visible;
  this.changetype=!this.changetype;

}
canExit(){
  if(this.formRegister.invalid)
    {
    return confirm("Your content was not saved");
  }
  else{
    return true;
  }
}

  ngOnInit() {
  }

}
