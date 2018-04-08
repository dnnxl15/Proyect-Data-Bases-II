import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTopicManagerComponent } from './subject-topic-manager.component';

describe('SubjectTopicManagerComponent', () => {
  let component: SubjectTopicManagerComponent;
  let fixture: ComponentFixture<SubjectTopicManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectTopicManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTopicManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
