import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { UserInfoProvider } from '../../services/user-info';

@Component({
  selector: 'page-bar',
  templateUrl: 'bar.html',
})
export class BarPage {
  @ViewChild(Slides) slides: Slides; //coloco o component slide no meu
  drinkComponent = false;
  drink:any;

  barInfo;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userinfo:UserInfoProvider) {
    this.barInfo = this.navParams.get('barInfo');
    console.log(this.barInfo);
  }

  ionViewDidLoad() {
    //Os slides já foram criados no constructor, agora posso manipulalos
    this.slides.slidesPerView = 3;
    this.slides.autoplay = 1500;
  }

  chooseDrink(drink){
    this.drink = drink;
    console.log(this.drink)
    this.drinkComponent = true;
  }

  exit(){
    this.drinkComponent = false;
  }

  drinkInterest(ev){
    console.log('tipo de cerveja que o ',this.userinfo.name,"gosta :",ev);
  }
}
