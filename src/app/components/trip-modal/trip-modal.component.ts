import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Trip } from 'src/app/interfaces/trip';
import { ModalController } from '@ionic/angular';
import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { register } from 'swiper/element/bundle';

registerLocaleData(localePt, 'pt');
register();

@Component({
  selector: 'app-trip-modal',
  templateUrl: './trip-modal.component.html',
  styleUrls: ['./trip-modal.component.scss'],
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
export class TripModalComponent implements OnInit {

  @Input()
  public data!: Trip;

  public images: string[] = [];

  constructor(private modalController: ModalController) { }

  exit() {
    return this.modalController.dismiss(null, 'exit');
  }

  ngOnInit(): void {
    this.images = [this.data.image, ...this.data.tripImages];
  }

}
