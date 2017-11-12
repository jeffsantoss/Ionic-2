import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { PartnersProvider } from '../../services/api/partners';
import { BarPage } from '../bar/bar';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  indexOfPartners:any;
  page = 1;

  constructor(public navCtrl: NavController, public partnersProvider: PartnersProvider) {}

  ionViewDidLoad(){
    console.log("ionViewDidLoad")
    this.partnersProvider.getIndexOfPartners(1)
    .then(data=>{
      console.log(data);
      this.indexOfPartners = data;
    })
  }

  openCard(id){
    this.partnersProvider.showPartners(id)
    .then(data=>{
      this.navCtrl.push(BarPage,{
        barInfo:data
      })
    })
  }

  doInfinite(infiniteScroll){
    console.log("enter infinite scroll")
    let indexOfNewPartners;

    this.partnersProvider.getIndexOfPartners(++this.page)
    .then(data=>{
      indexOfNewPartners = data;
    })
    .then(() =>{
      for(let newPartner of indexOfNewPartners)
        this.indexOfPartners.push(newPartner)
      console.log('doInfinite',this.indexOfPartners)
      this.page = this.page++;
    }).then(()=>{
      infiniteScroll.complete();
    })
  }
}
