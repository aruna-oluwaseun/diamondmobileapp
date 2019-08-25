import { Component, ViewChild } from '@angular/core';
import {Nav, Platform,AlertController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { DepositPage } from '../pages/deposit/deposit';
import { WithdrawPage } from '../pages/withdraw/withdraw';
import { SendPage } from '../pages/send/send';
import { HistoryPage } from '../pages/history/history';
import { AccountPage } from '../pages/account/account';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;

   anggota: any;
  username: string;
  password: string;
  user_id: number;
  
  customers: any = [];
  navs: any = [];
  limit: number = 3454; // LIMIT GET PERDATA
  start: number = 0;
  


  pages: Array<{title: string, component: any,icon:any}>;

  constructor(public platform: Platform,
  public alertCtrl:AlertController,
  public statusBar: StatusBar, 
  public toastCtrl: ToastController,
  private storage: Storage,
  public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon:'home' }
      
    ];

  }



  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }


  

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  openProfile()
  {
    this.nav.push(ProfilePage);
  }
  openDeposit()
  {
    this.nav.push(DepositPage);
  }
  openTransfer()
  {
    this.nav.push(SendPage);
  }
  openWithdraw()
  {
    this.nav.push(WithdrawPage);
  }
  openHistory()
  {
    this.nav.push(HistoryPage);
  }
  openAccount()
  {
    this.nav.push(AccountPage);
  }

  async prosesLogout(){
    this.storage.clear();
        this.nav.setRoot(LoginPage);
    const toast = await this.toastCtrl.create({
        message: 'logout succesful',
        duration: 3000
      });
    toast.present();
  }

  logout() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm Logout',
      message: 'Are you sure you want to sign out?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Proceed',
          handler: () => {
            console.log('Agree clicked');
            this.nav.setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
