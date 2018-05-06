import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageUtil {
    constructor(private storage: Storage) {}

    set(key: string, val: any){
        this.storage.set(key, val);
    }

    get(key: string): any {
        return this.storage.get(key);
    }
}