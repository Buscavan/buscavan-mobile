import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicInputMaskModule } from '@thiagoprz/ionic-input-mask';
import { MenuComponent } from './components/menu/menu.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import { APP_INITIALIZER } from '@angular/core';
import { LocalStorageService } from './services/local-storage/local-storage.service';

export function appInitializer(localStorageService: LocalStorageService) {
  return () => localStorageService.init();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicInputMaskModule,
    MenuComponent,
    IonicStorageModule.forRoot({
      name: 'buscavan',
      driverOrder: [Drivers.LocalStorage],
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [LocalStorageService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
