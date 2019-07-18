import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService) {
   }

  ngOnInit() {
  }

  public delete(id) {
    this.cartService.deleteCartitem(id);
  }

  test() {
    this.cartService.total += 100;
  }
}
