import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class MenuComponent {

  @Input()
  name: string = 'Buscavan';


  constructor(private router: Router, private menuCtrl: MenuController) { }

  public navigateByUrl(url: string) {
    this.menuCtrl.close('sidebar-menu');
    this.router.navigateByUrl(url);
  }
}
