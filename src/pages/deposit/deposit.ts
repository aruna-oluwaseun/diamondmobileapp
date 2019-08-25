import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html'
})
export class DepositPage {

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('HelloDeposit Page');
  }

  cardImage = 'assets/img/misc/credit-card.png';
 imageUrl: string = 'assets/img/misc/material-design-background.jpg';

 card = {
    cardType: 'VISA',
    cardNumber: '42424242424242',
    redactedCardNumber: null,
    expiryMonth: '12',
    expiryYear: '2020',
    cvv: '123',
    postalCode: null
  };

  // scanCard() {
  //   this.cardIO.canScan()
  //     .then(
  //     (res: boolean) => {
  //       if (res) {
  //         const options = {
  //           scanExpiry: true,
  //           hideCardIOLogo: true,
  //           scanInstructions: 'Please position your card inside the frame',
  //           keepApplicationTheme: true,
  //           requireCCV: true,
  //           requireExpiry: true,
  //           requirePostalCode: false
  //         };
  //         this.cardIO.scan(options).then(response => {
  //           console.log('Scan complete');

  //           const { cardType, cardNumber, redactedCardNumber,
  //                   expiryMonth, expiryYear, cvv, postalCode } = response;

  //           this.card = {
  //             cardType,
  //             cardNumber,
  //             redactedCardNumber,
  //             expiryMonth,
  //             expiryYear,
  //             cvv,
  //             postalCode
  //           };
  //         });
  //       }
  //     });
  // }

  // Just to animate the fab
  fabGone = false;
  ionViewWillEnter() {
    this.fabGone = false;
  }

  ionViewWillLeave() {
    this.fabGone = true;
  }

}
