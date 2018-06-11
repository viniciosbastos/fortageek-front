import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { ApiAnuncios } from "../../providers/api-anuncios";
import { Api } from "../../providers/api"
import { Anuncio } from "../../models/anuncio";
import { DetalhesPage } from "../detalhes/detalhes";

@Component({
    selector: 'page-anuncios',
    templateUrl: 'anuncios.html'
}) 
export class AnunciosPage implements OnInit{
    result: Anuncio[];
    constructor(private navCtrl: NavController, private anuncioApi: ApiAnuncios, private api:Api) {}

  getItems(ev: any) {
    this.anuncioApi.searchAnuncio(ev.target.value).subscribe(val => {
      this.result = val;
    });
    // // Reset items back to all of the items
    // this.initializeItems();

    // // set val to the value of the ev target
    // var val = ev.target.value;

    // // if the value is an empty string don't filter the items
    // if (val && val.trim() != '') {
    //   this.items = this.items.filter((item) => {
    //     return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //   })
    // }
  }

  ngOnInit(): void {
    this.anuncioApi.searchAnuncio('').subscribe(val => {
      this.result = val;
    });
  }

  goToDetail(ad: any): void {
    this.navCtrl.push(DetalhesPage, {anuncio: ad});
  }
}