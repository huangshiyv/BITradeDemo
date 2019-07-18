import { Injectable } from '@angular/core';
import { ProductDetailModel } from 'src/app/shared/models/ProductDetailModel';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: ProductDetailModel[] = [];
  private kEY = 'cartItems';
  total;
  constructor() {
    if (window.localStorage && localStorage.getItem(this.kEY) !== null) {
      this.items = JSON.parse(localStorage.getItem(this.kEY));
      this.getTotalPrice();
    }
  }

  addToCart(product) {
    this.items.push(product);
    this.saveToLocalStorage();
  }

  deleteCartitem(id) {
    this.items = this.items.filter(item => item.Id !== id);
    this.saveToLocalStorage();
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.clearLocalStorage();
    return this.items;
  }

  getTotalPrice() {
    this.total = this.items.reduce((a, b) => a + b.price * b.quantity, 0);
  }

  private saveToLocalStorage() {
    localStorage.setItem(this.kEY, JSON.stringify(this.items));
  }

  private clearLocalStorage() {
    localStorage.removeItem(this.kEY);
  }

}
