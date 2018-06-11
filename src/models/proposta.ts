import { Anuncio } from "./anuncio";
import { Usuario } from "./usuario";
import { Item } from "./item";

export interface Proposta {
    id?: number;
    status?: number;
    anuncio: Anuncio;
    item: Item;
    usuario?: Usuario
}