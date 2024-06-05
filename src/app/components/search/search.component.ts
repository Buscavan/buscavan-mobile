import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputProps } from 'src/app/interfaces/input.props';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    InputComponent
  ]
})
export class SearchComponent {
  @Input()
  title: string = '';

  @Input()
  input!: InputProps;

  @Input()
  buttonText: string = 'Confirmar';

  @Input()
  filterInputs: InputComponent[] = [];

  filterInputsVisible = false;

  constructor() { }

  handleFilterInputs() {
    this.filterInputsVisible = !this.filterInputsVisible;
  }
}
