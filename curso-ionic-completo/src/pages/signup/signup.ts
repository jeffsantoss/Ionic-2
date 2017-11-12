import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationProvider } from '../../services/api/authentication';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {name:'', email:'', confirmEmail:'',password:'',confirmPassword:''}

  submitted = false;

  constructor(public navCtrl: NavController, public api: AuthenticationProvider) {
    console.log(this.user);
  }

  onSubmit(){
    console.log(this.user);

    this.api.postAccount(this.user)
    .then(data => {
      console.log('signup', data)
      this.saveUser();
    })
    .catch(err => {
      console.log('signup error',err)
    })
  }

  saveUser(){
    //Eu não quero salvar a senha do usuário e muito menos as confirmações
    let user = { name: '', email: ''}
    user = {...this.user};
    console.log("saveUser",user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  back(){
    this.navCtrl.pop();
  }
}
