import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Advertisement } from '../../models/advertisement';
import { Item } from '../../models/item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ads: Advertisement[] = [
    new Advertisement(1, 'Anunciado', new Item(1, 'Guerra dos Tronos', 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9054556&qld=90&l=430&a=-1')),
    new Advertisement(2, 'Negociação', new Item(2, 'Fúria dos Reis', 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9054608&qld=90&l=430&a=-1')),
    new Advertisement(3, 'Finalizado', new Item(3, 'Tormenta das Espadas', 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=3647893&qld=90&l=430&a=-1')),
  ];

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {

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
