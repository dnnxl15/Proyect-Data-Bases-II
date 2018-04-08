import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeRegistryComponent } from './grade-registry.component';

describe('GradeRegistryComponent', () => {
  let component: GradeRegistryComponent;
  let fixture: ComponentFixture<GradeRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
