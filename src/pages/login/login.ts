// import { FormBuilder, FormControl, Validator } from '@angular/forms';
import { Component, ViewChild, OnInit } from '@angular/core';

import { AlertController, App, LoadingController, NavController, Slides, IonicPage,ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';

import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage  {
  username: string;
  password: string;
  
  public backgroundImage = 'assets/img/background/background-5.jpg';
  
  constructor(
  
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App,
    private postPvdr: PostProvider,
    private storage: Storage,
    public toastCtrl: ToastController,
    public navCtrl:NavController,
   
  ) { }


ionViewDidLoad(){
  
}
  
  async prosesLogin(){
    if(this.username != "" && this.username != ""){
      let body = {
        username: this.username,
        password: this.password,
        aksi: 'login'
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
        var alertpesan = data.msg;
        if(data.success){
          this.storage.set('session_storage', data.result);
          this.navCtrl.setRoot(HomePage);
          const toast = await this.toastCtrl.create({
        message: 'Login Succesfully.',
        duration: 2000
      });
      toast.present();
      this.username = "";
      this.password = "";
          console.log(data);
        }else{
          const toast = await this.toastCtrl.create({
        message: alertpesan,
        duration: 2000
      });
        toast.present();
        }
      });

    }else{
      const toast = await this.toastCtrl.create({
    message: 'Username or Password Invalid.',
    duration: 2000
    });
    toast.present();
    }
  }
// Slider methods
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

goToLogin() {
    this.slider.slideTo(1);
  }


  goToSignup() {
    this.slider.slideTo(2);
  }

  slideNext() {
    this.innerSlider.slideNext();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
  }

  presentLoading(message) {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: message,
        buttons: ['Dismiss']
      });
      alert.present();
    });

    loading.present();
  }

  login() {
      this.navCtrl.setRoot(HomePage);
   
  }

  signup() {
    this.navCtrl.setRoot(HomePage);
  }
  resetPassword() {
    this.presentLoading('An e-mail was sent with your new password.');
  }
}
