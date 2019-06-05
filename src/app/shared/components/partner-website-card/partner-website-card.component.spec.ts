import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerWebsiteCardComponent } from './partner-website-card.component';

describe('PartnerWebsiteCardComponent', () => {
  let component: PartnerWebsiteCardComponent;
  let fixture: ComponentFixture<PartnerWebsiteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerWebsiteCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerWebsiteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
