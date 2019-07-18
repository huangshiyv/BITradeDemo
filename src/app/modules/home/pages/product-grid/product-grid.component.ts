import { Component, OnInit } from '@angular/core';
import { ProductInfoService } from 'src/app/core/services/product-info.service';
import { ProductDetailModel } from 'src/app/shared/models/ProductDetailModel';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  constructor() { }
  ngOnInit() {

  }

}
