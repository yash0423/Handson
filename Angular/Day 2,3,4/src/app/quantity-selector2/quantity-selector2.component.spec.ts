import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantitySelector2Component } from './quantity-selector2.component';

describe('QuantitySelector2Component', () => {
  let component: QuantitySelector2Component;
  let fixture: ComponentFixture<QuantitySelector2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantitySelector2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantitySelector2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
