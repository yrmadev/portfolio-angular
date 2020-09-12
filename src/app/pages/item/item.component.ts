import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductItem } from 'src/app/interfaces/product-item.interface';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  productItem: ProductItem;
  idProduct: String

  constructor(private route: ActivatedRoute, public productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(para =>{
        //console.log(para['id'])
        this.productsService.getProducto(para['id'])
          .subscribe((product: ProductItem) =>{
            this.idProduct = para['id'];
            this.productItem = product
          })
      });
  }

}
