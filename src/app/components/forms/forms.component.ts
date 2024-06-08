import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    InputComponent
  ]
})
export class FormsComponent {
  @Input()
  title: string = '';

  @Input()
  inputs!: InputComponent[];

  @Input()
  buttonText: string = 'Confirmar';

  @Input()
  click = () => {};

  @Input()
  filterInputs: InputComponent[] = [];

  filterInputsVisible = false;

  constructor() { }

  handleFilterInputs() {
    this.filterInputsVisible = !this.filterInputsVisible;
  }
}
