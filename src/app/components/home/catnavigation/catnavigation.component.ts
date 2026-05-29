import { Component, inject } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../types/category';
import { CategoriesStoreItem } from '../services/categories.store-item';

@Component({
  selector: 'app-catnavigation',
  imports: [],
  templateUrl: './catnavigation.component.html',
  styleUrl: './catnavigation.component.css',
})
export class CatnavigationComponent {
  constructor(public categoryStore: CategoriesStoreItem) {}
}
