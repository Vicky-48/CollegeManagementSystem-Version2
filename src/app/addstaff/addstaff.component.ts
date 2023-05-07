import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { staffpasswordvalid } from '../cpasswordvalid.validator';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {

  constructor(private fb:FormBuilder,private user:StaffService,private route:Router) { }
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
      this.route.navigate(['/login']);
    })
}
  ngOnInit() {
  }

}
