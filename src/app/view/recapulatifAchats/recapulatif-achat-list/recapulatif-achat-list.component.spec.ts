import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapulatifAchatListComponent } from './recapulatif-achat-list.component';

describe('RecapulatifAchatListComponent', () => {
  let component: RecapulatifAchatListComponent;
  let fixture: ComponentFixture<RecapulatifAchatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapulatifAchatListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecapulatifAchatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
