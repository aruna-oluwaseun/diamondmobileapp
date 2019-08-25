import { Component } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { ChangeDetectorRef } from '@angular/core';

import { IonicPage, NavController, NavParams, ToastController,Slides } from 'ionic-angular';

import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-withdraw',
  templateUrl: 'withdraw.html',
})

export class WithdrawPage {

 id:number;
 capital:number;
 daily:number;
 account:number;
 num:number;
 bank:string;
 limit: number = 3454;
navss: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private postPvdr: PostProvider, private storage: Storage,) {
        
         
           
      }

  ngOnInit() {

 
  }
ionViewDidLoad() {

  this.id = this.navParams.get('id');
  this.capital = this.navParams.get('capital');
  this.daily = this.navParams.get('daily');
  this.account = this.navParams.get('account');
  this.num = this.navParams.get('num');
  this.bank = this.navParams.get('bank');

   }
  

  
  errorMessage: any;
  placeholderPicture = 'https://api.adorable.io/avatar/200/bob';

  enableNotifications = true;
  currency:any;
  withdraw:any;

  withdrawTo = ['Paypal', 'Bank'];
  currencies = ['USD', 'BRL', 'EUR'];

  user = {
    name: 'John Doe',
    imageUrl: 'assets/img/profile/profile-2.png'
  };

  


}
