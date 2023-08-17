import { Component, OnInit } from '@angular/core';
import { images } from 'src/environments/environment';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  Admission1image:any=images.getAdmission1image;
  Admission2image:any=images.getAdmission2image;
  Admission3image:any=images.getAdmission3image;
  Admission4image:any=images.getAdmission4image;
  constructor() { }

  ngOnInit() {
  }

}
