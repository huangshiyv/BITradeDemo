import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { CartModel } from '../../models/CartModel';

@Component({
  selector: 'app-cart-subwindow',
  templateUrl: './cart-subwindow.component.html',
  styleUrls: ['./cart-subwindow.component.css']
})
export class CartSubwindowComponent implements OnInit {
  item: CartModel;
  constructor(private cartService: CartService, private renderer: Renderer2, private el: ElementRef) {
    this.item = cartService.getItems();
  }


  ngOnInit() {
  }


  delete(id) {
    this.cartService.deleteCartitem(id);
  }

  closeCartWindow() {
    this.renderer.removeClass(this.el.nativeElement.querySelector('.minicart__active'), 'is-visible');
  }

}
