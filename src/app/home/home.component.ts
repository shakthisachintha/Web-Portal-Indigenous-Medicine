import { Component, OnInit } from '@angular/core';  
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
@Component({  
  selector: 'app-home',  
  templateUrl: './home.component.html',  
  styleUrls: ['./home.component.css']  
})  
export class HomeComponent implements OnInit {  
  
  constructor(config: NgbCarouselConfig) {  
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
  }  
  ngOnInit() {  
  }  
  
}