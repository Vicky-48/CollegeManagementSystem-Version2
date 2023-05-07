import { Component, OnInit } from '@angular/core';
import { ComplientService } from '../complient.service';

@Component({
  selector: 'app-studentcomplientsview',
  templateUrl: './studentcomplientsview.component.html',
  styleUrls: ['./studentcomplientsview.component.css']
})
export class StudentcomplientsviewComponent implements OnInit {
  Complients:any
  constructor(private service:ComplientService) {
    this.service.getComplients().subscribe((value) => {
      this.Complients= value;
    })
  }

  ngOnInit() {
  }

}
