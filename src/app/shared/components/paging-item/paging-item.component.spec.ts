/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagingItemComponent } from './paging-item.component';

describe('PagingItemComponent', () => {
  let component: PagingItemComponent;
  let fixture: ComponentFixture<PagingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
