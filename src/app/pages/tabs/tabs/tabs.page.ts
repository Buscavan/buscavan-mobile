import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  user!: User;

  constructor(private authService: AuthService, private router: Router) {}

  async ngOnInit() {
    this.router.events.subscribe(async (event) => {
      if (event instanceof NavigationEnd) {
        this.user = await this.authService.getUser();
        this.reloadComponent();
      }
    });
  }

  reloadComponent() {
    this.router.navigate([]);
  }

}
