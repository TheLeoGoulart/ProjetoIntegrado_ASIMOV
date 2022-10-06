import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSkateComponent } from './edit-skate.component';

describe('EditSkateComponent', () => {
  let component: EditSkateComponent;
  let fixture: ComponentFixture<EditSkateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSkateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSkateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
