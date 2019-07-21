import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ProductInfoService } from 'src/app/core/services/product-info.service';
import { ProductDetailModel, ProductListItemsModel } from '../../models/ProductDetailModel';
@Component({
  selector: 'app-paging-item',
  templateUrl: './paging-item.component.html',
  styleUrls: ['./paging-item.component.css']
})
export class PagingItemComponent implements OnInit {
  @Input() pageSize = 21;
  @Input() maxPages = 7;
  @Input() items: Array<any>;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() totalItems;
  @Input() fetchUrl: string;
  pager: any = {};

  constructor(private productInfoService: ProductInfoService<ProductListItemsModel>, private router: Router,
    private activatedRoute: ActivatedRoute) {

  }
  fetchUrl1 = 'http://localhost:53994/api/WebSiteData?jsonQuery={category: "cheveux"}&pageSize=20&page=1';
  ngOnInit() {
    // this.pagesArray = Array(pages).fill(0).map((x, i) => i + 1);
    if (this.items && this.items.length) {
      this.setPage(this.initialPage);
    } else {
      // this.pager = this.paginate(this.totalItems, this.initialPage, this.pageSize, this.maxPages);
      this.dynamicalLoadItemsBypage(this.initialPage);
    }
  }

  private dynamicalLoadItemsBypage(page: number) {


    this.activatedRoute.params.pipe(mergeMap(params => {
      const jsonObject: { [key: string]: string } = {
        siteName: params.shopName  // 'marionnaud'
      };
      if (params.category) {
        jsonObject.category = params.category;
      }
      return this.productInfoService.getProductByID(JSON.stringify(jsonObject), this.pageSize, page);
    })
    ).subscribe(data => {
      this.pager = this.paginate(data.length, page, this.pageSize, this.maxPages);
      this.productInfoService.fromItem = (page - 1) * this.pageSize + 1;
      this.productInfoService.toItem = page * this.pageSize >  data.length ? data.length : page * this.pageSize;
      this.productInfoService.totalItems = data.length;
      this.productInfoService.setItems(data);
    }
    );

  }

  private setPage(page: number) {
    // get new pager object for specified page
    this.pager = this.paginate(this.items.length, page, this.pageSize, this.maxPages);

    // get new page of items from items array
    const pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);

    // call change page function in parent component
    // this.changePage.emit(pageOfItems);
  }

  paginate(totalItems: number, currentPage: number = 1, pageSize: number = 20, maxPages: number = 100) {
    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number;
    let endPage: number;
    if (totalPages <= maxPages) {
      // total pages less than max so show all pages
      startPage = 1;
      endPage = totalPages;
    } else {
      // total pages more than max so calculate start and end pages
      const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        // current page near the start
        startPage = 1;
        endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        // current page near the end
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
      } else {
        // current page somewhere in the middle
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  }

}
