import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsInterface } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  loadP = true;
  products: ProductsInterface [] = [];

  constructor(private http:HttpClient) {
    this.loadProducts();
   }

  private loadProducts(){
    this.http.get('https://angular-html-56a07.firebaseio.com/products_idx.json')
      .subscribe((resp: ProductsInterface[]) =>{
        this.products = resp;
        this.loadP = false;
      })

  }
}
