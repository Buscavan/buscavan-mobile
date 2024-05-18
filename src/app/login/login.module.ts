import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { HeaderComponent } from '../components/header/header.component';
import { IonicInputMaskModule } from '@thiagoprz/ionic-input-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HeaderComponent,
    ReactiveFormsModule,
    FormsModule,
    IonicInputMaskModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
