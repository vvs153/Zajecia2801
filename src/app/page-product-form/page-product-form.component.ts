import { Component } from '@angular/core';
import {default_product, ProductModel} from "../model/product";
import {ProductService} from "../product-service/productservice";

@Component({
  selector: 'app-page-product-form',
  templateUrl: './page-product-form.component.html',
  styleUrls: ['./page-product-form.component.css']
})
export class PageProductFormComponent {
 addedProduct: ProductModel
  constructor(protected productService:ProductService) {
   this.addedProduct=Object.assign({},default_product)
  }
  addProductToService(): void{
   this.productService.addProduct(this.addedProduct);
   this.addedProduct=Object.assign({},default_product)
  }
  clearForm(): void{
   this.addedProduct=Object.assign({},default_product)
  }
}
