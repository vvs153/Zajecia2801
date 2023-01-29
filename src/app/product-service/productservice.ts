import { Injectable } from '@angular/core';

import {ProductModel} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  nextProductId: number =1;
  productList: ProductModel[] = []
  constructor() {
  }
  addProduct(newProduct: ProductModel): void{
    newProduct.id = this.nextProductId++
    this.productList.push(newProduct)
  }
  deleteProductInService(id: number): void{
    let foundProduct
    for (const product of this.productList){
      if(product.id==id){
        foundProduct=product
        break;
      }
    }
    if(foundProduct==undefined){
      return
    }
    const productIndex = this.productList.indexOf(foundProduct)
    this.productList.splice(productIndex,1)
  }
}
