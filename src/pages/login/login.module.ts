import { LoginPage } from './login';
import { NgModule } from '@angular/core';
import { IonicPageModule,IonicModule } from 'ionic-angular';
import { Http ,HttpModule} from '@angular/http'
import { PostProvider } from '../../providers/post-provider';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';




@NgModule({
  declarations: [
    LoginPage,
  ],


  imports: [
  
    HttpModule,
    IonicStorageModule.forRoot(),
   
  	IonicModule.forRoot(LoginPage)
  ],
  providers: [
    
    PostProvider,
   
  ],
  exports: [
    LoginPage
  ]
})

export class LoginPageModule { }
