import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';
import { HeaderComponent } from '../../components/header/header.component';
import { InputComponent } from 'src/app/components/input/input.component';
import { SwitchThemeButtonComponent } from 'src/app/components/switch-theme-button/switch-theme-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPageRoutingModule,
    HeaderComponent,
    InputComponent,
    SwitchThemeButtonComponent
  ],
  declarations: [LandingPage]
})
export class LandingPageModule {}
