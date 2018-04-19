import { Injectable } from "@angular/core";
import { Api } from "./api";
import { Observable } from "rxjs/Observable";
import { Anuncio } from "../models/anuncio";

@Injectable()
export class ApiAnuncios {

    constructor(private api: Api) {}

    getMyAdvertisements(): Observable<Anuncio[]> {
        return this.api.get('anuncio/meus-anuncios').map(response => {
            if (response.success) {
                return response.data.anuncios;
            }
        });
    }
}