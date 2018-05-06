import { Injectable } from "@angular/core";
import { Api } from "./api";
import { Usuario } from "../models/usuario";
import { Anuncio } from "../models/anuncio";
import { Observable } from "rxjs/Observable";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { StorageUtil } from "../util/storage-util";

@Injectable()
export class ApiUsuario {
    
    constructor(private api: Api, private storage: StorageUtil) {}

    doLogin(user: Usuario) {
        return this.api.post('login', user)
            .map(response => {
                response = response.value;
                let authHeader = 'Basic ' + response.data.auth;

                this.storage.set('key', authHeader);
                this.storage.set('user', response.data.usuario);

                this.api.setAuthHeader(authHeader);
                return true;
            })
            .catch(err => Observable.throw(err));
    }

    update(user: Usuario) {
        return this.api.post('usuario/update', user)
            .map(response => {
                response = response.value;
                return response.data;
            })
            .catch(err => Observable.throw(err));
    }
}