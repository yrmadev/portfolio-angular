import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsInterface } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  loadP = true;
  products: ProductsInterface [] = [];
  productsByFilter: ProductsInterface[] = [];

  constructor(private http:HttpClient) {
    this.loadProducts();
   }

  private loadProducts(){
    return new Promise( (resolve, reject) =>{
      this.http.get('https://angular-html-56a07.firebaseio.com/products_idx.json')
      .subscribe((resp: ProductsInterface[]) =>{
        this.products = resp;
        this.loadP = false;
        resolve();
      });

    })
    
  }

  getProducto(id: string){
    return this.http.get(`https://angular-html-56a07.firebaseio.com/products/${id}.json`);
  }

  searchProduct(word: string){
   if (this.products.length === 0) {
     //load products
     this.loadProducts().then( () =>{
       //after get all products
       //get products by filter
       this.filterProducts(word);
     });
   }else{
     //get product by filter
     this.filterProducts(word);
   }
  }
  private filterProducts(word: string){
    //console.log(this.products);
    this.productsByFilter = [];
    word = word.toLocaleLowerCase();
    this.products.forEach(prod =>{
      const titleLower = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf(word) >=0 || titleLower.indexOf(word) >=0) {
        this.productsByFilter.push(prod);
      }
    });
  }
}
