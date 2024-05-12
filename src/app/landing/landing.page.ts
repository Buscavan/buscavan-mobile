import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {

  constructor(private router: Router) { }


  public navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
