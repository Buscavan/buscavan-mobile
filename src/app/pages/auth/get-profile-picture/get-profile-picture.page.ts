import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-profile-picture',
  templateUrl: './get-profile-picture.page.html',
  styleUrls: ['./get-profile-picture.page.scss'],
})
export class GetProfilePicturePage {

  constructor(private router: Router) { }

  public navigateByUrl(url: string) {
    this.router.navigate([url]);
  }
}
