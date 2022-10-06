import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkateListComponent } from './skate-list.component';

describe('SkateListComponent', () => {
  let component: SkateListComponent;
  let fixture: ComponentFixture<SkateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
