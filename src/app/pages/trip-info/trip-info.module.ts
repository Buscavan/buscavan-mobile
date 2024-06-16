import localePt from '@angular/common/locales/pt';
import { CUSTOM_ELEMENTS_SCHEMA, DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripInfoPageRoutingModule } from './trip-info-routing.module';

import { TripInfoPage } from './trip-info.page';
import { register } from 'swiper/element';
import { HeaderComponent } from 'src/app/components/header/header.component';

registerLocaleData(localePt, 'pt');
register();

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripInfoPageRoutingModule,
    HeaderComponent
  ],
  declarations: [TripInfoPage],
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
export class TripInfoPageModule {}
