import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

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
export class HeaderComponent  implements OnInit {

  @Input()
  color: String = '';

  constructor() { }

  ngOnInit() {}

}
