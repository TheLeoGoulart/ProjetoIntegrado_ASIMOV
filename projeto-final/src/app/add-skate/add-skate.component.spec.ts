import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkateComponent } from './add-skate.component';

describe('AddSkateComponent', () => {
  let component: AddSkateComponent;
  let fixture: ComponentFixture<AddSkateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSkateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
