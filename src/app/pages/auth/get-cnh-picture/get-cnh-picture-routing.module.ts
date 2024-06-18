import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetCnhPicturePage } from './get-cnh-picture.page';

const routes: Routes = [
  {
    path: '',
    component: GetCnhPicturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetCnhPicturePageRoutingModule {}
