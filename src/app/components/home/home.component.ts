import { Component } from '@angular/core';
import { CatnavigationComponent } from './catnavigation/catnavigation.component';
import { HeaderComponent } from './header/header.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { ProductsComponent } from "../products/products.component";
import { CategoryService } from './services/category.service';
import { CategoriesStoreItem } from './services/categories.store-item';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CatnavigationComponent, SideNavigationComponent, ProductsComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [CategoryService, CategoriesStoreItem]
})
export class HomeComponent {
  constructor(private categoriesStoreItem: CategoriesStoreItem) {
    this.categoriesStoreItem.loadCategories();
  }
}
