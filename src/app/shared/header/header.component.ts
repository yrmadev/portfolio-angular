import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _service: InfoPageService,
    private router: Router) { }



  ngOnInit(): void {
  }
  searchProduct(word: string){
    if (word.length < 1) {
      return;
    }
    this.router.navigate(['/search',word]);
  }

}
