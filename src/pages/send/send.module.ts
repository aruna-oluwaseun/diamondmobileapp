import { SendPage } from './send';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SendPage,
  ],
  imports: [
    IonicPageModule.forChild(SendPage),
  ],
  exports: [
    SendPage
  ]
})

export class SendPageModule { }
