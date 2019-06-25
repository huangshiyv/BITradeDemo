import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy-item-normal-window',
  templateUrl: './buy-item-normal-window.component.html',
  styleUrls: ['./buy-item-normal-window.component.css']
})
export class BuyItemNormalWindowComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id: string;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

}
