import { Usuario } from "./usuario";

export interface Item{
    id: Number;
    nome: String;
    descricao: String;
    image: String;
    usuario: Usuario;
}