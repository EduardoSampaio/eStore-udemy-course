import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../products/products.type';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(filters?: {
    maincategoryid?: number;
    subcategoryid?: number;
  }) {
    let queryParams = '';
    if (filters) {
      const params = new URLSearchParams();
      if (filters?.maincategoryid) {
        params.append('maincategoryid', filters.maincategoryid.toString());
      }
      if (filters?.subcategoryid) {
        params.append('subcategoryid', filters.subcategoryid.toString());
      }
      queryParams = '?' + params.toString();
    }
    return this.http.get<Product[]>('http://localhost:5001/products' + queryParams);
  }
}
