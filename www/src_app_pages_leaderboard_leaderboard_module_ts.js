(self["webpackChunktrade"] = self["webpackChunktrade"] || []).push([["src_app_pages_leaderboard_leaderboard_module_ts"],{

/***/ 21969:
/*!*****************************************************************!*\
  !*** ./src/app/pages/leaderboard/leaderboard-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaderboardPageRoutingModule": () => (/* binding */ LeaderboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _leaderboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaderboard.page */ 60914);




const routes = [
    {
        path: '',
        component: _leaderboard_page__WEBPACK_IMPORTED_MODULE_0__.LeaderboardPage
    }
];
let LeaderboardPageRoutingModule = class LeaderboardPageRoutingModule {
};
LeaderboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LeaderboardPageRoutingModule);



/***/ }),

/***/ 88487:
/*!*********************************************************!*\
  !*** ./src/app/pages/leaderboard/leaderboard.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaderboardPageModule": () => (/* binding */ LeaderboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _leaderboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaderboard-routing.module */ 21969);
/* harmony import */ var _leaderboard_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaderboard.page */ 60914);





let LeaderboardPageModule = class LeaderboardPageModule {
};
LeaderboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _leaderboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.LeaderboardPageRoutingModule
        ],
        declarations: [_leaderboard_page__WEBPACK_IMPORTED_MODULE_2__.LeaderboardPage]
    })
], LeaderboardPageModule);



/***/ }),

/***/ 60914:
/*!*******************************************************!*\
  !*** ./src/app/pages/leaderboard/leaderboard.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaderboardPage": () => (/* binding */ LeaderboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_leaderboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./leaderboard.page.html */ 93912);
/* harmony import */ var _leaderboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaderboard.page.scss */ 43834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let LeaderboardPage = class LeaderboardPage {
    constructor() { }
    ngOnInit() {
    }
};
LeaderboardPage.ctorParameters = () => [];
LeaderboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-leaderboard',
        template: _raw_loader_leaderboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_leaderboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LeaderboardPage);



/***/ }),

/***/ 43834:
/*!*********************************************************!*\
  !*** ./src/app/pages/leaderboard/leaderboard.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".no-content {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.no-content__icon {\n  font-size: 80px;\n  color: var(--x-text-darkgray);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWRlcmJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7QUFDSiIsImZpbGUiOiJsZWFkZXJib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICZfX2ljb24ge1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICBjb2xvcjogdmFyKC0teC10ZXh0LWRhcmtncmF5KTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 93912:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaderboard/leaderboard.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [title]=\"'Leaderboard'\"></app-header>\n\n<div class=\"no-content\">\n  <div class=\"no-content__icon\">\n    <ion-icon name=\"build\"></ion-icon>\n  </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_leaderboard_leaderboard_module_ts.js.map