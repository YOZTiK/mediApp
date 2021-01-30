(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-home-doctor-home-doctor-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/doctor/home-doctor/home-doctor.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/doctor/home-doctor/home-doctor.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>home-doctor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <img style=\"margin-top: -15%; margin-bottom: -15%;\" src=\"../../assets/logo/mediApp.png\" />\n    <ion-card-header>\n      <ion-card-subtitle>Bienvenido {{datos.nombre}}</ion-card-subtitle>\n      <ion-card-title>Es hora de curar</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n      <ion-toolbar>\n        <ion-title>Searchbar</ion-title>\n      </ion-toolbar>\n      <ion-toolbar>\n        <ion-searchbar></ion-searchbar>\n      </ion-toolbar>\n\n      <!-- Round -->\n      <ion-button shape=\"round\" [routerLink]=\"['/prescribe']\">Crear Receta</ion-button>\n      <!-- Round -->\n      <ion-button shape=\"round\" [routerLink]=\"['/see-patient']\">Monstrar info</ion-button>\n\n      <ion-list>\n        <ion-item>Paciente 1</ion-item>\n        <ion-item>Paciente 2</ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <script>\n    const searchbar = document.querySelector('ion-searchbar');\n    const items = Array.from(document.querySelector('ion-list').children);\n\n    searchbar.addEventListener('ionInput', handleInput);\n\n    function handleInput(event) {\n      const query = event.target.value.toLowerCase();\n      requestAnimationFrame(() => {\n        items.forEach(item => {\n          const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;\n          item.style.display = shouldShow ? 'block' : 'none';\n        });\n      });\n    }\n  </script>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/doctor/home-doctor/home-doctor-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/doctor/home-doctor/home-doctor-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: HomeDoctorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDoctorPageRoutingModule", function() { return HomeDoctorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_doctor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-doctor.page */ "./src/app/doctor/home-doctor/home-doctor.page.ts");




const routes = [
    {
        path: '',
        component: _home_doctor_page__WEBPACK_IMPORTED_MODULE_3__["HomeDoctorPage"]
    }
];
let HomeDoctorPageRoutingModule = class HomeDoctorPageRoutingModule {
};
HomeDoctorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeDoctorPageRoutingModule);



/***/ }),

/***/ "./src/app/doctor/home-doctor/home-doctor.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/doctor/home-doctor/home-doctor.module.ts ***!
  \**********************************************************/
/*! exports provided: HomeDoctorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDoctorPageModule", function() { return HomeDoctorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_doctor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-doctor-routing.module */ "./src/app/doctor/home-doctor/home-doctor-routing.module.ts");
/* harmony import */ var _home_doctor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-doctor.page */ "./src/app/doctor/home-doctor/home-doctor.page.ts");







let HomeDoctorPageModule = class HomeDoctorPageModule {
};
HomeDoctorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_doctor_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeDoctorPageRoutingModule"]
        ],
        declarations: [_home_doctor_page__WEBPACK_IMPORTED_MODULE_6__["HomeDoctorPage"]]
    })
], HomeDoctorPageModule);



/***/ }),

/***/ "./src/app/doctor/home-doctor/home-doctor.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/doctor/home-doctor/home-doctor.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci9ob21lLWRvY3Rvci9ob21lLWRvY3Rvci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/doctor/home-doctor/home-doctor.page.ts":
/*!********************************************************!*\
  !*** ./src/app/doctor/home-doctor/home-doctor.page.ts ***!
  \********************************************************/
/*! exports provided: HomeDoctorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDoctorPage", function() { return HomeDoctorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/global-constants */ "./src/app/common/global-constants.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let HomeDoctorPage = class HomeDoctorPage {
    constructor(http, toastController) {
        this.http = http;
        this.toastController = toastController;
        this.datos = _common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].doctorProfile;
    }
    ngOnInit() {
        this.http.get(_common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].dbURL + 'doctores/' + _common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].doctorProfile.uid, {}, {})
            .then(datos => {
            _common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].doctorProfile.nombre = datos.data.nombre;
            _common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].doctorProfile.cedula = datos.data.cedula;
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
    submit() {
        console.log('');
    }
};
HomeDoctorPage.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
HomeDoctorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-doctor',
        template: __webpack_require__(/*! raw-loader!./home-doctor.page.html */ "./node_modules/raw-loader/index.js!./src/app/doctor/home-doctor/home-doctor.page.html"),
        styles: [__webpack_require__(/*! ./home-doctor.page.scss */ "./src/app/doctor/home-doctor/home-doctor.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], HomeDoctorPage);



/***/ })

}]);
//# sourceMappingURL=doctor-home-doctor-home-doctor-module-es2015.js.map