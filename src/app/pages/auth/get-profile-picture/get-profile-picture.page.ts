import { Component, ViewChildren, QueryList, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-get-profile-picture',
  templateUrl: './get-profile-picture.page.html',
  styleUrls: ['./get-profile-picture.page.scss'],
})
export class GetProfilePicturePage implements AfterViewInit, OnInit {
  @ViewChildren('imageElement') imageElements!: QueryList<any>;

  private imageElement: any;
  private previousRegisterData!: User;

  hasPhoto: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngAfterViewInit() {
    this.imageElement = this.imageElements.first.nativeElement;
  }

  ngOnInit(): void {
    this.previousRegisterData = this.authService.getUserRegisteringData();
    console.log(this.previousRegisterData)
  }

  public navigateByUrl(url: string) {
    this.router.navigate([url]);
  }

  public async takePicture() {
    try {
      console.log('Requesting camera access...');
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });
      console.log('Photo captured:', image);

      const imageUrl = image.dataUrl;

      if (this.imageElement) {
        this.imageElement.src = imageUrl;
      } else {
        console.error('Image element is not available.');
      }

      this.hasPhoto = true;
    } catch (error) {
      console.error('Unable to take photo!', error);
      if (error instanceof DOMException) {
        console.error('DOMException details:', error);
      }
    }
  }
}
