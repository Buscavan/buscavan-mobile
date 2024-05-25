import { User } from 'src/app/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  private user: User | undefined;

  constructor(private authService: AuthService) { }

  async ngOnInit() {
    this.user = await this.authService.getUser();
  }
}
