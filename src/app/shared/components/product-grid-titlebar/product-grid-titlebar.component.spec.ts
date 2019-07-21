import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridTitlebarComponent } from './product-grid-titlebar.component';

describe('ProductGridTitlebarComponent', () => {
  let component: ProductGridTitlebarComponent;
  let fixture: ComponentFixture<ProductGridTitlebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGridTitlebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGridTitlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
