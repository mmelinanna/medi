import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSuggestionsComponent } from './product-suggestions.component';

describe('ProductSuggestionsComponent', () => {
  let component: ProductSuggestionsComponent;
  let fixture: ComponentFixture<ProductSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSuggestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
