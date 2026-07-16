import { Component, inject, OnInit } from "@angular/core";
import { Article } from "../selection/selection.interface";
import { Products } from "../../products";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'selected-product',
    templateUrl: './selected-product.html',
    styleUrl: './selected-product.scss'
})

export class SelectedProduct implements OnInit {
    private source: Products;
    private router : Router;
    public product: Article | undefined;

    constructor(private route: ActivatedRoute, products: Products, router : Router) {
        this.source = products;
        this.router = router;
    }

    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'))-1;
        this.product = this.source.getProduct(id);

        if (!this.product) {
            this.router.navigate(['/404']);
        }
    }
}