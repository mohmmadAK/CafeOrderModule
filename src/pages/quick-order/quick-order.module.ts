import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickOrderPage } from './quick-order';

@NgModule({
  declarations: [
    QuickOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(QuickOrderPage),
  ],
})
export class QuickOrderPageModule {}
