import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSubwindowComponent } from './cart-subwindow.component';

describe('CartSubwindowComponent', () => {
  let component: CartSubwindowComponent;
  let fixture: ComponentFixture<CartSubwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartSubwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSubwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
