import { NgModule } from '@angular/core';
import { IonicPageModule,IonicModule  } from 'ionic-angular';
import { HomePage } from './home';
import { Http ,HttpModule} from '@angular/http'
import { PostProvider } from '../../providers/post-provider';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    HttpModule,
    IonicStorageModule.forRoot(), 
  	IonicModule.forRoot(HomePage),
  
  ],
bootstrap: [HomePage],
})
export class HomePageModule {}
