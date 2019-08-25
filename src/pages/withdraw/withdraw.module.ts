
import { NgModule } from '@angular/core';

import { IonicPageModule,IonicModule  } from 'ionic-angular';
import { WithdrawPage } from './withdraw';
import { Http ,HttpModule} from '@angular/http';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    WithdrawPage,
  ],
   imports: [
    IonicPageModule.forChild(WithdrawPage),
    HttpModule,
    IonicStorageModule.forRoot(), 
  	IonicModule.forRoot(WithdrawPage)
  
  ],
 
})

export class WithdrawPageModule { }
