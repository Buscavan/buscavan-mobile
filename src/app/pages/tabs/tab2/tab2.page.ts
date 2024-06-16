import { Component } from '@angular/core';
import { InputComponent } from 'src/app/components/input/input.component';
import { Trip } from 'src/app/interfaces/trip';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {

  trip: Trip = {
    name: 'Santos',
    price: 3000,
    location: 'Santos',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/76/57/a6/caption.jpg?w=500&h=400&s=1',
    tripImages: ['string'],
    capacity: 16,
    driver: 'string',
    goingDate: '12/05/2025',
    returnDate: '15/05/2025',
    vehicleName: 'Boxer',
  }

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
