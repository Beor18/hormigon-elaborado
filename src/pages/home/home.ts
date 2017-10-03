import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { TabsPage } from '../tabs/tabs';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  showSkip = false;

 constructor(public navCtrl: NavController) {

  }

  startApp() {
    this.navCtrl.push(AboutPage).then(() => {
      //this.storage.set('hasSeenTutorial', 'true');
    })
  }
  

}