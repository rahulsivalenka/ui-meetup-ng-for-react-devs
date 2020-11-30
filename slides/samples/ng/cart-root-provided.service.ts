import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: CartItem[] = [];

  get count() {
    return this.items.length;
  }
}
