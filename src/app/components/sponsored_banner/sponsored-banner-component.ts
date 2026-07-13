import { Component, OnDestroy, OnInit, ChangeDetectorRef } from "@angular/core";
import { Sponsor } from "./sponsored-banner-interface";

@Component({
        selector: 'sponsored-banner',
        templateUrl: './sponsored-banner.html',
        styleUrl: './sponsored-banner.scss'
})

export class SponsoredBanner implements OnInit, OnDestroy {
  sponsors: Sponsor[] = [
    { id: 1, name: 'Sponsor A', imageURL: '/adidasbanner.avif' },
    { id: 2, name: 'Sponsor B', imageURL: '/northfacebanner.webp' },
    { id: 3, name: 'Sponsor C', imageURL: '/bannerpuma.webp' },
    { id: 4, name: 'Sponsor D', imageURL: '/bannersony.png'}
  ];

   constructor(private cdr: ChangeDetectorRef) {}
  actualBanner = 0;
  private intervalId: any;

  ngOnInit() {
      console.log('ngOnInit ejecutado');
    this.intervalId = setInterval(() => {
            console.log('tick', this.actualBanner);
            console.log('URL actual:', this.sponsors[this.actualBanner].imageURL);

      this.actualBanner = (this.actualBanner + 1) % this.sponsors.length;
      this.cdr.detectChanges(); 
    }, 5000); 
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); 
  }
}
