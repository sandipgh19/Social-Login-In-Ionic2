import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { GoogleAuth, FacebookAuth, User } from '@ionic/cloud-angular';
import { HomePage } from '../home/home';

/*
  Generated class for the Secondpage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-secondpage',
  templateUrl: 'secondpage.html'
})
export class SecondpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public googleAuth: GoogleAuth, public facebookAuth: FacebookAuth, public user: User, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log(this.navParams.get('name'));
  }

  logout() {
    this.googleAuth.logout();
    this.facebookAuth.logout();
    let modal = this.modalCtrl.create(HomePage);
    this.navCtrl.pop();
    modal.present();
  }

}
