import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapulatifAchatCreateComponent } from './recapulatif-achat-create.component';

describe('RecapulatifAchatCreateComponent', () => {
  let component: RecapulatifAchatCreateComponent;
  let fixture: ComponentFixture<RecapulatifAchatCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapulatifAchatCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecapulatifAchatCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
