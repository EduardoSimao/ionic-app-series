import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GotPage } from './got';

@NgModule({
  declarations: [
    GotPage,
  ],
  imports: [
    IonicPageModule.forChild(GotPage),
  ],
})
export class GotPageModule {}
