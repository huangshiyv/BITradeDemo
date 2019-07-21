import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() tt = 1;
  constructor(public cartService: CartService) {
   }

  ngOnInit() {
  }

  public delete(id) {
    this.cartService.deleteCartitem(id);
  }

  test() {
    this.tt +=1;
  }

  OnChange(event,id) {
    this.cartService.caculateTotal();
   }
}
