import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFinishedPageRoutingModule } from './register-finished-routing.module';

import { RegisterFinishedPage } from './register-finished.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFinishedPageRoutingModule
  ],
  declarations: [RegisterFinishedPage]
})
export class RegisterFinishedPageModule {}
