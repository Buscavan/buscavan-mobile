import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HeaderComponent } from '../../../components/header/header.component';
import { SearchTripsComponent } from '../../../components/search-trips/search-trips.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    HeaderComponent,
    SearchTripsComponent,
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
