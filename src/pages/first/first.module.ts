import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TylerPage } from './first';

@NgModule({
  declarations: [
    TylerPage,
  ],
  imports: [
    IonicPageModule.forChild(TylerPage),
  ],
})
export class FirstPageModule {}
