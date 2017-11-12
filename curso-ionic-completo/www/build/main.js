webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_partners__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bar_bar__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, partnersProvider) {
        this.navCtrl = navCtrl;
        this.partnersProvider = partnersProvider;
        this.page = 1;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("ionViewDidLoad");
        this.partnersProvider.getIndexOfPartners(1)
            .then(function (data) {
            console.log(data);
            _this.indexOfPartners = data;
        });
    };
    HomePage.prototype.openCard = function (id) {
        var _this = this;
        this.partnersProvider.showPartners(id)
            .then(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__bar_bar__["a" /* BarPage */], {
                barInfo: data
            });
        });
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log("enter infinite scroll");
        var indexOfNewPartners;
        this.partnersProvider.getIndexOfPartners(++this.page)
            .then(function (data) {
            indexOfNewPartners = data;
        })
            .then(function () {
            for (var _i = 0, indexOfNewPartners_1 = indexOfNewPartners; _i < indexOfNewPartners_1.length; _i++) {
                var newPartner = indexOfNewPartners_1[_i];
                _this.indexOfPartners.push(newPartner);
            }
            console.log('doInfinite', _this.indexOfPartners);
            _this.page = _this.page++;
        }).then(function () {
            infiniteScroll.complete();
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Jefferson s\Desktop\Ionic3RedAcademy\cerveja-from-red-academy\curso-ionic-completo\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Parceiros</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col *ngFor="let partners of indexOfPartners" col-6>\n\n        <ion-card (tap)="openCard(partners.id)" tappable>\n\n          <img [src]="partners.photo"/>\n\n          <ion-card-content>\n\n            <ion-card-title>\n\n              <!-- truncate é o nome da pipe a ser utilizada, então usamos : e colocamos o parâmetro que a pipe recebe-->\n\n              {{partners.name | truncate:15}}\n\n            </ion-card-title>\n\n            <p>{{partners.address | truncate:23}}</p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content>\n\n    </ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jefferson s\Desktop\Ionic3RedAcademy\cerveja-from-red-academy\curso-ionic-completo\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_api_partners__["a" /* PartnersProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_info__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PartnersProvider = (function () {
    function PartnersProvider(http, userInfo) {
        this.http = http;
        this.userInfo = userInfo;
        this.api_url = 'https://cerveja-api.herokuapp.com/';
    }
    PartnersProvider.prototype.makeRequestOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-token', this.userInfo.accessToken);
        headers.append('Uid', this.userInfo.email);
        headers.append('Client', this.userInfo.client);
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    PartnersProvider.prototype.getIndexOfPartners = function (page) {
        var _this = this;
        var options = this.makeRequestOptions();
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.api_url + 'partners' + '?page=' + page, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    PartnersProvider.prototype.showPartners = function (id) {
        var _this = this;
        var options = this.makeRequestOptions();
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.api_url + 'partners/' + id, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    return PartnersProvider;
}());
PartnersProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__user_info__["a" /* UserInfoProvider */]])
], PartnersProvider);

