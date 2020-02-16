import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  //creating variables 
  timezone:number;
  city:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //setting default values to variables
    this.city = '';
    this.timezone = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }
  //function for system time
  getsystime() {
    this.city = 'System';
    this.timezone = 0;
    this.navCtrl.push(HomePage, {city:this.city, timezone:this.timezone});
  }
  //function for new york
  getnytime() {
    this.city = 'New York';
    this.timezone = -5;
    this.navCtrl.push(HomePage, {city:this.city, timezone:this.timezone});
  }
  //function for belize
  getbztime() {
    this.city = 'Belize City';
    this.timezone = -6;
    this.navCtrl.push(HomePage, {city:this.city, timezone:this.timezone});
  }
  //function for london
  getlntime() {
    this.city = 'London';
    this.timezone = 0;
    this.navCtrl.push(HomePage, {city:this.city, timezone:this.timezone});
  }
  //function for rio de janeiro
  getrjtime() {
    this.city = 'Rio de Janeiro';
    this.timezone = -2;
    this.navCtrl.push(HomePage, {city:this.city, timezone:this.timezone});
  }
  //function for shanghai
  getshtime() {
    this.city = 'Shanghai';
    this.timezone = 8;
    this.navCtrl.push(HomePage, {city:this.city, timezone:this.timezone});
  }
  //function for sydney
  getsytime() {
    this.city = 'Sydney';
    this.timezone = 11;
    this.navCtrl.push(HomePage, {city:this.city, timezone:this.timezone});
  }


}
