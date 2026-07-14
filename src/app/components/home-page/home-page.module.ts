import { NgModule } from "@angular/core";
import { SponsoredBanner } from "../sponsored_banner/sponsored-banner-component";
import { Selection } from "../selection/selection.component";

@NgModule({
  imports: [
    SponsoredBanner,
    Selection,
  ]

})

export class HomeModule {}