import { OnInit, Component } from "@angular/core";
import { NavController, NavParams, LoadingController, Loading } from "ionic-angular";
import { Anuncio } from "../../models/anuncio";
import { ApiProposta } from "../../providers/api-proposta";

@Component({
    templateUrl: 'nova-proposta.html'
})
export class NovaPropostaPage implements OnInit {
    item = {
        nome: '',
        descricao: '',
        foto: ''
    };
    anuncio: Anuncio;
    loading: Loading;

    constructor(private navCtrl: NavController, 
                private navParams: NavParams, 
                private propostaApi: ApiProposta,
                private loadingCtrl: LoadingController) {}

    salvarProposta() {
        const proposta = {
            item: this.item,
            anuncio: this.anuncio            
        }
        this.createLoading();
        this.propostaApi.novaProposta(proposta).subscribe(val => {
            this.loading.dismiss();
            this.navCtrl.pop();
            this.navCtrl.pop();
        });
    }

    ngOnInit(): void {
        this.anuncio = this.navParams.get('anuncio');
    }

    createLoading(): void {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Aguarde...'            
        });

        this.loading.present();
    }
}