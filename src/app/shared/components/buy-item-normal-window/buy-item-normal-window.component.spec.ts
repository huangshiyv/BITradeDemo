import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyItemNormalWindowComponent } from './buy-item-normal-window.component';

describe('BuyItemNormalWindowComponent', () => {
  let component: BuyItemNormalWindowComponent;
  let fixture: ComponentFixture<BuyItemNormalWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyItemNormalWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyItemNormalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
