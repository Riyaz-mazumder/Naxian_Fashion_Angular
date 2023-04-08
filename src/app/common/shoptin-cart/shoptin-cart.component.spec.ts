import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoptinCartComponent } from './shoptin-cart.component';

describe('ShoptinCartComponent', () => {
  let component: ShoptinCartComponent;
  let fixture: ComponentFixture<ShoptinCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoptinCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoptinCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
