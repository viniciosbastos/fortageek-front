import { Injectable } from "@angular/core";
import { Api } from "./api";
import { Observable } from "rxjs/Observable";
import { Anuncio } from "../models/anuncio";
import { HttpParams } from "@angular/common/http";

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

    finalizarAnuncio(anuncioId) {
        return this.api.get('anuncio/finalizar/' + anuncioId).map(response => {
            response = response.value
            if (response.success) {
                return response.data.message;
            }
        });
    }

    excluirAnuncio(anuncioId) {
        return this.api.get('anuncio/delete/' + anuncioId).map(response => {
            response = response.value
            if (response.success) {
                return response.data.message;
            }
        });
    }
    searchAnuncio(nome: string, categoria_id?: number){
        let param = new HttpParams().set('nome', nome);
        if (categoria_id) {
            param.set('categoria_id', categoria_id.toString());
        }
        return this.api.get('anuncio', param).map(response => {
            return response.value.data.anuncios
        });
    }

    novoComentario(comentario: any, anuncioId: number) {
        return this.api.post('anuncio/' + anuncioId + '/comentario', comentario).map(val => {
            return val.value.data.message;
        })
        .catch(err => Observable.throw(err));
    }

    getComentarios(anuncioId) {
        return this.api.get('anuncio/' + anuncioId + '/comentario').map(response => {
            response = response.value
            if (response.success) {
                return response.data.comentarios;
            }
        });
    }
}