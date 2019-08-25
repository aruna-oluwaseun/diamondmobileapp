import { Component } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { ChangeDetectorRef } from '@angular/core';

import { IonicPage, NavController, NavParams, ToastController,Slides } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  deposits: any = [];
 
  imageUrl: string = 'assets/img/misc/material-design-background.jpg';
anggota: any;
  username: string;
  password: string;
  user_id: number;
  
 

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

    this.deposits = [];
   
    
    this.loaddeposits();
      

   
  }
  loaddeposits(){

  this.storage.get('session_storage').then((res)=>{
    return new Promise(resolve => {

      let body = {
        aksi : 'dep',
        user_id:this.user_id,
        username:this.username,
        
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
      
        for(let deposit of data.result){

          this.deposits.push(deposit);
           console.log(data);
        }
        
        resolve(true);
     
      });

    });
      
    });  
  }


  
}
