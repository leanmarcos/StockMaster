import { Injectable } from '@angular/core';
import { Article } from './components/selection/selection.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


const URL = 'https://6a5b7ba864f700df5bd70592.mockapi.io/api/products';

@Injectable({
  providedIn: 'root',
})

export class Products {

  private products : Article [] = [];

  constructor(private http: HttpClient){}

  ngOnInit() : void {
    this.getAll()
  
    for (const p of this.products) {
      if (p.discount > 0) {
        p.price = p.originalPrice - (p.originalPrice * p.discount) / 100;
      }
    }
      
  }


  public getAll() : Observable<Article []> {
    return this.http.get<Article []>(URL).pipe(
      tap( (art : Article[]) => console.log(art))
    );
  }

  getProduct(id: any): Observable<Article> {
    console.log(id);
    console.log(`${URL}/${id}`);
      return this.http.get<Article>(`${URL}/${id}`).pipe(
        tap((dd : Article) => console.log(dd))
      )
  }

}
