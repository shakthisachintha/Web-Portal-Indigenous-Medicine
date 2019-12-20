import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any;
  constructor() { }

  getData(){
    return this.data = [
      {
        "name":"sakun",
      },
      {
        "name":"chamikara",
      }
    ]
  }
}
