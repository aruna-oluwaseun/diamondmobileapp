import { Component} from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,Slides } from 'ionic-angular';
import { WithdrawPage } from '../withdraw/withdraw';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-withdraw',
  templateUrl: 'send.html',
})

export class SendPage {

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

 anggota: any;
  username: string;
  password: string;
  user_id: number;
  
  referals: any = [];
  sums: any = [];
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

    this.referals = [];
    this.sums = [];
    
    this.loadreferals();
      this.loadsums();

   
  }
  loadreferals(){

  this.storage.get('session_storage').then((res)=>{
    return new Promise(resolve => {

      let body = {
        aksi : 'ref',

        user_id:this.user_id,
        username:this.username,
        limit : this.limit,
        start : this.start,
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
      
        for(let referal of data.result){

          this.referals.push(referal);
           console.log(data);
        }
        
        resolve(true);
     
      });

    });
      
    });  
  }


  loadsums(){

  this.storage.get('session_storage').then((res)=>{
    return new Promise(resolve => {

      let body = {
        aksi : 'refs',

        user_id:this.user_id,
        username:this.username,
       
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
      
        for(let sum of data.result){

          this.sums.push(sum);
           console.log(data);
        }
        
        resolve(true);
     
      });

    });
      
    });  
  }




}
