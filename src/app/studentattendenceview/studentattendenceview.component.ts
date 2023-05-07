import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-studentattendenceview',
  templateUrl: './studentattendenceview.component.html',
  styleUrls: ['./studentattendenceview.component.css']
})
export class StudentattendenceviewComponent implements OnInit {

  attendence:any;
  constructor(private service:UserService) {
    this.service.getattendence().subscribe((value) => {
      this.attendence= value;
    })

   }

  ngOnInit() {
  }
}

