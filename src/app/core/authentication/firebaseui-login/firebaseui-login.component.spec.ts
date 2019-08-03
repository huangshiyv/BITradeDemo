import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseuiLoginComponent } from './firebaseui-login.component';

describe('FirebaseuiLoginComponent', () => {
  let component: FirebaseuiLoginComponent;
  let fixture: ComponentFixture<FirebaseuiLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseuiLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseuiLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
