import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { AuthenticationProvider } from '../../services/api/authentication';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  email:string = '';
  password:string;

  constructor(public navCtrl: NavController, public api : AuthenticationProvider) {}

  forgotPassword(){
    this.navCtrl.push(ForgotPasswordPage, {
      email: this.email
    });
  }

  signup(){
    this.navCtrl.push(SignupPage)
  }

  signin(){
    this.api.login(this.email.trim().toLowerCase(),this.password)
    .then(data => {
      console.log('signin',data)
      this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
    })
    .catch(err => {
      console.log('signin error',err)
    })
  }

  connectFacebook(){
    this.api.connectWithFacebook().then(data => {
      console.log(data);
    })
  }
}
