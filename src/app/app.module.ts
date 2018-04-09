import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdvertisementsPage } from '../pages/advertisements/advertisements';
import { ProposalsPage } from '../pages/proposals/proposals';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    AdvertisementsPage,
    ProposalsPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdvertisementsPage,
    ProposalsPage,
    TabsPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
