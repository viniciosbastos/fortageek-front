import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user";
import { NavController } from "ionic-angular";

@Component({
    templateUrl: 'login.html'
})
export class LoginPage implements OnInit{

    user: User;
    constructor(private navCtrl: NavController) {

    }

    ngOnInit(): void {
        this.user = {
            id:0,
            name:'',
            username:'',
            password:'',
            image:''
        };
    }

    doLogin(): void {
        
    }
}