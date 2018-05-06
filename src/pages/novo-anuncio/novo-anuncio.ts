import { Component } from "@angular/core";
import { ApiAnuncios } from "../../providers/api-anuncios";
import { Anuncio } from "../../models/anuncio";

@Component({
    templateUrl: 'novo-anuncio.html'
})
export class NovoAnuncioPage {
    anuncio: Anuncio;
    constructor(private anuncioApi: ApiAnuncios){}

    novoAnuncio(): void {
        this.anuncioApi.novoAnuncio(this.anuncio);
    }
}