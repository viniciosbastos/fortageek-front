import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { Api } from "./api";
import { Usuario } from "../models/usuario";
import { Anuncio } from "../models/anuncio";
import { Observable } from "rxjs/Observable";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";

@Injectable()
export class ApiLogin {
    
    constructor(private api: Api, private storage: Storage) {}

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
}