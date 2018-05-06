import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../models/usuario";
import { NavController, ToastController, LoadingController, Loading } from "ionic-angular";
import { ApiUsuario } from "../../providers/api-usuario";
import { TabsPage } from "../tabs/tabs";
import { ToastUtil } from "../../util/toast-util";

@Component({
    templateUrl: 'login.html'
})
export class LoginPage implements OnInit{

    user: Usuario;
    loading: Loading;
    constructor(private navCtrl: NavController, 
                private loginService: ApiUsuario, 
                private toastUtil: ToastUtil,
                private loadingCtrl: LoadingController) {

    }

    ngOnInit(): void {
        this.user = {
            id:0,
            nome:'',
            username:'',
            password:'',
            foto:''
        };
    }

    doLogin(): void {
        this.createLoading();
        this.loginService.doLogin(this.user)
            .subscribe(
                val => {
                    this.loading.dismiss();
                    this.navCtrl.push(TabsPage);
                }, 
                err => {
                    console.log(err);
                    this.toastUtil.create('Problemas ao realizar login', 2000, 'top');
                    this.loading.dismiss();
        });
    }

    createLoading(): void {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Aguarde...'            
        });

        this.loading.present();
    }
}