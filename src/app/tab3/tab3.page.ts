import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  ionViewWillEnter(): void {
    const tabBar: any = document.querySelector('ion-tab-bar');
    tabBar.style.opacity = 1;
    tabBar.style.display = 'flex';
  }
}
