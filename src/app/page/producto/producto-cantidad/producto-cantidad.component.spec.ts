import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCantidadComponent } from './producto-cantidad.component';

describe('ProductoCantidadComponent', () => {
  let component: ProductoCantidadComponent;
  let fixture: ComponentFixture<ProductoCantidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoCantidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoCantidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
