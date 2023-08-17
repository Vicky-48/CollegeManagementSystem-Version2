import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { staffpasswordvalid } from '../cpasswordvalid.validator';
import { StaffService } from '../staff.service';
import { environment, images } from 'src/environments/environment';
import { NGXLogger } from 'ngx-logger';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {
  Loginimage:any=images.getLoginimage;

  constructor(private fb:FormBuilder,private user:StaffService,private route:Router,private ngx:NGXLogger,private http:HttpClient) { }
  staffRegister=this.fb.group({
    firstname1:[,Validators.required],
    lastname1:[,Validators.required],
    email1:[,Validators.required],
    password1:[,Validators.required],
    cpassword1:[,Validators.required],
  },
  {validator:staffpasswordvalid ('password1','cpassword1'),
}
  )

  submitForm(){


    this.user.addstaffInformation(this.staffRegister.value).subscribe(data=>{
      alert("Form submitted");
      this.ngx.info("Form submitted");
      const logData = {
        message : `User Register In : ${this.staffRegister.value.email1}`,
        level : 'INFO',
        timestamp : new Date().toLocaleString()
      }
      this.http.post(environment.getStaffRegister,logData).subscribe({
      });
      this.route.navigate(['/login']);
    })
}
canExit(){
  if(this.staffRegister.invalid)
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
