import { Item } from "./item";
import { Usuario } from "./usuario";

export class Anuncio {
    constructor (public item?: Item, public preferencia?: string, public status?: String, public usuario?: Usuario, public id?: number){
        
    }
    
}