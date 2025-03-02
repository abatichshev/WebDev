import { Component, EventEmitter, output } from '@angular/core';
import { Item } from "../models";
import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ImageGalleryComponent} from "../image-gallery/image-gallery.component";
import {ProductCategoryComponent} from "../product-category/product-category.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from '../app.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppComponent,
  ],
  providers: []
})


export class AppModule { }

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    ImageGalleryComponent,
    ProductCategoryComponent,
    FormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})




export class ProductsComponent
@output() favoriteChanged =new EventEmitter<Item>();
  products_phones: Item[] = [];
  products_laptops: Item[] = [];
  products_earphones: Item[] = [];
  products_furniture: Item[] = [];
  products: Item[] = [];
  categories: string[] = ["Phones", "Laptops", "Earphones", "Furniture"];


  categoryVisibility: { [key: string]: boolean } = {}; 


 
  constructor() {
    this.products.push(
      new Item(0, "phones", 1, 'Apple iPhone 13', 'iPhone 13 with 128GB storage', 900, 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large', 4.5, 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',false),
      new Item(0, "phones", 2, 'Samsung Galaxy A35 5G', 'Samsung mid-range phone', 600, 'https://resources.cdn-kaspi.kz/img/m/p/h8a/h7d/85428766703646.png?format=gallery-large', 4.3, 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-256-gb-temno-sinii-117420425/?c=750000000',false),
      new Item(0, "phones", 3, 'Oppo A78', 'Oppo smartphone with 256GB', 550, 'https://resources.cdn-kaspi.kz/img/m/p/hc0/h02/83108938809374.jpg?format=gallery-large', 4.1, 'https://kaspi.kz/shop/p/oppo-a78-8-gb-256-gb-chernyi-112808573/?c=750000000',false),
      new Item(0, "phones", 4, 'Realme Note 50', 'Realme budget-friendly phone', 400, 'https://resources.cdn-kaspi.kz/img/m/p/hbc/h45/123937562.jpg?format=preview-large', 3.9, 'https://kaspi.kz/shop/p/realme-note-50-4-gb-256-gb-chernyi-123889706/?c=750000000',false),
      new Item(0, "phones", 5, 'Apple iPhone 16 Pro Max', 'Latest Apple flagship phone', 1800, 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h2c/87295489736734.png?format=gallery-large', 4.8, 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-512gb-chernyi-123890344/?c=750000000',false),

      new Item(0, "laptops", 6, 'Apple MacBook Air 13 (2022)', 'Powerful Apple laptop', 1200, 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=preview-large', 9.5, 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',false),
      new Item(0, "laptops", 7, 'Lenovo IdeaPad 3', 'Affordable Lenovo laptop', 500, 'https://resources.cdn-kaspi.kz/img/m/p/p74/pb3/23963921.jpg?format=preview-large', 8.0, 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-4-gb-ssd-256-gb-bez-os-15igl05-81wq00emrk-102878742/?c=750000000',false),
      new Item(0, "laptops", 8, 'Thunderobot 911 X Wild Hunter G2L', 'Gaming laptop Thunderobot', 1700, 'https://resources.cdn-kaspi.kz/img/m/p/he4/hfc/85373324623902.png?format=preview-large', 8.9, 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2l-15-6-16-gb-ssd-512-gb-win-11-pro-jt009500e-116983567/?c=750000000',false),
      new Item(0, "laptops", 9, 'Apple MacBook Air 13 (2022) MLY33', 'Lightweight Apple laptop', 1300, 'https://resources.cdn-kaspi.kz/img/m/p/p2b/pfa/12037040.jpg?format=preview-large', 9.0, 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mly33-105933768/?c=750000000',false),
      new Item(0, "laptops", 10, 'Thunderobot 911 X Wild Hunter G2 Pro', 'Gaming laptop Thunderobot', 1700, 'https://resources.cdn-kaspi.kz/img/m/p/h9a/h69/120386920.jpg?format=preview-large', 8.9, 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s1h7S7JHM2i4QmbGWnEDpswjWsYLXp5JuYYeawCmc7mt266fFrEIl4aAtqQEALw_wcB',false),

      
      new Item(0, "earphones", 10, 'Hydra Minor Beige', 'Comfortable beige earphones', 50, 'https://resources.cdn-kaspi.kz/img/m/p/hf2/hf9/120724130.jpg?format=preview-large', 7.5, 'https://kaspi.kz/shop/p/hydra-minor-bezhevyi-120724130/?c=750000000',false),
      new Item(0, "earphones", 11, 'Remax PD-BT101 White', 'Wireless white earphones', 45, 'https://resources.cdn-kaspi.kz/img/m/p/h45/hfb/123363420.jpg?format=preview-large', 8.0, 'https://kaspi.kz/shop/p/remax-pd-bt101-belyi-123363420/?c=750000000',false),
      new Item(0, "earphones", 12, 'OEM P9 Silver', 'Sleek silver earphones', 55, 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h4f/116112464.jpg?format=preview-large', 8.2, 'https://kaspi.kz/shop/p/oem-p9-serebristyi-116112464/?c=750000000',false),
      new Item(0, "earphones", 13, 'OEM Air Pro 2 White', 'Affordable white earphones', 40, 'https://resources.cdn-kaspi.kz/img/m/p/h62/hf8/118366664.jpg?format=preview-large', 7.8, 'https://kaspi.kz/shop/p/oem-air-pro-2-belyi-118366664/?c=750000000',false),
      new Item(0, "earphones", 14, 'Hydra Minor Black', 'Stylish black earphones', 50, 'https://resources.cdn-kaspi.kz/img/m/p/hc4/hfc/120724113.jpg?format=preview-large', 7.9, 'https://kaspi.kz/shop/p/hydra-minor-chernyi-120724113/?c=750000000',false)
    )
    new Item(0, "furniture", 15, 'Morbido Sofa', 'Comfortable grey sofa', 300, 'https://resources.cdn-kaspi.kz/img/m/p/h27/h27/109382996.jpg?format=preview-large', 8.5, 'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000',false),
    new Item(0, "furniture", 16, 'Izox Coat Rack', 'Metal black coat rack', 80, 'https://resources.cdn-kaspi.kz/img/m/p/h3c/h5b/113366378.jpg?format=preview-large', 7.9, 'https://kaspi.kz/shop/p/veshalka-napol-naja-izox-metall-110x150-sm-chernyi-113366378/?c=750000000',false),
    new Item(0, "furniture", 17, 'Modern TV Stand', 'Stylish white-brown TV stand', 150, 'https://resources.cdn-kaspi.kz/img/m/p/h6c/h89/108268540.jpg?format=preview-large', 8.2, 'https://kaspi.kz/shop/p/tv-tumba-napol-naja-modern-new-design-tt-180x40x35-sm-belyi-korichnevyi-108268540/?c=750000000',false),
    new Item(0, "furniture", 18, 'Nasip Raiana Sofa', 'Light brown fabric sofa', 400, 'https://resources.cdn-kaspi.kz/img/m/p/haf/h28/115023255.jpg?format=preview-large', 9.0, 'https://kaspi.kz/shop/p/divan-prjamoi-nasip-raiana-obivka-tkan-85h230h70-sm-svetlo-korichnevyi-115023255/?c=750000000',false),
    new Item(0, "furniture", 19, 'Abuer Bookshelf', 'White floor-standing bookshelf', 120, 'https://resources.cdn-kaspi.kz/img/m/p/h67/h9d/104771353.jpg?format=preview-large', 8.4, 'https://kaspi.kz/shop/p/stellazh-napol-nyi-abuer-66x31x132-sm-belyi-104771353/?c=750000000',false)
  
      
      

    this.products_phones.push(
    new Item(0, "phones", 1, 'Apple iPhone 13', 'iPhone 13 with 128GB storage', 900, 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large', 4.5, 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',false),
    new Item(0, "phones", 2, 'Samsung Galaxy A35 5G', 'Samsung mid-range phone', 600, 'https://resources.cdn-kaspi.kz/img/m/p/h8a/h7d/85428766703646.png?format=gallery-large', 4.7, 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-256-gb-temno-sinii-117420425/?c=750000000',false),
    new Item(0, "phones", 3, 'Oppo A78', 'Oppo smartphone with 256GB', 550, 'https://resources.cdn-kaspi.kz/img/m/p/hc0/h02/83108938809374.jpg?format=gallery-large', 4.3, 'https://kaspi.kz/shop/p/oppo-a78-8-gb-256-gb-chernyi-112808573/?c=750000000',false),
    new Item(0, "phones", 4, 'Realme Note 50', 'Realme budget-friendly phone', 400, 'https://resources.cdn-kaspi.kz/img/m/p/hc0/ha3/87200643776542.png?format=gallery-large', 3.7, 'https://kaspi.kz/shop/p/realme-note-50-4-gb-256-gb-chernyi-123889706/?c=750000000',false),
    new Item(0, "phones", 5, 'Apple iPhone 16 Pro Max', 'Latest Apple flagship phone', 1800, 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h2c/87295489736734.png?format=gallery-large', 4.8, 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-512gb-chernyi-123890344/?c=750000000',false)
    )
    this.products_laptops.push(
      new Item(0, "laptops", 6, 'Apple MacBook Air 13 (2022)', 'Powerful Apple laptop', 1200, 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=preview-large', 4.7, 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',false),
      new Item(0, "laptops", 7, 'Lenovo IdeaPad 3', 'Affordable Lenovo laptop', 500, 'https://resources.cdn-kaspi.kz/img/m/p/p74/pb3/23963921.jpg?format=preview-large', 4.0, 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-4-gb-ssd-256-gb-bez-os-15igl05-81wq00emrk-102878742/?c=750000000',false),
      new Item(0, "laptops", 8, 'Thunderobot 911 X Wild Hunter G2L', 'Gaming laptop Thunderobot', 1700, 'https://resources.cdn-kaspi.kz/img/m/p/he4/hfc/85373324623902.png?format=preview-large', 4.4, 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2l-15-6-16-gb-ssd-512-gb-win-11-pro-jt009500e-116983567/?c=750000000',false),
      new Item(0, "laptops", 9, 'Apple MacBook Air 13 (2022) MLY33', 'Lightweight Apple laptop', 1300, 'https://resources.cdn-kaspi.kz/img/m/p/p2b/pfa/12037040.jpg?format=preview-large', 4.5, 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mly33-105933768/?c=750000000',false),
        new Item(0, "laptops", 10, 'Thunderobot 911 X Wild Hunter G2 Pro', 'Gaming laptop Thunderobot', 1700, 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium', 4.7, 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s1h7S7JHM2i4QmbGWnEDpswjWsYLXp5JuYYeawCmc7mt266fFrEIl4aAtqQEALw_wcB',false),
      )
    this.products_earphones.push(
      new Item(0, "earphones", 10, 'Hydra Minor Beige', 'Comfortable beige earphones', 50, 'https://resources.cdn-kaspi.kz/img/m/p/hf1/ha5/86475584110622.jpg?format=gallery-large', 3.7, 'https://kaspi.kz/shop/p/hydra-minor-bezhevyi-120724130/?c=750000000',false),
      new Item(0, "earphones", 11, 'Remax PD-BT101 White', 'Wireless white earphones', 45, 'https://resources.cdn-kaspi.kz/img/m/p/h02/h5a/87073025589278.jpg?format=gallery-large', 4.0, 'https://kaspi.kz/shop/p/remax-pd-bt101-belyi-123363420/?c=750000000',false),
      new Item(0, "earphones", 12, 'OEM P9 Silver', 'Sleek silver earphones', 55, 'https://resources.cdn-kaspi.kz/img/m/p/h07/h7a/84985846595614.jpg?format=gallery-large', 4.1, 'https://kaspi.kz/shop/p/oem-p9-serebristyi-116112464/?c=750000000',false),
      new Item(0, "earphones", 13, 'OEM Air Pro 2 White', 'Affordable white earphones', 40, 'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-large', 4.3, 'https://kaspi.kz/shop/p/oem-air-pro-2-belyi-118366664/?c=750000000',false),
      new Item(0, "earphones", 14, 'Hydra Minor Black', 'Stylish black earphones', 50, 'https://resources.cdn-kaspi.kz/img/m/p/h85/h24/86475584700446.jpg?format=gallery-large', 3.9, 'https://kaspi.kz/shop/p/hydra-minor-chernyi-120724113/?c=750000000',false)
    )
    this.products_furniture.push(
      new Item(0, "furniture", 15, 'Morbido Sofa', 'Comfortable grey sofa', 300, 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h48/86777038274590.png?format=gallery-large', 4.7, 'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000',false),
      new Item(0, "furniture", 16, 'Izox Coat Rack', 'Metal black coat rack', 80, 'https://resources.cdn-kaspi.kz/img/m/p/h60/he1/84668650291230.png?format=gallery-large', 3.9, 'https://kaspi.kz/shop/p/veshalka-napol-naja-izox-metall-110x150-sm-chernyi-113366378/?c=750000000',false),
      new Item(0, "furniture", 17, 'Modern TV Stand', 'Stylish white-brown TV stand', 150, 'https://resources.cdn-kaspi.kz/img/m/p/h02/hda/67423804784670.jpg?format=gallery-large', 4.1, 'https://kaspi.kz/shop/p/tv-tumba-napol-naja-modern-new-design-tt-180x40x35-sm-belyi-korichnevyi-108268540/?c=750000000',false),
      new Item(0, "furniture", 18, 'Nasip Raiana Sofa', 'Light brown fabric sofa', 400, 'https://resources.cdn-kaspi.kz/img/m/p/p70/pdb/6045250.jpeg?format=gallery-large', 4.5, 'https://kaspi.kz/shop/p/divan-prjamoi-nasip-raiana-obivka-tkan-85h230h70-sm-svetlo-korichnevyi-115023255/?c=750000000',false),
      new Item(0, "furniture", 19, 'Abuer Bookshelf', 'White floor-standing bookshelf', 120, 'https://resources.cdn-kaspi.kz/img/m/p/had/hfe/85358048673822.jpg?format=gallery-large', 4.2, 'https://kaspi.kz/shop/p/stellazh-napol-nyi-abuer-66x31x132-sm-belyi-104771353/?c=750000000',false)
    );
    this.categories.forEach(category => {
      this.categoryVisibility[category] = false;
    });
  }

  getProductsForCategory(category: string): Item[] {
    switch (category) {
      case "Phones":
        return this.products_phones;
      case "Laptops":
        return this.products_laptops;
      case "Earphones":
        return this.products_earphones;
      case "Furniture":
        return this.products_furniture;
      default:
        return [];
    }
  }

  incrementLike(products: Item): void {
    products.likes++;
    console.log("pressed");
  }

  removeProduct(category: String, productId: number): void {
    if (category === "phones") {
      this.products_phones = this.products_phones.filter(product => product.id !== productId);
    } else if (category === "laptops") {
      this.products_laptops = this.products_laptops.filter(product => product.id !== productId);
    } else if (category === "earphones") {
      this.products_earphones = this.products_earphones.filter(product => product.id !== productId);
    } else if (category === "furniture") {
      this.products_furniture = this.products_furniture.filter(product => product.id !== productId);
    }
  }

  sharing(id: number): void {
    const productLink = this.products[id-1].productLink;
    const encodedLink = encodeURIComponent(productLink);
    const telegramShareUrl = `https://t.me/share/url?url=${encodedLink}`;
    window.open(telegramShareUrl, '_blank');
  }

  toogleFavorite(product: Item){
    Product.isFavorite = !Product.isFavorite;
  }

