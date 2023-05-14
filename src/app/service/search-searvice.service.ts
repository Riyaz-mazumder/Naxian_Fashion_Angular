import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchSearviceService {

  constructor() { }

  private allProductsArray = new BehaviorSubject<any[]>([]);

  get allProductsArray$() {
    return this.allProductsArray.asObservable();
  }

  updateAllProductsArray(array: any[]) {
    this.allProductsArray.next(array);
  }
}
