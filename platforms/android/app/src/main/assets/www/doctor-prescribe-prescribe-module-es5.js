(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-prescribe-prescribe-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/doctor/prescribe/prescribe.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/doctor/prescribe/prescribe.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n  <title>Alta de usuarios</title>\n  <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"styles/login.css\">\n\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n\n\n</head>\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>prescribe</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div style=\" width:100%;  class=\"container\">\n\n  <div class=\"row justify-content-between mb-3\">\n\n\n    <div class=\"login-form\">\n      <form action=\"altauser\" method=\"post\" class=\"needs-validation\" novalidate>\n        <div class=\"avatar\"><i class=\"material-icons\">&#xe84e;</i></div>\n        <h2 class=\"text-center\">Crear receta Medica</h2>\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n            <input type=\"text\"  class=\"form-control\" id=\"nombre\" placeholder=\"Nombre Paciente\" required/>\n            <div class=\"valid-feedback\">Valid.</div>\n            <div class=\"invalid-feedback\">Nombre requerido</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-plus\"></i></span>\n            <input type=\"text\"  class=\"form-control\" id=\"NSS\" placeholder=\"Numero Seguro Social\" required/>\n            <div class=\"valid-feedback\">Valid.</div>\n            <div class=\"invalid-feedback\">Numero seguro social requerido</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-asterisk\"></i></span>\n            <input type=\"text\"  class=\"form-control\" id=\"edad\" placeholder=\"Edad\" required/>\n            <div class=\"valid-feedback\">Valid.</div>\n            <div class=\"invalid-feedback\">Edad Requerida.</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"fa fa-lock\"></i></span>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input type=\"radio\" class=\"form-check-input\" id=\"hombre\" name=\"sexo\"><br>Hombre\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input type=\"radio\" class=\"form-check-input\" id=\"mujer\" name=\"sexo\"><br>Mujer\n              </label>\n            </div>\n            <div class=\"valid-feedback\">Valid.</div>\n            <div class=\"invalid-feedback\">Sexo requerido.</div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-leaf\"></i></span>\n            <input type=\"text\"  class=\"form-control\" id=\"alergias\" placeholder=\"Alergias\" />\n\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-resize-vertical\"></i></span>\n            <input type=\"text\"  class=\"form-control\" id=\"altura\" placeholder=\"Altura\" required/>\n            <div class=\"valid-feedback\">Valid.</div>\n            <div class=\"invalid-feedback\">Talla Requerida.</div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-upload\"></i></span>\n            <input type=\"text\"  class=\"form-control\" id=\"peso\" placeholder=\"Peso\" required/>\n            <div class=\"valid-feedback\">Valid.</div>\n            <div class=\"invalid-feedback\">Peso Requerida.</div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-tint\"></i></span>\n            <input type=\"text\"  class=\"form-control\" id=\"imc\" placeholder=\"IMC\" required/>\n            <div class=\"valid-feedback\">Valid.</div>\n            <div class=\"invalid-feedback\">IMC Requerida.</div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-heart\"></i></span>\n            <input type=\"text\"  class=\"form-control\" id=\"presion\" placeholder=\"Presion\" required/>\n            <div class=\"valid-feedback\">Valid.</div>\n            <div class=\"invalid-feedback\">Presion Requerida.</div>\n          </div>\n        </div>\n\n\n        <div class=\"form-group\">\n          <label for=\"comment\">Diagnostico Medico:</label>\n          <textarea class=\"form-control\" rows=\"8\" id=\"diagnostico\" required></textarea>\n          <div class=\"valid-feedback\">Valid.</div>\n          <div class=\"invalid-feedback\">Diagnostico Requerido.</div>\n        </div>\n\n        <s:submit  value=\"Crear Diagnostico\" cssClass=\"btn btn-danger login-btn btn-block\"> </s:submit>\n      </form>\n    </div>\n\n\n\n  </div>\n  </div>\n  <script>\n    // Disable form submissions if there are invalid fields\n    (function() {\n      'use strict';\n      window.addEventListener('load', function() {\n        // Get the forms we want to add validation styles to\n        var forms = document.getElementsByClassName('needs-validation');\n        // Loop over them and prevent submission\n        var validation = Array.prototype.filter.call(forms, function(form) {\n          form.addEventListener('submit', function(event) {\n            if (form.checkValidity() === false) {\n              event.preventDefault();\n              event.stopPropagation();\n            }\n            form.classList.add('was-validated');\n          }, false);\n        });\n      }, false);\n    })();\n  </script>\n\n</ion-content>\n"

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
                _prescribe_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrescribePageRoutingModule"]
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


var PrescribePage = /** @class */ (function () {
    function PrescribePage() {
    }
    PrescribePage.prototype.ngOnInit = function () {
    };
    PrescribePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prescribe',
            template: __webpack_require__(/*! raw-loader!./prescribe.page.html */ "./node_modules/raw-loader/index.js!./src/app/doctor/prescribe/prescribe.page.html"),
            styles: [__webpack_require__(/*! ./prescribe.page.scss */ "./src/app/doctor/prescribe/prescribe.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrescribePage);
    return PrescribePage;
}());



/***/ })

}]);
//# sourceMappingURL=doctor-prescribe-prescribe-module-es5.js.map