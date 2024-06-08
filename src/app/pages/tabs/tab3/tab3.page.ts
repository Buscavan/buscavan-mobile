import { Component } from '@angular/core';
import { InputComponent } from 'src/app/components/input/input.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  searchInputs: InputComponent[] = [
    {
      type: 'text',
      placeholder: 'Digite a placa do automóvel',
      label: 'Placa',
      size: 12,
    },
    {
      type: 'number',
      placeholder: 'Digite a capacidade do automóvel',
      label: 'Capacidade',
      size: 12,
    },
  ];

  constructor() {}
}
