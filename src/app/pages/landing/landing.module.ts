import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';
import { HeaderComponent } from '../../components/header/header.component';
import { InputComponent } from 'src/app/components/input/input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPageRoutingModule,
    HeaderComponent,
    InputComponent
  ],
  declarations: [LandingPage]
})
export class LandingPageModule {}
