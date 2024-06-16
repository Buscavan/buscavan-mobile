import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
    ReactiveFormsModule,
  ],
})
export class InputComponent implements OnInit {

  @Input()
  placeholder: string = '';

  @Input()
  type: string = 'text';

  @Input()
  label: string = '';

  @Input()
  size: number = 12;

  @Input()
  maxlength?: number;

  @Input()
  name?: string;

  @Input()
  formGroup?: FormGroup;

  @Input()
  disabled: boolean = false;

  @Input()
  editButton?: boolean = false;

  @Input()
  value: string = '';

  @Input()
  mask?: string = '';

  isButtonDisabled?: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isButtonDisabled = (this.disabled || this.editButton || false);
  }

  turnDisabled() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }
}
