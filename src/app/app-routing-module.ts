import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SponsoredBanner } from './components/sponsored_banner/sponsored-banner-component';
import { SelectedProduct } from './components/selected_product/selected-product.component';
import { NotFound } from './components/not_found/not-found.component';
import { HomePage } from './components/home-page/home-page-component';

export const routes: Routes = [{path: '', component: HomePage},
    {path: 'product/:id', component: SelectedProduct}, 
    {path: 'home', component: HomePage },
    {path: '404', component: NotFound},
    {path: '**' , component: NotFound}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

