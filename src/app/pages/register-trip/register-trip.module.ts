import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterTripPageRoutingModule } from './register-trip-routing.module';

import { RegisterTripPage } from './register-trip.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FormsComponent } from 'src/app/components/forms/forms.component';
import { InputComponent } from 'src/app/components/input/input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterTripPageRoutingModule,
    HeaderComponent,
    ReactiveFormsModule,
    FormsComponent,
    InputComponent
  ],
  declarations: [RegisterTripPage]
})
export class RegisterTripPageModule {}
