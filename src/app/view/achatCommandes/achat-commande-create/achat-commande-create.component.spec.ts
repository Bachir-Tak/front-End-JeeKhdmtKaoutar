import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatCommandeCreateComponent } from './achat-commande-create.component';

describe('AchatCommandeCreateComponent', () => {
  let component: AchatCommandeCreateComponent;
  let fixture: ComponentFixture<AchatCommandeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchatCommandeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchatCommandeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
