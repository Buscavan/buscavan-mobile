import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';
import { filter } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class MenuComponent {

  private user: User | undefined;

  public name: string = '';

  constructor(private router: Router, private menuCtrl: MenuController, private authService: AuthService) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => this.reload());
  }

  private async reload() {
    this.user = await this.authService.getUser();
    this.name = this.user.name;
  }

  public navigateByUrl(url: string) {
    this.menuCtrl.close('sidebar-menu');
    this.router.navigateByUrl(url);
  }

  public async exit() {
    this.authService.removeUser();
    this.navigateByUrl('/');
  }
}
