import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Anuncio } from '../../models/anuncio';
import { Item } from '../../models/item';
import { Api } from '../../providers/api';
import { ApiAnuncios } from '../../providers/api-anuncios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ads: Anuncio[];

  constructor(private navCtrl: NavController, private toastCtrl: ToastController, private api:ApiAnuncios) {
    this.api.getMyAdvertisements().subscribe(ads => {
      this.ads = ads;
      console.log(this.ads);
    })
  }

  doRefresh(refresher): void {
    refresher.complete();
    let toast = this.toastCtrl.create({
      message: 'Atualizado',
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }

  add() {
    let toast = this.toastCtrl.create({
      message: 'Adicionar novo anúncio',
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }
}
