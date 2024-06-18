import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetCnhPicturePage } from './get-cnh-picture.page';

describe('GetCnhPicturePage', () => {
  let component: GetCnhPicturePage;
  let fixture: ComponentFixture<GetCnhPicturePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCnhPicturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
