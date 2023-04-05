import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilClComponent } from './accueil-cl.component';

describe('AccueilClComponent', () => {
  let component: AccueilClComponent;
  let fixture: ComponentFixture<AccueilClComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilClComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
