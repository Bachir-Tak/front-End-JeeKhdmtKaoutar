import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilCreateComponent } from './accueil-create.component';

describe('AccueilCreateComponent', () => {
  let component: AccueilCreateComponent;
  let fixture: ComponentFixture<AccueilCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
