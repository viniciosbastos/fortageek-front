import { OnInit, Component } from "@angular/core";
import { NavController, NavParams, Loading, LoadingController, Events } from "ionic-angular";
import { ApiProposta } from "../../providers/api-proposta";
import { Proposta } from "../../models/proposta";
import { Anuncio } from "../../models/anuncio";
import { ToastUtil } from "../../util/toast-util";

@Component({
    templateUrl: 'propostas-anuncio.html'
})
export class PropostasAnuncioPage implements OnInit {
    propostas: Proposta[];
    anuncio: Anuncio;
    loading: Loading;
    
    constructor(private navCtrl: NavController, 
                private navParams: NavParams, 
                private propostasApi: ApiProposta,
                private loadingCtrl: LoadingController, 
                private toastUtil: ToastUtil,
                private event: Events) {}

    ngOnInit(): void {
        this.anuncio = this.navParams.get('anuncio');
        console.log(this.anuncio);
        this.propostasApi.getPropostasPorAnuncio(this.anuncio.id).subscribe(res => {
            this.propostas = res;
        }) 
    }
    aceitar(p) {
        this.createLoading();
        this.propostasApi.aceitarProposta(p.id).subscribe(res => {                    
            this.loading.dismiss();
            this.toastUtil.create(res, 2000, 'top')
            this.navCtrl.pop();
        })
    }

    recusar(p) {
        this.createLoading();
        this.propostasApi.recusarProposta(p.id).subscribe(res => {
            this.loading.dismiss();
            this.toastUtil.create(res, 2000, 'top')            
            this.propostasApi.getPropostasPorAnuncio(this.anuncio.id).subscribe(res => {
                this.propostas = res;
            })
        })
    }

    doRefresh(refresher): void {
        this.propostasApi.getPropostasPorAnuncio(this.anuncio.id).subscribe(res => {
            this.propostas = res;
          refresher.complete();
        })
    }

    createLoading(): void {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Aguarde...'            
        });

        this.loading.present();
    }

    ionViewWillLeave() {
        this.event.publish('recarregarAnuncios');
    }
}