import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseGroupComponent } from './add-course-group.component';

describe('AddCourseGroupComponent', () => {
  let component: AddCourseGroupComponent;
  let fixture: ComponentFixture<AddCourseGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
