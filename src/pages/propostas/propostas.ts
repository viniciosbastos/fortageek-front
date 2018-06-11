import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { Proposta } from "../../models/proposta";
import { ApiProposta } from "../../providers/api-proposta";

@Component({
    selector: 'page-propostas',
    templateUrl: 'propostas.html'
})
export class PropostasPage implements OnInit{
    propostas: Proposta[];

    constructor(private navCtrl: NavController, private propostasApi: ApiProposta) { }

    getStatus(s) {
        let status = '';
        if (s == 0)
          status = 'Enviado';
        else if (s == 1)
          status = 'Aceito';
        else if (s == 2)
          status = 'Recusado';
        else if (s == 3)
          status = 'Finalizado';
        return status;
      }
    ngOnInit(): void {
        this.propostasApi.getPropostas().subscribe(res => {
            this.propostas = res;
        }) 
    }
    doRefresh(refresher): void {
        this.propostasApi.getPropostas().subscribe(res => {
            this.propostas = res;
          refresher.complete();
        })
    }
}