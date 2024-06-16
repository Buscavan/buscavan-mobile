import localePt from '@angular/common/locales/pt';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, DEFAULT_CURRENCY_CODE, Input, LOCALE_ID } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Trip } from 'src/app/interfaces/trip';
import { register } from 'swiper/element';

registerLocaleData(localePt, 'pt');
register();

@Component({
  selector: 'app-trip-item',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TripItemComponent {

  @Input()
  trip!: Trip;

  constructor() { }

}
