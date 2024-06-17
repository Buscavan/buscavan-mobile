import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFinishedPage } from './register-finished.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFinishedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFinishedPageRoutingModule {}
