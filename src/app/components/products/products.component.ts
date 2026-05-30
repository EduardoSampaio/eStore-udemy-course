import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './products.type';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../ratings/ratings.component';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RatingsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductsService],
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(productsService: ProductsService) {
    productsService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
