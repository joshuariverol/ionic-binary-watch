import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationPage } from '../location/location';

/**
 * Generated class for the LoadingpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loadingpage',
  templateUrl: 'loadingpage.html',
})
export class LoadingpagePage {
  splash = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(navParams) {
    setTimeout(() => this.splash = false, 4000);
    setTimeout(() => this.navCtrl.setRoot(LocationPage),4000);

    console.log('ionViewDidLoad LoadingpagePage');
  }

}
