import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import { UserInfoProvider } from '../user-info';

@Injectable()
export class PartnersProvider {
  api_url: string = 'https://cerveja-api.herokuapp.com/'

  constructor(public http: Http, private userInfo: UserInfoProvider) {}

  makeRequestOptions(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-token', this.userInfo.accessToken);
    headers.append('Uid', this.userInfo.email);
    headers.append('Client', this.userInfo.client)

    return new RequestOptions({ headers: headers });
  }

  getIndexOfPartners(page:number){
    let options = this.makeRequestOptions();

    return new Promise((resolve,reject) => {
      this.http.get(this.api_url + 'partners'+'?page='+page, options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      },(err)=>{
        reject(err)
      });
    });
  }

  showPartners(id:string){
    let options = this.makeRequestOptions();

    return new Promise((resolve,reject) => {
      this.http.get(this.api_url + 'partners/'+id, options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      },(err)=>{
        reject(err)
      });
    });
  }
}
