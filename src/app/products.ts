import { Injectable } from '@angular/core';
import { Article } from './components/selection/selection.interface';

@Injectable({
  providedIn: 'root',
})
export class Products {
  protected products: Article[] = [
    { id: 1, name: 'New Balance 350 Unisex', imgURL: '/newbalance1530.png', price: 150, originalPrice: 200, disscount: 20, description: "The original MR530 combines the aesthetics of the turn of the millennium with the reliability of a high-mileage running shoe. The new 530 model offers a contemporary, everyday style with a performance-oriented design. The segmented ABZORB midsole is paired with a classic upper design featuring synthetic and mesh overlays, which uses bold angles and curves to create a distinctive, high-tech look.", reviewAverage: "4.5", reviewAmount: "33", soldAmount: "44", stock: 20},
    { id: 2, name: 'Headphones Sony WH-CH 1500', imgURL: '/sonywhch1500.png', price: 32, originalPrice: 350, disscount: 10, description: "The Sony WH-CH510 is a lightweight, wireless Bluetooth on-ear headphone designed for everyday listening. Combining long battery life, comfortable wear, and clear audio performance, it offers a reliable and affordable solution for music, calls, and entertainment on the go. Featuring Bluetooth connectivity, the WH-CH510 pairs quickly with compatible devices and provides a stable wireless connection. Its rechargeable battery delivers up to 35 hours of playback on a single charge, while a quick 10-minute charge offers up to 90 minutes of listening time. The headphones also include a built-in microphone for hands-free calls and voice assistant support, making it easy to manage calls and access smartphone features.", reviewAverage: "4.7", reviewAmount: "17", soldAmount: "150", stock: 9 },
    { id: 3, name: "Nike Air Force 1'07 LV8", imgURL: '/nikeairforce.png', price: 100, originalPrice: 400, disscount: 45, description: "The Nike Air Force 1 '07 LV8 is a modern take on one of Nike's most iconic sneaker silhouettes, blending classic basketball heritage with elevated materials and fresh design details. Built with a durable leather or mixed-material upper (depending on the colorway), the shoe delivers a premium look while maintaining the timeless appeal of the original Air Force 1.Designed for both style and everyday comfort, the Air Force 1 '07 LV8 features Nike Air cushioning in the midsole for lightweight impact protection, a padded low-cut collar for a secure fit, and a sturdy rubber outsole with the signature circular traction pattern for reliable grip. The LV8 (Elevate) edition often incorporates unique textures, bold color combinations, embroidered accents, or premium finishes that distinguish it from the standard Air Force 1.", reviewAverage: "3.7", reviewAmount: "3", soldAmount: "5", stock: 4 },
    { id: 4, name: 'Xiaomi Smart Band 9 Active 1.47', imgURL: '/xiaomiredmi.png', price: 43, originalPrice: 43, disscount: 0, description: "Experience the revolution in health and fitness tracking with the Xiaomi Smart Band 9 Active Global Smartwatch. Featuring a 1.47-inch display, this smartwatch combines style and functionality, allowing you to track your daily activities with ease. Its lightweight, water-resistant design—with a maximum depth rating of 50 meters—makes it ideal for any adventure, whether you're in the pool or running in the rain.Compatible with iOS and Android operating systems, this smartwatch offers Bluetooth connectivity, allowing you to receive notifications and track your health goals right on your wrist. With 256 MB of internal memory and RAM, it delivers smooth and efficient performance, ideal for those looking for a reliable companion in their daily routine.", reviewAverage: "4.8", reviewAmount: "1", soldAmount: "2", stock: 50 }
  ]

  ngOnInit() {
    for (const p of this.products) {
      if (p.disscount > 0) {
        p.price = p.originalPrice - (p.originalPrice * p.disscount) / 100;
      }
    }
  }

  getAll() {
    return this.products;
  }

  getProduct(id: number): Article | undefined {
    return this.products.at(id);
  }

}
