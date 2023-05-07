import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cpasswordvalid } from '../cpasswordvalid.validator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb:FormBuilder,private user:UserService,private route:Router
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
      this.route.navigate(['/login']);
    })
}

  ngOnInit() {
  }

}
