import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb:FormBuilder, private http:HttpClient, private route:Router ,private service: LoginService) {}
  formLogin=this.fb.group({
    email1:[,Validators.required],
    password1:[,Validators.required],
  })
error:boolean=false;
  loginForm(){
this.user();
this.admin();
this.staff();

if(this.error){
  alert("ERROR")
}

  }

user()
  {
    this.http.get<any>('http://localhost:3000/users').subscribe((data1) => {
        const user = data1.find((u: any) => u.email1 === this.formLogin.value.email1 && u.cpassword1 === this.formLogin.value.password1
        );
        if (user) {
          alert('login Sucessfully');
          this.formLogin.reset();
          this.service.loggedInUser = user;
          sessionStorage.setItem('loggedInUser', JSON.stringify(user));
          this.route.navigate(['/Studenthome']);
        }
        else{
          this.error=true
        }
      })
    }
    staff()
  {
    this.http.get<any>('http://localhost:3000/staff').subscribe((data1) => {
        const user = data1.find((u: any) => u.email1 === this.formLogin.value.email1 && u.cpassword1 === this.formLogin.value.password1
        );
        if (user) {
          alert('login Sucessfully');
          this.formLogin.reset();
          this.service.loggedInUser = user;
          sessionStorage.setItem('loggedInStaff', JSON.stringify(user));
          this.route.navigate(['/staffhome']);
        }
        else{
          this.error=true
        }
      })
    }
    admin()
    {
    this.http.get<any>('http://localhost:3000/admin').subscribe((data) => {
        const user = data.find((u: any) => u.Aname === this.formLogin.value.email1 && u.Apassword === this.formLogin.value.password1
        );
        if (user) {
          alert('login Sucessfully');
          this.formLogin.reset();
          this.route.navigate(['/adminhome']);
        }
        else{
          this.error=true
        }
      })
    }

  ngOnInit() {
  }

}
