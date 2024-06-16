import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripInfoPage } from './trip-info.page';

const routes: Routes = [
  {
    path: '',
    component: TripInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripInfoPageRoutingModule {}
