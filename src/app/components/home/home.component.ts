import { Component } from '@angular/core';
import { CatnavigationComponent } from './catnavigation/catnavigation.component';
import { HeaderComponent } from './header/header.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { ProductsComponent } from '../products/products.component';
import { CategoryService } from './services/category/category.service';
import { CategoriesStoreItem } from './services/category/categories.store-item';
import { ProductStoreItem } from './services/product/product.store-item';
import { ProductsService } from './services/product/products.service';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    CatnavigationComponent,
    SideNavigationComponent,
    ProductsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [
    CategoryService,
    CategoriesStoreItem,
    ProductsService,
    ProductStoreItem,
  ],
})
export class HomeComponent {
  constructor(
    private categoriesStoreItem: CategoriesStoreItem,
    private productStoreItem: ProductStoreItem,
  ) {
    this.categoriesStoreItem.loadCategories();
    this.productStoreItem.loadProducts();
  }
  onSelectSubCategory(subCategoryId: number): void {
    this.productStoreItem.loadProducts({ subcategoryid: subCategoryId });
  }
}
