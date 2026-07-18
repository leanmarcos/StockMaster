import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SponsoredBanner } from './components/sponsored_banner/sponsored-banner-component';
import { Selection } from './components/selection/selection.component';
import { SelectedProduct } from './components/selected_product/selected-product.component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SponsoredBanner,
    Selection,
    SelectedProduct,
    RouterOutlet
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()) // HTTPClientModule deprecated 
  ],
  bootstrap: [App]
})
export class AppModule { }
