(self["webpackChunktrade"] = self["webpackChunktrade"] || []).push([["src_app_pages_xhub_xhub_module_ts"],{

/***/ 94967:
/*!***************************************************!*\
  !*** ./src/app/pages/xhub/xhub-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XhubPageRoutingModule": () => (/* binding */ XhubPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _xhub_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xhub.page */ 88649);




const routes = [
    {
        path: '',
        component: _xhub_page__WEBPACK_IMPORTED_MODULE_0__.XhubPage
    }
];
let XhubPageRoutingModule = class XhubPageRoutingModule {
};
XhubPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], XhubPageRoutingModule);



/***/ }),

/***/ 75067:
/*!*******************************************!*\
  !*** ./src/app/pages/xhub/xhub.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XhubPageModule": () => (/* binding */ XhubPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _xhub_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhub-routing.module */ 94967);
/* harmony import */ var _xhub_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xhub.page */ 88649);





let XhubPageModule = class XhubPageModule {
};
XhubPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _xhub_routing_module__WEBPACK_IMPORTED_MODULE_1__.XhubPageRoutingModule
        ],
        declarations: [_xhub_page__WEBPACK_IMPORTED_MODULE_2__.XhubPage]
    })
], XhubPageModule);



/***/ }),

/***/ 88649:
/*!*****************************************!*\
  !*** ./src/app/pages/xhub/xhub.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XhubPage": () => (/* binding */ XhubPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_xhub_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./xhub.page.html */ 24132);
/* harmony import */ var _xhub_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhub.page.scss */ 42897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let XhubPage = class XhubPage {
    constructor() { }
    ngOnInit() {
    }
};
XhubPage.ctorParameters = () => [];
XhubPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-xhub',
        template: _raw_loader_xhub_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_xhub_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], XhubPage);



/***/ }),

/***/ 42897:
/*!*******************************************!*\
  !*** ./src/app/pages/xhub/xhub.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".no-content {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.no-content__icon {\n  font-size: 80px;\n  color: var(--x-text-darkgray);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInhodWIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtBQUNKIiwiZmlsZSI6InhodWIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAmX19pY29uIHtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgY29sb3I6IHZhcigtLXgtdGV4dC1kYXJrZ3JheSk7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 24132:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/xhub/xhub.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [title]=\"'Xhub'\"></app-header>\n\n<div class=\"no-content\">\n  <div class=\"no-content__icon\">\n    <ion-icon name=\"build\"></ion-icon>\n  </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_xhub_xhub_module_ts.js.map