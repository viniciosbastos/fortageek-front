import { Injectable } from "@angular/core";
import { Api } from "./api";
import { Observable } from "rxjs/Observable";
import { Anuncio } from "../models/anuncio";

@Injectable()
export class ApiAnuncios {

    constructor(private api: Api) {}

    getMyAdvertisements(): Observable<Anuncio[]> {
        return this.api.get('anuncio/meus-anuncios').map(response => {
            response = response.value
            if (response.success) {
                return response.data.anuncios;
            }
        });
    }

    novoAnuncio(anuncio: Anuncio) {
        return this.api.post('anuncio', anuncio).map(val => {
            return val.value.data;
        })
        .catch(err => Observable.throw(err));
    }

    searchAnuncio(nome: String){
        return this.api.get('anuncio').map(response => {
            response = response.value
            if (response.success) {
                return response.data.anuncios;
            }
        });
    }
}