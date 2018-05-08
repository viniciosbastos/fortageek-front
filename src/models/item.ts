import { Usuario } from "./usuario";

export class Item{
    constructor (public nome: String, public descricao: String, public imagem: String, public usuario?: Usuario, public id?: number){

    }


}