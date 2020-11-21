(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/registration/registration.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registration/registration.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [hidden]=\"isDoctor\" [formGroup]=\"doctorRegister\">\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Nombre</ion-label>\n      <ion-input type=\"text\" formControlName=\"name\" required></ion-input>\n    </ion-item>\n    <div *ngIf=\"(dname.dirty || dname.touched) && dname.errors\" class=\"errors\">\n      <span *ngIf=\"dname.errors?.required\">Ingresa tu nombre</span>\n    </div>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Apellidos</ion-label>\n      <ion-input type=\"text\" formControlName=\"lastname\" required></ion-input>\n    </ion-item>\n    <div *ngIf=\"(dlname.dirty || dlname.touched) && dlname.errors\" class=\"errors\">\n      <span *ngIf=\"dlname.errors?.required\">Ingresa tus apellidos</span>\n    </div>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Calle</ion-label>\n      <ion-input type=\"text\" formControlName=\"street\" required></ion-input>\n    </ion-item>\n    <div *ngIf=\"(dstreet.dirty || dstreet.touched) && dstreet.errors\" class=\"errors\">\n      <span *ngIf=\"dstreet.errors?.required\">Ingresa tu dirección</span>\n    </div>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Código Postal</ion-label>\n      <ion-input type=\"text\" formControlName=\"cp\" required></ion-input>\n    </ion-item>\n    <div *ngIf=\"(dcp.dirty || dcp.touched) && dcp.errors\" class=\"errors\">\n      <span *ngIf=\"dcp.errors?.required\">Ingresa tu código postal</span>\n      <span *ngIf=\"dcp.errors?.minlength\">El código postal no es valido</span>\n    </div>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Cedula profesional</ion-label>\n      <ion-input type=\"text\" formControlName=\"cedprof\" required></ion-input>\n    </ion-item>\n    <div *ngIf=\"(cprof.dirty || cprof.touched) && cprof.errors\" class=\"errors\">\n      <span *ngIf=\"cprof.errors?.required\">Ingresa tu cedula profesional</span>\n      <span *ngIf=\"cprof.errors?.minlength\">La cedula no es válida</span>\n    </div>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" formControlName=\"email\" required></ion-input>\n    </ion-item>\n    <div *ngIf=\"(demail.dirty || demail.touched) && demail.errors\" class=\"errors\">\n      <span *ngIf=\"demail.errors?.required\">Ingresa el correo</span>\n      <span *ngIf=\"demail.errors?.email\">El correo no es válido</span>\n    </div>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\" required></ion-input>\n    </ion-item>\n    <div *ngIf=\"(dpassword.dirty || dpassword.touched) && dpassword.errors\" class=\"errors\">\n      <span *ngIf=\"dpassword.errors?.required\">Ingresa el password</span>\n      <span *ngIf=\"dpassword.errors?.minlength\">El password no es correcto</span>\n    </div>\n\n    <ion-row>\n      <ion-col>\n        <ion-button type=\"submit\" color=\"danger\" expand=\"block\" (click)=\"registrarDoctor()\">Registrarse</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <form [hidden]=\"!isDoctor\" [formGroup]=\"patientRegister\">\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Nombre</ion-label>\n      <ion-input type=\"text\" formControlName=\"name\" required></ion-input>\n    </ion-item>\n    <div *ngIf=\"(pname.dirty || pname.touched) && pname.errors\" class=\"errors\">\n      <span *ngIf=\"pname.errors?.required\">Ingresa tu nombre</span>\n    </div>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Apellidos</ion-label>\n      <ion-input type=\"text\" formControlName=\"lastname\" required></ion-input>\n    </ion-item>\n    <div *ngIf=\"(plname.dirty || plname.touched) && plname.errors\" class=\"errors\">\n      <span *ngIf=\"plname.errors?.required\">Ingresa tus apellidos</span>\n    </div>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">NSS</ion-label>\n      <ion-input type=\"text\" formControlName=\"nss\" required></ion-input>\n    </ion-item>\n    <div *ngIf=\"(pnss.dirty || pnss.touched) && pnss.errors\" class=\"errors\">\n      <span *ngIf=\"pnss.errors?.required\">Ingresa tu número de seguridad social</span>\n    </div>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Poliza</ion-label>\n      <ion-input type=\"text\" formControlName=\"poliza\" required></ion-input>\n    </ion-item>\n    <div *ngIf=\"(ppoliza.dirty || ppoliza.touched) && ppoliza.errors\" class=\"errors\">\n      <span *ngIf=\"ppoliza.errors?.required\">Ingresa tu número de poliza</span>\n    </div>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" formControlName=\"email\" required></ion-input>\n    </ion-item>\n    <div *ngIf=\"(pemail.dirty || pemail.touched) && pemail.errors\" class=\"errors\">\n      <span *ngIf=\"pemail.errors?.required\">Ingresa el correo</span>\n      <span *ngIf=\"pemail.errors?.email\">El correo no es válido</span>\n    </div>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\" required></ion-input>\n    </ion-item>\n    <div *ngIf=\"(ppassword.dirty || ppassword.touched) && ppassword.errors\" class=\"errors\">\n      <span *ngIf=\"ppassword.errors?.required\">Ingresa el password</span>\n      <span *ngIf=\"ppassword.errors?.minlength\">El password no es correcto</span>\n    </div>\n\n    <ion-row>\n      <ion-col>\n        <ion-button type=\"submit\" color=\"danger\" expand=\"block\" (click)=\"registrarPaciente()\">Registrarse</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <ion-item>\n    <ion-label>Registrarte como doctor</ion-label>\n    <ion-toggle (ionChange)=\"changeDoctorValue($event)\"></ion-toggle>\n  </ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/registration/registration-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/registration/registration-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function() { return RegistrationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.page */ "./src/app/registration/registration.page.ts");




const routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
    }
];
let RegistrationPageRoutingModule = class RegistrationPageRoutingModule {
};
RegistrationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistrationPageRoutingModule);



