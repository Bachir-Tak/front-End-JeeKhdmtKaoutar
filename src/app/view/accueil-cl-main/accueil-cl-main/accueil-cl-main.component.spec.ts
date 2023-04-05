import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilClMainComponent } from './accueil-cl-main.component';

describe('AccueilClMainComponent', () => {
  let component: AccueilClMainComponent;
  let fixture: ComponentFixture<AccueilClMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilClMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilClMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
