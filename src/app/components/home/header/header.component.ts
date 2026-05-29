import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCartShopping,
  faHeart,
  faSearch,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { CategoriesStoreItem } from '../services/categories.store-item';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faHeart = faHeart;
  faCartShopping = faCartShopping;

  constructor(public categoryStore: CategoriesStoreItem) {}
}
