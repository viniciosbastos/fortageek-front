import { Component, OnInit } from "@angular/core";
import { ApiAnuncios } from "../../providers/api-anuncios";
import { Anuncio } from "../../models/anuncio";

@Component({
    templateUrl: 'novo-anuncio.html'
})
export class NovoAnuncioPage implements OnInit {
    anuncio: Anuncio;
    constructor(private anuncioApi: ApiAnuncios){}

    novoAnuncio(): void {
        console.log(this.anuncio);
        this.anuncioApi.novoAnuncio(this.anuncio);

    }

    ngOnInit(): void {
        this.anuncio = {
            item: {nome: "", descricao:"", imagem: "",},
            preferencia: "",
            
        };
    }
}