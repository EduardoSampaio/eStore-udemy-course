import { Component } from '@angular/core';
import { CatnavigationComponent } from './catnavigation/catnavigation.component';
import { HeaderComponent } from './header/header.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { ProductsComponent } from "../products/products.component";


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CatnavigationComponent, SideNavigationComponent, ProductsComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
