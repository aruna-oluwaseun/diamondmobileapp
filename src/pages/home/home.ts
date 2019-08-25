import { Component} from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { ChangeDetectorRef } from '@angular/core';

import { IonicPage, NavController, NavParams,ToastController,Slides } from 'ionic-angular';

import { WithdrawPage } from '../withdraw/withdraw';
import { LoginPage } from '../login/login';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
 anggota: any;
  username: string;
  password: string;
  user_id: number;
  
  customers: any = [];
  navs: any = [];
  limit: number = 3454; // LIMIT GET PERDATA
  start: number = 0;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private postPvdr: PostProvider, private storage: Storage,public toastCtrl: ToastController,
  ) { }

  ngOnInit() {

 
  }

 
 

 ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.username = this.anggota.username;
      this.password = this.anggota.password;
      this.user_id = this.anggota.user_id;
      console.log(res);
    });

    this.customers = [];
    this.start = 0;
    this.loadCustomer();

    this.navs =[];
    this.loadNav();
  }
  loadCustomer(){

  this.storage.get('session_storage').then((res)=>{
    return new Promise(resolve => {

      let body = {
        aksi : 'getdata',

        user_id:this.user_id,
        username:this.username,
        limit : this.limit,
        start : this.start,
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
      
        for(let customer of data.result){

          this.customers.push(customer);
           console.log(data);
        }
        
        resolve(true);
     
      });

    });
      
    });  
  }


 loadNav(){

  this.storage.get('session_storage').then((res)=>{
    return new Promise(resolve => {

      let body = {
        aksi : 'nav',
        id:this.user_id,
        username:this.username,
        limit : this.limit,
        start : this.start,
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
      
        for(let nav of data.result){

          this.navs.push(nav);
           console.log(data);
        }
        
        resolve(true);
     
      });

    });
      
    });  
  }

withdraw(id,capital,daily,account,num,bank){
  
this.navCtrl.push(WithdrawPage, {
 
 'id':id, 
 'capital':capital,
 'daily':daily,
 'account':account,
 'num':num,
 'bank':bank,


});

}

async prosesLogout(){
    this.storage.clear();
      this.navCtrl.setRoot(LoginPage);
    const toast = await this.toastCtrl.create({
        message: 'Logout succesful',
        duration: 3000
      });
    toast.present();
  }

  

}
