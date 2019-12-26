import { Component, OnInit } from "@angular/core";
import { DataService } from "../new_services/data.service";
@Component({
  selector: "app-herbs",
  templateUrl: "./herbs.component.html",
  styleUrls: ["./herbs.component.css"],
  providers: [DataService]
})
export class HerbsComponent implements OnInit {
  data: any;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getherbsData();
  }
  getherbsData() {
    this.dataService.getData().subscribe(data =>{
      this.data = data;
      console.log(this.data);
    });
  }
}
