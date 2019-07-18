import { TestBed } from '@angular/core/testing';

import { ProductInfoService } from './product-info.service';
import { ProductDetailModel } from 'src/app/shared/models/ProductDetailModel';

describe('ProductInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductInfoService<ProductDetailModel> = TestBed.get(ProductInfoService);
    expect(service).toBeTruthy();
  });
});
