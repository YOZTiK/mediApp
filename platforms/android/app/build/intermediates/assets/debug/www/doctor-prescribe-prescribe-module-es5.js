(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-prescribe-prescribe-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/doctor/prescribe/prescribe.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/doctor/prescribe/prescribe.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Fecha</ion-label>\n    <ion-input type=\"text\" name=\"date\" [(ngModel)]=\"todo.fecha\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Padecimiento</ion-label>\n    <ion-textarea [(ngModel)]=\"todo.padecimiento\" name=\"padecimiento\"></ion-textarea>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Diagnostico</ion-label>\n    <ion-textarea [(ngModel)]=\"todo.diagnostico\" type=\"text\" name=\"mnombre\"></ion-textarea>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Nombre Medicamento</ion-label>\n    <ion-input [(ngModel)]=\"todo.mnombre\" type=\"text\" name=\"mnombre\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Hora Dosis</ion-label>\n    <ion-input [(ngModel)]=\"todo.mhora\" type=\"text\" name=\"mhora\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Dosis</ion-label>\n    <ion-input [(ngModel)]=\"todo.mdosis\" type=\"text\" name=\"mdosis\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Periodo</ion-label>\n    <ion-input [(ngModel)]=\"todo.mperiodo\" type=\"text\" name=\"mperiodo\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">NSS Paciente</ion-label>\n    <ion-input [(ngModel)]=\"todo.nsspaciente\" type=\"text\" name=\"nsspaciente\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Cedula Doctor</ion-label>\n    <ion-input [(ngModel)]=\"todo.cdoctor\" type=\"text\" name=\"cdoctor\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Nombre Paciente</ion-label>\n    <ion-input [(ngModel)]=\"todo.npaciente\" type=\"text\" name=\"npaciente\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Edad Paciente</ion-label>\n    <ion-input [(ngModel)]=\"todo.edad\" type=\"text\" name=\"edad\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Sexo Paciente</ion-label>\n    <ion-input [(ngModel)]=\"todo.sexo\" type=\"text\" name=\"sexo\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Alergias</ion-label>\n    <ion-input [(ngModel)]=\"todo.alergias\" type=\"text\" name=\"alergias\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Talla</ion-label>\n    <ion-input [(ngModel)]=\"todo.talla\" type=\"text\" name=\"talla\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Peso</ion-label>\n    <ion-input [(ngModel)]=\"todo.peso\" type=\"text\" name=\"peso\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">IMC</ion-label>\n    <ion-input [(ngModel)]=\"todo.imc\" type=\"text\" name=\"imc\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Temperatura</ion-label>\n    <ion-input [(ngModel)]=\"todo.temperatura\" type=\"text\" name=\"temperatura\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Presión Arterial</ion-label>\n    <ion-input [(ngModel)]=\"todo.presion\" type=\"text\" name=\"presion\" required></ion-input>\n  </ion-item>\n\n  <ion-row>\n    <ion-col>\n      <ion-button type=\"submit\" color=\"danger\" expand=\"block\" (click)=\"registrarReceta()\">Registrar Receta</ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/doctor/prescribe/prescribe-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/doctor/prescribe/prescribe-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: PrescribePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescribePageRoutingModule", function() { return PrescribePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _prescribe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prescribe.page */ "./src/app/doctor/prescribe/prescribe.page.ts");




var routes = [
    {
        path: '',
        component: _prescribe_page__WEBPACK_IMPORTED_MODULE_3__["PrescribePage"]
    }
];
var PrescribePageRoutingModule = /** @class */ (function () {
    function PrescribePageRoutingModule() {
    }
    PrescribePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PrescribePageRoutingModule);
    return PrescribePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/doctor/prescribe/prescribe.module.ts":
/*!******************************************************!*\
  !*** ./src/app/doctor/prescribe/prescribe.module.ts ***!
  \******************************************************/
/*! exports provided: PrescribePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescribePageModule", function() { return PrescribePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _prescribe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prescribe-routing.module */ "./src/app/doctor/prescribe/prescribe-routing.module.ts");
/* harmony import */ var _prescribe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prescribe.page */ "./src/app/doctor/prescribe/prescribe.page.ts");







