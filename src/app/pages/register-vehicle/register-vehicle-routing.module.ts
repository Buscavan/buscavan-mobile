import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterVehiclePage } from './register-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterVehiclePageRoutingModule {}
