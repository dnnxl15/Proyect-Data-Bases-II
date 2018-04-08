import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceRegistryComponent } from './attendance-registry.component';

describe('AttendanceRegistryComponent', () => {
  let component: AttendanceRegistryComponent;
  let fixture: ComponentFixture<AttendanceRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
