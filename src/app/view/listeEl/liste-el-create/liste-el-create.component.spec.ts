import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeELCreateComponent } from './liste-el-create.component';

describe('ListeELCreateComponent', () => {
  let component: ListeELCreateComponent;
  let fixture: ComponentFixture<ListeELCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeELCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeELCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
