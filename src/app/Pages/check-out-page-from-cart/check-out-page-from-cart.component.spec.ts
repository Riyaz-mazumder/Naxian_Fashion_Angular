import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutPageFromCartComponent } from './check-out-page-from-cart.component';

describe('CheckOutPageFromCartComponent', () => {
  let component: CheckOutPageFromCartComponent;
  let fixture: ComponentFixture<CheckOutPageFromCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutPageFromCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckOutPageFromCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
