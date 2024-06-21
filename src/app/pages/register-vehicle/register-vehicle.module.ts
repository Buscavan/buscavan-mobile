import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterVehiclePageRoutingModule } from './register-vehicle-routing.module';

import { RegisterVehiclePage } from './register-vehicle.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterVehiclePageRoutingModule,
    HeaderComponent
  ],
  declarations: [RegisterVehiclePage]
})
export class RegisterVehiclePageModule {}
