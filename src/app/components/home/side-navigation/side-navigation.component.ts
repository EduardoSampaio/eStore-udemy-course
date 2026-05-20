import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Category } from '../types/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-side-navigation',
  imports: [FontAwesomeModule],
  templateUrl: './side-navigation.component.html',
  styleUrl: './side-navigation.component.css',
})
export class SideNavigationComponent {
  faAngleDown = faAngleDown;

  categories: Category[] = [];

  constructor(private categoryService: CategoryService){
    this.categories = this.categoryService.getAllCategories();
  }

  getCategories(parentCategoryId?: number): Category[] {
    return this.categories.filter(category => category.parent_category_id === parentCategoryId);
  }
}