var PrescribePageModule = /** @class */ (function () {
    function PrescribePageModule() {
    }
    PrescribePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _prescribe_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrescribePageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_prescribe_page__WEBPACK_IMPORTED_MODULE_6__["PrescribePage"]]
        })
    ], PrescribePageModule);
    return PrescribePageModule;
}());



/***/ }),

/***/ "./src/app/doctor/prescribe/prescribe.page.scss":
/*!******************************************************!*\
  !*** ./src/app/doctor/prescribe/prescribe.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci9wcmVzY3JpYmUvcHJlc2NyaWJlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/doctor/prescribe/prescribe.page.ts":
/*!****************************************************!*\
  !*** ./src/app/doctor/prescribe/prescribe.page.ts ***!
  \****************************************************/
/*! exports provided: PrescribePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescribePage", function() { return PrescribePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/global-constants */ "./src/app/common/global-constants.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");





var PrescribePage = /** @class */ (function () {
    function PrescribePage(http, toastController) {
        this.http = http;
        this.toastController = toastController;
        this.todo = {
            fecha: undefined,
            padecimiento: undefined,
            diagnostico: undefined,
            mnombre: undefined,
            mhora: undefined,
            mdosis: undefined,
            mperiodo: undefined,
            nsspaciente: undefined,
            cdoctor: undefined,
            npaciente: undefined,
            edad: undefined,
            sexo: undefined,
            alergias: undefined,
            talla: undefined,
            peso: undefined,
            imc: undefined,
            temperatura: undefined,
            presion: undefined
        };
    }
    PrescribePage.prototype.ngOnInit = function () {
    };
    PrescribePage.prototype.presentToast = function (message, duration) {
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
    PrescribePage.prototype.openDatePicker = function () {
        console.log('');
    };
    PrescribePage.prototype.registrarReceta = function () {
        var _this = this;
        console.log(this.todo);
        var regreceta = {
            "fecha": this.todo.fecha,
            "padecimiento": this.todo.padecimiento,
            "diagnostico": this.todo.diagnostico,
            "medicamento": [
                {
                    "nombre": this.todo.mnombre,
                    "hora": this.todo.mhora,
                    "dosis": this.todo.mdosis,
                    "periodo": this.todo.mperiodo
                }
            ],
            "nss_paciente": this.todo.nsspaciente,
            "cedula_doctor": this.todo.cdoctor,
            "Nombre completo": this.todo.npaciente,
            "Edad": this.todo.edad,
            "Sexo": this.todo.sexo,
            "Alergias": this.todo.alergias,
            "talla": this.todo.talla,
            "peso": this.todo.peso,
            "IMC": this.todo.imc,
            "temperatura": this.todo.temperatura,
            "presion arterial": this.todo.presion
        };
        this.http.setDataSerializer('json');
        this.http.post(_common_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].dbURL + 'recetas/', regreceta, { 'Content-Type': 'application/json' })
            .then(function (data) {
            _this.jsonobj = JSON.parse(data.data);
            _this.presentToast('Receta Registrada => uid ' + _this.jsonobj.id);
        })
            .catch(function (error) {
            _this.presentToast('HTTP Request Error: ' + error.error);
        });
    };
    PrescribePage.ctorParameters = function () { return [
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    PrescribePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prescribe',
            template: __webpack_require__(/*! raw-loader!./prescribe.page.html */ "./node_modules/raw-loader/index.js!./src/app/doctor/prescribe/prescribe.page.html"),
            styles: [__webpack_require__(/*! ./prescribe.page.scss */ "./src/app/doctor/prescribe/prescribe.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], PrescribePage);
    return PrescribePage;
}());



/***/ })

}]);
//# sourceMappingURL=doctor-prescribe-prescribe-module-es5.js.map