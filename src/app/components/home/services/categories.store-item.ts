import { computed, Injectable, signal } from "@angular/core";
import { Category } from "../types/category";
import { CategoryService } from "./category.service";


@Injectable()
export class CategoriesStoreItem {
  private readonly _categories = signal<Category[]>([]);

  readonly categories = this._categories.asReadonly();

  readonly topLevelCategories = computed(() => this._categories().filter(category => category.parent_category_id === null));

  constructor(private categoryService: CategoryService) {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(categories => {
      this._categories.set(categories);
    });
  }
}
