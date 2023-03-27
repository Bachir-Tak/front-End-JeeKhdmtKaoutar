import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatCommandeListComponent } from './achat-commande-list.component';

describe('AchatCommandeListComponent', () => {
  let component: AchatCommandeListComponent;
  let fixture: ComponentFixture<AchatCommandeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchatCommandeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchatCommandeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
