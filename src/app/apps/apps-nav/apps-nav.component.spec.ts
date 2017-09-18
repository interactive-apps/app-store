import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsNavComponent } from './apps-nav.component';

describe('AppsNavComponent', () => {
  let component: AppsNavComponent;
  let fixture: ComponentFixture<AppsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
