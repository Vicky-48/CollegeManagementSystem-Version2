import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contactUs',
  templateUrl: './contactUs.component.html',
  styleUrls: ['./contactUs.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(
    private fb:FormBuilder, private contact:ContactService
  ) { }
  contactForm=this.fb.group({
    firstname1:[,Validators.required],
    lastname1:[,Validators.required],
    email1:[,Validators.required],
    mobile1:[,Validators.required],
    message1:[,Validators.required],
  },
  )



  submitContactForm(){


    this.contact.addContactInformation (this.contactForm.value).subscribe(data=>{
      alert("Form submitted");
      this.contactForm.reset();
      // this.route.navigate(['/login']);
    })
}

  ngOnInit() {
  }

}
