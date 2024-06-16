import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-switch-theme-button',
  templateUrl: './switch-theme-button.component.html',
  styleUrls: ['./switch-theme-button.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class SwitchThemeButtonComponent implements OnInit {

  @Input()
  hasText: boolean = true;

  isDark: boolean = false;

  constructor(private themeService: ThemeService) { }

  async ngOnInit() {
    this.isDark = await this.themeService.getIsDarkMode();
  }

  changeDarkMode(dark: boolean) {
    console.log(dark)
    this.themeService.changeDarkMode(dark);
    this.isDark = dark;
  }

}
