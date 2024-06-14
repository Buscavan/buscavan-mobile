import { Component } from '@angular/core';
import { InputComponent } from 'src/app/components/input/input.component';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage {

  inputs: InputComponent[] = [
    {
      type: 'text',
      placeholder: 'João Erik da Silva Crisóstomo',
      label: 'Nome',
      size: 12,
      disabled: false,
      ngOnInit: () => {},
      turnDisabled: () => {},
      value: '',
    },
    {
      type: 'text',
      placeholder: 'joao@gmail.com',
      label: 'E-mail',
      size: 12,
      disabled: false,
      ngOnInit: () => {},
      turnDisabled: () => {},
      value: '',
    },
    {
      type: 'text',
      placeholder: '123.456.789-10',
      label: 'CPF',
      size: 12,
      disabled: false,
      ngOnInit: () => {},
      turnDisabled: () => {},
      value: '',
    },
  ];

  constructor() { }

}
