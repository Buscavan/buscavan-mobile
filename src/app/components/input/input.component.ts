import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
  ]
})
export class InputComponent {

  @Input()
  placeholder: string = '';

  @Input()
  type: string = 'text';

  @Input()
  label: string = '';

  @Input()
  size: number = 12;

  constructor() { }

}
