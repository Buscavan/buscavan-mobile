import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },  {
    path: 'credits',
    loadChildren: () => import('./pages/credits/credits.module').then( m => m.CreditsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./pages/tabs/tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./pages/configuration/configuration.module').then( m => m.ConfigurationPageModule)
  },
  {
    path: 'trip-info',
    loadChildren: () => import('./pages/trip-info/trip-info.module').then( m => m.TripInfoPageModule)
  },
  {
    path: 'get-profile-picture',
    loadChildren: () => import('./pages/auth/get-profile-picture/get-profile-picture.module').then( m => m.GetProfilePicturePageModule)
  },
  {
    path: 'register-finished',
    loadChildren: () => import('./pages/auth/register-finished/register-finished.module').then( m => m.RegisterFinishedPageModule)
  },
  {
    path: 'get-cnh-picture',
    loadChildren: () => import('./pages/auth/get-cnh-picture/get-cnh-picture.module').then( m => m.GetCnhPicturePageModule)
  },
  {
    path: 'register-trip',
    loadChildren: () => import('./pages/register-trip/register-trip.module').then( m => m.RegisterTripPageModule)
  },
  {
    path: 'register-vehicle',
    loadChildren: () => import('./pages/register-vehicle/register-vehicle.module').then( m => m.RegisterVehiclePageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
