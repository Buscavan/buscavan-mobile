import { InputComponent } from '../input/input.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Output, Component, EventEmitter, Input } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode/dark-mode.service';

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

  filterInputsVisible = false;

  @Output()
  $submit = new EventEmitter();

  constructor( private dark: DarkModeService) {}

  handleFilterInputs() {
    this.filterInputsVisible = !this.filterInputsVisible;
  }

  handleClick() {
    this.dark.switchMode();
    this.$submit.emit();
  }
}
