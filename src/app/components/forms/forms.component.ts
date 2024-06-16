import { InputComponent } from '../input/input.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Output, Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    InputComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FormsComponent {
  @Input()
  title: string = '';

  @Input()
  inputs!: InputComponent[];

  @Input()
  buttonText: string = 'Confirmar';

  @Input()
  filterInputs: InputComponent[] = [];

  @Input()
  formGroup?: FormGroup;

  @Input()
  editable?: boolean = true;

  @Input()
  editButton?: boolean = false;

  filterInputsVisible = false;

  @Output()
  $submit = new EventEmitter();

  constructor() {}

  handleFilterInputs() {
    this.filterInputsVisible = !this.filterInputsVisible;
  }

  handleClick() {
    this.$submit.emit();
  }
}
