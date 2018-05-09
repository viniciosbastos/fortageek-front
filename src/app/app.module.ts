import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { Api } from '../providers/api';
import { ApiUsuario } from '../providers/api-usuario';
import { AnunciosPage } from '../pages/anuncios/anuncios';
import { PropostasPage } from '../pages/propostas/propostas';
import { PerfilPage } from '../pages/perfil/perfil';
import { ApiAnuncios } from '../providers/api-anuncios';
import { ToastUtil } from '../util/toast-util';
import { StorageUtil } from '../util/storage-util';
import { NovoAnuncioPage } from '../pages/novo-anuncio/novo-anuncio';
import { ApiCategoria } from '../providers/api-categoria';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    AnunciosPage,
    PropostasPage,
    PerfilPage,
    LoginPage,
    NovoAnuncioPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__data',
      driverOrder: ['sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AnunciosPage,
    PropostasPage,
    TabsPage,
    PerfilPage,
    LoginPage,
    NovoAnuncioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,,
    ToastUtil,
    StorageUtil,
    Api,
    ApiUsuario,
    ApiAnuncios,
    ApiCategoria,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
