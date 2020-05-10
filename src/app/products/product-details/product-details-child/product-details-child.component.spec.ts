import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsChildComponent } from './product-details-child.component';

describe('ProductDetailsChildComponent', () => {
  let component: ProductDetailsChildComponent;
  let fixture: ComponentFixture<ProductDetailsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
