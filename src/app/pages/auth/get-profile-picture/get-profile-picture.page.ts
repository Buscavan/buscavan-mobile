import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-get-profile-picture',
  templateUrl: './get-profile-picture.page.html',
  styleUrls: ['./get-profile-picture.page.scss'],
})
export class GetProfilePicturePage implements AfterViewInit {
  @ViewChildren('imageElement') imageElements!: QueryList<any>;

  private imageElement: any;

  hasPhoto: boolean = false;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.imageElement = this.imageElements.first.nativeElement;
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
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });
      console.log('Photo captured:', image);

      const imageUrl = image.webPath;

      console.log('Image URL:', imageUrl);

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
