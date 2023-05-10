import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  constructor(private http: HttpClient) {}

  private urlOfCart = 'http://localhost:8080/api/v1/cart';

  public getAllFromCart() {
    return this.http.get(this.urlOfCart);
  }

  public addToCart(d: any) {
    return this.http.post(this.urlOfCart, d);
  }

  public deleteFromCart(id: number) {
    return this.http.delete(this.urlOfCart + '/' + id);
  }
  public updateCart(d: any) {
    return this.http.put(this.urlOfCart, d);
  }
  public getById(id: number){
    return this.http.get(this.urlOfCart + '/' + id);
  }
}
