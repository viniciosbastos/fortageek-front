import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Usuario } from '../../models/usuario';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage implements OnInit{

  user: Usuario = {
    id: 1,
    nome: 'Usuário A',
    username: 'usuario',
    password: '12345',
    foto: '../../../www/assets/imgs/default-user.png'
  };
  
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
