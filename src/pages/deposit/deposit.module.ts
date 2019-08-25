import { DepositPage } from './deposit';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    DepositPage,
  ],
  imports: [
    IonicPageModule.forChild(DepositPage),
  ],
  exports: [
    DepositPage
  ]
})

export class DepositPageModule { }
