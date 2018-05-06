import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { RespostaBase } from "../models/resposta-base";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class Api {
    baseUrl: String = 'http://localhost:8080/api';
    // baseUrl: String = 'https://secret-tundra-84627.herokuapp.com/api';
    private opt = undefined;

    constructor(private http: HttpClient){}

    get(path: String) {
        return this.http
            .get(this.baseUrl + '/' + path, this.opt)
            .map(response => this.handleResponse(response))
            .catch(err => Observable.throw(new Error(err)));
    }

    post(path: String, body: any) {
        return this.http
            .post(this.baseUrl + '/' + path, body, this.opt)
            .map(response => this.handleResponse(response))
            .catch(err => Observable.throw(err));
    }

    handleResponse(response) {
        let res = this.mapResponse(response);
        if (!res.success) {
            return Observable.throw(new Error(res.data.message));    
        } else {
            return Observable.of(res);
    }                
}

    mapResponse(data) {
        return {
            success: data['success'],
            data: data['data']
        };
    }

    setAuthHeader(header: string) {
        this.opt = {
            headers: new HttpHeaders({
                'Authorization': header
            })
        };
    }
}