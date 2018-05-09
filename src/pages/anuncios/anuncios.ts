import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
    selector: 'page-anuncios',
    templateUrl: 'anuncios.html'
}) 
export class AnunciosPage {
    items;
    constructor(private navCtrl: NavController) { }


initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}