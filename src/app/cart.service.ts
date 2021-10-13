import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  /* In the CartService class, define an “items” property to store the array of the current products in the car. 
  Following this, we will define methods to add items to the cart, return cart items, and clear the cart items: */
  items: Array<Object> = [];

  constructor() { }

  /* The addToCart() method appends a product to an array of items. */
  addToCart(product:object) {
    this.items.push(product);
  }

  /* The getItems() method collects the items users add to the cart and returns each item with its associated quantity. */
  getItems() {
    return this.items;
  }

  /* The clearCart() method returns an empty array of items. */
  clearCart() {
    this.items = [];
    return this.items;
  }
}
