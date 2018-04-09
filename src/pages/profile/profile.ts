import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user: User = new User(1, "Usuário A","usuario","12345","../../../www/assets/imgs/default-user.png");
  constructor(public navCtrl: NavController) {
  }

 

}
