import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const offer_modal:any = document.querySelector(".popup");
    offer_modal.showModal();
  }

  display(){
    const offer_modal:any = document.querySelector(".popup");
    offer_modal.close();
   }

}
