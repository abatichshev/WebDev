import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent],
  template: `<app-products></app-products>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
