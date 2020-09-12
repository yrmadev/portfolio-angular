import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {
  
  info: InfoPage= {};
  load = false;
  teamPage: any[] = [];

  constructor(private http: HttpClient) {
    console.log("init service");
    this.getInfo();
    this.getTeam();

   }

   private getInfo(){
    //read json file
    this.http.get('assets/data/data-page.json')
        .subscribe((resp: InfoPage) =>{
          this.load = true;
          this.info = resp;
          //console.log(resp);
          //console.log(resp['email']);
        })
   }
   
   private getTeam(){
    //read json file from firebase
    this.http.get('https://angular-html-56a07.firebaseio.com/team.json')
    .subscribe((resp:any) =>{
      this.teamPage = resp;
      //console.log(resp);
    })

   }
}
