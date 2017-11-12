import {Component} from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { MyTeams } from "../pages";
import { EliteApi } from "../../app/shared/shared";
import * as _ from 'lodash';
import { GamePage }  from "../pages";

@Component({
    templateUrl: "teams-detail.page.html"
})

export class TeamDetailPage {
    games: any[];
    team: any;
    private tourneyData: any;

    constructor(private _nav: NavController,
                private _navParams: NavParams,
                private _eliteApi: EliteApi) {}
    
    ionViewDidLoad() {
         this.team = this._navParams.data;
         this.tourneyData = this._eliteApi.getCurrentTourney();

         this.games = _.chain(this.tourneyData.games)
                        .filter(g => g.team1Id === this.team.id || g.team2Id === this.team.id)
                        .map(g => {
                            let isTeam1 = (g.team1Id === this.team.id);
                            let opponentName = isTeam1 ? g.team2 : g.team1;
                            let scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
                                 return {
                                    gameId: g.id,
                                    opponent: opponentName,
                                    time: Date.parse(g.time),
                                    location: g.location,
                                    locationUrl: g.locationUrl,
                                    scoreDisplay: scoreDisplay,
                                    homeAway: (isTeam1 ? "vs." : "at")
                                };
                         })
                        .value();
    }

    getScoreDisplay(isTeam1, team1Score, team2Score) {
       if (team1Score && team2Score) {
           var teamScore = (isTeam1 ? team1Score : team2Score);
           var opponentScore = (isTeam1 ? team2Score : team1Score);
           var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
           return winIndicator + teamScore + "-" + opponentScore;
        }
        else {
            return "";
        }
    }

    gameClicked($event, game) {
        let sourceGame = this.tourneyData.games.find(g => g.id === game.gameId);
        this._nav.parent.parent.push(GamePage, sourceGame);
    }

   /*goHome() {
        this._nav.push(MyTeams);
        this._nav.popToRoot();
        this._nav.parent.parent.popToRoot();
    }*/
}

