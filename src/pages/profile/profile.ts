import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
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
export class ProfilePage implements OnInit{

  user: User = new User(1, "Usuário A","usuario","12345","../../../www/assets/imgs/default-user.png");
  isEditing: Boolean;

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {
  }

  edit(): void {
    this.isEditing = true;
  }

  salvar(): void {
    let toast = this.toastCtrl.create({
      message: 'Perfil salvo com sucesso',
      duration: 2000,
      position: 'top'
    });
    toast.present();
    this.isEditing = false;
  }

  ngOnInit(): void {
    this.isEditing = false;
  }
}
