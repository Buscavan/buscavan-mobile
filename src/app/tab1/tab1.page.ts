import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private tabBar: any = document.querySelector('ion-tab-bar');
  private topPosition = 0;

  constructor() { }

  public scrolled(event: any) {
    this.topPosition = event.detail.scrollTop;

    if (this.topPosition > 30) {
      this.enableButtons();
      this.tabBar.style.opacity = 1;
    } else {
      this.disableButtons();
      this.tabBar.style.opacity = 0;
    }
  }

  ionViewWillEnter(): void {
    if (this.topPosition === 0) {
      this.disableButtons();
      this.tabBar.style.opacity = 0;
    }
    setTimeout(() => this.tabBar.style.transition = 'opacity .2s ease-out', 300);
  }

  private disableButtons() {
    this.tabBar.childNodes.forEach((e: any) => {
      e.setAttribute('disabled', 'true');
    });
  }

  private enableButtons() {
    this.tabBar.childNodes.forEach((e: any) => {
      e.setAttribute('disabled', 'false');
    });
  }
}
