import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {
  info: InfoPage= {};
  load = false;
  constructor(private http: HttpClient) {
    console.log("init service");

    //read json file
    this.http.get('assets/data/data-page.json')
        .subscribe((resp: InfoPage) =>{
          this.load = true;
          this.info = resp;
          console.log(resp);
          console.log(resp['email']);
        })

   }
}
