import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetProfilePicturePage } from './get-profile-picture.page';

const routes: Routes = [
  {
    path: '',
    component: GetProfilePicturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetProfilePicturePageRoutingModule {}
