import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewstaffattendence',
  templateUrl: './viewstaffattendence.component.html',
  styleUrls: ['./viewstaffattendence.component.css']
})
export class ViewstaffattendenceComponent implements OnInit {
  staffattendence:any;
  constructor(private service:UserService) {
    this.service.getstaffattendence().subscribe((value) => {
      this.staffattendence= value;
    })
   }

  ngOnInit() {
  }

}
