import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagasinCreateComponent } from './magasin-create.component';

describe('MagasinCreateComponent', () => {
  let component: MagasinCreateComponent;
  let fixture: ComponentFixture<MagasinCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagasinCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagasinCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
