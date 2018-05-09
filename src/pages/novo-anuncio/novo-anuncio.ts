import { Component, OnInit } from "@angular/core";
import { ApiAnuncios } from "../../providers/api-anuncios";
import { Anuncio } from "../../models/anuncio";
import { ApiCategoria } from "../../providers/api-categoria";
import { Categoria } from "../../models/categoria";
import { ToastUtil } from "../../util/toast-util";
import { NavController, LoadingController, Loading } from "ionic-angular";

@Component({
    templateUrl: 'novo-anuncio.html'
})
export class NovoAnuncioPage implements OnInit {
    anuncio: Anuncio;
    categorias: Categoria[];
    loading: Loading;
    constructor(private anuncioApi: ApiAnuncios, 
                private categoriaApi: ApiCategoria, 
                private toastUtil: ToastUtil, 
                private navCtrl: NavController,
                private loadingCtrl: LoadingController){}

    novoAnuncio(): void {
        this.createLoading();
        this.anuncioApi.novoAnuncio(this.anuncio).subscribe(val => {
            this.loading.dismiss();
            this.navCtrl.pop();
        });

    }

    cancelar(): void {
        this.navCtrl.pop();
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

    createLoading(): void {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Aguarde...'            
        });

        this.loading.present();
    }
}