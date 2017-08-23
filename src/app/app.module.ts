import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { PokemonPage } from '../pages/pokemon/pokemon';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TylerPage } from '../pages/first/first';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirstProvider } from '../pages/first/providers/first-service';
import { PokemonProvider } from '../pages/pokemon/providers/pokemon-service';

@NgModule({
  declarations: [
    MyApp,
    PokemonPage,
    ContactPage,
    HomePage,
    TabsPage,
    TylerPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PokemonPage,
    ContactPage,
    HomePage,
    TabsPage,
    TylerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirstProvider,
    PokemonProvider
  ]
})
export class AppModule {}
