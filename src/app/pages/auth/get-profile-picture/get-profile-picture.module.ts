import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetProfilePicturePageRoutingModule } from './get-profile-picture-routing.module';

import { GetProfilePicturePage } from './get-profile-picture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetProfilePicturePageRoutingModule
  ],
  declarations: [GetProfilePicturePage]
})
export class GetProfilePicturePageModule {}
