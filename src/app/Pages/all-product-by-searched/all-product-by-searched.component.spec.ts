import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductBySearchedComponent } from './all-product-by-searched.component';

describe('AllProductBySearchedComponent', () => {
  let component: AllProductBySearchedComponent;
  let fixture: ComponentFixture<AllProductBySearchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProductBySearchedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProductBySearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
