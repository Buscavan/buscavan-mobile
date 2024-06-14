import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  isDark: boolean = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.isDark = this.themeService.getIsDarkMode();
  }

  setDarkMode(dark: boolean) {
    console.log(dark)
    this.themeService.setDarkMode(dark);
    this.isDark = dark;
  }

}