//# sourceMappingURL=partners.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_info__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarPage = (function () {
    function BarPage(navCtrl, navParams, userinfo) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userinfo = userinfo;
        this.drinkComponent = false;
        this.barInfo = this.navParams.get('barInfo');
        console.log(this.barInfo);
    }
    BarPage.prototype.ionViewDidLoad = function () {
        //Os slides já foram criados no constructor, agora posso manipulalos
        this.slides.slidesPerView = 3;
        this.slides.autoplay = 1500;
    };
    BarPage.prototype.chooseDrink = function (drink) {
        this.drink = drink;
        console.log(this.drink);
        this.drinkComponent = true;
    };
    BarPage.prototype.exit = function () {
        this.drinkComponent = false;
    };
    BarPage.prototype.drinkInterest = function (ev) {
        console.log('tipo de cerveja que o ', this.userinfo.name, "gosta :", ev);
    };
    return BarPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
], BarPage.prototype, "slides", void 0);
BarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bar',template:/*ion-inline-start:"C:\Users\Jefferson s\Desktop\Ionic3RedAcademy\cerveja-from-red-academy\curso-ionic-completo\src\pages\bar\bar.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!--\n\n  <drink *ngIf="drinkComponent"\n\n    [name]="drink.name" [description]="drink.description"\n\n    [size]="drink.size" [photoUrl]="drink.photo"\n\n    (exitComponent)="exitComponent($event)">\n\n  </drink>-->\n\n\n\n  <drink *ngIf="drinkComponent"\n\n    [name]="drink.name" [size]="drink.size"\n\n    [photoUrl]="drink.photo" (tap)="exit()">\n\n  </drink>\n\n\n\n  <div class="image-wrapper">\n\n    <img [src]="barInfo.photo">\n\n    <div class="back-shadow">\n\n      <span class="bar-name">{{barInfo.name}}</span>\n\n    </div>\n\n  </div>\n\n  <div padding> <!-- bota 16px de padding em todo conteúdo -->\n\n    <div>\n\n      <p>{{barInfo.description}}</p>\n\n    </div>\n\n    <div class="info-wrapper">\n\n      <h2>ENDEREÇO</h2>\n\n      <p> <ion-icon name="pin"></ion-icon>\n\n      {{barInfo.address}}</p>\n\n    </div>\n\n    <div class="info-wrapper">\n\n      <h2>TELEFONE</h2>\n\n      <p>  <ion-icon name="call"></ion-icon>\n\n      {{barInfo.phone}}</p>\n\n    </div>\n\n    <div class="info-wrapper">\n\n      <h2>HORÁRIO</h2>\n\n      <p> <ion-icon name="time"></ion-icon>\n\n      {{barInfo.opening_hours}}</p>\n\n    </div>\n\n    <h2>OPÇÕES DE CERVEJAS</h2>\n\n    <ion-slides>\n\n      <ion-slide *ngFor="let drink of barInfo.drinks">\n\n        <ion-card (click)="chooseDrink(drink)">\n\n          <img src="{{drink.photo}}"/>\n\n          <ion-card-content>\n\n            <ion-card-title>\n\n              {{drink.name}}\n\n            </ion-card-title>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jefferson s\Desktop\Ionic3RedAcademy\cerveja-from-red-academy\curso-ionic-completo\src\pages\bar\bar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_user_info__["a" /* UserInfoProvider */]])
], BarPage);

