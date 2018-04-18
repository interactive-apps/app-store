import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPreferencesComponent } from './top-preferences.component';

describe('TopPreferencesComponent', () => {
  let component: TopPreferencesComponent;
  let fixture: ComponentFixture<TopPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
