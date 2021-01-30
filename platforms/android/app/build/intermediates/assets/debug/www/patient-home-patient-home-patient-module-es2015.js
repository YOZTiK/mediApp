(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient-home-patient-home-patient-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/patient/home-patient/home-patient.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/patient/home-patient/home-patient.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>home-patient</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card-header>\n    <img style=\"margin-top: -15%; margin-bottom: -15%;\" src=\"../../assets/logo/mediApp.png\" />\n    <ion-card-subtitle>Bienvenido {{datos.nombre}}!</ion-card-subtitle>\n    <ion-card-title>Es hora de sanar</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n\n  <div class=\"mx-auto\" style=\"width: 75px;\">\n    <button type=\"button\" class=\"btn btn-danger btn-lg\" [routerLink]=\"['/see-profile']\">Perfil</button>\n  </div>\n\n  <div class=\"mx-auto\" style=\"width: 95px;\">\n    <button type=\"button\" class=\"btn btn-danger btn-lg\" [routerLink]=\"['/see-prescribe']\">Recetas</button>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/patient/home-patient/home-patient-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/patient/home-patient/home-patient-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: HomePatientPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePatientPageRoutingModule", function() { return HomePatientPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_patient_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-patient.page */ "./src/app/patient/home-patient/home-patient.page.ts");




const routes = [
    {
        path: '',
        component: _home_patient_page__WEBPACK_IMPORTED_MODULE_3__["HomePatientPage"]
    }
];
let HomePatientPageRoutingModule = class HomePatientPageRoutingModule {
};
HomePatientPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePatientPageRoutingModule);



/***/ }),

/***/ "./src/app/patient/home-patient/home-patient.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/patient/home-patient/home-patient.module.ts ***!
  \*************************************************************/
/*! exports provided: HomePatientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePatientPageModule", function() { return HomePatientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-patient-routing.module */ "./src/app/patient/home-patient/home-patient-routing.module.ts");
/* harmony import */ var _home_patient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-patient.page */ "./src/app/patient/home-patient/home-patient.page.ts");







let HomePatientPageModule = class HomePatientPageModule {
};
HomePatientPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePatientPageRoutingModule"]
        ],
        declarations: [_home_patient_page__WEBPACK_IMPORTED_MODULE_6__["HomePatientPage"]]
    })
], HomePatientPageModule);



/***/ }),

/***/ "./src/app/patient/home-patient/home-patient.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/patient/home-patient/home-patient.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-size: 30px;\n}\n\nbutton {\n  margin-bottom: 10px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95b2x0aWNjZXJ2YW50ZXNnYWxlYW5hL1Byb2plY3RzL21lZGlBcHAvc3JjL2FwcC9wYXRpZW50L2hvbWUtcGF0aWVudC9ob21lLXBhdGllbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYXRpZW50L2hvbWUtcGF0aWVudC9ob21lLXBhdGllbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudC9ob21lLXBhdGllbnQvaG9tZS1wYXRpZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5idXR0b257XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIiwiaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/patient/home-patient/home-patient.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/patient/home-patient/home-patient.page.ts ***!
  \***********************************************************/
/*! exports provided: HomePatientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePatientPage", function() { return HomePatientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/global-constants */ "./src/app/common/global-constants.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let HomePatientPage = class HomePatientPage {
    constructor(http, toastController) {
        this.http = http;
        this.toastController = toastController;
        this.datos = _common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].patientProfile;
    }
    ngOnInit() {
        this.http.get(_common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].dbURL + 'pacientes/' + _common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].patientProfile.uid, {}, {})
            .then(datos => {
            _common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].patientProfile.nombre = datos.data.nombre;
            _common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].patientProfile.nss = datos.data.nss;
            _common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].patientProfile.poliza = datos.data.poliza;
        })
            .catch(error => {
            this.presentToast('HTTP Request ' + error.status + ' ' + error.error + '');
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
};
HomePatientPage.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
HomePatientPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-patient',
        template: __webpack_require__(/*! raw-loader!./home-patient.page.html */ "./node_modules/raw-loader/index.js!./src/app/patient/home-patient/home-patient.page.html"),
        styles: [__webpack_require__(/*! ./home-patient.page.scss */ "./src/app/patient/home-patient/home-patient.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], HomePatientPage);



/***/ })

}]);
//# sourceMappingURL=patient-home-patient-home-patient-module-es2015.js.map