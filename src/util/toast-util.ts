import { ToastController } from "ionic-angular";
import { Injectable } from "@angular/core";

@Injectable()
export class ToastUtil {
    constructor(private toastCtrl: ToastController) {}
    create(text, duration, position) {
        let toast = this.toastCtrl.create({
            message: text,
            duration: duration,
            position: position
        });
        toast.present();
}
}