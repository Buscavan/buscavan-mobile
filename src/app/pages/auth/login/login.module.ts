import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { HeaderComponent } from '../../../components/header/header.component';
import { FormsComponent } from 'src/app/components/forms/forms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HeaderComponent,
    FormsComponent
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