//# sourceMappingURL=bar.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_password_forgot_password__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_authentication__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SigninPage = (function () {
    function SigninPage(navCtrl, api) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.email = '';
    }
    SigninPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forgot_password_forgot_password__["a" /* ForgotPasswordPage */], {
            email: this.email
        });
    };
    SigninPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.signin = function () {
        var _this = this;
        this.api.login(this.email.trim().toLowerCase(), this.password)
            .then(function (data) {
            console.log('signin', data);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {}, { animate: true, direction: 'forward' });
        })
            .catch(function (err) {
            console.log('signin error', err);
        });
    };
    SigninPage.prototype.connectFacebook = function () {
        this.api.connectWithFacebook().then(function (data) {
            console.log(data);
        });
    };
    return SigninPage;
}());
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signin',template:/*ion-inline-start:"C:\Users\Jefferson s\Desktop\Ionic3RedAcademy\cerveja-from-red-academy\curso-ionic-completo\src\pages\signin\signin.html"*/'<ion-content padding>\n\n  <img src="./assets/svgs/logo.svg">\n\n  <div class="infos">\n\n   <ion-list>\n\n    <ion-item>\n\n      <ion-input [(ngModel)]="email" type="text" placeholder="Email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input [(ngModel)]="password" type="password" placeholder="Senha"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n    <div class="options">\n\n      <a (click)="forgotPassword()"><span class="forgot-password">Esqueci minha senha</span></a>\n\n      <button (click)="signin()" ion-button>ENTRAR</button>\n\n    </div>\n\n\n\n    <div class="center signup-wrapper">\n\n      <span (click)="signup()" class="signup"> QUERO ME CADASTRAR</span>\n\n    </div>\n\n\n\n    <div class="center">\n\n      <button ion-button clear full icon-left class="facebook-button" (tap)="connectFacebook()">\n\n        <ion-icon name="logo-facebook"></ion-icon>\n\n        ENTRAR\n\n      </button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jefferson s\Desktop\Ionic3RedAcademy\cerveja-from-red-academy\curso-ionic-completo\src\pages\signin\signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_api_authentication__["a" /* AuthenticationProvider */]])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_authentication__ = __webpack_require__(51);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = (function () {
    function SignupPage(navCtrl, api) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.user = { name: '', email: '', confirmEmail: '', password: '', confirmPassword: '' };
        this.submitted = false;
        console.log(this.user);
    }
    SignupPage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user);
        this.api.postAccount(this.user)
            .then(function (data) {
            console.log('signup', data);
            _this.saveUser();
        })
            .catch(function (err) {
            console.log('signup error', err);
        });
    };
    SignupPage.prototype.saveUser = function () {
        //Eu não quero salvar a senha do usuário e muito menos as confirmações
        var user = { name: '', email: '' };
        user = __assign({}, this.user);
        console.log("saveUser", user);
        localStorage.setItem('user', JSON.stringify(user));
    };
    SignupPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Jefferson s\Desktop\Ionic3RedAcademy\cerveja-from-red-academy\curso-ionic-completo\src\pages\signup\signup.html"*/'<ion-header class="opaque">\n\n  <ion-navbar no-border-bottom>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div class="infos">\n\n    <form (ngSubmit)="onSubmit()" #signupForm="ngForm">\n\n      <ion-list>\n\n        <h1 class="center">CADASTRE-SE</h1>\n\n        <ion-item>\n\n          <ion-input [(ngModel)]="user.name" name="name"\n\n            type="text" placeholder="Usuário"\n\n            #name="ngModel" required\n\n            minlength="4">\n\n          </ion-input>\n\n        </ion-item>\n\n\n\n        <div class="form-error" *ngIf="name.invalid && (name.dirty || name.touched)">\n\n          <div *ngIf="name.errors.required">\n\n            <span>Nome é obrigatório</span>\n\n          </div>\n\n          <div *ngIf="name.errors.minlength">\n\n            <span>Nome deve conter pelo menos 4 caracteres</span>\n\n          </div>\n\n          <div *ngIf="name.errors.forbiddenName">\n\n            <span>Nome Arthur é proibido</span>\n\n          </div>\n\n        </div>\n\n\n\n        <ion-item>\n\n          <ion-input [(ngModel)]="user.email" type="text"\n\n            placeholder="Email" name="email"\n\n            #email="ngModel" required>\n\n          </ion-input>\n\n        </ion-item>\n\n\n\n        <div class="form-error" *ngIf="email.invalid && email.touched">\n\n          <div *ngIf="email.errors.required">\n\n            <span>Email é obrigatório</span>\n\n          </div>\n\n        </div>\n\n\n\n        <ion-item>\n\n          <ion-input [(ngModel)]="user.confirmEmail" type="text"\n\n            placeholder="Confirmar Email" name="confirmEmail"\n\n            required #confirmEmail="ngModel">\n\n          </ion-input>\n\n        </ion-item>\n\n\n\n        <div class="form-error" *ngIf="confirmEmail.invalid && (confirmEmail.dirty || confirmEmail.touched)">\n\n          <div *ngIf="confirmEmail.errors.required">\n\n            <span>Confirmar o email é obrigatório</span>\n\n          </div>\n\n        </div>\n\n\n\n        <div class="form-error" *ngIf="user.email != user.confirmEmail &&  confirmEmail.touched">\n\n          <span>Email e confirmar email devem ser iguais</span>\n\n        </div>\n\n\n\n        <ion-item>\n\n          <ion-input [(ngModel)]="user.password" type="password"\n\n            placeholder="Senha" name="password"\n\n            #password="ngModel" minlength="6"\n\n            maxlength="12" required>\n\n          </ion-input>\n\n        </ion-item>\n\n        <div class="form-error" *ngIf="password.invalid && (password.dirty || password.touched)">\n\n          <div *ngIf="password.errors.required">\n\n            <span>Confirmar o senha é obrigatório</span>\n\n          </div>\n\n          <div *ngIf="password.errors.minlength">\n\n            <span>Senha deverá conter ao menos 6 caracteres</span>\n\n          </div>\n\n          <div *ngIf="password.errors.maxlength">\n\n            <span>Senha deverá conter no máximo 12 caracteres</span>\n\n          </div>\n\n        </div>\n\n        <ion-item>\n\n          <ion-input [(ngModel)]="user.confirmPassword" type="password"\n\n            placeholder="Confirmar Senha" name="confirmPassword"\n\n            #confirmPassword="ngModel" required></ion-input>\n\n        </ion-item>\n\n        <div class="form-error" *ngIf="confirmPassword.invalid &&  confirmPassword.touched">\n\n          <div *ngIf="confirmPassword.errors?.required">\n\n            <span>Confirmar o senha é obrigatório</span>\n\n          </div>\n\n        </div>\n\n        <div class="form-error" *ngIf="user.password != user.confirmPassword &&  confirmPassword.touched">\n\n          <span>Senha e confirmar senha devem ser iguais</span>\n\n        </div>\n\n      </ion-list>\n\n      <button ion-button block type="submit" [disabled]="signupForm.form.invalid">CRIAR MINHA CONTA</button>\n\n    </form>\n\n    <div class="center back-wrapper">\n\n      <span class="back" (click)="back()">JÁ É CADASTRADO? ENTRE NA SUA CONTA</span>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jefferson s\Desktop\Ionic3RedAcademy\cerveja-from-red-academy\curso-ionic-completo\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_api_authentication__["a" /* AuthenticationProvider */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_authentication__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.email = '';
        this.email = this.navParams.get('email');
    }
    ForgotPasswordPage.prototype.sendPassword = function () {
        //this.api.recoverPassword(this.email).then(data => {
        this.navCtrl.pop();
        //})
    };
    return ForgotPasswordPage;
}());
ForgotPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgot-password',template:/*ion-inline-start:"C:\Users\Jefferson s\Desktop\Ionic3RedAcademy\cerveja-from-red-academy\curso-ionic-completo\src\pages\forgot-password\forgot-password.html"*/'<ion-header>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="infos">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-input [(ngModel)]="email" type="text" placeholder="Email"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <div class="options">\n\n      <button ion-button block type="submit" (click)="sendPassword()">RECUPERAR SENHA</button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jefferson s\Desktop\Ionic3RedAcademy\cerveja-from-red-academy\curso-ionic-completo\src\pages\forgot-password\forgot-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_api_authentication__["a" /* AuthenticationProvider */]])
], ForgotPasswordPage);

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = (function () {
    function ProfilePage(navCtrl, actionSheetCtrl, loadingController, camera) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingController = loadingController;
        this.camera = camera;
    }
    ProfilePage.prototype.sendImage = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '',
            buttons: [
                {
                    text: 'Câmera',
                    handler: function () {
                        _this.openCamera();
                    }
                }, {
                    text: 'Galeria de Fotos',
                    handler: function () {
                        _this.openGallery();
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ProfilePage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            correctOrientation: true,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    ProfilePage.prototype.openGallery = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: false,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            correctOrientation: true,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Jefferson s\Desktop\Ionic3RedAcademy\cerveja-from-red-academy\curso-ionic-completo\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Parceiros</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="photo-div">\n\n    <p> Atualizar minha foto </p>\n\n    <div *ngIf="image == null" (tap)="sendImage()">\n\n      <ion-icon name="ios-contact" class="user-photo-default"></ion-icon>\n\n    </div>\n\n\n\n    <div *ngIf="image != null" (tap)="sendImage()">\n\n      <img [src]="image">\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jefferson s\Desktop\Ionic3RedAcademy\cerveja-from-red-academy\curso-ionic-completo\src\pages\profile\profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_forgot_password_forgot_password__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_bar_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_api_authentication__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_api_partners__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_user_info__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_truncate_truncate__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_drink_drink__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_storage__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_facebook__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//Services



//Pipes

//Components

//Modules

//Providers


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_bar_bar__["a" /* BarPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_truncate_truncate__["a" /* TruncatePipe */],
            __WEBPACK_IMPORTED_MODULE_18__components_drink_drink__["a" /* DrinkComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_bar_bar__["a" /* BarPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_18__components_drink_drink__["a" /* DrinkComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_14__services_api_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_15__services_api_partners__["a" /* PartnersProvider */],
            __WEBPACK_IMPORTED_MODULE_16__services_user_info__["a" /* UserInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_facebook__["a" /* Facebook */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_info__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, events, userInfo) {
        var _this = this;
        this.events = events;
        this.userInfo = userInfo;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__["a" /* SigninPage */];
        this.profilePage = __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            events.subscribe('user:loaded', function () {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
            });
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page);
    };
    MyApp.prototype.logOut = function () {
        this.userInfo.logOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__["a" /* SigninPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Jefferson s\Desktop\Ionic3RedAcademy\cerveja-from-red-academy\curso-ionic-completo\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <div class="user-identification">\n\n      <div class="user-name">\n\n        {{ userInfo.name }}\n\n      </div>\n\n      <div class="user-email">\n\n        {{ userInfo.email }}\n\n      </div>\n\n    </div>\n\n  </ion-header>\n\n\n\n  <ion-content class="menu-content" id="content-special-bg">\n\n    <ion-list>\n\n      <button menuClose ion-item (click)="openPage()">\n\n        <ion-icon name="md-pint"></ion-icon>\n\n        Parceiros\n\n      </button>\n\n      <button menuClose ion-item (click)="openPage()">\n\n        <ion-icon name="card"></ion-icon>\n\n        Meu Cartão\n\n      </button>\n\n      <button menuClose ion-item (click)="openPage()">\n\n        <ion-icon name="star"></ion-icon>\n\n        Planos\n\n      </button>\n\n      <button menuClose ion-item (click)="openPage(profilePage)">\n\n        <ion-icon name="contact"></ion-icon>\n\n        Meu Perfil\n\n      </button>\n\n      <button menuClose ion-item (click)="logOut()">\n\n        <ion-icon name="md-log-out"></ion-icon>\n\n        Sair\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Jefferson s\Desktop\Ionic3RedAcademy\cerveja-from-red-academy\curso-ionic-completo\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_7__services_user_info__["a" /* UserInfoProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, length) {
        if (value.length > length) {
            console.log(value, value.length);
            value = value.substring(0, length - 2) + '...';
        }
        return value;
    };
    return TruncatePipe;
}());
TruncatePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'truncate',
    })
], TruncatePipe);

//# sourceMappingURL=truncate.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DrinkComponent = (function () {
    function DrinkComponent() {
        this.description = "A cerveja é uma bebida produzida a partir da fermentação de cereais, principalmente a cevada maltada. Acredita-se que tenha sido uma das primeiras bebidas alcoólicas que foram criadas pelo ser humano.";
        this.interest = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        console.log('Hello DrinkComponent Component');
        this.interest.emit(this.size);
    }
    // Componentes são usados para serem compatíveis com angular e Ionic, ou pelo menos deveriam,
    // Dessa forma vamos usar os hooks do próprio angular
    DrinkComponent.prototype.ngAfterViewInit = function () {
        this.interest.emit(this.beerType);
    };
    DrinkComponent.prototype.teste = function () {
        console.log("teste");
    };
    return DrinkComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], DrinkComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], DrinkComponent.prototype, "photoUrl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], DrinkComponent.prototype, "beerType", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], DrinkComponent.prototype, "description", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], DrinkComponent.prototype, "size", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], DrinkComponent.prototype, "interest", void 0);
DrinkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'drink',template:/*ion-inline-start:"C:\Users\Jefferson s\Desktop\Ionic3RedAcademy\cerveja-from-red-academy\curso-ionic-completo\src\components\drink\drink.html"*/'<div class="alert-content">\n\n  <ion-icon name="close"></ion-icon>\n\n  <div class="content center">\n\n    <img [src]="photoUrl">\n\n    <br>\n\n    <h3>\n\n      {{name}}\n\n      <span>{{size}}ml</span>\n\n    </h3>\n\n    <p>{{description}}</p>\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\Jefferson s\Desktop\Ionic3RedAcademy\cerveja-from-red-academy\curso-ionic-completo\src\components\drink\drink.html"*/
    }),
    __metadata("design:paramtypes", [])
], DrinkComponent);

//# sourceMappingURL=drink.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserInfoProvider = (function () {
    function UserInfoProvider(storage, events) {
        var _this = this;
        this.storage = storage;
        this.events = events;
        this.storage.get('accessToken').then(function (accessToken) {
            if (accessToken != null && accessToken != '') {
                _this.accessToken = accessToken;
            }
        });
        this.storage.get('client').then(function (client) {
            if (client != null && client != '') {
                _this.client = client;
            }
        });
        this.storage.get('name').then(function (name) {
            if (name != null && name != '') {
                _this.name = name;
            }
        });
        this.storage.get('email').then(function (email) {
            if (email != null && email != '') {
                _this.email = email;
                _this.events.publish('user:loaded', { name: _this.name, email: _this.email });
            }
        });
    }
    UserInfoProvider.prototype.logOut = function () {
        this.storage.set("email", null);
        this.storage.set("client", null);
        this.storage.set("name", null);
        this.storage.set("accessToken", null);
    };
    return UserInfoProvider;
}());
UserInfoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */]])
], UserInfoProvider);

