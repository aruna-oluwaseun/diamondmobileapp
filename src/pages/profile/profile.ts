import { Component} from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { ChangeDetectorRef } from '@angular/core';

import { IonicPage, NavController, NavParams,ToastController,Slides } from 'ionic-angular';

import { WithdrawPage } from '../withdraw/withdraw';
import { LoginPage } from '../login/login';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {
  anggota: any;
  username: string;
  password: string;
  user_id: number;
  firstname: string;
  lastname: string;
  phone: number;
  email: any;
  address: any;
  num: any;
  bank:string;

  profilePicture: string;
  profileRef: any;
  errorMessage: any;
  placeholderPicture = 'https://api.adorable.io/avatar/200/bob';

  enableNotifications = true;
  language: any;
  currency: any;
  paymentMethod: any;

  languages = ['English', 'Portuguese', 'French'];
  paymentMethods = ['Paypal', 'Credit Card'];
  currencies = ['USD', 'BRL', 'EUR'];

  user = {
    name: 'John Doe',
    imageUrl: 'assets/img/profile/profile-2.png'
  };

 constructor(public navCtrl: NavController, public navParams: NavParams,private postPvdr: PostProvider, private storage: Storage,public toastCtrl: ToastController,
  ) { }

  toggleNotifications() {
  }

  updateImage(value) {
    this.profilePicture = 'data:image/jpeg;base64,' + value.val();
  }


 ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.username = this.anggota.username;
      this.password = this.anggota.password;
      this.firstname = this.anggota.firstname;
      this.lastname = this.anggota.lastname;
      this.phone = this.anggota.phone;
      this.address = this.anggota.address;
      this.num = this.anggota.num;
      this.bank = this.anggota.bank;
      console.log(res);
    });
}


}
