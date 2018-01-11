import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCategoryItemComponent } from './app-category-item.component';

describe('AppCategoryItemComponent', () => {
  let component: AppCategoryItemComponent;
  let fixture: ComponentFixture<AppCategoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCategoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
