import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  private isCurrentAsDarkMode = false;
  private html = document.querySelector('html');
  private readonly darkModeClass = 'ion-palette-dark';

  constructor() { }

  public getIsDarkMode(): boolean {
    return this.isCurrentAsDarkMode;
  }

  public setDarkMode(dark: boolean) {
    this.isCurrentAsDarkMode = dark;
    dark ? this.html?.classList.add(this.darkModeClass) : this.html?.classList.remove(this.darkModeClass);
  }

  public switchMode() {
    this.isCurrentAsDarkMode ? this.html?.classList.remove(this.darkModeClass) : this.html?.classList.add(this.darkModeClass);
    this.isCurrentAsDarkMode = !this.isCurrentAsDarkMode;
  }
}
