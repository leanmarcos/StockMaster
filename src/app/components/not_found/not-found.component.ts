import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'not-found',
    templateUrl: './not-found.html',
    styleUrl: './not-found.scss'
})


export class NotFound{
    constructor(private routes : Router){}

    getBackHome(){
        this.routes.navigateByUrl("home");
    }
};