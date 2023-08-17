import { Component, OnInit } from '@angular/core';
import { images } from 'src/environments/environment';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})
export class PlacementComponent implements OnInit {
  Placementimage:any=images.getPlacementimage;
  Placement1image:any=images.getPlacement1image;
  PlacementStudent1image:any=images.getPlacementStudent1image;
  PlacementStudent2image:any=images.getPlacementStudent2image;
  PlacementStudent3image:any=images.getPlacementStudent3image;
  PlacementStudent4image:any=images.getPlacementStudent4image;
  PlacementStudent5image:any=images.getPlacementStudent5image;
  PlacementStudent6image:any=images.getPlacementStudent6image;
  PlacementStudent7image:any=images.getPlacementStudent7image;
  PlacementStudent8image:any=images.getPlacementStudent8image;
  PlacementStudent9image:any=images.getPlacementStudent9image;




  constructor() { }

  ngOnInit() {
  }

}
