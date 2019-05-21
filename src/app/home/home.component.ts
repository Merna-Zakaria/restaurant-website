
import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  showNavigationArrows = true;
  showNavigationIndicators = false;

images = [1, 2, 3].map((x) => `../../assets/img/${x}.jpg`);

  constructor() { 
  
  }

  ngOnInit() {
  }
   items: { count: number, name: string }[] =[
    {"count": 256, name: "Happy client"},
    {"count": 56, name: "projects"},
    {"count": 456, name: "articals"},
    {"count": 4, name: "active"},
    
];


}

