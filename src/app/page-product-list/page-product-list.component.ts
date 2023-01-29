import { Component } from '@angular/core';
import {ProductService} from "../product-service/productservice";

@Component({
  selector: 'app-page-product-list',
  templateUrl: './page-product-list.component.html',
  styleUrls: ['./page-product-list.component.css']
})
export class PageProductListComponent {
  constructor(protected productService: ProductService) {
  }

  deleteProduct(id: number): void{
    console.log("Product with id "+id+" was deleted.")
  this.productService.deleteProductInService(id)
}
}
