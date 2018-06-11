import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, Events } from 'ionic-angular';
import { Anuncio } from '../../models/anuncio';
import { Item } from '../../models/item';
import { Api } from '../../providers/api';
import { ApiAnuncios } from '../../providers/api-anuncios';
import { ToastUtil } from '../../util/toast-util';
import { NovoAnuncioPage } from '../novo-anuncio/novo-anuncio';
import { PropostasAnuncioPage } from '../propostas-anuncio/propostas-anuncio';
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  ads: Anuncio[];

  constructor(private navCtrl: NavController, 
              private toastUtil: ToastUtil, 
              private api:ApiAnuncios,
              private events: Events) {}

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

  finalizar(ad) {
    this.api.finalizarAnuncio(ad.id).subscribe(res => {
      this.toastUtil.create(res, 1000, 'top');
      this.carregarAnuncios();
    });
  }

  excluir(ad) {
    this.api.excluirAnuncio(ad.id).subscribe(res => {
      this.toastUtil.create(res, 1000, 'top');
      this.carregarAnuncios();
    });
  }

  getStatus(s) {
    let status = '';
    if (s == 1)
      status = 'Anunciado';
    else if (s == 2)
      status = 'Analisando';
    else if (s == 3)
      status = 'Aceito';
    else if (s == 4)
      status = 'Finalizado';
    return status;
  }

  detalhes(anuncio) {
    this.navCtrl.push(DetalhesPage, {anuncio: anuncio});
  }

  propostasAnuncio(anuncio) {
    this.navCtrl.push(PropostasAnuncioPage, {anuncio: anuncio});
  }

  ngOnInit() {
    this.events.subscribe('recarregarAnuncios', () => {
      this.carregarAnuncios();
    });
    this.carregarAnuncios();
  }

  carregarAnuncios() {
    this.api.getMyAdvertisements().subscribe(ads => {
      this.ads = ads;
    });
  }
}
