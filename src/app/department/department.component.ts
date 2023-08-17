import { Component, OnInit } from '@angular/core';
import { DeparmentService } from '../deparment.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  department:any;

  constructor(private service:DeparmentService) {
    this.service.getdepartment().subscribe(data=>{
      this.department=data;
    })
   }


  ngOnInit() {

  }

}
