import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarktpreiseComponent } from './supermarktpreise.component';

describe('SupermarktpreiseComponent', () => {
  let component: SupermarktpreiseComponent;
  let fixture: ComponentFixture<SupermarktpreiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupermarktpreiseComponent]
    });
    fixture = TestBed.createComponent(SupermarktpreiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
