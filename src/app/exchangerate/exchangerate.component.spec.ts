import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangerateComponent } from './exchangerate.component';

describe('ExchangerateComponent', () => {
  let component: ExchangerateComponent;
  let fixture: ComponentFixture<ExchangerateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangerateComponent]
    });
    fixture = TestBed.createComponent(ExchangerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
