import { Injectable } from '@angular/core';
import { CartModel } from 'src/app/shared/models/CartModel';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private item: CartModel;
  private kEY = 'cartItems';
  constructor() {
    if (window.localStorage && localStorage.getItem(this.kEY) !== null) {
      this.item = JSON.parse(localStorage.getItem(this.kEY));
      this.getTotalPrice();
    } else {
      this.item = new CartModel([], 0);
    }
  }


  addToCart(product) {
    this.item.items.push(product);
    this.caculateTotal();
  }

  deleteCartitem(id) {
    this.item.items = this.item.items.filter(item => item.Id !== id);
    this.caculateTotal();
  }

  getItems() {
    return this.item;
  }

  clearCart() {
    this.item = new CartModel([], 0);
    this.clearLocalStorage();
    return this.item;
  }

  getTotalPrice() {
    return this.item.items.reduce((a, b) => a + b.price * b.quantity, 0);
  }

  caculateTotal() {
    this.item.cartTotal = this.getTotalPrice();
    this.saveToLocalStorage();

  }

  saveToLocalStorage() {
    localStorage.setItem(this.kEY, JSON.stringify(this.item));
  }

  private clearLocalStorage() {
    localStorage.removeItem(this.kEY);
  }

}
