import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterVehiclePageRoutingModule } from './register-vehicle-routing.module';

import { RegisterVehiclePage } from './register-vehicle.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FormsComponent } from 'src/app/components/forms/forms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterVehiclePageRoutingModule,
    HeaderComponent,
    ReactiveFormsModule,
    FormsComponent
  ],
  declarations: [RegisterVehiclePage]
})
export class RegisterVehiclePageModule {}
