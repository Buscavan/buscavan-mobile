import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripInfoPage } from './trip-info.page';

describe('TripInfoPage', () => {
  let component: TripInfoPage;
  let fixture: ComponentFixture<TripInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TripInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
