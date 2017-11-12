import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';

import { TournamentPage, TeamHome } from "../pages";
import { EliteApi } from "../../app/shared/shared";

@Component({
    templateUrl: "my-teams.page.html"
})

export class MyTeams {
    constructor(private _nav: NavController,
                private _elite: EliteApi,
                private loadingController: LoadingController) {}
    
    favorites = [
         {
             team: { id: 6182, name: 'HC Elite 7th', coach: 'Michelotti' },
             tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
             tournamentName: 'March Madness Tournament'
         },
         {
             team: { id: 805, name: 'HC Elite', coach: 'Michelotti' },
             tournamentId: '98c6857e-b0d1-4295-b89e-2d95a45437f2',
             tournamentName: 'Holiday Hoops Challenge'
         }
    ];

    goToTournaments() {
        this._nav.push(TournamentPage);
    }

    favoriteTapped($event, favorite) {
        let loader = this.loadingController.create({
            content:'Getting data...',
            dismissOnPageChange: true
        });
        loader.present();
        this._elite.getTournamentData(favorite.tournamentId)
            .subscribe(t => t.nav.push(TeamHome, favorite.team));

}
}
