import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contactformview',
  templateUrl: './contactformview.component.html',
  styleUrls: ['./contactformview.component.css']
})
export class ContactformviewComponent implements OnInit {

  contactform:any;
  constructor(private service:UserService) {
    this.service.getcontactform().subscribe((value) => {
      this.contactform= value;
    })

   }

  ngOnInit() {
  }

}
