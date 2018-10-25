webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authorization_authorization__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(authorization, navCtrl, common, global) {
        this.authorization = authorization;
        this.navCtrl = navCtrl;
        this.common = common;
        this.global = global;
        this.user = {
            email: this.email,
            password: this.password
        };
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        this.user.email = '';
        this.user.password = '';
        this.common.menuCtrl.swipeEnable(false);
        if (this.common.networkStatus() == 'none') {
            this.common.networkToast();
        }
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.common.menuCtrl.swipeEnable(true);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.submit = function () {
        if (this.global.isOnline == false) {
            this.common.networkToast();
            return;
        }
        if (this.user.email === null || this.user.email === '' || this.user.email === undefined) {
            this.common.toast('Enter your email address', 3000, 'bottom', '');
        }
        else if (this.user.password === null || this.user.password === '' || this.user.password === undefined) {
            this.common.toast('Enter your password', 3000, 'bottom', '');
        }
        else if (this.user.password && this.user.password.length < 6) {
            this.common.toast('Password must contain atleast 6 characters', 3000, 'bottom', '');
        }
        else {
            this.validateUser();
        }
    };
    LoginPage.prototype.validateUser = function () {
        var _this = this;
        this.authorization.getLoginData().subscribe(function (data) {
            _this.authData = data;
            _this.validEmail = _this.authData.filter(function (user) { return user.email === _this.user.email; });
            if (_this.validEmail == '') {
                _this.common.toast('Not a registered user. Please signup before logging in', 3000, 'bottom', '');
            }
            else {
                if (_this.validEmail[0].password == _this.user.password) {
                    _this.common.loading('Logging In', 1000, '');
                    _this.common.nativeStorage.setItem('LoggedIn_User', _this.validEmail[0]);
                    _this.global.currentUser = _this.validEmail[0];
                    console.log("Valid Email" + JSON.stringify(_this.global.currentUser));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.common.toast('Invalid Credentials', 3000, 'bottom', '');
                }
            }
        }, function (error) {
            console.log("Validate User: " + error);
            _this.common.toast(error, 5000, 'bottom', '');
        });
    };
    LoginPage.prototype.forgotPassword = function () {
        if (this.global.isOnline == false) {
            this.common.networkToast();
            return;
        }
        var alert = this.common.alertCtrl.create({
            title: 'Forgot Password',
            message: 'Type in your email address to receive your password',
            inputs: [
                {
                    name: 'email',
                    type: 'email',
                    placeholder: 'Enter your email address'
                }
            ],
            cssClass: 'alert-width',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Send Email',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.signUp = function () {
        if (this.global.isOnline == false) {
            this.common.networkToast();
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\demoapp\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title align="center">Login</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="row padding-b20" align="center">\n    <span class="col margin-t50">\n        <hr class="hr-line">\n    </span>\n    <span class="col-50 padding-5">\n      <ion-icon class="em-8" name="ios-contact-outline"></ion-icon>\n    </span>\n    <span class="col margin-t50">\n        <hr class="hr-line">\n    </span>\n  </div>\n  <ion-list>\n    <ion-item class="padding-none">\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="user.email"></ion-input>\n    </ion-item>\n    <ion-item class="padding-none">\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button color="primary" block (click)="submit()">\n      Log In&nbsp;&nbsp;\n      <ion-icon class="em-2" name="ios-log-in-outline"></ion-icon>\n    </button>\n  </div>\n  <div padding>\n    <span class="float-left">\n      <button class="font-15 bg-transparent" (click)="forgotPassword()">Forgot Password?</button>\n    </span>\n    <span class="float-right">\n      <button class="font-15 bg-transparent" (click)="signUp()">Signup</button>\n    </span>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\demoapp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_authorization_authorization__["a" /* AuthorizationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_common_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = /** @class */ (function () {
    function ProfilePage(common, global) {
        this.common = common;
        this.global = global;
        this.myProfile = this.global.currentUser;
    }
    ProfilePage.prototype.ionViewWillLoad = function () {
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\demoapp\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button class="bg-transparent" menuToggle>\n      <ion-icon class="em-2" name="menu"></ion-icon>\n    </button>\n    <ion-title>My Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        Employee Id:\n      </ion-col>\n      <ion-col col-6>\n        {{myProfile.employeeId}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        First Name:\n      </ion-col>\n      <ion-col col-6>\n        {{myProfile.firstName}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        Last Name:\n      </ion-col>\n      <ion-col col-6>\n        {{myProfile.lastName}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        Email:\n      </ion-col>\n      <ion-col col-6>\n        {{myProfile.email}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        Date of Birth:\n      </ion-col>\n      <ion-col col-6>\n        {{myProfile.dob}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        Phone:\n      </ion-col>\n      <ion-col col-6>\n        {{myProfile.phone}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\demoapp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, common, global) {
        this.navCtrl = navCtrl;
        this.common = common;
        this.global = global;
        this.user = {
            employeeId: this.employeeId,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword,
            gender: this.gender,
            dob: this.dob,
            phone: this.phone
        };
    }
    SignupPage.prototype.ionViewDidEnter = function () {
        this.common.menuCtrl.swipeEnable(false);
    };
    SignupPage.prototype.ionViewWillLeave = function () {
        this.common.menuCtrl.swipeEnable(true);
    };
    SignupPage.prototype.signup = function () {
        if (this.global.isOnline == false) {
            this.common.toast('Network is offline, please check your network connection.', 5000, 'bottom', '');
            return;
        }
        if (this.user.employeeId === null || this.user.employeeId === '' || this.user.employeeId === undefined) {
            this.common.toast('Enter employee id', 3000, 'bottom', '');
        }
        else if (this.user.firstName === null || this.user.firstName === '' || this.user.firstName === undefined) {
            this.common.toast('Enter first name', 3000, 'bottom', '');
        }
        else if (this.user.lastName === null || this.user.lastName === '' || this.user.lastName === undefined) {
            this.common.toast('Enter last name', 3000, 'bottom', '');
        }
        else if (this.user.email === null || this.user.email === '' || this.user.email === undefined) {
            this.common.toast('Enter email address', 3000, 'bottom', '');
        }
        else if (this.user.password === null || this.user.password === '' || this.user.password === undefined) {
            this.common.toast('Enter password', 3000, 'bottom', '');
        }
        else if (this.user.password && this.user.password.length < 6) {
            this.common.toast('Password must contain atleast 6 characters', 3000, 'bottom', '');
        }
        else if (this.user.confirmPassword === null || this.user.confirmPassword === '' || this.user.confirmPassword === undefined) {
            this.common.toast('Enter confirm password', 3000, 'bottom', '');
        }
        else if (this.user.password !== this.user.confirmPassword) {
            this.common.toast('Your password & confirm password does not match', 3000, 'bottom', '');
        }
        else if (this.user.dob === null || this.user.dob === '' || this.user.dob === undefined) {
            this.common.toast('Select your date of birth', 3000, 'bottom', '');
        }
        else if (this.user.phone === null || this.user.phone === undefined) {
            this.common.toast('Enter your phone number', 3000, 'bottom', '');
        }
        else if (this.user.phone && this.user.phone.length < 10) {
            this.common.toast('Phone number must contain 10 digits', 3000, 'bottom', '');
        }
        else {
            this.common.loading('Signing Up', 1000, '');
            this.storeData(this.user);
        }
    };
    SignupPage.prototype.storeData = function (user) {
        this.common.nativeStorage.setItem('SignedUp_User', user);
        this.global.currentUser = {
            employeeId: user.employeeId,
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.firstName + user.lastName,
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword,
            dob: user.dob,
            phone: user.phone
        };
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\demoapp\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item class="padding-none">\n      <ion-label stacked>Employee ID</ion-label>\n      <ion-input type="text" [(ngModel)]="user.employeeId"></ion-input>\n    </ion-item>\n    <ion-item class="padding-none">\n      <ion-label stacked>First Name</ion-label>\n      <ion-input type="text" [(ngModel)]="user.firstName"></ion-input>\n    </ion-item>\n    <ion-item class="padding-none">\n      <ion-label stacked>Last Name</ion-label>\n      <ion-input type="text" [(ngModel)]="user.lastName"></ion-input>\n    </ion-item>\n    <ion-item class="padding-none">\n      <ion-label stacked>Email Address</ion-label>\n      <ion-input type="email" [(ngModel)]="user.email"></ion-input>\n    </ion-item>\n    <ion-item class="padding-none">\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n    <ion-item class="padding-none">\n      <ion-label stacked>Confirm Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user.confirmPassword"></ion-input>\n    </ion-item>\n    <ion-item class="padding-none">\n      <ion-label stacked>Date of Birth</ion-label>\n      <ion-datetime displayFormat="DD/MMM/YYYY" [(ngModel)]="user.dob"></ion-datetime>\n    </ion-item>\n    <ion-item class="padding-none">\n        <ion-label stacked>Phone</ion-label>\n        <ion-input type="tel" [(ngModel)]="user.phone" maxlength="10"></ion-input>\n      </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button color="primary" block (click)="signup()">\n      Sign Up&nbsp;&nbsp;\n      <ion-icon class="em-2" name="ios-log-in-outline"></ion-icon>\n    </button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\demoapp\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorizationProvider = /** @class */ (function () {
    function AuthorizationProvider(http) {
        this.http = http;
    }
    AuthorizationProvider.prototype.getLoginData = function () {
        return this.http.get('assets/login.json').map(function (res) { return res; });
    };
    AuthorizationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthorizationProvider);
    return AuthorizationProvider;
}());

//# sourceMappingURL=authorization.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(navCtrl, common, global) {
        this.navCtrl = navCtrl;
        this.common = common;
        this.global = global;
        this.user = {
            password: this.password,
            confirmPassword: this.confirmPassword
        };
    }
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
    };
    ChangepasswordPage.prototype.changePassword = function () {
        if (this.global.isOnline == false) {
            this.common.networkToast();
            return;
        }
        if (this.user.password === null || this.user.password === '' || this.user.password === undefined) {
            this.common.toast('Enter your new password', 3000, 'bottom', '');
        }
        else if (this.user.password.length < 6) {
            this.common.toast('Password must contain atleast 6 characters', 3000, 'bottom', '');
        }
        else if (this.user.confirmPassword === null || this.user.confirmPassword === '' || this.user.confirmPassword === undefined) {
            this.common.toast('Enter confirm password', 3000, 'bottom', '');
        }
        else if (this.user.confirmPassword.length < 6) {
            this.common.toast('Confirm Password must contain atleast 6 characters', 3000, 'bottom', '');
        }
        else if (this.user.password !== this.user.confirmPassword) {
            this.common.toast('Your new password & confirm password does not match', 3000, 'bottom', '');
        }
        else {
            this.common.menuCtrl.close();
            this.common.nativeStorage.clear();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changepassword',template:/*ion-inline-start:"D:\demoapp\src\pages\changepassword\changepassword.html"*/'<ion-header>\n  <ion-navbar>\n      <button class="bg-transparent" menuToggle>\n        <ion-icon class="em-2" name="menu"></ion-icon>\n      </button>\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item class="padding-none">\n      <ion-label stacked>New Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n    <ion-item class="padding-none">\n      <ion-label stacked>Confirm Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user.confirmPassword"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button color="primary" block (click)="changePassword()">\n      Change Password\n    </button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\demoapp\src\pages\changepassword\changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_common_common__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportPage = /** @class */ (function () {
    function ReportPage(common) {
        this.common = common;
    }
    ReportPage.prototype.ionViewDidLoad = function () {
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"D:\demoapp\src\pages\report\report.html"*/'<ion-header>\n  <ion-navbar>\n      <button class="bg-transparent" menuToggle>\n        <ion-icon class="em-2" name="menu"></ion-icon>\n      </button>\n    <ion-title>Report an Issue</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\demoapp\src\pages\report\report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_common_common__["a" /* CommonProvider */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_version__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_report_report__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_authorization_authorization__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_common_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_global_global__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_report_report__["a" /* ReportPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_report_report__["a" /* ReportPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_authorization_authorization__["a" /* AuthorizationProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_common_common__["a" /* CommonProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_19__providers_global_global__["a" /* GlobalProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommonProvider = /** @class */ (function () {
    function CommonProvider(alertCtrl, loadingCtrl, menuCtrl, nativeStorage, network, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.nativeStorage = nativeStorage;
        this.network = network;
        this.toastCtrl = toastCtrl;
    }
    CommonProvider.prototype.networkStatus = function () {
        return this.network.type;
    };
    CommonProvider.prototype.alert = function (alertTitle, alertSubTitle, alertCss, alertButtonText) {
        var alert = this.alertCtrl.create({
            title: alertTitle,
            subTitle: alertSubTitle,
            cssClass: alertCss,
            buttons: [alertButtonText]
        });
        alert.present();
    };
    CommonProvider.prototype.loading = function (loadingMessage, loadingDuration, loadingCss) {
        var loader = this.loadingCtrl.create({
            content: loadingMessage,
            duration: loadingDuration,
            cssClass: loadingCss
        });
        loader.present();
    };
    CommonProvider.prototype.toast = function (toastMessage, toastDuration, toastPosition, toastCss) {
        var toast = this.toastCtrl.create({
            message: toastMessage,
            duration: toastDuration,
            position: toastPosition,
            cssClass: toastCss
        });
        toast.present();
    };
    CommonProvider.prototype.networkToast = function () {
        var networkToast = this.toastCtrl.create({
            message: 'Network is offline, please check your internet connection.',
            duration: 5000,
            position: 'bottom',
            cssClass: ''
        });
        networkToast.present();
    };
    CommonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], CommonProvider);
    return CommonProvider;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_changepassword_changepassword__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_report_report__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_common_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_global_global__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = /** @class */ (function () {
    function MyApp(ionicApp, platform, statusBar, splashScreen, common, global, device, appVersion) {
        var _this = this;
        this.ionicApp = ionicApp;
        this.platform = platform;
        this.common = common;
        this.global = global;
        this.device = device;
        this.appVersion = appVersion;
        this.pages = [
            {
                title: "Home",
                component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                icon: "ios-home-outline"
            },
            {
                title: "My Profile",
                component: __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
                icon: "ios-person-outline"
            },
            {
                title: "Change Password",
                component: __WEBPACK_IMPORTED_MODULE_9__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                icon: "ios-lock-outline"
            },
            {
                title: "Report an issue",
                component: __WEBPACK_IMPORTED_MODULE_10__pages_report_report__["a" /* ReportPage */],
                icon: "ios-create-outline"
            }
        ];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            if (_this.common.networkStatus() == 'none') {
                _this.global.isConnected = false;
                _this.global.isOnline = false;
                console.log('Network is offline ' + _this.global.isConnected);
                _this.common.networkToast();
            }
            else {
                console.log('Network is online ' + _this.global.isConnected);
                _this.global.isConnected = true;
                _this.global.isOnline = true;
            }
            _this.getNetworkStatus();
            _this.getCurrentUserData();
            _this.getAppData();
        });
        platform.registerBackButtonAction(function () {
            var activePortal = _this.ionicApp._loadingPortal.getActive() || _this.ionicApp._modalPortal.getActive() ||
                _this.ionicApp._toastPortal.getActive() || _this.ionicApp._overlayPortal.getActive();
            if (_this.common.menuCtrl.isOpen()) {
                _this.common.menuCtrl.close();
            }
            else if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else if (activePortal) {
                activePortal.dismiss();
            }
            else {
                if (_this.navCtrl.getActive().name === "HomePage") {
                    var alert_1 = _this.common.alertCtrl.create({
                        title: 'Exit App',
                        message: 'Are you sure you want to exit this app?',
                        cssClass: 'alert-width',
                        buttons: [{
                                text: 'No',
                                role: 'cancel'
                            }, {
                                text: 'Yes',
                                handler: function () {
                                    _this.platform.exitApp();
                                }
                            }]
                    });
                    alert_1.present();
                }
            }
        });
    }
    MyApp.prototype.getNetworkStatus = function () {
        var _this = this;
        this.common.network.onDisconnect().subscribe(function () {
            _this.global.isOnline = false;
            console.log('Network is offline ' + _this.global.isOnline);
            _this.common.networkToast();
        });
        this.common.network.onConnect().subscribe(function () {
            _this.global.isOnline = true;
            console.log('Network is online ' + _this.global.isOnline);
            _this.common.toast('Network is online', 3000, 'bottom', '');
        });
    };
    MyApp.prototype.getCurrentUserData = function () {
        var _this = this;
        this.common.nativeStorage.getItem('LoggedIn_User').then(function (val) {
            if (val) {
                _this.global.currentUser = val;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
            }
        }, function (error) {
            if (error.code == 2) {
                _this.checkSignedUpUser();
            }
            else {
                console.log(error);
            }
        });
    };
    MyApp.prototype.checkSignedUpUser = function () {
        var _this = this;
        this.common.nativeStorage.getItem('SignedUp_User').then(function (val) {
            if (val) {
                _this.global.currentUser = val;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
            }
        }, function (error) {
            if (error.code == 2) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
            }
            else {
                console.log(error);
            }
        });
    };
    MyApp.prototype.getAppData = function () {
        var _this = this;
        this.appVersion.getVersionNumber().then(function (version) {
            _this.appVersionNumber = version;
            _this.deviceData = {
                appVersion: _this.appVersionNumber,
                platform: _this.device.platform,
                version: _this.device.version,
                model: _this.device.model,
                manufacturer: _this.device.manufacturer
            };
            _this.common.nativeStorage.setItem('Device_Data', _this.deviceData);
            console.log(JSON.stringify(_this.deviceData));
        });
    };
    MyApp.prototype.goto = function (page) {
        if (page.title === 'Home') {
            this.navCtrl.setRoot(page.component);
        }
        else {
            this.navCtrl.push(page.component);
        }
        this.common.menuCtrl.close();
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.common.menuCtrl.close();
        var alert = this.common.alertCtrl.create({
            title: 'Logout',
            message: 'Are you sure you want to logout of this app?',
            cssClass: 'alert-width',
            buttons: [{
                    text: 'No',
                    role: 'cancel'
                }, {
                    text: 'Yes',
                    handler: function () {
                        _this.common.nativeStorage.clear();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]);
                    }
                }]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\demoapp\src\app\app.html"*/'<ion-menu [content]="content" persistent="true" swipeEnabled="true" side="right">\n    <ion-header class="padding-8">\n        <ion-title text-center>\n            <ion-icon item-left class="em-2" name="ios-contact-outline"></ion-icon>\n            <label class="padding-l5">{{global.currentUser.userName}}</label>\n        </ion-title>\n    </ion-header>\n    <ion-content>\n        <ion-list class="border-b-1">\n            <button ion-item class="font-18" *ngFor="let page of pages" (click)="goto(page)">\n                {{page.title}}\n                <ion-icon item-right class="em-2" [name]="page.icon"></ion-icon>\n            </button>\n            <button ion-item class="font-18" (click)="logout()">\n                Logout\n                <ion-icon item-right class="em-2" name="ios-log-out-outline"></ion-icon>\n            </button>\n        </ion-list>\n    </ion-content>\n    <ion-footer>\n        <p class="font-18" align="center">Version - {{appVersionNumber}}</p>\n    </ion-footer>\n</ion-menu>\n<ion-nav [root]="rootPage" #content #nav></ion-nav>'/*ion-inline-end:"D:\demoapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__["a" /* AppVersion */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalProvider = /** @class */ (function () {
    function GlobalProvider() {
        this.isConnected = true;
        this.isOnline = true;
        this.currentUser = {
            employeeId: '',
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            dob: '',
            phone: ''
        };
    }
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_common_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(common, global) {
        this.common = common;
        this.global = global;
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\demoapp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button class="bg-transparent" menuToggle>\n      <ion-icon class="em-2" name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  \n</ion-content>'/*ion-inline-end:"D:\demoapp\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_common_common__["a" /* CommonProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map