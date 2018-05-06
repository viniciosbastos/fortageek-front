import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Anuncio } from '../../models/anuncio';
import { Item } from '../../models/item';
import { Api } from '../../providers/api';
import { ApiAnuncios } from '../../providers/api-anuncios';
import { ToastUtil } from '../../util/toast-util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ads: Anuncio[];

  constructor(private navCtrl: NavController, private toastUtil: ToastUtil, private api:ApiAnuncios) {
    this.api.getMyAdvertisements().subscribe(ads => {
      this.ads = ads;
      console.log(this.ads);
    })
  }

  doRefresh(refresher): void {
    this.api.getMyAdvertisements().subscribe(ads => {
      this.ads = ads;
      refresher.complete();
    })
  }

  add() {
    this.toastUtil.create('Adicionar novo anúncio', 1000, 'top');
  }
}
