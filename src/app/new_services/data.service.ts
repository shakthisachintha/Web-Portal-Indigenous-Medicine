import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataarray=[];
  constructor(
    private httpClient: HttpClient
  ) { }

  getData(){
   return this.httpClient.get('http://127.0.0.1:8000/herbs');
  }
}
