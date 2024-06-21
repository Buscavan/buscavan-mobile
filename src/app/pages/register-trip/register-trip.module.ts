import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterTripPageRoutingModule } from './register-trip-routing.module';

import { RegisterTripPage } from './register-trip.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterTripPageRoutingModule,
    HeaderComponent
  ],
  declarations: [RegisterTripPage]
})
export class RegisterTripPageModule {}
