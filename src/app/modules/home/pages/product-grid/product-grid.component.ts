import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  constructor(private location: Location) {
   }
  ngOnInit() {

  }

   goBack(): void {
    this.location.back();
  }


}
