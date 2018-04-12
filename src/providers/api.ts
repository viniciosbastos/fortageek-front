import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class Api {
    baseUrl: String = '';

    constructor(private http: HttpClient){}

    get(path: String, params?: any) {
        if(params) {

        }
        return this.http.get(this.baseUrl + '/' + path);
    }

    post(path: String, body: any, reqOpts?: any) {
        return this.http.post(this.baseUrl + '/' + path, body, reqOpts);
    }
}