import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {

  constructor(private router: Router, private authService: AuthService) { }

  public async handleSearch() {
    const user: User = await this.authService.getUser();
    user ? this.navigateByUrl('tabs') : this.navigateByUrl('login');
  }

  public navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
