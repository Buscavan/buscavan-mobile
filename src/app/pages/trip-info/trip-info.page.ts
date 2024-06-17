import { Component, Input } from '@angular/core';
import { Trip } from 'src/app/interfaces/trip';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.page.html',
  styleUrls: ['./trip-info.page.scss'],
})
export class TripInfoPage {

  @Input()
  trip: Trip = {
    name: 'Santos',
    price: 3000,
    location: 'Santos, SP',
    image: 'https://conteudo.imguol.com.br/c/entretenimento/9e/2021/01/08/cidade-de-santos-litoral-de-sao-paulo-1610114986845_v2_1920x1274.jpg',
    tripImages: ['https://conteudo.imguol.com.br/c/entretenimento/9e/2021/01/08/cidade-de-santos-litoral-de-sao-paulo-1610114986845_v2_1920x1274.jpg'],
    capacity: 16,
    driver: 'Cleber',
    goingDate: '12/05/2025',
    returnDate: '15/05/2025',
    vehicleName: 'Boxer',
    description: 'Uma viagem para Santos',
  }

  constructor() { }

}
