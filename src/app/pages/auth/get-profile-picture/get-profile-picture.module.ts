import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetProfilePicturePageRoutingModule } from './get-profile-picture-routing.module';

import { GetProfilePicturePage } from './get-profile-picture.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetProfilePicturePageRoutingModule,
    HeaderComponent
  ],
  declarations: [GetProfilePicturePage]
})
export class GetProfilePicturePageModule {}
