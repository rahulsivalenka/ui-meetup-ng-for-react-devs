import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  items: CartItem[] = [];

  get count() {
    return this.items.length;
  }

  // Code to fetch and set the items
}
