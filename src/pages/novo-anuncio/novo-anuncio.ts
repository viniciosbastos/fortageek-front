import { Component, OnInit } from "@angular/core";
import { ApiAnuncios } from "../../providers/api-anuncios";
import { Anuncio } from "../../models/anuncio";
import { ApiCategoria } from "../../providers/api-categoria";
import { Categoria } from "../../models/categoria";
import { ToastUtil } from "../../util/toast-util";
import { NavController } from "ionic-angular";

@Component({
    templateUrl: 'novo-anuncio.html'
})
export class NovoAnuncioPage implements OnInit {
    anuncio: Anuncio;
    categorias: Categoria[];
    constructor(private anuncioApi: ApiAnuncios, 
                private categoriaApi: ApiCategoria, 
                private toastUtil: ToastUtil, 
                private navCtrl: NavController){}

    novoAnuncio(): void {
        this.anuncioApi.novoAnuncio(this.anuncio).subscribe(val => {
            this.toastUtil.create(val.message, 2000, 'top');
            this.navCtrl.pop();
        });

    }

    ngOnInit(): void {
        this.anuncio = {
            item: {nome: "", descricao:"", foto: "", categoria: {id: 0, nome:""}},
            preferencia: "",
            
        };
        this.categoriaApi.getCategorias().subscribe(val => {
            this.categorias = val;
        })
    }
}