import { ApplicationConfig, Component, signal } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import {routes } from './app-routing-module'

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = 'StockMaster';
}

export const appRoute : ApplicationConfig = {
      providers: [
        provideRouter(routes)
      ]
}