import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-trips-carrousel',
  templateUrl: './trips-carrousel.component.html',
  styleUrls: ['./trips-carrousel.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TripsCarrouselComponent {

  public trips = [
    {
      name: 'UNISAGRADO',
      price: 1298.99,
      location: 'UNISAGRADO',
      image: 'https://images.vexels.com/media/users/3/128645/isolated/preview/d96ab2658b0f1366bfc2d7074b49730b-van-retro-lustrosa.png',
      capacity: 1,
      driver: 'teste',
      date: '09/09/2004',
    },
    {
      name: 'Etec City of Books',
      price: 106.99,
      location: 'Etec City of Books',
      image: 'https://pics.clipartpng.com/midle/Passenger_Van_PNG_Clip_Art-2981.png',
      capacity: 1,
      driver: 'teste',
      date: '09/09/2004',
    },
    {
      name: 'Facilpa',
      price: 15.99,
      location: 'Facilpa',
      image: 'https://vehicle-images.dealerinspire.com/stock-images/chrome/f1c2cdb052ded21559fd0deb740b7ea2.png',
      capacity: 1,
      driver: 'teste',
      date: '09/09/2004',
    },
    {
      name: 'UNISAGRADO',
      price: 1298.99,
      location: 'UNISAGRADO',
      image: 'https://images.vexels.com/media/users/3/128645/isolated/preview/d96ab2658b0f1366bfc2d7074b49730b-van-retro-lustrosa.png',
      capacity: 1,
      driver: 'teste',
      date: '09/09/2004',
    },
    {
      name: 'Etec City of Books',
      price: 106.99,
      location: 'Etec City of Books',
      image: 'https://pics.clipartpng.com/midle/Passenger_Van_PNG_Clip_Art-2981.png',
      capacity: 1,
      driver: 'teste',
      date: '09/09/2004',
    },
    {
      name: 'Facilpa',
      price: 15.99,
      location: 'Facilpa',
      image: 'https://vehicle-images.dealerinspire.com/stock-images/chrome/f1c2cdb052ded21559fd0deb740b7ea2.png',
      capacity: 1,
      driver: 'teste',
      date: '09/09/2004',
    },
  ];

  @Input()
  public city: String = 'Lençóis Paulista';

  @Input()
  public state: String = 'SP';

  constructor() { }

}
