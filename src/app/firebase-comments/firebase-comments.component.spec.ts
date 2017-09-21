import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseCommentsComponent } from './firebase-comments.component';

describe('FirebaseCommentsComponent', () => {
  let component: FirebaseCommentsComponent;
  let fixture: ComponentFixture<FirebaseCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
