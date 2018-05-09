import { Injectable } from "@angular/core";
import { Api } from "./api";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ApiCategoria {

    constructor(private api: Api) {}

    getCategorias() {
        return this.api.get('categoria').map(val => {
            return val.value.data.categorias;
        })
        .catch(err => Observable.throw(err));
    }

}