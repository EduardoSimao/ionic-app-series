import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SupernaturalPage } from '../supernatural/supernatural';
import { PllPage } from '../pll/pll';
import { GotPage } from '../got/got';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  supernaturalClick(){
    this.navCtrl.push(SupernaturalPage)
  }

  pllClick(){
    this.navCtrl.push(PllPage)
  }
  gotClick(){
    this.navCtrl.push(GotPage)
  }

}
