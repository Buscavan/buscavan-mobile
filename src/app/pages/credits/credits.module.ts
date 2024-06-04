import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditsPageRoutingModule } from './credits-routing.module';

import { CreditsPage } from './credits.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { UserItemComponent } from 'src/app/components/user-item/user-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditsPageRoutingModule,
    HeaderComponent,
    UserItemComponent
  ],
  declarations: [CreditsPage]
})
export class CreditsPageModule {}
