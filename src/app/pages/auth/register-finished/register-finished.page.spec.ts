import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterFinishedPage } from './register-finished.page';

describe('RegisterFinishedPage', () => {
  let component: RegisterFinishedPage;
  let fixture: ComponentFixture<RegisterFinishedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFinishedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
