import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderPage } from '../order/order';
import { QuickOrderPage } from '../quick-order/quick-order';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
  gotoOrderPage(){
    this.navCtrl.push(OrderPage);
  }
  gotoQuickOrderPage(){
    this.navCtrl.push(QuickOrderPage);
  }


}
