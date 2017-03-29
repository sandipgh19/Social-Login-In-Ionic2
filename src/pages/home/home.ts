import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { SecondpagePage } from '../secondpage/secondpage';
import { GoogleAuth, FacebookAuth, User } from '@ionic/cloud-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public googleAuth: GoogleAuth, public facebookAuth: FacebookAuth, public user: User, public modalCtrl: ModalController) {

    
  }

  
  Googlelogin() {
    this.googleAuth.login().then((success) => {
      alert('Logged in');
      alert(JSON.stringify(success));
      let modal = this.modalCtrl.create(SecondpagePage);
      modal.present();
      this.navCtrl.pop();


    });

  }
  Facebooklogin() {

    this.facebookAuth.login().then((success) => {
      alert('Logged in');
      alert(JSON.stringify(success));
      let data={name: 'Sandip'};
      this.navCtrl.push(SecondpagePage,data);
      this.navCtrl.pop();
    });

  }
  
  

}
