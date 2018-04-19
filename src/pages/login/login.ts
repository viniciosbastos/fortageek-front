import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../models/usuario";
import { NavController, ToastController } from "ionic-angular";
import { ApiLogin } from "../../providers/api-login";
import { TabsPage } from "../tabs/tabs";

@Component({
    templateUrl: 'login.html'
})
export class LoginPage implements OnInit{

    user: Usuario;
    constructor(private navCtrl: NavController, private loginService: ApiLogin, private toastCtrl: ToastController) {

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
        this.loginService.doLogin(this.user)
            .subscribe(
                val => this.navCtrl.push(TabsPage), 
                err => {
                    let toast = this.toastCtrl.create({
                        message: "err.status",
                        duration: 2000,
                        position: 'top'
                    });
                    toast.present();
        });
    }
}