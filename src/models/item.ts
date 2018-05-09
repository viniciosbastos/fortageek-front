import { Usuario } from "./usuario";
import { Categoria } from "./categoria";

export class Item{
    constructor (public nome: String, 
                 public descricao: String, 
                 public foto: String,
                 public categoria: Categoria,
                 public usuario?: Usuario, 
                 public id?: number){

    }


}