import { Component, OnInit } from '@angular/core';
import { ProductInfoService } from 'src/app/core/services/product-info.service';
import { ProductListItemsModel } from '../../models/ProductDetailModel';

@Component({
  selector: 'app-product-grid-titlebar',
  templateUrl: './product-grid-titlebar.component.html',
  styleUrls: ['./product-grid-titlebar.component.css']
})
export class ProductGridTitlebarComponent implements OnInit {

  constructor(public productInfoService: ProductInfoService<ProductListItemsModel>) { }

  ngOnInit() {
  }

}
