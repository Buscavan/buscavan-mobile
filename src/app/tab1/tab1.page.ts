import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}

  public scrolled(event: any) {
    const topPosition = event.detail.scrollTop;
    const tabBar: any = document.querySelector('ion-tab-bar');

    tabBar.style.opacity = topPosition > 30 ? 1 : 0;
  }

  ngOnInit(): void {
    const tabBar: any = document.querySelector('ion-tab-bar');
    tabBar.style.opacity = 0;
    setTimeout(() => tabBar.style.transition = 'opacity .2s ease-out', 300);
  }
}
