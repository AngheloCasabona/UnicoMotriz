import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallerDireccionComponent } from './taller-direccion.component';

describe('TallerDireccionComponent', () => {
  let component: TallerDireccionComponent;
  let fixture: ComponentFixture<TallerDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallerDireccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallerDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
