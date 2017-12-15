import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseLikesComponent } from './firebase-likes.component';

describe('FirebaseLikesComponent', () => {
  let component: FirebaseLikesComponent;
  let fixture: ComponentFixture<FirebaseLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
