import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Anuncio } from '../../models/anuncio';
import { Item } from '../../models/item';
import { Api } from '../../providers/api';
import { ApiAnuncios } from '../../providers/api-anuncios';
import { ToastUtil } from '../../util/toast-util';
import { NovoAnuncioPage } from '../novo-anuncio/novo-anuncio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  ads: Anuncio[];

  constructor(private navCtrl: NavController, private toastUtil: ToastUtil, private api:ApiAnuncios) {}

  doRefresh(refresher): void {
    this.api.getMyAdvertisements().subscribe(ads => {
      this.ads = ads;
      refresher.complete();
    })
  }

  add() {
    // this.toastUtil.create('Adicionar novo anúncio', 1000, 'top');
    this.navCtrl.push(NovoAnuncioPage);
  }

  getStatus(s) {
    let status = '';
    if (s == 1)
      status = 'Iniciado';
    else if (s == 2)
      status = 'Analisando';
    else if (s == 3)
      status = 'Pendente';
    return status;
  }

  ngOnInit(): void {
    this.api.getMyAdvertisements().subscribe(ads => {
      this.ads = ads;
      console.log(this.ads);
    });
  }
}
