import { Component, OnInit, Input} from '@angular/core';
import { ProductDetailModel } from '../../models/ProductDetailModel';
@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html',
  styleUrls: ['./product-grid-item.component.css']
})
export class ProductGridItemComponent implements OnInit {

  @Input() productDetailModel: ProductDetailModel;
  constructor() { }

  ngOnInit() {
  }

}
