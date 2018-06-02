import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  GoHistory() {
    this.navCtrl.push(HistoryPage)
  }

  GoPayment() {
    this.navCtrl.push(PaymentPage)
  }

}