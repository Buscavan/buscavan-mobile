import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-finished',
  templateUrl: './register-finished.page.html',
  styleUrls: ['./register-finished.page.scss'],
})
export class RegisterFinishedPage {

  constructor(private router: Router) { }

  public navigateByUrl(url: string) {
    this.router.navigate([url]);
  }
}
