import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { ProfilePage } from '../pages/profile/profile';
import { Events } from 'ionic-angular';

import { UserInfoProvider } from '../services/user-info';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = SigninPage;
  profilePage:any = ProfilePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events, public userInfo: UserInfoProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      events.subscribe('user:loaded', () => {
        this.nav.setRoot(HomePage);
      });
    });
  }

  openPage(page) {
    this.nav.push(page);
  }

  logOut(){
    this.userInfo.logOut();
    this.nav.setRoot(SigninPage);
  }
}

