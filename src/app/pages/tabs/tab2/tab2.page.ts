import { Component } from '@angular/core';
import { InputProps } from 'src/app/interfaces/input.props';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchInput: InputProps = {
    type: 'text',
    placeholder: 'Lençóis Paulista, SP',
    label: 'Destino',
    size: 12,
  };

  searchFilterInputs: InputProps[] = [
    {
      type: 'text',
      placeholder: 'Lençóis Paulista, SP',
      label: 'Origem',
      size: 12,
    },
    {
      type: 'date',
      placeholder: 'dd/mm/yyyy',
      label: 'De',
      size: 12,
    },
    {
      type: 'date',
      placeholder: 'dd/mm/yyyy',
      label: 'Até',
      size: 12,
    },
  ];

  constructor() {}
}