//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_info__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationProvider = (function () {
    function AuthenticationProvider(http, userInfo, storage, fb) {
        this.http = http;
        this.userInfo = userInfo;
        this.storage = storage;
        this.fb = fb;
        this.api_url = 'https://cerveja-api.herokuapp.com/';
    }
    AuthenticationProvider.prototype.login = function (email, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        body.append('email', email); //e.g email@email.com
        body.append('password', password); //e.g 12341234
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.api_url + 'auth/sign_in', body, options)
                .map(function (res) {
                _this.userInfo.accessToken = res.headers.get('access-token');
                _this.userInfo.client = res.headers.get('client');
                _this.userInfo.email = res.headers.get('uid');
                // Setting user info on Storage
                _this.storage.set('accessToken', _this.userInfo.accessToken);
                _this.storage.set('client', _this.userInfo.client);
                _this.storage.set('email', _this.userInfo.email);
                return res.json();
            })
                .subscribe(function (data) {
                // Setting user name
                _this.userInfo.name = data.data.name;
                _this.storage.set('name', _this.userInfo.name);
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthenticationProvider.prototype.postAccount = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        body.append('user[name]', user.name); // Arthur Brito
        body.append('user[email]', user.email); //e.g email@email.com
        body.append('user[email_confirmation]', user.confirmEmail); //e.g email@email.com
        body.append('user[password]', user.password); //e.g 12341234
        body.append('user[password_confirmation]', user.confirmPassword); //e.g 12341234
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.api_url + 'users', body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthenticationProvider.prototype.connectWithFacebook = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Just FB Login
            // this.fb.login(['public_profile', 'email'])
            // .then((res: FacebookLoginResponse) => resolve(res))
            // .catch( e => reject(e));
            // FB Login & API request
            _this.fb.login(["public_profile", "email"])
                .then(function (connection) {
                _this.fb.api("me?fields=id,name,email,picture", ["public_profile", "email"]).then(function (user) {
                    resolve({ user: user, connection: connection });
                });
            })
                .catch(function (e) { return reject(e); });
        });
    };
    AuthenticationProvider.prototype.recoverPassword = function (email) { };
    return AuthenticationProvider;
}());
AuthenticationProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */]])
], AuthenticationProvider);

//# sourceMappingURL=authentication.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map