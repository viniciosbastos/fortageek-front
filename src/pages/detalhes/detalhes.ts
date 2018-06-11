import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Anuncio } from "../../models/anuncio";
import { NovaPropostaPage } from "../nova-proposta/nova-proposta";
import { ApiAnuncios } from "../../providers/api-anuncios";
import { ToastUtil } from "../../util/toast-util";
import { StorageUtil } from "../../util/storage-util";
import { Usuario } from "../../models/usuario";

@Component({
    selector: 'page-detalhe',
    templateUrl: 'detalhes.html'
})
export class DetalhesPage implements OnInit {
    anuncio: Anuncio;
    comentario: string;
    novo: boolean = false;
    comentarios: any[];
    usuario: Usuario;

    constructor(private navCtrl: NavController, 
                private navParam: NavParams, 
                private anuncioApi: ApiAnuncios,
                private toastUtil: ToastUtil,
                private storage: StorageUtil) {}
 
    ngOnInit(): void {
        this.anuncio = this.navParam.get('anuncio');
        this.storage.get('user').then(res => {
            this.usuario = res;
        })
        this.carregarComentarios();
    }

    novaProposta(): void {
        this.navCtrl.push(NovaPropostaPage, {anuncio: this.anuncio});
    }

    novoComentario() {
        this.novo = true;
    }

    salvar() {
        this.anuncioApi.novoComentario(this.comentario, this.anuncio.id).subscribe(res => {
            this.toastUtil.create(res, 1000, 'top');
            this.carregarComentarios();
            this.cancelar();
        });
    }

    cancelar() {
        this.comentario = '';
        this.novo = false;
    }

    carregarComentarios() {
        this.anuncioApi.getComentarios(this.anuncio.id).subscribe(res => {
            this.comentarios = res;
        }) 
    }
}