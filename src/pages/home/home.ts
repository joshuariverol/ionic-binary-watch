import { Component } from '@angular/core';
import { NavController, NavParams,ActionSheetController } from 'ionic-angular';

import { LocationPage } from '../location/location';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //assigning variables

  //common variables in home
  city:string = '';//used for holding the city name
  timezone:number = 0;//used for holding the timezone value
  hour:number;//stores hour value
  minute:number;//stores minute value
  second:number;//stores second value
  greeting:string;//to write and print the greeting out on the UI
  icon:string;//stores the name of the icon that will be used to display time of day
  ampm:string;//holds "AM" or "PM" string


  //these variables hold a color hexcode in the form of a string that is used to style the dots on the UI to display on or off positions
  //hour variables
  hour1:string;
  hour2:string;
  hour4:string;
  hour8:string;

  //minute variables
  minute1:string;
  minute2:string;
  minute4:string;
  minute8:string;
  minute16:string;
  minute32:string;

  //second variable
  second1:string;
  second2:string;
  second4:string;
  second8:string;
  second16:string;
  second32:string;
  inttime:number = 1000;

  

  constructor(public navCtrl: NavController,  public navParams: NavParams, public actionSheetCtrl:ActionSheetController) {
    
    this.city = navParams.get('city');//getting the city name from the location page
    this.timezone = navParams.get('timezone');//getting the timezone number from the location page to calculate the current time in the city selected
  }//constructor end

  //defining interval function
  start() {
    setInterval(() => this.beginfetch(), this.inttime);//interval refreshes values for beginfetch function and updates the UI automatically
  }

  //function going to next page to change city and pull city and timezone values
  gotolocation (navParams) {
    this.navCtrl.setRoot(LocationPage);
  }


  //accureing hours, mins, secs and updating values
    beginfetch() {
      //checking if user selects a city or system time
      if (this.city == 'System') {//getting the current system hour
        var d = new Date();//new date function
        var gethour = d.getHours();//getting system hours
        var getminute = d.getMinutes();//getting system minutes
        var getsecond = d.getSeconds();//getting system seconds
        this.hour = gethour;//assigning hour values
        this.minute = getminute;//assigning minute vallues
        this.second = getsecond;//assigning second values  
      }
      else {
        //getting utc hours and minutes and offsetting it to corespond to selected city
        var d = new Date();//new date function
        var gethour = d.getUTCHours();//getting utc hours
        var getminute = d.getUTCMinutes();//getting utc minutes
        var getsecond = d.getUTCSeconds();//getting utc seconds
        this.hour = gethour + this.timezone;//getting current hour based on the timezone selected
        this.minute = getminute;//assigning minute value
        this.second = getsecond;//assigning second value
        //changing the times with the timezone using an if function to filter outthe time ahead or time behind
        if (this.hour < 0){
          this.hour = 0 - this.hour;//subbtracting hours taken away from the day to get the time 
        }
        if (this.hour > 23){
          this.hour = this.hour - 24;//subtracting additional hours added to the day to get current time in city selected
        }
      }


      //for the grating and the am/pm icons
      if (this.hour < 6){             //greeting is based on the time of day weather it is dark or sunny
        this.greeting = 'Morning';
        this.icon = 'moon';
        this.ampm = 'AM';
      }
      else if (this.hour < 12){
        this.greeting = 'Morning';
        this.icon = 'sunny';
        this.ampm = 'AM';
      }
      else if (this.hour < 17){
        this.greeting = 'Afternoon';
        this.icon = 'sunny';
        this.ampm = 'PM';
      }
      else if (this.hour < 20){
        this.greeting = 'Evening';
        this.icon = 'moon';
        this.ampm = 'PM';
      }
      else{
        this.greeting = 'Night';
        this.icon = 'moon';
        this.ampm = 'PM';
      }




      //assigning colors accoring to the hours coresponding value
      //12am
      if (this.hour == 0){
        this.hour1 = 'white';
        this.hour2 = 'white';
        this.hour4 = '#7CFC00';
        this.hour8 = '#7CFC00';
      }
      //1am
      if (this.hour == 1){
        this.hour1 = '#7CFC00';
        this.hour2 = 'white';
        this.hour4 = 'white';
        this.hour8 = 'white';
      }
      //2am
      if (this.hour == 2){
        this.hour1 = 'white';
        this.hour2 = '#7CFC00';
        this.hour4 = 'white';
        this.hour8 = 'white';
      }
      //3am
      if (this.hour == 3){
        this.hour1 = '#7CFC00';
        this.hour2 = '#7CFC00';
        this.hour4 = 'white';
        this.hour8 = 'white';
      }
      //4am
      if (this.hour == 4 ){
        this.hour1 = 'white';
        this.hour2 = 'white';
        this.hour4 = '#7CFC00';
        this.hour8 = 'white';
      }
      //5am
      if (this.hour == 5 ){
        this.hour1 = '#7CFC00';
        this.hour2 = 'white';
        this.hour4 = '#7CFC00';
        this.hour8 = 'white';
      }
      //6am
      if (this.hour == 6 ){
        this.hour1 = 'white';
        this.hour2 = '#7CFC00';
        this.hour4 = '#7CFC00';
        this.hour8 = 'white';
      }
      //7am 
      if (this.hour == 7 ){
        this.hour1 = '#7CFC00';
        this.hour2 = '#7CFC00';
        this.hour4 = '#7CFC00';
        this.hour8 = 'white';
      }
      //8am
      if (this.hour == 8 ){
        this.hour1 = 'white';
        this.hour2 = 'white';
        this.hour4 = 'white';
        this.hour8 = '#7CFC00';
      }
      //9am
      if (this.hour == 9 ){
        this.hour1 = '#7CFC00';
        this.hour2 = 'white';
        this.hour4 = 'white';
        this.hour8 = '#7CFC00';
      }
      //10am
      if (this.hour == 10 ){
        this.hour1 = 'white';
        this.hour2 = '#7CFC00';
        this.hour4 = 'white';
        this.hour8 = '#7CFC00';
      }
      //11am
      if (this.hour == 11 ){
        this.hour1 = '#7CFC00';
        this.hour2 = '#7CFC00';
        this.hour4 = '#white';
        this.hour8 = '#7CFC00';
      }
      //12pm
      if (this.hour == 12 ){
        this.hour1 = 'white';
        this.hour2 = 'white';
        this.hour4 = '#7CFC00';
        this.hour8 = '#7CFC00';
      }
      //1pm
      if (this.hour == 13 ){
        this.hour1 = '#7CFC00';
        this.hour2 = 'white';
        this.hour4 = 'white';
        this.hour8 = 'white';
      }
      //2pm
      if (this.hour == 14 ){
        this.hour1 = 'white';
        this.hour2 = '#7CFC00';
        this.hour4 = 'white';
        this.hour8 = 'white';
      }
      //3pm
      if (this.hour == 15 ){
        this.hour1 = '#7CFC00';
        this.hour2 = '#7CFC00';
        this.hour4 = 'white';
        this.hour8 = 'white';
      }
      //4pm
      if (this.hour == 16 ){
        this.hour1 = 'white';
        this.hour2 = 'white';
        this.hour4 = '#7CFC00';
        this.hour8 = 'white';
      }
      //5pm
      if (this.hour == 17){
        this.hour1 = '#7CFC00';
        this.hour2 = 'white';
        this.hour4 = '#7CFC00';
        this.hour8 = 'white';
      }
      //6pm
      if (this.hour == 18 ){
        this.hour1 = 'white';
        this.hour2 = '#7CFC00';
        this.hour4 = '#7CFC00';
        this.hour8 = 'white';
      }
      //7pm
      if (this.hour == 19 ){
        this.hour1 = '#7CFC00';
        this.hour2 = '#7CFC00';
        this.hour4 = '#7CFC00';
        this.hour8 = 'white';
      }
      //8pm
      if (this.hour == 20 ){
        this.hour1 = 'white';
        this.hour2 = 'white';
        this.hour4 = 'white';
        this.hour8 = '#7CFC00';
      }
      //9pm
      if (this.hour == 21 ){
        this.hour1 = '#7CFC00';
        this.hour2 = 'white';
        this.hour4 = 'white';
        this.hour8 = '#7CFC00';
      }
      //10pm
      if (this.hour == 22 ){
        this.hour1 = 'white';
        this.hour2 = '#7CFC00';
        this.hour4 = 'white';
        this.hour8 = '#7CFC00';
      }
      //11pm
      if (this.hour == 23 ){
        this.hour1 = '#7CFC00';
        this.hour2 = '#7CFC00';
        this.hour4 = 'white';
        this.hour8 = '#7CFC00';
      }//end of hours




      //minutes being assigned their corresponding color based on their value
      //0min
      if (this.minute == 0 ){
        this.minute1 = 'white';
        this.minute2 = 'white';
        this.minute4 = 'white';
        this.minute8 = 'white';
        this.minute16 = 'white';
        this.minute32 = 'white';
      }
      //1min
      if (this.minute == 1 ){
        this.minute1 = '#7CFC00';
        this.minute2 = 'white';
        this.minute4 = 'white';
        this.minute8 = 'white';
        this.minute16 = 'white';
        this.minute32 = 'white';
      }
      //2min
      if (this.minute == 2 ){
        this.minute1 = 'white';
        this.minute2 = '#7CFC00';
        this.minute4 = 'white';
        this.minute8 = 'white';
        this.minute16 = 'white';
        this.minute32 = 'white';
      }
      //3min
      if (this.minute == 3 ){
        this.minute1 = '#7CFC00';
        this.minute2 = '#7CFC00';
        this.minute4 = 'white';
        this.minute8 = 'white';
        this.minute16 = 'white';
        this.minute32 = 'white';
      }
      //4min
      if (this.minute == 4 ){
        this.minute1 = 'white';
        this.minute2 = 'white';
        this.minute4 = '#7CFC00';
        this.minute8 = 'white';
        this.minute16 = 'white';
        this.minute32 = 'white';
      }
      //5min
      if (this.minute == 5 ){
        this.minute1 = '#7CFC00';
        this.minute2 = 'white';
        this.minute4 = '#7CFC00';
        this.minute8 = 'white';
        this.minute16 = 'white';
        this.minute32 = 'white';
      }
      //6min
      if (this.minute == 6 ){
        this.minute1 = 'white';
        this.minute2 = '#7CFC00';
        this.minute4 = '#7CFC00';
        this.minute8 = 'white';
        this.minute16 = 'white';
        this.minute32 = 'white';
      }
      //7min
      if (this.minute == 7 ){
        this.minute1 = '#7CFC00';
        this.minute2 = '#7CFC00';
        this.minute4 = '#7CFC00';
        this.minute8 = 'white';
        this.minute16 = 'white';
        this.minute32 = 'white';
      }
      //8min
      if (this.minute == 8 ){
        this.minute1 = 'white';
        this.minute2 = 'white';
        this.minute4 = 'white';
        this.minute8 = '7CFC00';
        this.minute16 = 'white';
        this.minute32 = 'white';
      }
      //9min
      if (this.minute == 9 ){
        this.minute1 = '7CFC00';
        this.minute2 = 'white';
        this.minute4 = 'white';
        this.minute8 = '#7CFC00';
        this.minute16 = 'white';
        this.minute32 = 'white';
      }
      //10min
      if (this.minute == 10 ){
        this.minute1 = 'white';
        this.minute2 = '#7CFC00';
        this.minute4 = 'white';
        this.minute8 = '#7CFC00';
        this.minute16 = 'white';
        this.minute32 = 'white';
      }
      //11min
      if (this.minute == 11 ){
        this.minute1 = '#7CFC00';
        this.minute2 = '#7CFC00';
        this.minute4 = 'white';
        this.minute8 = '#7CFC00';
        this.minute16 = 'white';
        this.minute32 = 'white';
      }
      //12min
      if (this.minute == 12 ){
        this.minute1 = 'white';
        this.minute2 = 'white';
        this.minute4 = '7CFC00';
        this.minute8 = '#7CFC00';
        this.minute16 = 'white';
        this.minute32 = 'white';
      }
      //13min
      if (this.minute == 13 ){
        this.minute1 = '#7CFC00';
        this.minute2 = 'white';
        this.minute4 = '#7CFC00';
        this.minute8 = '#7CFC00';
        this.minute16 = 'white';
        this.minute32 = 'white';
      }
      //14min
      if (this.minute == 14 ){
        this.minute1 = 'white';
        this.minute2 = '#7CFC00';
        this.minute4 = '#7CFC00';
        this.minute8 = '#7CFC00';
        this.minute16 = 'white';
        this.minute32 = 'white';
      }
      //15min
      if (this.minute == 15 ){
        this.minute1 = '#7CFC00';
        this.minute2 = '#7CFC00';
        this.minute4 = '#7CFC00';
        this.minute8 = '#7CFC00';
        this.minute16 = 'white';
        this.minute32 = 'white';
      }
      //16min
      if (this.minute == 16 ){
        this.minute1 = 'white';
        this.minute2 = 'white';
        this.minute4 = 'white';
        this.minute8 = 'white';
        this.minute16 = '#7CFC00';
        this.minute32 = 'white';
      }
      //17min
      if (this.minute == 17 ){
        this.minute1 = '#7CFC00';
        this.minute2 = 'white';
        this.minute4 = 'white';
        this.minute8 = 'white';
        this.minute16 = '#7CFC00';
        this.minute32 = 'white';
      }
      //18min
      if (this.minute == 18 ){
        this.minute1 = 'white';
        this.minute2 = '#7CFC00';
        this.minute4 = 'white';
        this.minute8 = 'white';
        this.minute16 = '#7CFC00';
        this.minute32 = 'white';
      }
      //19min
      if (this.minute == 19 ){
        this.minute1 = '#7CFC00';
        this.minute2 = '#7CFC00';
        this.minute4 = 'white';
        this.minute8 = 'white';
        this.minute16 = '#7CFC00';
        this.minute32 = 'white';
      }
      //20min
      if (this.minute == 20 ){
        this.minute1 = 'white';
        this.minute2 = 'white';
        this.minute4 = '#7CFC00';
        this.minute8 = 'white';
        this.minute16 = '#7CFC00';
        this.minute32 = 'white';
      }
      //21min
      if (this.minute == 21 ){
        this.minute1 = '#7CFC00';
        this.minute2 = 'white';
        this.minute4 = '#7CFC00';
        this.minute8 = 'white';
        this.minute16 = '#7CFC00';
        this.minute32 = 'white';
      }
      //22min
      if (this.minute == 22 ){
        this.minute1 = 'white';
        this.minute2 = '#7CFC00';
        this.minute4 = '#7CFC00';
        this.minute8 = 'white';
        this.minute16 = '#7CFC00';
        this.minute32 = 'white';
      }
      //23min
      if (this.minute == 23 ){
        this.minute1 = '#7CFC00';
        this.minute2 = '#7CFC00';
        this.minute4 = '#7CFC00';
        this.minute8 = 'white';
        this.minute16 = '#7CFC00';
        this.minute32 = 'white';
      }
      //24min
      if (this.minute == 24 ){
        this.minute1 = 'white';
        this.minute2 = 'white';
        this.minute4 = 'white';
        this.minute8 = '#7CFC00';
        this.minute16 = '#7CFC00';
        this.minute32 = 'white';
      }
      //25min
      if (this.minute == 25 ){
        this.minute1 = '#7CFC00';
        this.minute2 = 'white';
        this.minute4 = 'white';
        this.minute8 = '#7CFC00';
        this.minute16 = '#7CFC00';
        this.minute32 = 'white';
      }
      //26min
      if (this.minute == 26 ){
        this.minute1 = 'white';
        this.minute2 = '#7CFC00';
        this.minute4 = 'white';
        this.minute8 = '#7CFC00';
        this.minute16 = '#7CFC00';
        this.minute32 = 'white';
      }
      //27min
      if (this.minute == 27 ){
        this.minute1 = '#7CFC00';
        this.minute2 = '#7CFC00';
        this.minute4 = 'white';
        this.minute8 = '#7CFC00';
        this.minute16 = '#7CFC00';
        this.minute32 = 'white';
      }
      //28min
      if (this.minute == 28 ){
        this.minute1 = 'white';
        this.minute2 = 'white';
        this.minute4 = '#7CFC00';
        this.minute8 = '#7CFC00';
        this.minute16 = '#7CFC00';
        this.minute32 = 'white';
      }
      //29min
      if (this.minute == 29 ){
        this.minute1 = '#7CFC00';
        this.minute2 = 'white';
        this.minute4 = '#7CFC00';
        this.minute8 = '#7CFC00';
        this.minute16 = '#7CFC00';
        this.minute32 = 'white';
      }
      //30min
      if (this.minute == 30 ){
        this.minute1 = 'white';
        this.minute2 = '#7CFC00';
        this.minute4 = '#7CFC00';
        this.minute8 = '#7CFC00';
        this.minute16 = '#7CFC00';
        this.minute32 = 'white';
      }
      //31min
      if (this.minute == 31 ){
        this.minute1 = '#7CFC00';
        this.minute2 = '#7CFC00';
        this.minute4 = '#7CFC00';
        this.minute8 = '#7CFC00';
        this.minute16 = '#7CFC00';
        this.minute32 = 'white';
      }
      //32min
      if (this.minute == 32 ){
        this.minute1 = 'white';
        this.minute2 = 'white';
        this.minute4 = 'white';
        this.minute8 = 'white';
        this.minute16 = 'white';
        this.minute32 = '#7CFC00';
      }
      //33min
      if (this.minute == 33 ){
        this.minute1 = '#7CFC00';
        this.minute2 = 'white';
        this.minute4 = 'white';
        this.minute8 = 'white';
        this.minute16 = 'white';
        this.minute32 = '#7CFC00';
      }
      //34min
      if (this.minute == 34 ){
        this.minute1 = 'white';
        this.minute2 = '#7CFC00';
        this.minute4 = 'white';
        this.minute8 = 'white';
        this.minute16 = 'white';
        this.minute32 = '#7CFC00';
      }
      //35min
      if (this.minute == 35 ){
        this.minute1 = '#7CFC00';
        this.minute2 = '#7CFC00';
        this.minute4 = 'white';
        this.minute8 = 'white';
        this.minute16 = 'white';
        this.minute32 = '#7CFC00';
      }
      //36min
      if (this.minute == 36 ){
        this.minute1 = 'white';
        this.minute2 = 'white';
        this.minute4 = '#7CFC00';
        this.minute8 = 'white';
        this.minute16 = 'white';
        this.minute32 = '#7CFC00';
      }
      //37min
      if (this.minute == 37 ){
        this.minute1 = '#7CFC00';
        this.minute2 = 'white';
        this.minute4 = '#7CFC00';
        this.minute8 = 'white';
        this.minute16 = 'white';
        this.minute32 = '#7CFC00';
      }
      //38min
      if (this.minute == 38 ){
        this.minute1 = 'white';
        this.minute2 = '#7CFC00';
        this.minute4 = '#7CFC00';
        this.minute8 = 'white';
        this.minute16 = 'white';
        this.minute32 = '#7CFC00';
      }
      //39min
      if (this.minute == 39 ){
        this.minute1 = '#7CFC00';
        this.minute2 = '7CFC00';
        this.minute4 = '#7CFC00';
        this.minute8 = 'white';
        this.minute16 = 'white';
        this.minute32 = '#7CFC00';
      }
      //40min
      if (this.minute == 40 ){
        this.minute1 = 'white';
        this.minute2 = 'white';
        this.minute4 = 'white';
        this.minute8 = '#7CFC00';
        this.minute16 = 'white';
        this.minute32 = '#7CFC00';
      }
      //41min
      if (this.minute == 41 ){
        this.minute1 = '#7CFC00';
        this.minute2 = 'white';
        this.minute4 = 'white';
        this.minute8 = '#7CFC00';
        this.minute16 = 'white';
        this.minute32 = '#7CFC00';
      }
      //42min
      if (this.minute == 42 ){
        this.minute1 = 'white';
        this.minute2 = '#7CFC00';
        this.minute4 = 'white';
        this.minute8 = '#7CFC00';
        this.minute16 = 'white';
        this.minute32 = '#7CFC00';
      }
      //43min
      if (this.minute == 43 ){
        this.minute1 = '#7CFC00';
        this.minute2 = '#7CFC00';
        this.minute4 = 'white';
        this.minute8 = '#7CFC00';
        this.minute16 = 'white';
        this.minute32 = '#7CFC00';
      }
      //44min
      if (this.minute == 44 ){
        this.minute1 = 'white';
        this.minute2 = 'white';
        this.minute4 = '#7CFC00';
        this.minute8 = '#7CFC00';
        this.minute16 = 'white';
        this.minute32 = '#7CFC00';
      }
      //45min
      if (this.minute == 45 ){
        this.minute1 = '#7CFC00';
        this.minute2 = 'white';
        this.minute4 = '#7CFC00';
        this.minute8 = '#7CFC00';
        this.minute16 = 'white';
        this.minute32 = '#7CFC00';
      }
      //46min
      if (this.minute ==  46){
        this.minute1 = 'white';
        this.minute2 = '#7CFC00';
        this.minute4 = '#7CFC00';
        this.minute8 = '#7CFC00';
        this.minute16 = 'white';
        this.minute32 = '#7CFC00';
      }
      //47min
      if (this.minute == 47 ){
        this.minute1 = '#7CFC00';
        this.minute2 = '#7CFC00';
        this.minute4 = '#7CFC00';
        this.minute8 = '#7CFC00';
        this.minute16 = 'white';
        this.minute32 = '#7CFC00';
      }
      //48min
      if (this.minute == 48 ){
        this.minute1 = 'white';
        this.minute2 = 'white';
        this.minute4 = 'white';
        this.minute8 = 'white';
        this.minute16 = '#7CFC00';
        this.minute32 = '#7CFC00';
      }
      //49min
      if (this.minute == 49 ){
        this.minute1 = '#7CFC00';
        this.minute2 = 'white';
        this.minute4 = 'white';
        this.minute8 = 'white';
        this.minute16 = '#7CFC00';
        this.minute32 = '#7CFC00';
      }
      //50min
      if (this.minute == 50 ){
        this.minute1 = 'white';
        this.minute2 = '#7CFC00';
        this.minute4 = 'white';
        this.minute8 = 'white';
        this.minute16 = '#7CFC00';
        this.minute32 = '#7CFC00';
      }
      //51min
      if (this.minute == 51 ){
        this.minute1 = '#7CFC00';
        this.minute2 = '#7CFC00';
        this.minute4 = 'white';
        this.minute8 = 'white';
        this.minute16 = '#7CFC00';
        this.minute32 = '#7CFC00';
      }
      //52min
      if (this.minute == 52 ){
        this.minute1 = 'white';
        this.minute2 = 'white';
        this.minute4 = '#7CFC00';
        this.minute8 = 'white';
        this.minute16 = '#7CFC00';
        this.minute32 = '#7CFC00';
      }
      //53min
      if (this.minute == 53 ){
        this.minute1 = '#7CFC00';
        this.minute2 = 'white';
        this.minute4 = '#7CFC00';
        this.minute8 = 'white';
        this.minute16 = '#7CFC00';
        this.minute32 = '#7CFC00';
      }
      //54min
      if (this.minute == 54 ){
        this.minute1 = 'white';
        this.minute2 = '#7CFC00';
        this.minute4 = '#7CFC00';
        this.minute8 = 'white';
        this.minute16 = '#7CFC00';
        this.minute32 = '#7CFC00';
      }
      //55min
      if (this.minute == 55 ){
        this.minute1 = '#7CFC00';
        this.minute2 = '#7CFC00';
        this.minute4 = '#7CFC00';
        this.minute8 = 'white';
        this.minute16 = '#7CFC00';
        this.minute32 = '#7CFC00';
      }
      //56min
      if (this.minute == 56 ){
        this.minute1 = 'white';
        this.minute2 = 'white';
        this.minute4 = 'white';
        this.minute8 = '#7CFC00';
        this.minute16 = '#7CFC00';
        this.minute32 = '#7CFC00';
      }
      //57min
      if (this.minute == 57 ){
        this.minute1 = '#7CFC00';
        this.minute2 = 'white';
        this.minute4 = 'white';
        this.minute8 = '#7CFC00';
        this.minute16 = '#7CFC00';
        this.minute32 = '#7CFC00';
      }
      //58min
      if (this.minute == 58 ){
        this.minute1 = 'white';
        this.minute2 = '#7CFC00';
        this.minute4 = 'white';
        this.minute8 = '#7CFC00';
        this.minute16 = '#7CFC00';
        this.minute32 = '#7CFC00';
      }
      //59min
      if (this.minute == 59 ){
        this.minute1 = '#7CFC00';
        this.minute2 = '#7CFC00';
        this.minute4 = 'white';
        this.minute8 = '#7CFC00';
        this.minute16 = '#7CFC00';
        this.minute32 = '#7CFC00';
      }//end of minutes




      //seconds definded with their assigned color coresponding tho their value
      //0sec
      if (this.second == 0 ){
        this.second1 = 'white';
        this.second2 = 'white';
        this.second4 = 'white';
        this.second8 = 'white';
        this.second16 = 'white';
        this.second32 = 'white';
      }
      //1sec
      if (this.second == 1 ){
        this.second1 = '#7CFC00';
        this.second2 = 'white';
        this.second4 = 'white';
        this.second8 = 'white';
        this.second16 = 'white';
        this.second32 = 'white';
      }
      //2sec
      if (this.second == 2 ){
        this.second1 = 'white';
        this.second2 = '#7CFC00';
        this.second4 = 'white';
        this.second8 = 'white';
        this.second16 = 'white';
        this.second32 = 'white';
      }
      //3sec
      if (this.second == 3 ){
        this.second1 = '#7CFC00';
        this.second2 = '#7CFC00';
        this.second4 = 'white';
        this.second8 = 'white';
        this.second16 = 'white';
        this.second32 = 'white';
      }
      //4sec
      if (this.second == 4 ){
        this.second1 = 'white';
        this.second2 = 'white';
        this.second4 = '#7CFC00';
        this.second8 = 'white';
        this.second16 = 'white';
        this.second32 = 'white';
      }
      //5sec
      if (this.second == 5 ){
        this.second1 = '#7CFC00';
        this.second2 = 'white';
        this.second4 = '#7CFC00';
        this.second8 = 'white';
        this.second16 = 'white';
        this.second32 = 'white';
      }
      //6sec
      if (this.second == 6 ){
        this.second1 = 'white';
        this.second2 = '#7CFC00';
        this.second4 = '#7CFC00';
        this.second8 = 'white';
        this.second16 = 'white';
        this.second32 = 'white';
      }
      //7sec
      if (this.second == 7 ){
        this.second1 = '#7CFC00';
        this.second2 = '#7CFC00';
        this.second4 = '#7CFC00';
        this.second8 = 'white';
        this.second16 = 'white';
        this.second32 = 'white';
      }
      //8sec
      if (this.second == 8 ){
        this.second1 = 'white';
        this.second2 = 'white';
        this.second4 = 'white';
        this.second8 = '#7CFC00';
        this.second16 = 'white';
        this.second32 = 'white';
      }
      //9sec
      if (this.second == 9 ){
        this.second1 = '#7CFC00';
        this.second2 = 'white';
        this.second4 = 'white';
        this.second8 = '#7CFC00';
        this.second16 = 'white';
        this.second32 = 'white';
      }
      //10sec
      if (this.second == 10 ){
        this.second1 = 'white';
        this.second2 = '#7CFC00';
        this.second4 = 'white';
        this.second8 = '#7CFC00';
        this.second16 = 'white';
        this.second32 = 'white';
      }
      //11sec
      if (this.second == 11 ){
        this.second1 = '#7CFC00';
        this.second2 = '#7CFC00';
        this.second4 = 'white';
        this.second8 = '#7CFC00';
        this.second16 = 'white';
        this.second32 = 'white';
      }
      //12sec
      if (this.second == 12 ){
        this.second1 = 'white';
        this.second2 = 'white';
        this.second4 = '#7CFC00';
        this.second8 = '#7CFC00';
        this.second16 = 'white';
        this.second32 = 'white';
      }
      //13sec
      if (this.second == 13 ){
        this.second1 = '#7CFC00';
        this.second2 = 'white';
        this.second4 = '#7CFC00';
        this.second8 = '#7CFC00';
        this.second16 = 'white';
        this.second32 = 'white';
      }
      //14sec
      if (this.second == 14 ){
        this.second1 = 'white';
        this.second2 = '#7CFC00';
        this.second4 = '#7CFC00';
        this.second8 = '#7CFC00';
        this.second16 = 'white';
        this.second32 = 'white';
      }
      //15sec
      if (this.second == 15 ){
        this.second1 = '#7CFC00';
        this.second2 = '#7CFC00';
        this.second4 = '#7CFC00';
        this.second8 = '#7CFC00';
        this.second16 = 'white';
        this.second32 = 'white';
      }
      //16sec
      if (this.second == 16 ){
        this.second1 = 'white';
        this.second2 = 'white';
        this.second4 = 'white';
        this.second8 = 'white';
        this.second16 = '#7CFC00';
        this.second32 = 'white';
      }
      //17sec
      if (this.second == 17 ){
        this.second1 = '#7CFC00';
        this.second2 = 'white';
        this.second4 = 'white';
        this.second8 = 'white';
        this.second16 = '#7CFC00';
        this.second32 = 'white';
      }
      //18sec
      if (this.second == 18 ){
        this.second1 = 'white';
        this.second2 = '#7CFC00';
        this.second4 = 'white';
        this.second8 = 'white';
        this.second16 = '#7CFC00';
        this.second32 = 'white';
      }
      //19sec
      if (this.second == 19 ){
        this.second1 = '#7CFC00';
        this.second2 = '#7CFC00';
        this.second4 = 'white';
        this.second8 = 'white';
        this.second16 = '#7CFC00';
        this.second32 = 'white';
      }
      //20sec
      if (this.second == 20 ){
        this.second1 = 'white';
        this.second2 = 'white';
        this.second4 = '#7CFC00';
        this.second8 = 'white';
        this.second16 = '#7CFC00';
        this.second32 = 'white';
      }
      //21sec
      if (this.second == 21 ){
        this.second1 = '#7CFC00';
        this.second2 = 'white';
        this.second4 = '#7CFC00';
        this.second8 = 'white';
        this.second16 = '#7CFC00';
        this.second32 = 'white';
      }
      //22sec
      if (this.second == 22 ){
        this.second1 = 'white';
        this.second2 = '#7CFC00';
        this.second4 = '#7CFC00';
        this.second8 = 'white';
        this.second16 = '#7CFC00';
        this.second32 = 'white';
      }
      //23sec
      if (this.second == 23 ){
        this.second1 = '#7CFC00';
        this.second2 = '#7CFC00';
        this.second4 = '#7CFC00';
        this.second8 = 'white';
        this.second16 = '#7CFC00';
        this.second32 = 'white';
      }
      //24sec
      if (this.second == 24 ){
        this.second1 = 'white';
        this.second2 = 'white';
        this.second4 = 'white';
        this.second8 = '#7CFC00';
        this.second16 = '#7CFC00';
        this.second32 = 'white';
      }
      //25sec
      if (this.second == 25 ){
        this.second1 = '#7CFC00';
        this.second2 = 'white';
        this.second4 = 'white';
        this.second8 = '#7CFC00';
        this.second16 = '#7CFC00';
        this.second32 = 'white';
      }
      //26sec
      if (this.second == 26 ){
        this.second1 = 'white';
        this.second2 = '#7CFC00';
        this.second4 = 'white';
        this.second8 = '#7CFC00';
        this.second16 = '#7CFC00';
        this.second32 = 'white';
      }
      //27sec
      if (this.second == 27 ){
        this.second1 = '#7CFC00';
        this.second2 = '#7CFC00';
        this.second4 = 'white';
        this.second8 = '#7CFC00';
        this.second16 = '#7CFC00';
        this.second32 = 'white';
      }
      //28sec
      if (this.second == 28 ){
        this.second1 = 'white';
        this.second2 = 'white';
        this.second4 = '#7CFC00';
        this.second8 = '#7CFC00';
        this.second16 = '#7CFC00';
        this.second32 = 'white';
      }
      //29sec
      if (this.second == 29 ){
        this.second1 = '#7CFC00';
        this.second2 = 'white';
        this.second4 = '#7CFC00';
        this.second8 = '#7CFC00';
        this.second16 = '#7CFC00';
        this.second32 = 'white';
      }
      //30sec
      if (this.second == 30 ){
        this.second1 = 'white';
        this.second2 = '#7CFC00';
        this.second4 = '#7CFC00';
        this.second8 = '#7CFC00';
        this.second16 = '#7CFC00';
        this.second32 = 'white';
      }
      //31sec
      if (this.second == 31 ){
        this.second1 = '#7CFC00';
        this.second2 = '#7CFC00';
        this.second4 = '#7CFC00';
        this.second8 = '#7CFC00';
        this.second16 = '#7CFC00';
        this.second32 = 'white';
      }
      //32sec
      if (this.second == 32 ){
        this.second1 = 'white';
        this.second2 = 'white';
        this.second4 = 'white';
        this.second8 = 'white';
        this.second16 = 'white';
        this.second32 = '#7CFC00';
      }
      //33sec
      if (this.second == 33 ){
        this.second1 = '#7CFC00';
        this.second2 = 'white';
        this.second4 = 'white';
        this.second8 = 'white';
        this.second16 = 'white';
        this.second32 = '#7CFC00';
      }
      //34sec
      if (this.second == 34 ){
        this.second1 = 'white';
        this.second2 = '#7CFC00';
        this.second4 = 'white';
        this.second8 = 'white';
        this.second16 = 'white';
        this.second32 = '#7CFC00';
      }
      //35sec
      if (this.second == 35 ){
        this.second1 = '#7CFC00';
        this.second2 = '#7CFC00';
        this.second4 = 'white';
        this.second8 = 'white';
        this.second16 = 'white';
        this.second32 = '#7CFC00';
      }
      //36sec
      if (this.second == 36 ){
        this.second1 = 'white';
        this.second2 = 'white';
        this.second4 = '#7CFC00';
        this.second8 = 'white';
        this.second16 = 'white';
        this.second32 = '#7CFC00';
      }
      //37sec
      if (this.second == 37 ){
        this.second1 = '#7CFC00';
        this.second2 = 'white';
        this.second4 = '#7CFC00';
        this.second8 = 'white';
        this.second16 = 'white';
        this.second32 = '#7CFC00';
      }
      //38sec
      if (this.second == 38 ){
        this.second1 = 'white';
        this.second2 = '#7CFC00';
        this.second4 = '#7CFC00';
        this.second8 = 'white';
        this.second16 = 'white';
        this.second32 = '#7CFC00';
      }
      //39sec
      if (this.second == 39 ){
        this.second1 = '#7CFC00';
        this.second2 = '#7CFC00';
        this.second4 = '#7CFC00';
        this.second8 = 'white';
        this.second16 = 'white';
        this.second32 = '#7CFC00';
      }
      //40sec
      if (this.second == 40 ){
        this.second1 = 'white';
        this.second2 = 'white';
        this.second4 = 'white';
        this.second8 = '#7CFC00';
        this.second16 = 'white';
        this.second32 = '#7CFC00';
      }
      //41sec
      if (this.second == 41 ){
        this.second1 = '#7CFC00';
        this.second2 = 'white';
        this.second4 = 'white';
        this.second8 = '#7CFC00';
        this.second16 = 'white';
        this.second32 = '#7CFC00';
      }
      //42sec
      if (this.second == 42 ){
        this.second1 = 'white';
        this.second2 = '#7CFC00';
        this.second4 = 'white';
        this.second8 = '#7CFC00';
        this.second16 = 'white';
        this.second32 = '#7CFC00';
      }
      //43sec
      if (this.second == 43 ){
        this.second1 = '#7CFC00';
        this.second2 = '#7CFC00';
        this.second4 = 'white';
        this.second8 = '#7CFC00';
        this.second16 = 'white';
        this.second32 = '#7CFC00';
      }
      //44sec
      if (this.second == 44 ){
        this.second1 = 'white';
        this.second2 = 'white';
        this.second4 = '#7CFC00';
        this.second8 = '#7CFC00';
        this.second16 = 'white';
        this.second32 = '#7CFC00';
      }
      //45sec
      if (this.second == 45 ){
        this.second1 = '#7CFC00';
        this.second2 = 'white';
        this.second4 = '#7CFC00';
        this.second8 = '#7CFC00';
        this.second16 = 'white';
        this.second32 = '#7CFC00';
      }
      //46sec
      if (this.second ==  46){
        this.second1 = 'white';
        this.second2 = '#7CFC00';
        this.second4 = '#7CFC00';
        this.second8 = '#7CFC00';
        this.second16 = 'white';
        this.second32 = '#7CFC00';
      }
      //47sec
      if (this.second == 47 ){
        this.second1 = '#7CFC00';
        this.second2 = '#7CFC00';
        this.second4 = '#7CFC00';
        this.second8 = '#7CFC00';
        this.second16 = 'white';
        this.second32 = '#7CFC00';
      }
      //48sec
      if (this.second == 48 ){
        this.second1 = 'white';
        this.second2 = 'white';
        this.second4 = 'white';
        this.second8 = 'white';
        this.second16 = '#7CFC00';
        this.second32 = '#7CFC00';
      }
      //49sec
      if (this.second == 49 ){
        this.second1 = '#7CFC00';
        this.second2 = 'white';
        this.second4 = 'white';
        this.second8 = 'white';
        this.second16 = '#7CFC00';
        this.second32 = '#7CFC00';
      }
      //50sec
      if (this.second == 50 ){
        this.second1 = 'white';
        this.second2 = '#7CFC00';
        this.second4 = 'white';
        this.second8 = 'white';
        this.second16 = '#7CFC00';
        this.second32 = '#7CFC00';
      }
      //51sec
      if (this.second == 51 ){
        this.second1 = '#7CFC00';
        this.second2 = '#7CFC00';
        this.second4 = 'white';
        this.second8 = 'white';
        this.second16 = '#7CFC00';
        this.second32 = '#7CFC00';
      }
      //52sec
      if (this.second == 52 ){
        this.second1 = 'white';
        this.second2 = 'white';
        this.second4 = '#7CFC00';
        this.second8 = 'white';
        this.second16 = '#7CFC00';
        this.second32 = '#7CFC00';
      }
      //53sec
      if (this.second == 53 ){
        this.second1 = '#7CFC00';
        this.second2 = 'white';
        this.second4 = '#7CFC00';
        this.second8 = 'white';
        this.second16 = '#7CFC00';
        this.second32 = '#7CFC00';
      }
      //54sec
      if (this.second == 54 ){
        this.second1 = 'white';
        this.second2 = '#7CFC00';
        this.second4 = '#7CFC00';
        this.second8 = 'white';
        this.second16 = '#7CFC00';
        this.second32 = '#7CFC00';
      }
      //55sec
      if (this.second == 55 ){
        this.second1 = '#7CFC00';
        this.second2 = '#7CFC00';
        this.second4 = '#7CFC00';
        this.second8 = 'white';
        this.second16 = '#7CFC00';
        this.second32 = '#7CFC00';
      }
      //56sec
      if (this.second == 56 ){
        this.second1 = 'white';
        this.second2 = 'white';
        this.second4 = 'white';
        this.second8 = '#7CFC00';
        this.second16 = '#7CFC00';
        this.second32 = '#7CFC00';
      }
      //57sec
      if (this.second == 57 ){
        this.second1 = '#7CFC00';
        this.second2 = 'white';
        this.second4 = 'white';
        this.second8 = '#7CFC00';
        this.second16 = '#7CFC00';
        this.second32 = '#7CFC00';
      }
      //58sec
      if (this.second == 58 ){
        this.second1 = 'white';
        this.second2 = '#7CFC00';
        this.second4 = 'white';
        this.second8 = '#7CFC00';
        this.second16 = '#7CFC00';
        this.second32 = '#7CFC00';
      }
      //59sec
      if (this.second == 59 ){
        this.second1 = '#7CFC00';
        this.second2 = '#7CFC00';
        this.second4 = 'white';
        this.second8 = '#7CFC00';
        this.second16 = '#7CFC00';
        this.second32 = '#7CFC00';
      }//end of seconds
    }//end of beginfetch function


    //function for the page when it loads
    ionViewDidLoad() {
      this.start();//calling the interval function
    }

}
