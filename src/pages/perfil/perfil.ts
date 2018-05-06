import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { ToastUtil } from '../../util/toast-util';
import { StorageUtil } from '../../util/storage-util';
import { ApiUsuario } from '../../providers/api-usuario';

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

  user: Usuario = undefined;
  
  // user: Usuario = {
  //   id: 1,
  //   nome: 'Usuário A',
  //   username: 'usuario',
  //   password: '12345',
  //   foto: '../../../www/assets/imgs/default-user.png'
  // };
  
  isEditing: Boolean;

  constructor(private navCtrl: NavController, 
              private toastUtil: ToastUtil, 
              private storage: StorageUtil,
              private apiUsuario: ApiUsuario) {
  }

  edit(): void {
    this.isEditing = true;
  }

  salvar(): void {
    this.apiUsuario.update(this.user).subscribe(val => {
      console.log(val);
    });
    this.toastUtil.create('Perfil salvo com sucesso', 2000, 'top');
    this.isEditing = false;
  }

  ngOnInit(): void {
    this.storage.get('user').then(val => this.user = val);
    this.isEditing = false;
  }
}
