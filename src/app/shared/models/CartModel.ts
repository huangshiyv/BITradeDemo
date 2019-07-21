import { ProductDetailModel } from './ProductDetailModel';

export class CartModel {
  cartTotal: number;
  items: Array<ProductDetailModel>;
  constructor(items: Array<ProductDetailModel>, cartTotal: number) {
    this.items = items;
    this.cartTotal = cartTotal;
  }
}
