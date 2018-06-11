import { Injectable } from "@angular/core";
import { Api } from "./api";
import { Observable } from "rxjs/Observable";
import { Anuncio } from "../models/anuncio";
import { HttpParams } from "@angular/common/http";
import { Proposta } from "../models/proposta";

@Injectable()
export class ApiProposta {

    constructor(private api: Api) {}

    getPropostas() {
        return this.api.get('proposta').map(response => {
            response = response.value
            if (response.success) {
                return response.data.propostas;
            }
        });
    }

    getPropostasPorAnuncio(anuncioId) {
        return this.api.get('proposta/anuncio/' + anuncioId).map(response => {
            response = response.value
            if (response.success) {
                return response.data.propostas;
            }
        });
    }

    aceitarProposta(propostaId) {
        return this.api.get('proposta/aceitar/' + propostaId).map(response => {
            response = response.value
            if (response.success) {
                return response.data.message;
            }
        });
    }

    recusarProposta(propostaId) {
        return this.api.get('proposta/recusar/' + propostaId).map(response => {
            response = response.value
            if (response.success) {
                return response.data.message;
            }
        });
    }

    novaProposta(proposta) {
        return this.api.post('proposta', proposta).map(val => {
            return val.value.data;
        })
        .catch(err => Observable.throw(err));
    }

}