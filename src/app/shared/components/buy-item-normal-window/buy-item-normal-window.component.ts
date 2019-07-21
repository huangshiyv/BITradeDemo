import { map, concatMap, mergeMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInfoService } from 'src/app/core/services/product-info.service';
import { ProductDetailModel } from '../../models/ProductDetailModel';
import { CartService } from 'src/app/core/services/cart.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-buy-item-normal-window',
  templateUrl: './buy-item-normal-window.component.html',
  styleUrls: ['./buy-item-normal-window.component.css']
})
export class BuyItemNormalWindowComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productInfoService: ProductInfoService<ProductDetailModel>,
              private cartService: CartService, private location: Location) { }
  item: ProductDetailModel;
  id: string;
  ngOnInit() {
    this.route.paramMap.pipe(map(params => {
      this.id = params.get('id');
      return params.get('id');
    }),
      mergeMap(id => this.productInfoService.getProductById(id))
    ).subscribe(
      data => {
        this.item = data;
        this.item.quantity = 1;
        console.log(data);
      }
    );
  }
  goBack(): void {
    this.location.back();
  }

  addToCart(product) {
    this.cartService.addToCart(product);
  }

}
