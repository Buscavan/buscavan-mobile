import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurationPageRoutingModule } from './configuration-routing.module';

import { ConfigurationPage } from './configuration.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FormsComponent } from 'src/app/components/forms/forms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurationPageRoutingModule,
    HeaderComponent,
    FormsComponent
  ],
  declarations: [ConfigurationPage]
})
export class ConfigurationPageModule {}
