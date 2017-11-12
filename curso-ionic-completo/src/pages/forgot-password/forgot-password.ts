import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../services/api/authentication';



@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  email:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: AuthenticationProvider) {
    this.email = this.navParams.get('email')
  }

  sendPassword(){
    //this.api.recoverPassword(this.email).then(data => {
      this.navCtrl.pop();
    //})
  }
}
