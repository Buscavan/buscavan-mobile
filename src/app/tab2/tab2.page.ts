import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  ionViewWillEnter(): void {
    const tabBar: any = document.querySelector('ion-tab-bar');
    tabBar.style.opacity = 1;
    tabBar.style.display = 'flex';
  }
}
