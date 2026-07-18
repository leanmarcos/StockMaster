import { Component } from "@angular/core";
import { Article } from "./selection.interface";
import { Router } from "@angular/router";
import { Products } from "../../products";
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";

@Component({
    'selector': 'selection',
    imports: [AsyncPipe],
    templateUrl: './selection.html',
    styleUrl: './selection.scss',
    standalone: true
})

export class Selection {
    
    public products$ : Observable<Article []>;

    constructor(private router : Router, products : Products) {
        this.products$ = products.getAll();
    }

    getToProduct(id : string){
        this.router.navigate(['/product', id])
    }
}