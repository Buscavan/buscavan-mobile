import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterTripPage } from './register-trip.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterTripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterTripPageRoutingModule {}
