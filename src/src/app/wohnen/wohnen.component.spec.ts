import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WohnenComponent } from './wohnen.component';

describe('WohnenComponent', () => {
  let component: WohnenComponent;
  let fixture: ComponentFixture<WohnenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WohnenComponent]
    });
    fixture = TestBed.createComponent(WohnenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
