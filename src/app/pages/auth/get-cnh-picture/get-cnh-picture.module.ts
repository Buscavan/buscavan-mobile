import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetCnhPicturePageRoutingModule } from './get-cnh-picture-routing.module';

import { GetCnhPicturePage } from './get-cnh-picture.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetCnhPicturePageRoutingModule,
    HeaderComponent
  ],
  declarations: [GetCnhPicturePage]
})
export class GetCnhPicturePageModule {}
