import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products.type';


@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

 getAllProducts() {
    return this.http.get<Product[]>('http://localhost:5001/products');
  }
}
