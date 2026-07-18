import { Component } from "@angular/core";
import { HomeModule } from "./home-page.module";
import { SponsoredBanner } from "../sponsored_banner/sponsored-banner-component";
import { Selection } from "../selection/selection.component";
import { AsyncPipe } from "@angular/common";


@Component({
    selector: 'home',
    imports: [SponsoredBanner, Selection, AsyncPipe],
    templateUrl: './home-page.html',
    styleUrl: './home-page.scss'
})

export class HomePage{}