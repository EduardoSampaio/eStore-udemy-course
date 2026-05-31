import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../ratings/ratings.component';
import { ProductStoreItem } from '../home/services/product/product.store-item';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RatingsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: []
})
export class ProductsComponent {
  constructor(public productsStoreItem: ProductStoreItem) {}
}
