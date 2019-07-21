import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import { CategoriesSideBarModel } from '../../models/CategoriesSideBarModel';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-categories-sidebar',
  templateUrl: './product-categories-sidebar.component.html',
  styleUrls: ['./product-categories-sidebar.component.css']
})
export class ProductCategoriesSidebarComponent implements OnInit {
  cartegorySidebarList$: Observable<CategoriesSideBarModel[]>;
  constructor(private sidebarService: SidebarService, private router: Router, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      if (!param.category) {
        const siteName = this.router.url.split('/')[2];
        this.cartegorySidebarList$ = this.sidebarService.getCategorySideBarList(siteName);
      }
    });
  }
}
