import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
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

  @Input()
  name?: string;

  @Input()
  formGroup?: FormGroup;

  constructor() { }

}
