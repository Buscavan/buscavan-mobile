import { Component } from '@angular/core';
import { InputComponent } from 'src/app/components/input/input.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  searchInput: InputComponent[] = [
    {
      type: 'text',
      placeholder: 'Lençóis Paulista, SP',
      label: 'Destino',
      size: 12,
      disabled: false,
      ngOnInit: () => {},
      turnDisabled: () => {},
      value: '',
    },
  ];

  searchFilterInputs: InputComponent[] = [
    {
      type: 'text',
      placeholder: 'Lençóis Paulista, SP',
      label: 'Origem',
      size: 12,
      disabled: false,
      ngOnInit: () => {},
      turnDisabled: () => {},
      value: '',
    },
    {
      type: 'date',
      placeholder: 'dd/mm/yyyy',
      label: 'De',
      size: 12,
      disabled: false,
      ngOnInit: () => {},
      turnDisabled: () => {},
      value: '',
    },
    {
      type: 'date',
      placeholder: 'dd/mm/yyyy',
      label: 'Até',
      size: 12,
      disabled: false,
      ngOnInit: () => {},
      turnDisabled: () => {},
      value: '',
    },
  ];

  constructor() {}
}
