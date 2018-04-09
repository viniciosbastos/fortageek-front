import { Component } from "@angular/core";
import { AdvertisementsPage } from "../advertisements/advertisements";
import { HomePage } from "../home/home";
import { ProposalsPage } from "../proposals/proposals";
import { ProfilePage } from "../profile/profile";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    tab1 = AdvertisementsPage;
    tab2 = HomePage;
    tab3 = ProposalsPage;
    tab4 = ProfilePage;

    constructor() {

    }
}