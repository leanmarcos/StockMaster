import { Component, inject, OnInit } from "@angular/core";
import { Article } from "../selection/selection.interface";
import { Products } from "../../products";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";

@Component({
    selector: 'selected-product',
    imports: [AsyncPipe],
    templateUrl: './selected-product.html',
    styleUrl: './selected-product.scss'
})

export class SelectedProduct implements OnInit {
    private source: Products;
    private router : Router;
    protected product$ : Observable<Article>;

    constructor(private route: ActivatedRoute, products: Products, router : Router) {
        this.source = products;
        this.router = router;
        this.product$ = this.source.getProduct(Number(this.route.snapshot.paramMap.get('id')));

    }

    ngOnInit() {
        if (!this.product$) {
            this.router.navigate(['/404']);
        }
    }
}