import {Component} from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import {TeamHome} from '../pages';
import { EliteApi } from "../../app/shared/shared";


@Component({
    templateUrl: "teams.page.html"
})

export class TeamPage {
    constructor(private _nav: NavController, private _navsParams: NavParams, private _eliteApi: EliteApi) {}
    teams = [];
    /*teams = [
        { id: 1, name: 'HC Elite'},
        { id: 2, name: 'Team Takeover'},
        { id: 3, name: 'DC Thunder'}
    ];*/

    ionViewDidLoad() {
        let selectedTourney = this._navsParams.data;

        this._eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
             this.teams = data.teams;     
        });
    }

    itemTappped($event, team) {
        this._nav.push(TeamHome, team);
    }
}

