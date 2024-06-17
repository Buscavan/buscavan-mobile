import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetProfilePicturePage } from './get-profile-picture.page';

describe('GetProfilePicturePage', () => {
  let component: GetProfilePicturePage;
  let fixture: ComponentFixture<GetProfilePicturePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProfilePicturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
