import { Item } from "./item";
import { Usuario } from "./usuario";

export interface Anuncio {
    id?: Number;
    status?: String;
    item: Item;
    user?: Usuario;
}