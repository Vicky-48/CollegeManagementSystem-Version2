import { Component, OnInit } from '@angular/core';
import { images } from 'src/environments/environment';

@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.css']
})
export class AdminmenuComponent implements OnInit {
  AdminLogo:any=images.getLogo;
  constructor() { }

  ngOnInit() {
  }

}
