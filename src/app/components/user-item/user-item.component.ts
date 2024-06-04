import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Tag } from 'src/app/interfaces/tag';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class UserItemComponent {

  @Input()
  userImg: string = '';

  @Input()
  icon: boolean = false;

  @Input()
  text: string = '';

  @Input()
  href: string = '';

  @Input()
  tags: Tag[] = [];

  constructor() { }

}
