import { Component } from "@angular/core";
import { AdvertisementsPage } from "../advertisements/advertisements";
import { HomePage } from "../home/home";
import { ProposalsPage } from "../proposals/proposals";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    tab1 = AdvertisementsPage;
    tab2 = HomePage;
    tab3 = ProposalsPage;

    constructor() {

    }
}