import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../models';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product">
      <img [src]="product.imageUrl" alt="{{ product.name }}">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>Цена: {{ product.price }}₸</p>
      <p>Рейтинг: {{ product.rating }}</p>
      <p>Лайков: {{ product.likes }}</p>
      <button (click)="like.emit()">Нравится</button>
      <button (click)="remove.emit()">Удалить</button>
    </div>
  `,
  styles: [`
    .product {
      border: 1px solid #ddd;
      padding: 10px;
      margin: 10px;
      text-align: center;
    }
    img {
      width: 150px;
      height: auto;
    }
  `]
})
export class ProductItemComponent {
  @Input() product!: Item;
  @Output() remove = new EventEmitter<void>();
  @Output() like = new EventEmitter<void>();

  products: Item[] = [
    new Item(1, 'LG F2J3NS0W', 'Стиральная машина LG', 161000, 
      'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-large', 4.7, 
      'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000'),

    new Item(2, 'Ava MMWO 2070B', 'Микроволновая печь', 23823, 
      'https://resources.cdn-kaspi.kz/img/m/p/h90/hd8/85539374170142.jpg?format=gallery-large', 4.5, 
      'https://kaspi.kz/shop/p/ava-mmwo-2070b-chernyi-117793364/?c=750000000'),

    new Item(3, 'Apple 20W USB-C Power Adapter', 'Адаптер питания Apple', 30000, 
      'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-large', 4.3, 
      'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000'),

    new Item(4, 'iPhone 16 Pro Max', 'Флагманский смартфон Apple', 418674, 
      'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-large', 4.9, 
      'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'),

    new Item(5, 'iPhone 16', 'Новый iPhone 16', 418674, 
      'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-large', 4.7, 
      'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000'),

    new Item(6, 'Aula F75', 'Игровая клавиатура Aula', 20399, 
      'https://resources.cdn-kaspi.kz/img/m/p/pdc/p8a/24789850.jpg?format=gallery-large', 4.6, 
      'https://kaspi.kz/shop/p/aula-f75-belyi-117731409/?c=750000000'),

    new Item(7, 'Thunderobot Zero G3 Ultra', 'Мощный игровой ноутбук', 1549999, 
      'https://resources.cdn-kaspi.kz/img/m/p/hbe/h67/84375762599966.jpg?format=gallery-large', 4.7, 
      'https://kaspi.kz/shop/p/thunderobot-zero-g3-ultra-16-32-gb-ssd-2048-gb-win-11--114123805/?c=750000000'),

    new Item(8, 'Apple MacBook Air 13', 'Ноутбук Apple MacBook Air 2022', 496897, 
      'https://resources.cdn-kaspi.kz/img/m/p/hc8/h1a/64439230365726.jpg?format=gallery-large', 4.8, 
      'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mly13-105933751/?c=750000000'),

    new Item(9, "TV Тумба Modern New Design", "Стильная тумба для телевизора", 20800, 
      "https://resources.cdn-kaspi.kz/img/m/p/h02/hda/67423804784670.jpg?format=gallery-large", 4.4, 
      "https://kaspi.kz/shop/p/tv-tumba-napol-naja-modern-new-design-tt-180x40x35-sm-belyi-korichnevyi-108268540/?c=750000000"),

    new Item(10, "SofaBed KZ Диван угловой", "Удобный угловой диван", 95946, 
      "https://resources.cdn-kaspi.kz/img/m/p/p03/p6a/5572203.png?format=gallery-large", 4.4, 
      "https://kaspi.kz/shop/p/sofabed-kz-divan-uglovoi-648153-obivka-veljur-75h290h130-sm-seryi-106832599/?c=750000000")
  ];
}
