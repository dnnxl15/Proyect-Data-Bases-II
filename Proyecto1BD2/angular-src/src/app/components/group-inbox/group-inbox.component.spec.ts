import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupInboxComponent } from './group-inbox.component';

describe('GroupInboxComponent', () => {
  let component: GroupInboxComponent;
  let fixture: ComponentFixture<GroupInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
