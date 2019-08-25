import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';
import {ProfilePage} from '../pages/profile/profile';
import {AccountPage} from '../pages/account/account';
import {WithdrawPage} from '../pages/withdraw/withdraw';
import {DepositPage} from '../pages/deposit/deposit';
import {HistoryPage} from '../pages/history/history';
import {SendPage} from '../pages/send/send';
import { HttpModule } from '@angular/http';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { HomePageModule } from '../pages/home/home.module';
import { LoginPageModule } from '../pages/login/login.module';
import { LoginPage } from '../pages/login/login';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { DepositPageModule } from '../pages/deposit/deposit.module';
import { WithdrawPageModule } from '../pages/withdraw/withdraw.module';
import { AccountPageModule } from '../pages/account/account.module';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    SendPage,
    HistoryPage,
    
  ],
  imports: [
    [BrowserModule,HttpModule, HttpClientModule],
    HomePageModule,
    LoginPageModule,
    ProfilePageModule,
    DepositPageModule,
    WithdrawPageModule,
    AccountPageModule,
    IonicStorageModule.forRoot(), 
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    DepositPage,
    SendPage,
    HistoryPage,
    WithdrawPage,
    AccountPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
