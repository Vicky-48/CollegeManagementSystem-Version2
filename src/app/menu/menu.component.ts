import { Component, OnInit } from '@angular/core';
import { images } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  HomeLogoimage:any=images.getLogo;
  constructor() { }

  ngOnInit() {
  }

}
