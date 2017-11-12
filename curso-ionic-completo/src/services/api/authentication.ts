import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import { UserInfoProvider } from '../user-info';
import { Storage } from '@ionic/storage';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Injectable()
export class AuthenticationProvider {
  api_url: string = 'https://cerveja-api.herokuapp.com/'

  constructor(public http: Http, private userInfo : UserInfoProvider, private storage: Storage, private fb:Facebook) {}

  login(email:string, password:string){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();

    body.append('email',email); //e.g email@email.com
    body.append('password',password) //e.g 12341234

    return new Promise((resolve,reject) => {
      this.http.post(this.api_url + 'auth/sign_in', body, options)
      .map(res => {
        this.userInfo.accessToken = res.headers.get('access-token');
        this.userInfo.client = res.headers.get('client');
        this.userInfo.email = res.headers.get('uid');

        // Setting user info on Storage
        this.storage.set('accessToken', this.userInfo.accessToken);
        this.storage.set('client', this.userInfo.client);
        this.storage.set('email', this.userInfo.email);

        return res.json();
      })
      .subscribe(data => {

        // Setting user name
        this.userInfo.name = data.data.name;
        this.storage.set('name', this.userInfo.name);

        resolve(data);
      },(err)=>{
        reject(err)
      });
    });
  }

  postAccount(user: any){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();

    body.append('user[name]', user.name); // Arthur Brito
    body.append('user[email]', user.email) //e.g email@email.com
    body.append('user[email_confirmation]', user.confirmEmail) //e.g email@email.com
    body.append('user[password]', user.password) //e.g 12341234
    body.append('user[password_confirmation]', user.confirmPassword) //e.g 12341234

    return new Promise((resolve,reject) => {
      this.http.post(this.api_url + 'users', body, options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      },(err)=>{
        reject(err)
      });
    });
  }

  connectWithFacebook(){
    return new Promise((resolve,reject) => {
      // Just FB Login
      // this.fb.login(['public_profile', 'email'])
      // .then((res: FacebookLoginResponse) => resolve(res))
      // .catch( e => reject(e));

      // FB Login & API request
      this.fb.login(["public_profile", "email"])
      .then(connection => {
        this.fb.api("me?fields=id,name,email,picture", ["public_profile", "email"]).then(user => {
          resolve({user: user, connection: connection});
        });
      })
      .catch(e => reject(e));
    });
  }

  recoverPassword(email:string){}
}
