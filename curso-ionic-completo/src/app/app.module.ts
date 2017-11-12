import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { BarPage } from '../pages/bar/bar';
import { ProfilePage } from '../pages/profile/profile';

//Services
import { AuthenticationProvider } from '../services/api/authentication';
import { PartnersProvider } from '../services/api/partners';
import { UserInfoProvider } from '../services/user-info';

//Pipes
import { TruncatePipe } from '../pipes/truncate/truncate';

//Components
import { DrinkComponent } from '../components/drink/drink';

//Modules
import { IonicStorageModule } from '@ionic/storage';

//Providers
import { Camera } from '@ionic-native/camera';
import { Facebook } from '@ionic-native/facebook';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ForgotPasswordPage,
    BarPage,
    ProfilePage,
    TruncatePipe,
    DrinkComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ForgotPasswordPage,
    BarPage,
    ProfilePage,
    DrinkComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthenticationProvider,
    PartnersProvider,
    UserInfoProvider,
    Camera,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
