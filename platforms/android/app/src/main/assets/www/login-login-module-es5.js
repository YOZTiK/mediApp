(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <ion-card>\n    <img style=\"margin-top: -15%; margin-bottom: -15%;\" src=\"../../assets/logo/mediApp.png\" />\n    <ion-card-header style=\"text-align:center; margin: 0 auto;\" >\n      <ion-card-subtitle>Cuidamos de ti</ion-card-subtitle>\n      <ion-card-title>MediApp</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form (ngSubmit)=\"login()\" [formGroup]=\"credentials\">\n        <div class=\"input-group\">\n          <ion-item>\n            <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\"></ion-input>\n          </ion-item>\n          <div *ngIf=\"(email.dirty || email.touched) && email.errors\" class=\"errors\">\n            <span *ngIf=\"email.errors?.required\">Ingresa el correo</span>\n            <span *ngIf=\"email.errors?.email\">El correo no es válido</span>\n          </div>\n          <ion-item>\n            <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n          </ion-item>\n          <div *ngIf=\"(password.dirty || password.touched) && password.errors\" class=\"errors\">\n            <span *ngIf=\"password.errors?.required\">Ingresa el password</span>\n            <span *ngIf=\"password.errors?.minlength\">El password no es correcto</span>\n          </div>\n        </div>\n\n        <ion-row>\n          <ion-col>\n            <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!credentials.valid\">Log in</ion-button>\n            <a [routerLink]=\"['/forgot-password']\" class=\"small-text\">Forgot Password?</a>\n          </ion-col>\n        </ion-row>\n\n      </form>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col align-self-center>\n\n            <span class=\"divider line one-line\">or</span>\n\n            <ion-button [routerLink]=\"['/registration']\" expand=\"block\" color=\"primary\">Register</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".small-text {\n  text-decoration: none;\n  display: block;\n  font-size: 14px;\n  text-align: center;\n  margin-top: 10px;\n}\n\n.divider {\n  display: -webkit-box;\n  display: flex;\n}\n\n.divider:before, .divider:after {\n  content: \"\";\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.line {\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 1em -1em;\n  color: #cccccc;\n}\n\n.line:before, .line:after {\n  height: 1px;\n  margin: 0 1em;\n}\n\n.one-line:before, .one-line:after {\n  background: #cccccc;\n}\n\n.auth-form ion-grid,\n.auth-form ion-row {\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.already {\n  display: block;\n  text-align: center;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95b2x0aWNjZXJ2YW50ZXNnYWxlYW5hL1Byb2plY3RzL21lZGlBcHAvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNBSjs7QURFSTtFQUVJLFdBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNEUjs7QURLQTtFQUNJLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNGSjs7QURJSTtFQUVJLFdBQUE7RUFDQSxhQUFBO0FDSFI7O0FEUUk7RUFFSSxtQkFBQTtBQ05SOztBRFVBOztFQUVJLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDUEo7O0FEVUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNtYWxsLXRleHQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cblxuLmRpdmlkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG59XG5cbi5saW5lIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMWVtIC0xZW07XG4gICAgY29sb3I6ICNjY2NjY2M7XG5cbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIG1hcmdpbjogMCAxZW07XG4gICAgfVxufVxuXG4ub25lLWxpbmUge1xuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xuICAgIH1cbn1cblxuLmF1dGgtZm9ybSBpb24tZ3JpZCxcbi5hdXRoLWZvcm0gaW9uLXJvdyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWxyZWFkeSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuIiwiLnNtYWxsLXRleHQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmRpdmlkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdmlkZXI6YmVmb3JlLCAuZGl2aWRlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGZsZXg6IDE7XG59XG5cbi5saW5lIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxZW0gLTFlbTtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG4ubGluZTpiZWZvcmUsIC5saW5lOmFmdGVyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogMCAxZW07XG59XG5cbi5vbmUtbGluZTpiZWZvcmUsIC5vbmUtbGluZTphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNjY2NjY2M7XG59XG5cbi5hdXRoLWZvcm0gaW9uLWdyaWQsXG4uYXV0aC1mb3JtIGlvbi1yb3cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWxyZWFkeSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_global_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/global-constants */ "./src/app/common/global-constants.ts");







var LoginPage = /** @class */ (function () {
    function LoginPage(fb, http, router, alertController, loadingController, toastController) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.toastController = toastController;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.credentials = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
        });
    };
    LoginPage.prototype.presentToast = function (message, duration) {
        if (message === void 0) { message = 'Alert in process.'; }
        if (duration === void 0) { duration = 1200; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: duration
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentAlert = function (header, subt, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: header + '',
                            subHeader: subt + '',
                            message: message + '',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.login = function () {
        // this.presentAlert('Credentials',   'Email/Password', this.credentials.value.email + '/' + this.credentials.value.password);
        var _this = this;
        this.http.get(_common_global_constants__WEBPACK_IMPORTED_MODULE_6__["GlobalConstants"].dbURL + 'login/' + this.credentials.value.email, {}, {})
            .then(function (data) {
            _this.jsonobj = JSON.parse(data.data);
            /*console.log(data.status);
            console.log(data.data); // data received by server
            console.log(data.headers);*/
            if (_this.credentials.value.password === _this.jsonobj.contraseña) {
                _this.presentToast('Success', 1000);
                if (_this.jsonobj.type === 'patient') {
                    _common_global_constants__WEBPACK_IMPORTED_MODULE_6__["GlobalConstants"].patientProfile.uid = _this.jsonobj.uid;
                    _this.router.navigateByUrl('/home-patient', { replaceUrl: true });
                }
                else {
                    _common_global_constants__WEBPACK_IMPORTED_MODULE_6__["GlobalConstants"].doctorProfile.uid = _this.jsonobj.uid;
                    _this.router.navigateByUrl('/home-doctor', { replaceUrl: true });
                }
            }
            else {
                _this.presentToast('El usuario o contraseña es incorrecto.', 2000);
            }
        })
            .catch(function (error) {
            _this.presentAlert('HTTP Request', error.status + '', error.error + '');
        });
    };
    Object.defineProperty(LoginPage.prototype, "email", {
        // Easy access for form fields
        get: function () {
            return this.credentials.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "password", {
        get: function () {
            return this.credentials.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map