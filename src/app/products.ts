import { Injectable } from '@angular/core';
import { Article } from './components/selection/selection.interface';

@Injectable({
  providedIn: 'root',
})
export class Products {
    protected products: Article[] = [
        {id: 1, name: 'New Balance 350 Unisex', imgURL: '/newbalance1530.png', price: 150, originalPrice: 200, disscount: 20},
        {id: 2, name: 'Headphones Sony WH-CH 1500', imgURL: '/sonywhch1500.png', price: 32, originalPrice: 350, disscount: 10},
        {id: 3, name: 'Sneakers Nike Air Force 1507', imgURL: '/nikeairforce.png', price: 100, originalPrice: 400, disscount: 45},
        {id: 4, name: 'Smartband Xiaomi Redmi 8', imgURL: '/xiaomiredmi.png', price: 43, originalPrice: 43, disscount: 0 }
    ]

    ngOnInit(){
       for (const p of this.products) {
            if (p.disscount > 0) {
                p.price = p.originalPrice - (p.originalPrice * p.disscount) / 100;
            }
        }
    }

    getAll(){
      return this.products;
    }

    getProduct(id : number) : Article | undefined{
      return this.products.at(id);
    }
  
}
