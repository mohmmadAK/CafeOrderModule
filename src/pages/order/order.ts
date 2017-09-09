import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  showConfirm() {
     let confirm = this.alertCtrl.create({
       title: 'Your Order',
       message: '<table><tr><td colspan="3">2 Coke </td> <td> &nbsp&nbsp&nbsp---&nbsp&nbsp&nbsp </td><td >5$</td> </tr><tr><td colspan="3">2 Cheese Burger </td> <td> &nbsp&nbsp&nbsp---&nbsp&nbsp&nbsp </td><td>15$</td> </tr><tr><td colspan="3">1 Creamy Pizza </td><td> &nbsp&nbsp&nbsp---&nbsp&nbsp&nbsp </td> <td >30$</td> </tr> <tr><td colspan="5"><p align="right"> Total: 50 $</p></td></tr></table>',
       buttons: [
         {
           text: 'Cancel',
           handler: () => {

               this.navCtrl.pop();
             console.log('Disagree clicked');
           }
         },
         {
           text: 'Submit',
           handler: () => {
//Shows alert
           let toast = this.toastCtrl.create({
           message: 'Your order placed successfully.',
           duration: 2000
           });
          toast.present();
          
             console.log('Agree clicked');
           }
         }
       ]
     });
     confirm.present();
   }

   showAlertPopUp() {

 let alert = this.alertCtrl.create({
   title: 'Alert!',
   subTitle: 'It will be implemented in final product.',
   buttons: ['OK']
 });
 alert.present();
}
}
