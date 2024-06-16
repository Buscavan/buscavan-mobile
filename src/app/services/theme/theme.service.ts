import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private html = document.querySelector('html');
  private readonly darkModeClass = 'ion-palette-dark';

  constructor(private localStorageService: LocalStorageService) { }

  public async getIsDarkMode(): Promise<boolean> {
    const isCurrentAsDarkMode: boolean = await this.localStorageService.get('theme') === 'dark';
    return isCurrentAsDarkMode;
  }

  public async setDarkMode(dark: boolean) {
    await this.localStorageService.set('theme', dark ? 'dark' : 'light');
  }

  public async changeDarkMode(dark: boolean) {
    dark ? this.html?.classList.add(this.darkModeClass) : this.html?.classList.remove(this.darkModeClass);
    this.setDarkMode(dark);
  }

  public async reloadDarkMode() {
    const isCurrentAsDarkMode: boolean = await this.localStorageService.get('theme') === 'dark';
    isCurrentAsDarkMode ? this.html?.classList.add(this.darkModeClass) : this.html?.classList.remove(this.darkModeClass);
  }

  public async switchMode() {
    const isCurrentAsDarkMode: boolean = await this.localStorageService.get('theme') === 'dark';

    isCurrentAsDarkMode ? this.html?.classList.remove(this.darkModeClass) : this.html?.classList.add(this.darkModeClass);
    this.setDarkMode(!isCurrentAsDarkMode);
  }
}
