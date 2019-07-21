import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { ProductDetailModel, ProductListItemsModel } from '../../models/ProductDetailModel';
import { ProductInfoService } from 'src/app/core/services/product-info.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  pageOfItems: Array<ProductDetailModel>;
  constructor(private productInfoService: ProductInfoService<ProductListItemsModel>) { }
  ngOnInit() {
    this.productInfoService.getItems().subscribe(newItems => {
      this.pageOfItems = newItems.items;
    });
  }
}
