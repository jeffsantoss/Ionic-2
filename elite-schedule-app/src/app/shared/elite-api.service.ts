import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Observable } from "rxjs/Observable";

@Injectable()
export class EliteApi {
    
    baseUrl = 'https://elite-schedule-app-i2-2cdff.firebaseio.com';
    constructor(private _http: Http){}
    currentTourney: any = {};

    getTournaments() {
        return new Promise(resolve => { 
            this._http.get(`${this.baseUrl}/tournaments.json`)
            .subscribe(res => resolve(res.json()));        
        });
    }

    getTournamentData(tourneyId): Observable<any> {
        return this._http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
                   .map((response: Response) => {
                       this.currentTourney = response.json();
                       return this.currentTourney;
                   });
    }

    getCurrentTourney() {
        return this.currentTourney;
    }
}