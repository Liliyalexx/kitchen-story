import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // TODO Populate products from API
 products: Product[] = [
  new Product(1, 'Product1', 'This is the product description.The product is really cool! 100'),
  new Product(2, 'Product2', 'This is the product description.The product is really cool! 150'),
  new Product(3, 'Product3', 'This is the product description.The product is really cool! 50'),
  new Product(4, 'Product4', 'This is the product description.The product is really cool! 60'),
  new Product(5, 'Product5', 'This is the product description.The product is really cool! 80'),
  new Product(6, 'Product6', 'This is the product description.The product is really cool! 130'),
  new Product(7, 'Product7', 'This is the product description.The product is really cool! 120'),
  new Product(8, 'Product8', 'This is the product description.The product is really cool! 130'),
 ]
  constructor() { }
  getProducts(): Product[] {
    // TODO: Populate products from API and return an Observable
    return this.products

  }
}


