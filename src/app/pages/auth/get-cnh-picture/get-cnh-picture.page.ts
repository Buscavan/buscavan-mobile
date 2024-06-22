import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-get-cnh-picture',
  templateUrl: './get-cnh-picture.page.html',
  styleUrls: ['./get-cnh-picture.page.scss'],
})
export class GetCnhPicturePage implements AfterViewInit {
  @ViewChildren('imageElementFront') imageElementsFront!: QueryList<any>;

  private imageElementFront: any;

  hasFrontPhoto: boolean = false;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.imageElementFront = this.imageElementsFront.first.nativeElement;
  }

  public navigateByUrl(url: string) {
    this.router.navigate([url]);
  }

  public async takePictureFront() {
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

      if (this.imageElementFront) {
        this.imageElementFront.src = imageUrl;
      } else {
        console.error('Image element is not available.');
      }

      this.hasFrontPhoto = true;
    } catch (error) {
      console.error('Unable to take photo!', error);
      if (error instanceof DOMException) {
        console.error('DOMException details:', error);
      }
    }
  }
}
