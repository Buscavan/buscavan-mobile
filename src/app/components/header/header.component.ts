import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class HeaderComponent {

  @Input()
  color: String = '#000000';

  @Input()
  hasMenu: boolean = true;

  @Input()
  backButton: boolean = false;

  @Input()
  transparent: boolean = false;

  @Input()
  defaultHref: string = '/';

  constructor(private menuCtrl: MenuController) { }

  public openMenu() {
    this.menuCtrl.open('sidebar-menu');
  }

}
