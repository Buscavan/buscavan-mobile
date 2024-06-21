import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterTripPage } from './register-trip.page';

describe('RegisterTripPage', () => {
  let component: RegisterTripPage;
  let fixture: ComponentFixture<RegisterTripPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
