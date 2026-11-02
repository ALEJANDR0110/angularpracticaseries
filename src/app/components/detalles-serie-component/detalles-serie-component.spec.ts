import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesSerieComponent } from './detalles-serie-component';

describe('DetallesSerieComponent', () => {
  let component: DetallesSerieComponent;
  let fixture: ComponentFixture<DetallesSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallesSerieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesSerieComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
