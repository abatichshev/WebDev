import { Component } from '@angular/core';
import { Item } from "../models";
import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ImageGalleryComponent } from "../image-gallery/image-gallery.component";

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class AppModule { }

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    ImageGalleryComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Item[] = [];

  constructor() {
    this.products.push(
      new Item(1, 'LG F2J3NS0W', 'Стиральная машина LG', 1200, 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000', 9.5, 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000'),
      new Item(2, 'Ava MMWO 2070B', 'Микроволновая печь', 250, 'https://kaspi.kz/shop/p/ava-mmwo-2070b-chernyi-117793364/?c=750000000', 9.0, 'https://kaspi.kz/shop/p/ava-mmwo-2070b-chernyi-117793364/?c=750000000'),
      new Item(3, 'Apple 20W USB-C Power Adapter', 'Адаптер питания Apple', 100, 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000', 8.7, 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000'),
      new Item(4, 'iPhone 16 Pro Max', 'Флагманский смартфон Apple', 1500, 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000', 9.8, 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'),
      new Item(5, 'iPhone 16', 'Новый iPhone 16', 1300, 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000', 9.5, 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000'),
      new Item(6, 'Aula F75', 'Игровая клавиатура Aula', 700, 'https://kaspi.kz/shop/p/aula-f75-belyi-117731409/?c=750000000', 9.2, 'https://kaspi.kz/shop/p/aula-f75-belyi-117731409/?c=750000000'),
      new Item(7, 'Thunderobot Zero G3 Ultra', 'Мощный игровой ноутбук', 2500, 'https://kaspi.kz/shop/p/thunderobot-zero-g3-ultra-16-32-gb-ssd-2048-gb-win-11--114123805/?c=750000000', 9.7, 'https://kaspi.kz/shop/p/thunderobot-zero-g3-ultra-16-32-gb-ssd-2048-gb-win-11--114123805/?c=750000000'),
      new Item(8, 'Apple MacBook Air 13', 'Ноутбук Apple MacBook Air 2022', 1400, 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mly13-105933751/?c=750000000', 9.6, 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mly13-105933751/?c=750000000'),
      new Item(9, "TV Тумба Modern New Design", "Стильная тумба для телевизора", 450, "https://kaspi.kz/shop/p/tv-tumba-napol-naja-modern-new-design-tt-180x40x35-sm-belyi-korichnevyi-108268540/?c=750000000", 8.9, "https://kaspi.kz/shop/p/tv-tumba-napol-naja-modern-new-design-tt-180x40x35-sm-belyi-korichnevyi-108268540/?c=750000000"),
      new Item(10, "SofaBed KZ Диван угловой", "Удобный угловой диван", 1200, "https://kaspi.kz/shop/p/sofabed-kz-divan-uglovoi-648153-obivka-veljur-75h290h130-sm-seryi-106832599/?c=750000000", 9.3, "https://kaspi.kz/shop/p/sofabed-kz-divan-uglovoi-648153-obivka-veljur-75h290h130-sm-seryi-106832599/?c=750000000")
    );
  }

  sharing(id: number): void {
    const productLink = this.products[id - 1].productLink;
    const encodedLink = encodeURIComponent(productLink);
    const telegramShareUrl = `https://t.me/share/url?url=${encodedLink}`;
    window.open(telegramShareUrl, '_blank');
  }
}
