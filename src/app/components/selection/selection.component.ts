import { Component } from "@angular/core";
import { Article } from "./selection.interface";
import { Router } from "@angular/router";
import { Products } from "../../products";

@Component({
    'selector': 'selection',
    templateUrl: './selection.html',
    styleUrl: './selection.scss',
    standalone: true
})

export class Selection {
    
    public products : Article [];

    constructor(private router : Router, products : Products) {
        this.products = products.getAll();
    }

    getToProduct(id : number){
        this.router.navigate(['/product', id])
    }
}