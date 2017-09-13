import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLikesComponent } from './page-likes.component';

describe('PageLikesComponent', () => {
  let component: PageLikesComponent;
  let fixture: ComponentFixture<PageLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
