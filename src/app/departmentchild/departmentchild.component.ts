import { Component, OnInit } from '@angular/core';
import { DeparmentService } from '../deparment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departmentchild',
  templateUrl: './departmentchild.component.html',
  styleUrls: ['./departmentchild.component.css']
})
export class DepartmentchildComponent implements OnInit {

  deparmentList:any="";
  searchFor:any="";
  description:any="";

  constructor(private service:DeparmentService, private route:ActivatedRoute ) { }

  ngOnInit() {
    {
      this.service.getdepartment().subscribe(data=>{
        this.deparmentList=data;

        this.route.params.subscribe(paramdata=>{
          this.searchFor=paramdata['check'];

          for(let description of this.deparmentList){

            if(description.title==this.searchFor){
              this.description=description;
              break;
            }
          }
        })
      })
    }
  }

}
