import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { HeaderComponent } from '../../../components/header/header.component';
import { FormsComponent } from 'src/app/components/forms/forms.component';
import { IonicInputMaskModule } from '@thiagoprz/ionic-input-mask';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    HeaderComponent,
    FormsComponent,
    IonicInputMaskModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
