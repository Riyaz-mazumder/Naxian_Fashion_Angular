import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproveOrderComponent } from './aprove-order.component';

describe('AproveOrderComponent', () => {
  let component: AproveOrderComponent;
  let fixture: ComponentFixture<AproveOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AproveOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AproveOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
