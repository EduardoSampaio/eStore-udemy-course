import { Injectable, signal } from "@angular/core";
import { Product } from "../../../products/products.type";
import { ProductsService } from "./products.service";


@Injectable()
export class ProductStoreItem {
  private readonly _products = signal<Product[]>([]);
  readonly products = this._products.asReadonly();

  constructor(private productsService: ProductsService) {
    this.loadProducts();
  }

  loadProducts(filters?: { maincategoryid?: number; subcategoryid?: number }): void {
    this.productsService.getAllProducts().subscribe(products => {
      this._products.set(products);
    });
  }
}