/***/ }),

/***/ "./src/app/registration/registration.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/registration/registration-routing.module.ts");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration.page */ "./src/app/registration/registration.page.ts");







let RegistrationPageModule = class RegistrationPageModule {
};
RegistrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
    })
], RegistrationPageModule);



/***/ }),

/***/ "./src/app/registration/registration.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/registration/registration.page.ts":
/*!***************************************************!*\
  !*** ./src/app/registration/registration.page.ts ***!
  \***************************************************/
/*! exports provided: RegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPage", function() { return RegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _common_global_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/global-constants */ "./src/app/common/global-constants.ts");







let RegistrationPage = class RegistrationPage {
    constructor(fb, http, router, toastController) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.toastController = toastController;
    }
    ngOnInit() {
        this.isDoctor = true;
        this.doctorRegister = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            cedprof: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
        });
        this.patientRegister = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            nss: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            poliza: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
        });
    }
    presentToast(message = 'Alert in process.', duration = 1200) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration
            });
            toast.present();
        });
    }
    changeDoctorValue($event) {
        this.isDoctor = !this.isDoctor;
    }
    registrarDoctor() {
        const regDoct = {
            "nombre": String(this.doctorRegister.value.name) + ' ' + String(this.doctorRegister.value.lastname),
            "direccion": [{ "calle": String(this.doctorRegister.value.street), "cp": String(this.doctorRegister.value.cp) }],
            "cedula": String(this.doctorRegister.value.cedprof)
        };
        this.http.setDataSerializer('json');
        this.http.post(_common_global_constants__WEBPACK_IMPORTED_MODULE_6__["GlobalConstants"].dbURL + 'doctores/', regDoct, { 'Content-Type': 'application/json' })
            .then(data => {
            this.jsonobj = JSON.parse(data.data);
            this.presentToast('HTTP Request Success => uid ' + this.jsonobj.id);
        })
            .catch(error => {
            this.presentToast('HTTP Request Error: ' + error.error);
        });
        const regLogin = {
            "id": String(this.doctorRegister.value.email),
            "contraseña": String(this.doctorRegister.value.password) + '',
            "type": "doctor",
            "uid": String(this.jsonobj.id)
        };
        this.http.setDataSerializer('json');
        this.http.post(_common_global_constants__WEBPACK_IMPORTED_MODULE_6__["GlobalConstants"].dbURL + 'login/', regLogin, { 'Content-Type': 'application/json' })
            .then(data => {
            this.jsonobj = JSON.parse(data.data);
            this.presentToast('HTTP Request Success: ' + this.jsonobj, 3000);
        })
            .catch(error => {
            this.presentToast('HTTP Request Error: ' + error.error);
        });
        this.presentToast('this.doctorRegister.value.name: \n' + this.doctorRegister.value.name +
            '\nthis.doctorRegister.value.email:\n' + this.doctorRegister.value.email +
            '\nthis.doctorRegister.value.type:\n' + 'doctor', 3000);
        this.router.navigateByUrl('/home-doctor', { replaceUrl: true });
    }
    registrarPaciente() {
        const regDoct = {
            "nombre": String(this.patientRegister.value.name) + ' ' + String(this.patientRegister.value.lastname),
            "nss": String(this.patientRegister.value.nss),
            "poliza": String(this.patientRegister.value.poliza)
        };
        this.http.setDataSerializer('json');
        this.http.post(_common_global_constants__WEBPACK_IMPORTED_MODULE_6__["GlobalConstants"].dbURL + 'patient/', regDoct, { 'Content-Type': 'application/json' })
            .then(data => {
            this.jsonobj = JSON.parse(data.data);
            this.presentToast('HTTP Request Success => uid ' + this.jsonobj.id);
        })
            .catch(error => {
            this.presentToast('HTTP Request Error: ' + error.error);
        });
        const regLogin = {
            "id": String(this.doctorRegister.value.email),
            "contraseña": String(this.doctorRegister.value.password) + '',
            "type": "patient",
            "uid": String(this.jsonobj.id)
        };
        this.http.setDataSerializer('json');
        this.http.post(_common_global_constants__WEBPACK_IMPORTED_MODULE_6__["GlobalConstants"].dbURL + 'login/', regLogin, { 'Content-Type': 'application/json' })
            .then(data => {
            this.jsonobj = JSON.parse(data.data);
            this.presentToast('HTTP Request Success: ' + this.jsonobj, 3000);
        })
            .catch(error => {
            this.presentToast('HTTP Request Error: ' + error.error);
        });
        this.presentToast('this.doctorRegister.value.name: \n' + this.patientRegister.value.name +
            '\nthis.doctorRegister.value.email:\n' + this.patientRegister.value.email +
            '\nthis.doctorRegister.value.type:\n' + 'doctor', 3000);
        this.router.navigateByUrl('/home-patient', { replaceUrl: true });
    }
    // Easy access for form fields
    get dname() {
        return this.doctorRegister.get('name');
    }
    get dlname() {
        return this.doctorRegister.get('lastname');
    }
    get dstreet() {
        return this.doctorRegister.get('street');
    }
    get dcp() {
        return this.doctorRegister.get('cp');
    }
    get cprof() {
        return this.doctorRegister.get('cedprof');
    }
    get demail() {
        return this.doctorRegister.get('email');
    }
    get dpassword() {
        return this.doctorRegister.get('password');
    }
    get pname() {
        return this.patientRegister.get('name');
    }
    get plname() {
        return this.patientRegister.get('lastname');
    }
    get pnss() {
        return this.patientRegister.get('nss');
    }
    get ppoliza() {
        return this.patientRegister.get('poliza');
    }
    get pemail() {
        return this.patientRegister.get('email');
    }
    get ppassword() {
        return this.patientRegister.get('password');
    }
};
RegistrationPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
RegistrationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: __webpack_require__(/*! raw-loader!./registration.page.html */ "./node_modules/raw-loader/index.js!./src/app/registration/registration.page.html"),
        styles: [__webpack_require__(/*! ./registration.page.scss */ "./src/app/registration/registration.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], RegistrationPage);



/***/ })

}]);
//# sourceMappingURL=registration-registration-module-es2015.js.map