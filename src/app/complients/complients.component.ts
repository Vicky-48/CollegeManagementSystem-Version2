import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComplientService } from '../complient.service';

@Component({
  selector: 'app-complients',
  templateUrl: './complients.component.html',
  styleUrls: ['./complients.component.css']
})
export class ComplientsComponent implements OnInit {


    constructor( private fb:FormBuilder,private user:ComplientService,private route:Router) { }
    complient=this.fb.group({
      Name:[,Validators.required],
      email:[,Validators.required],
      Subject:[,Validators.required],
      Message:[,Validators.required],
    })

    submitForm(){


      this.user.addComplientInformation(this.complient.value).subscribe(data=>{
        alert("Form submitted");
        this.complient.reset();
      })
  }

  ngOnInit() {
  }

}
