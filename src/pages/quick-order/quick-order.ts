import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the QuickOrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quick-order',
  templateUrl: 'quick-order.html',
})
export class QuickOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {}

  showAlertPopUp() {

  let alert = this.alertCtrl.create({
  title: 'Congrats',
  subTitle: 'Your quick order placed successfully.',
  buttons: ['OK']
  });
  alert.present();
  }

  onCancel(){

  let toast = this.toastCtrl.create({
  message: 'You have canceled your order.',
  duration: 2000
  });
  toast.present();

    this.navCtrl.pop();
  }

}
