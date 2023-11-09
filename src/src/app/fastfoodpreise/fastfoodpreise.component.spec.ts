import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastfoodpreiseComponent } from './fastfoodpreise.component';

describe('FastfoodpreiseComponent', () => {
  let component: FastfoodpreiseComponent;
  let fixture: ComponentFixture<FastfoodpreiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FastfoodpreiseComponent]
    });
    fixture = TestBed.createComponent(FastfoodpreiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
