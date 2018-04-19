import { Component } from "@angular/core";
import { AnunciosPage } from "../anuncios/anuncios";
import { HomePage } from "../home/home";
import { PropostasPage } from "../propostas/propostas";
import { PerfilPage } from "../perfil/perfil";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    tab1 = AnunciosPage;
    tab2 = HomePage;
    tab3 = PropostasPage;
    tab4 = PerfilPage;

    constructor() {

    }
}