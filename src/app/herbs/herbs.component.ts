import { Component, OnInit } from '@angular/core';
import { DataService } from '../new_services/data.service';
@Component({
  selector: 'app-herbs',
  templateUrl: './herbs.component.html',
  styleUrls: ['./herbs.component.css']
})
export class HerbsComponent implements OnInit {
  data: any;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.data = this.dataService.getData();
    console.log(this.data);
  }

}
