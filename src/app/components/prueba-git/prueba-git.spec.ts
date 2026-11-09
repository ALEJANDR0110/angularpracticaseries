import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebaGit } from './prueba-git';

describe('PruebaGit', () => {
  let component: PruebaGit;
  let fixture: ComponentFixture<PruebaGit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PruebaGit],
    }).compileComponents();

    fixture = TestBed.createComponent(PruebaGit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
