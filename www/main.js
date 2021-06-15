(self["webpackChunktrade"] = self["webpackChunktrade"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        redirectTo: 'alerts',
        pathMatch: 'full'
    },
    {
        path: 'alerts',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_alerts_alerts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/alerts/alerts.module */ 88659)).then(m => m.AlertsPageModule)
    },
    {
        path: 'leaderboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_leaderboard_leaderboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/leaderboard/leaderboard.module */ 88487)).then(m => m.LeaderboardPageModule)
    },
    {
        path: 'xhub',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_xhub_xhub_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/xhub/xhub.module */ 75067)).then(m => m.XhubPageModule)
    },
    {
        path: '**',
        redirectTo: 'alerts'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var _core_state_app_app_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/state/app/app.query */ 89234);
/* harmony import */ var _core_state_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/state/app/app.service */ 33544);







let AppComponent = class AppComponent {
    constructor(appQuery, appService) {
        this.appQuery = appQuery;
        this.appService = appService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this.collapsed = false;
    }
    ngOnInit() {
        this.subscription.add(this.appQuery.select(x => x.sideMenuCollapsed).subscribe(collapsed => {
            this.collapsed = collapsed;
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    splitPaneChanged() {
        this.appService.resetSideMenu();
    }
};
AppComponent.ctorParameters = () => [
    { type: _core_state_app_app_query__WEBPACK_IMPORTED_MODULE_2__.AppQuery },
    { type: _core_state_app_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 44466);








let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 74103:
/*!*******************************************************!*\
  !*** ./src/app/core/services/people/people.serice.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeopleService": () => (/* binding */ PeopleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 25917);




let PeopleService = class PeopleService {
    constructor() {
        this.detailedTrader = {
            id: 2,
            name: 'Adam',
            login: 'szmuk',
            imageUrl: 'p2.jpg',
            alertsCount: 38,
            following: false,
            stats: {
                rank: 23,
                winRatePercent: 88,
                avgGainPercent: 12,
                avgTradeTime: 18
            },
            style: ['Lotto', 'Risky', 'Aggresive', 'Day trades', 'Penny stocks'],
            alerts: [
                {
                    id: 2,
                    company: {
                        id: 3,
                        code: 'SPY',
                        name: 'S&P 500 Index',
                        imageUrl: 'spy.png'
                    },
                    user: {
                        id: 2,
                        name: 'Adam',
                        login: 'szmuk',
                        imageUrl: 'p2.jpg',
                        alertsCount: 38,
                        following: false
                    },
                    closed: null,
                    opened: moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'days').toDate(),
                    type: 'Day',
                    gainLoss: 6,
                    likesCount: 14,
                    savedCount: 2,
                    commentsCount: 7,
                    top: false,
                    liked: false,
                    saved: false,
                    commented: false,
                    price: 110.22,
                    currency: '$'
                },
                {
                    id: 3,
                    company: {
                        id: 2,
                        code: 'TSLA',
                        name: 'Tesla Inc',
                        imageUrl: 'tesla.png'
                    },
                    user: {
                        id: 2,
                        name: 'Adam',
                        login: 'szmuk',
                        imageUrl: 'p2.jpg',
                        alertsCount: 38,
                        following: false
                    },
                    closed: moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'days').toDate(),
                    opened: moment__WEBPACK_IMPORTED_MODULE_0__().subtract(2, 'days').toDate(),
                    type: 'Day',
                    gainLoss: -12,
                    likesCount: 14,
                    savedCount: 2,
                    commentsCount: 7,
                    top: false,
                    liked: false,
                    saved: true,
                    commented: false,
                    price: 110.36,
                    currency: '$'
                }
            ]
        };
    }
    getPersonDetails(personId) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.detailedTrader).toPromise();
    }
};
PeopleService.ctorParameters = () => [];
PeopleService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PeopleService);



/***/ }),

/***/ 50412:
/*!***************************************************!*\
  !*** ./src/app/core/state/alerts/alerts.query.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsQuery": () => (/* binding */ AlertsQuery)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ 71477);
/* harmony import */ var _alerts_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alerts.store */ 97638);




let AlertsQuery = class AlertsQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_1__.QueryEntity {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
AlertsQuery.ctorParameters = () => [
    { type: _alerts_store__WEBPACK_IMPORTED_MODULE_0__.AlertsStore }
];
AlertsQuery = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AlertsQuery);



/***/ }),

/***/ 40699:
/*!*****************************************************!*\
  !*** ./src/app/core/state/alerts/alerts.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsService": () => (/* binding */ AlertsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var _alerts_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alerts.query */ 50412);
/* harmony import */ var _alerts_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alerts.store */ 97638);








let AlertsService = class AlertsService {
    constructor(alertsStore, alertsQuery) {
        this.alertsStore = alertsStore;
        this.alertsQuery = alertsQuery;
        this.data = [
            {
                id: 1,
                company: {
                    id: 1,
                    code: 'AAPL',
                    name: 'Apple Inc',
                    imageUrl: 'apple.png'
                },
                user: {
                    id: 1,
                    name: 'CKadera',
                    login: 'ckadera',
                    imageUrl: 'p1.jpg',
                    alertsCount: 88,
                    following: true
                },
                closed: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(3, 'hours').toDate(),
                opened: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(3, 'days').toDate(),
                type: 'Swing',
                gainLoss: 4,
                likesCount: 24,
                savedCount: 7,
                commentsCount: 37,
                top: true,
                liked: true,
                saved: false,
                commented: true,
                price: 210.22,
                currency: '$'
            },
            {
                id: 2,
                company: {
                    id: 3,
                    code: 'SPY',
                    name: 'S&P 500 Index',
                    imageUrl: 'spy.png'
                },
                user: {
                    id: 2,
                    name: 'Adam',
                    login: 'szmuk',
                    imageUrl: 'p2.jpg',
                    alertsCount: 38,
                    following: false
                },
                closed: null,
                opened: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'days').toDate(),
                type: 'Day',
                gainLoss: 6,
                likesCount: 14,
                savedCount: 2,
                commentsCount: 7,
                top: false,
                liked: false,
                saved: false,
                commented: false,
                price: 110.22,
                currency: '$'
            },
            {
                id: 4,
                company: {
                    id: 2,
                    code: 'TSLA',
                    name: 'Tesla Inc',
                    imageUrl: 'tesla.png'
                },
                user: {
                    id: 1,
                    name: 'CKadera',
                    login: 'ckadera',
                    imageUrl: 'p1.jpg',
                    alertsCount: 88,
                    following: true
                },
                closed: null,
                opened: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(6, 'days').toDate(),
                type: 'Day',
                gainLoss: 11,
                likesCount: 14,
                savedCount: 2,
                commentsCount: 7,
                top: false,
                liked: true,
                saved: false,
                commented: false,
                price: 130.22,
                currency: '$'
            },
            {
                id: 3,
                company: {
                    id: 2,
                    code: 'TSLA',
                    name: 'Tesla Inc',
                    imageUrl: 'tesla.png'
                },
                user: {
                    id: 2,
                    name: 'Adam',
                    login: 'szmuk',
                    imageUrl: 'p2.jpg',
                    alertsCount: 38,
                    following: false
                },
                closed: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'days').toDate(),
                opened: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(2, 'days').toDate(),
                type: 'Day',
                gainLoss: -12,
                likesCount: 14,
                savedCount: 2,
                commentsCount: 7,
                top: false,
                liked: false,
                saved: true,
                commented: false,
                price: 110.36,
                currency: '$'
            },
            {
                id: 5,
                company: {
                    id: 4,
                    code: 'AMZN',
                    name: 'Amazon.com',
                    imageUrl: 'amazon.png'
                },
                user: {
                    id: 1,
                    name: 'CKadera',
                    login: 'ckadera',
                    imageUrl: 'p1.jpg',
                    alertsCount: 88,
                    following: true
                },
                closed: null,
                opened: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(7, 'days').toDate(),
                type: 'Day',
                gainLoss: -19,
                likesCount: 1,
                savedCount: 2,
                commentsCount: 2,
                top: false,
                liked: false,
                saved: true,
                commented: false,
                price: 310.36,
                currency: '$'
            }
        ];
    }
    getAlerts() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(data => this.alertsStore.set(data))).subscribe();
    }
    save(alert) {
        const entity = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(this.alertsQuery.getEntity(alert.id));
        entity.saved = !entity.saved;
        this.alertsStore.update(entity.id, entity);
    }
    like(alert) {
        const entity = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(this.alertsQuery.getEntity(alert.id));
        entity.liked = !entity.liked;
        this.alertsStore.update(entity.id, entity);
    }
    getAlertDetails(alertId) {
        const entity = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(this.alertsQuery.getEntity(alertId));
        entity.descriptionTitle = 'SPY entry at old support';
        entity.descriptionHtml = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley <br><br> of
    type
    and
    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
    into
    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
    release
    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.
  </div>`;
        entity.graphUrl = 'graph-big.png';
        entity.comments = [
            {
                id: '1',
                text: 'This is a very good alert',
                date: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(1, 'days').toDate(),
                user: {
                    id: 1,
                    name: 'CKadera',
                    login: 'ckadera',
                    imageUrl: 'p1.jpg',
                    alertsCount: 88,
                    following: true
                }
            },
            {
                id: '2',
                // eslint-disable-next-line max-len
                text: 'Thtaining Lorem Ipsum passages, and more recently with de. scrambled it to make a type specimen book. It has survived not only five centuries.',
                date: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(2, 'days').toDate(),
                user: {
                    id: 2,
                    name: 'Adam',
                    login: 'szmuk',
                    imageUrl: 'p2.jpg',
                    alertsCount: 38,
                    following: false
                },
            },
            {
                id: '3',
                // eslint-disable-next-line max-len
                text: 'It has survived not only five centuries. Scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.',
                date: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(2, 'hours').toDate(),
                user: {
                    id: 2,
                    name: 'Adam',
                    login: 'szmuk',
                    imageUrl: 'p2.jpg',
                    alertsCount: 38,
                    following: false
                }
            },
            {
                id: '4',
                text: 'It has survived not only five centuries.',
                date: moment__WEBPACK_IMPORTED_MODULE_1__().subtract(22, 'days').toDate(),
                user: {
                    id: 1,
                    name: 'CKadera',
                    login: 'ckadera',
                    imageUrl: 'p1.jpg',
                    alertsCount: 88,
                    following: true
                }
            }
        ];
        this.alertsStore.update({ detailedAlert: entity });
    }
};
AlertsService.ctorParameters = () => [
    { type: _alerts_store__WEBPACK_IMPORTED_MODULE_3__.AlertsStore },
    { type: _alerts_query__WEBPACK_IMPORTED_MODULE_2__.AlertsQuery }
];
AlertsService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], AlertsService);



/***/ }),

/***/ 97638:
/*!***************************************************!*\
  !*** ./src/app/core/state/alerts/alerts.store.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsStore": () => (/* binding */ AlertsStore)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 71477);



const initialState = {
    detailedAlert: null
};
let AlertsStore = class AlertsStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.EntityStore {
    constructor() {
        super(initialState);
    }
};
AlertsStore.ctorParameters = () => [];
AlertsStore = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' }),
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: 'alerts' })
], AlertsStore);



/***/ }),

/***/ 89234:
/*!*********************************************!*\
  !*** ./src/app/core/state/app/app.query.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppQuery": () => (/* binding */ AppQuery)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ 71477);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.store */ 83846);




let AppQuery = class AppQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
AppQuery.ctorParameters = () => [
    { type: _app_store__WEBPACK_IMPORTED_MODULE_0__.AppStore }
];
AppQuery = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AppQuery);



/***/ }),

/***/ 33544:
/*!***********************************************!*\
  !*** ./src/app/core/state/app/app.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var _app_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.query */ 89234);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.store */ 83846);





let AppService = class AppService {
    constructor(appStore, appQuery) {
        this.appStore = appStore;
        this.appQuery = appQuery;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    }
    toggleSideMenu() {
        const collapsed = this.appQuery.getValue().sideMenuCollapsed;
        this.appStore.update({ sideMenuCollapsed: !collapsed });
    }
    resetSideMenu() {
        this.appStore.update({ sideMenuCollapsed: false });
    }
};
AppService.ctorParameters = () => [
    { type: _app_store__WEBPACK_IMPORTED_MODULE_1__.AppStore },
    { type: _app_query__WEBPACK_IMPORTED_MODULE_0__.AppQuery }
];
AppService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AppService);



/***/ }),

/***/ 83846:
/*!*********************************************!*\
  !*** ./src/app/core/state/app/app.store.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStore": () => (/* binding */ AppStore)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 71477);



const initialState = {
    sideMenuCollapsed: false
};
let AppStore = class AppStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Store {
    constructor() {
        super(initialState);
    }
};
AppStore.ctorParameters = () => [];
AppStore = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' }),
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: 'app' })
], AppStore);



/***/ }),

/***/ 83544:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/alert-modal/alert-modal.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertModalComponent": () => (/* binding */ AlertModalComponent),
/* harmony export */   "AlertModalInput": () => (/* binding */ AlertModalInput)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_alert_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./alert-modal.component.html */ 24468);
/* harmony import */ var _alert_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-modal.component.scss */ 4647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var src_app_core_state_alerts_alerts_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/state/alerts/alerts.query */ 50412);
/* harmony import */ var src_app_core_state_alerts_alerts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/state/alerts/alerts.service */ 40699);










let AlertModalComponent = class AlertModalComponent {
    constructor(modalCtrl, navParams, alertsQuery, alertsService) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.alertsQuery = alertsQuery;
        this.alertsService = alertsService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    }
    ngOnInit() {
        const alertId = this.navParams.data.alert.id;
        this.subscription.add(this.alertsQuery.select(x => x.detailedAlert).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(x => !!x)).subscribe((detailedAlert) => {
            this.alert = detailedAlert;
        }));
        this.alertsService.getAlertDetails(alertId);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    close() {
        this.modalCtrl.dismiss();
    }
    getDate(date) {
        const momentDate = moment__WEBPACK_IMPORTED_MODULE_2__(date);
        if (momentDate.isAfter(moment__WEBPACK_IMPORTED_MODULE_2__().subtract(moment__WEBPACK_IMPORTED_MODULE_2__().hour(), 'hours'))) {
            return `Today, ${momentDate.format('h:mm A')}`;
        }
        else if (momentDate.isAfter(moment__WEBPACK_IMPORTED_MODULE_2__().subtract(2, 'days'))) {
            return `Yesterday, ${momentDate.format('h:mm A')} `;
        }
        else {
            return momentDate.format('MM/DD/YYYY, h:mm A');
        }
    }
    like(x) {
    }
    save(x) {
    }
};
AlertModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams },
    { type: src_app_core_state_alerts_alerts_query__WEBPACK_IMPORTED_MODULE_3__.AlertsQuery },
    { type: src_app_core_state_alerts_alerts_service__WEBPACK_IMPORTED_MODULE_4__.AlertsService }
];
AlertModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        template: _raw_loader_alert_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_alert_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AlertModalComponent);

class AlertModalInput {
}


/***/ }),

/***/ 87871:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/avatar/avatar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarComponent": () => (/* binding */ AvatarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_avatar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./avatar.component.html */ 16676);
/* harmony import */ var _avatar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar.component.scss */ 41051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let AvatarComponent = class AvatarComponent {
};
AvatarComponent.propDecorators = {
    person: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
AvatarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-avatar',
        template: _raw_loader_avatar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_avatar_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AvatarComponent);



/***/ }),

/***/ 34663:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/comment/comment.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentComponent": () => (/* binding */ CommentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_comment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./comment.component.html */ 5394);
/* harmony import */ var _comment_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.component.scss */ 16817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let CommentComponent = class CommentComponent {
    constructor() { }
    ngOnInit() {
    }
};
CommentComponent.ctorParameters = () => [];
CommentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-comment',
        template: _raw_loader_comment_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_comment_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommentComponent);



/***/ }),

/***/ 92424:
/*!****************************************************************************************************!*\
  !*** ./src/app/shared/components/comments-list/comments-list-item/comments-list-item.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsListItemComponent": () => (/* binding */ CommentsListItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_comments_list_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./comments-list-item.component.html */ 28489);
/* harmony import */ var _comments_list_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments-list-item.component.scss */ 20956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let CommentsListItemComponent = class CommentsListItemComponent {
};
CommentsListItemComponent.propDecorators = {
    comment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
CommentsListItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-comments-list-item',
        template: _raw_loader_comments_list_item_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_comments_list_item_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommentsListItemComponent);



/***/ }),

/***/ 3783:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/comments-list/comments-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsListComponent": () => (/* binding */ CommentsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_comments_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./comments-list.component.html */ 6343);
/* harmony import */ var _comments_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments-list.component.scss */ 89259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);





let CommentsListComponent = class CommentsListComponent {
    ngOnInit() {
        const sorted = this.comments.sort((a, b) => a.date < b.date ? 1 : -1);
        this.today = sorted.filter(x => moment__WEBPACK_IMPORTED_MODULE_2__(x.date).isAfter(moment__WEBPACK_IMPORTED_MODULE_2__().subtract(moment__WEBPACK_IMPORTED_MODULE_2__().hour(), 'hours')));
        let left = sorted.filter(x => !this.today.includes(x));
        this.yesterday = left.filter(x => moment__WEBPACK_IMPORTED_MODULE_2__(x.date).isAfter(moment__WEBPACK_IMPORTED_MODULE_2__().subtract(2, 'days')));
        left = left.filter(x => !this.yesterday.includes(x));
        this.older = left.filter(x => !this.yesterday.includes(x));
    }
};
CommentsListComponent.propDecorators = {
    comments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
CommentsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-comments-list',
        template: _raw_loader_comments_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_comments_list_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommentsListComponent);



/***/ }),

/***/ 69497:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/company-logo/company-logo.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyLogoComponent": () => (/* binding */ CompanyLogoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_company_logo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./company-logo.component.html */ 16197);
/* harmony import */ var _company_logo_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-logo.component.scss */ 18112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let CompanyLogoComponent = class CompanyLogoComponent {
};
CompanyLogoComponent.propDecorators = {
    company: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
CompanyLogoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-company-logo',
        template: _raw_loader_company_logo_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_company_logo_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CompanyLogoComponent);



/***/ }),

/***/ 15626:
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-modal/alert-modal.component */ 83544);
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar/avatar.component */ 87871);
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment/comment.component */ 34663);
/* harmony import */ var _comments_list_comments_list_item_comments_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments-list/comments-list-item/comments-list-item.component */ 92424);
/* harmony import */ var _comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments-list/comments-list.component */ 3783);
/* harmony import */ var _company_logo_company_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-logo/company-logo.component */ 69497);
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter/filter.component */ 88348);
/* harmony import */ var _header_header_options_header_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header-options/header-options.component */ 23987);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ 36290);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ 13686);
/* harmony import */ var _sort_filter_sort_filter_list_sort_filter_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sort-filter/sort-filter-list/sort-filter-list.component */ 7320);
/* harmony import */ var _sort_filter_sort_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sort-filter/sort-filter.component */ 1975);
/* harmony import */ var _trader_info_trader_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trader-info/trader-info.component */ 6747);



















let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        declarations: [
            _sort_filter_sort_filter_component__WEBPACK_IMPORTED_MODULE_11__.SortFilterComponent,
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__.MenuComponent,
            _header_header_component__WEBPACK_IMPORTED_MODULE_8__.HeaderComponent,
            _sort_filter_sort_filter_list_sort_filter_list_component__WEBPACK_IMPORTED_MODULE_10__.SortFilterListComponent,
            _filter_filter_component__WEBPACK_IMPORTED_MODULE_6__.FilterComponent,
            _comment_comment_component__WEBPACK_IMPORTED_MODULE_2__.CommentComponent,
            _header_header_options_header_options_component__WEBPACK_IMPORTED_MODULE_7__.HeaderOptionsComponent,
            _comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_4__.CommentsListComponent,
            _trader_info_trader_info_component__WEBPACK_IMPORTED_MODULE_12__.TraderInfoComponent,
            _company_logo_company_logo_component__WEBPACK_IMPORTED_MODULE_5__.CompanyLogoComponent,
            _alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_0__.AlertModalComponent,
            _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_1__.AvatarComponent,
            _comments_list_comments_list_item_comments_list_item_component__WEBPACK_IMPORTED_MODULE_3__.CommentsListItemComponent,
        ],
        exports: [
            _sort_filter_sort_filter_component__WEBPACK_IMPORTED_MODULE_11__.SortFilterComponent,
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__.MenuComponent,
            _header_header_component__WEBPACK_IMPORTED_MODULE_8__.HeaderComponent,
            _company_logo_company_logo_component__WEBPACK_IMPORTED_MODULE_5__.CompanyLogoComponent,
            _comment_comment_component__WEBPACK_IMPORTED_MODULE_2__.CommentComponent,
            _filter_filter_component__WEBPACK_IMPORTED_MODULE_6__.FilterComponent,
            _comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_4__.CommentsListComponent,
            _trader_info_trader_info_component__WEBPACK_IMPORTED_MODULE_12__.TraderInfoComponent,
            _alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_0__.AlertModalComponent,
            _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_1__.AvatarComponent,
            _comments_list_comments_list_item_comments_list_item_component__WEBPACK_IMPORTED_MODULE_3__.CommentsListItemComponent,
        ],
        entryComponents: [
            _sort_filter_sort_filter_list_sort_filter_list_component__WEBPACK_IMPORTED_MODULE_10__.SortFilterListComponent,
            _header_header_options_header_options_component__WEBPACK_IMPORTED_MODULE_7__.HeaderOptionsComponent,
            _alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_0__.AlertModalComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule,
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 88348:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/filter/filter.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterComponent": () => (/* binding */ FilterComponent),
/* harmony export */   "FilterComponentOption": () => (/* binding */ FilterComponentOption)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_filter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./filter.component.html */ 78854);
/* harmony import */ var _filter_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.component.scss */ 28250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let FilterComponent = class FilterComponent {
    constructor() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    filterSelected(option) {
        this.value = option;
        this.valueChange.emit(this.value);
    }
};
FilterComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
FilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-filter',
        template: _raw_loader_filter_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_filter_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FilterComponent);

class FilterComponentOption {
}


/***/ }),

/***/ 23987:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/header/header-options/header-options.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderOptionsComponent": () => (/* binding */ HeaderOptionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_header_options_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header-options.component.html */ 99320);
/* harmony import */ var _header_options_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-options.component.scss */ 49378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let HeaderOptionsComponent = class HeaderOptionsComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderOptionsComponent.ctorParameters = () => [];
HeaderOptionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header-options',
        template: _raw_loader_header_options_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_options_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderOptionsComponent);



/***/ }),

/***/ 36290:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header.component.html */ 82517);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 24658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _header_options_header_options_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-options/header-options.component */ 23987);






let HeaderComponent = class HeaderComponent {
    constructor(popoverController) {
        this.popoverController = popoverController;
    }
    ngOnInit() { }
    openOptions(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _header_options_header_options_component__WEBPACK_IMPORTED_MODULE_2__.HeaderOptionsComponent,
                event: ev,
                translucent: true
            });
            yield popover.present();
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController }
];
HeaderComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderComponent);



/***/ }),

/***/ 13686:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./menu.component.html */ 48159);
/* harmony import */ var _menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component.scss */ 83547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var src_app_core_state_app_app_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/state/app/app.query */ 89234);
/* harmony import */ var src_app_core_state_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/state/app/app.service */ 33544);







let MenuComponent = class MenuComponent {
    constructor(appService, appQuery) {
        this.appService = appService;
        this.appQuery = appQuery;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this.appPages = [
            { title: 'Alerts', url: '/alerts', icon: 'pulse-outline', notifications: 32 },
            { title: 'Leaderboard', url: '/leaderboard', icon: 'ribbon-outline' },
            { title: 'Xhub', url: '/xhub', icon: 'school-outline' },
        ];
    }
    ngOnInit() {
        this.subscription.add(this.appQuery.select(x => x.sideMenuCollapsed).subscribe(collapsed => {
            this.collapsed = collapsed;
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    toggle() {
        this.appService.toggleSideMenu();
    }
};
MenuComponent.ctorParameters = () => [
    { type: src_app_core_state_app_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: src_app_core_state_app_app_query__WEBPACK_IMPORTED_MODULE_2__.AppQuery }
];
MenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-menu',
        template: _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MenuComponent);



/***/ }),

/***/ 7320:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/sort-filter/sort-filter-list/sort-filter-list.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortFilterListComponent": () => (/* binding */ SortFilterListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sort_filter_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sort-filter-list.component.html */ 99793);
/* harmony import */ var _sort_filter_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort-filter-list.component.scss */ 10136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let SortFilterListComponent = class SortFilterListComponent {
    constructor(navParams, popoverController) {
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.options = this.navParams.data.options;
        this.selected = this.navParams.data.selected;
    }
    select(option) {
        this.popoverController.dismiss(option);
    }
};
SortFilterListComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController }
];
SortFilterListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        template: _raw_loader_sort_filter_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sort_filter_list_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SortFilterListComponent);



/***/ }),

/***/ 1975:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/sort-filter/sort-filter.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortFilterComponent": () => (/* binding */ SortFilterComponent),
/* harmony export */   "SortFilterComponentOption": () => (/* binding */ SortFilterComponentOption)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sort_filter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sort-filter.component.html */ 76441);
/* harmony import */ var _sort_filter_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort-filter.component.scss */ 31574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sort_filter_list_sort_filter_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort-filter-list/sort-filter-list.component */ 7320);






let SortFilterComponent = class SortFilterComponent {
    constructor(popoverController) {
        this.popoverController = popoverController;
        this.display = 'dropdown';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    openOptions(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _sort_filter_list_sort_filter_list_component__WEBPACK_IMPORTED_MODULE_2__.SortFilterListComponent,
                event: ev,
                translucent: true,
                componentProps: { options: this.options, selected: this.value }
            });
            popover.onDidDismiss().then(response => {
                if (response === null || response === void 0 ? void 0 : response.data) {
                    this.optionSelected(response.data);
                }
            });
            yield popover.present();
        });
    }
    optionSelected(option) {
        this.value = option;
        this.valueChange.emit(this.value);
    }
};
SortFilterComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController }
];
SortFilterComponent.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
SortFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sort-filter',
        template: _raw_loader_sort_filter_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sort_filter_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SortFilterComponent);

class SortFilterComponentOption {
}


/***/ }),

/***/ 6747:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/trader-info/trader-info.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraderInfoComponent": () => (/* binding */ TraderInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_trader_info_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./trader-info.component.html */ 65136);
/* harmony import */ var _trader_info_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trader-info.component.scss */ 65190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_core_services_people_people_serice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/people/people.serice */ 74103);





let TraderInfoComponent = class TraderInfoComponent {
    constructor(peopleService) {
        this.peopleService = peopleService;
    }
    ngOnInit() {
        this.peopleService.getPersonDetails(this.traderId).then(x => {
            this.trader = x;
        });
    }
};
TraderInfoComponent.ctorParameters = () => [
    { type: src_app_core_services_people_people_serice__WEBPACK_IMPORTED_MODULE_2__.PeopleService }
];
TraderInfoComponent.propDecorators = {
    traderId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
TraderInfoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-trader-info',
        template: _raw_loader_trader_info_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_trader_info_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TraderInfoComponent);



/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/components.module */ 15626);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ 36290);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu/menu.component */ 13686);








let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [],
        imports: [
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        ],
        exports: [
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent,
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        ]
    })
], SharedModule);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		86030,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 26431,
	"./af.js": 26431,
	"./ar": 81286,
	"./ar-dz": 1616,
	"./ar-dz.js": 1616,
	"./ar-kw": 9759,
	"./ar-kw.js": 9759,
	"./ar-ly": 43160,
	"./ar-ly.js": 43160,
	"./ar-ma": 62551,
	"./ar-ma.js": 62551,
	"./ar-sa": 79989,
	"./ar-sa.js": 79989,
	"./ar-tn": 6962,
	"./ar-tn.js": 6962,
	"./ar.js": 81286,
	"./az": 15887,
	"./az.js": 15887,
	"./be": 14572,
	"./be.js": 14572,
	"./bg": 3276,
	"./bg.js": 3276,
	"./bm": 93344,
	"./bm.js": 93344,
	"./bn": 58985,
	"./bn-bd": 83990,
	"./bn-bd.js": 83990,
	"./bn.js": 58985,
	"./bo": 94391,
	"./bo.js": 94391,
	"./br": 46728,
	"./br.js": 46728,
	"./bs": 5536,
	"./bs.js": 5536,
	"./ca": 41043,
	"./ca.js": 41043,
	"./cs": 70420,
	"./cs.js": 70420,
	"./cv": 33513,
	"./cv.js": 33513,
	"./cy": 6771,
	"./cy.js": 6771,
	"./da": 47978,
	"./da.js": 47978,
	"./de": 46061,
	"./de-at": 25204,
	"./de-at.js": 25204,
	"./de-ch": 2653,
	"./de-ch.js": 2653,
	"./de.js": 46061,
	"./dv": 85,
	"./dv.js": 85,
	"./el": 8579,
	"./el.js": 8579,
	"./en-au": 25724,
	"./en-au.js": 25724,
	"./en-ca": 10525,
	"./en-ca.js": 10525,
	"./en-gb": 52847,
	"./en-gb.js": 52847,
	"./en-ie": 67216,
	"./en-ie.js": 67216,
	"./en-il": 39305,
	"./en-il.js": 39305,
	"./en-in": 73364,
	"./en-in.js": 73364,
	"./en-nz": 79130,
	"./en-nz.js": 79130,
	"./en-sg": 11161,
	"./en-sg.js": 11161,
	"./eo": 50802,
	"./eo.js": 50802,
	"./es": 40328,
	"./es-do": 45551,
	"./es-do.js": 45551,
	"./es-mx": 75615,
	"./es-mx.js": 75615,
	"./es-us": 64790,
	"./es-us.js": 64790,
	"./es.js": 40328,
	"./et": 96389,
	"./et.js": 96389,
	"./eu": 52961,
	"./eu.js": 52961,
	"./fa": 26151,
	"./fa.js": 26151,
	"./fi": 7997,
	"./fi.js": 7997,
	"./fil": 58898,
	"./fil.js": 58898,
	"./fo": 37779,
	"./fo.js": 37779,
	"./fr": 28174,
	"./fr-ca": 3287,
	"./fr-ca.js": 3287,
	"./fr-ch": 38867,
	"./fr-ch.js": 38867,
	"./fr.js": 28174,
	"./fy": 50452,
	"./fy.js": 50452,
	"./ga": 45014,
	"./ga.js": 45014,
	"./gd": 74127,
	"./gd.js": 74127,
	"./gl": 72124,
	"./gl.js": 72124,
	"./gom-deva": 6444,
	"./gom-deva.js": 6444,
	"./gom-latn": 37953,
	"./gom-latn.js": 37953,
	"./gu": 76604,
	"./gu.js": 76604,
	"./he": 1222,
	"./he.js": 1222,
	"./hi": 74235,
	"./hi.js": 74235,
	"./hr": 622,
	"./hr.js": 622,
	"./hu": 37735,
	"./hu.js": 37735,
	"./hy-am": 90402,
	"./hy-am.js": 90402,
	"./id": 59187,
	"./id.js": 59187,
	"./is": 30536,
	"./is.js": 30536,
	"./it": 35007,
	"./it-ch": 94667,
	"./it-ch.js": 94667,
	"./it.js": 35007,
	"./ja": 62093,
	"./ja.js": 62093,
	"./jv": 80059,
	"./jv.js": 80059,
	"./ka": 66870,
	"./ka.js": 66870,
	"./kk": 80880,
	"./kk.js": 80880,
	"./km": 1083,
	"./km.js": 1083,
	"./kn": 68785,
	"./kn.js": 68785,
	"./ko": 21721,
	"./ko.js": 21721,
	"./ku": 37851,
	"./ku.js": 37851,
	"./ky": 1727,
	"./ky.js": 1727,
	"./lb": 40346,
	"./lb.js": 40346,
	"./lo": 93002,
	"./lo.js": 93002,
	"./lt": 64035,
	"./lt.js": 64035,
	"./lv": 56927,
	"./lv.js": 56927,
	"./me": 5634,
	"./me.js": 5634,
	"./mi": 94173,
	"./mi.js": 94173,
	"./mk": 86320,
	"./mk.js": 86320,
	"./ml": 11705,
	"./ml.js": 11705,
	"./mn": 31062,
	"./mn.js": 31062,
	"./mr": 92805,
	"./mr.js": 92805,
	"./ms": 11341,
	"./ms-my": 59900,
	"./ms-my.js": 59900,
	"./ms.js": 11341,
	"./mt": 37734,
	"./mt.js": 37734,
	"./my": 19034,
	"./my.js": 19034,
	"./nb": 9324,
	"./nb.js": 9324,
	"./ne": 46495,
	"./ne.js": 46495,
	"./nl": 70673,
	"./nl-be": 76272,
	"./nl-be.js": 76272,
	"./nl.js": 70673,
	"./nn": 72486,
	"./nn.js": 72486,
	"./oc-lnc": 46219,
	"./oc-lnc.js": 46219,
	"./pa-in": 2829,
	"./pa-in.js": 2829,
	"./pl": 78444,
	"./pl.js": 78444,
	"./pt": 53170,
	"./pt-br": 66117,
	"./pt-br.js": 66117,
	"./pt.js": 53170,
	"./ro": 96587,
	"./ro.js": 96587,
	"./ru": 39264,
	"./ru.js": 39264,
	"./sd": 42135,
	"./sd.js": 42135,
	"./se": 95366,
	"./se.js": 95366,
	"./si": 93379,
	"./si.js": 93379,
	"./sk": 46143,
	"./sk.js": 46143,
	"./sl": 196,
	"./sl.js": 196,
	"./sq": 21082,
	"./sq.js": 21082,
	"./sr": 91621,
	"./sr-cyrl": 98963,
	"./sr-cyrl.js": 98963,
	"./sr.js": 91621,
	"./ss": 41404,
	"./ss.js": 41404,
	"./sv": 55685,
	"./sv.js": 55685,
	"./sw": 3872,
	"./sw.js": 3872,
	"./ta": 54106,
	"./ta.js": 54106,
	"./te": 39204,
	"./te.js": 39204,
	"./tet": 83692,
	"./tet.js": 83692,
	"./tg": 86361,
	"./tg.js": 86361,
	"./th": 31735,
	"./th.js": 31735,
	"./tk": 1568,
	"./tk.js": 1568,
	"./tl-ph": 96129,
	"./tl-ph.js": 96129,
	"./tlh": 13759,
	"./tlh.js": 13759,
	"./tr": 81644,
	"./tr.js": 81644,
	"./tzl": 90875,
	"./tzl.js": 90875,
	"./tzm": 16878,
	"./tzm-latn": 11041,
	"./tzm-latn.js": 11041,
	"./tzm.js": 16878,
	"./ug-cn": 74357,
	"./ug-cn.js": 74357,
	"./uk": 74810,
	"./uk.js": 74810,
	"./ur": 86794,
	"./ur.js": 86794,
	"./uz": 28966,
	"./uz-latn": 77959,
	"./uz-latn.js": 77959,
	"./uz.js": 28966,
	"./vi": 35386,
	"./vi.js": 35386,
	"./x-pseudo": 23156,
	"./x-pseudo.js": 23156,
	"./yo": 68028,
	"./yo.js": 68028,
	"./zh-cn": 9330,
	"./zh-cn.js": 9330,
	"./zh-hk": 89380,
	"./zh-hk.js": 89380,
	"./zh-mo": 60874,
	"./zh-mo.js": 60874,
	"./zh-tw": 96508,
	"./zh-tw.js": 96508
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".side-menu ion-content {\n  --background: var(--x-bg-blue);\n}\n\n.split-pane {\n  --side-max-width: 250px;\n}\n\n.split-pane-collapsed {\n  --side-max-width: 85px !important;\n  --side-width: 85px !important;\n  --side-min-width: 85px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDhCQUFBO0FBQUo7O0FBSUE7RUFDRSx1QkFBQTtBQURGOztBQUlBO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0FBREYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtbWVudSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXgtYmctYmx1ZSk7XG4gIH1cbn1cblxuLnNwbGl0LXBhbmUge1xuICAtLXNpZGUtbWF4LXdpZHRoOiAyNTBweDtcbn1cblxuLnNwbGl0LXBhbmUtY29sbGFwc2VkIHtcbiAgLS1zaWRlLW1heC13aWR0aDogODVweCAhaW1wb3J0YW50O1xuICAtLXNpZGUtd2lkdGg6IDg1cHggIWltcG9ydGFudDtcbiAgLS1zaWRlLW1pbi13aWR0aDogODVweCAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ 4647:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/alert-modal/alert-modal.component.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  color: var(--x-text);\n}\n\n.close {\n  --background: transparent;\n}\n\n.close__container {\n  display: flex;\n  flex-direction: row-reverse;\n  padding-bottom: 10px;\n}\n\n.close__container__close {\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n  color: white;\n  font-size: 30px;\n  background: #6e6e6e;\n  border-radius: 5px;\n}\n\n.content {\n  border-radius: 20px;\n  background: white;\n  height: 100%;\n}\n\n@media (max-width: 991px) {\n  .content {\n    overflow: auto;\n  }\n}\n\n.trader {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 1px solid var(--x-bg-gray);\n  height: 100%;\n}\n\n.trader__person {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.trader__person__avatar {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.trader__person__info {\n  display: flex;\n  flex-direction: column;\n  margin-left: 15px;\n}\n\n.trader__person__info__name {\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n\n.trader__person__info__login {\n  color: var(--x-text-light);\n}\n\n.trader__follow {\n  text-align: center;\n  background: var(--x-action-light);\n  color: var(--x-action);\n  padding: 7px 15px;\n  border-radius: 30px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-right: 10px;\n}\n\n.trader__follow--unfollow {\n  background: var(--x-fail-light);\n  color: var(--x-fail);\n}\n\n.alert {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--x-bg-gray);\n  height: 100%;\n  padding: 10px;\n  border-left: 1px solid var(--x-bg-gray);\n  flex-wrap: wrap;\n}\n\n@media (max-width: 991px) {\n  .alert {\n    height: unset;\n  }\n}\n\n.alert__details {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.alert__details__info {\n  flex-grow: 1;\n  flex-shrink: 1;\n  display: flex;\n  flex-direction: column;\n  margin-left: 15px;\n}\n\n.alert__details__info__action {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n\n.alert__details__info__price {\n  font-size: 14px;\n  color: var(--x-text-light);\n}\n\n.alert__date {\n  font-size: 14px;\n  color: var(--x-text-light);\n}\n\n.alert__result {\n  border-radius: 5px;\n  padding: 5px 10px;\n}\n\n.alert__result--made {\n  color: white;\n  background-color: var(--x-success);\n}\n\n.alert__result--lost {\n  color: white;\n  background-color: var(--x-fail);\n}\n\n.alert__result--up {\n  color: var(--x-success);\n  background-color: var(--x-success-light);\n}\n\n.alert__result--down {\n  color: var(--x-fail);\n  background-color: var(--x-fail-light);\n}\n\n.alert__actions {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 100%;\n  color: var(--x-text-darkgray);\n}\n\n.alert__actions__action {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-right: 13px;\n  cursor: pointer;\n  height: 100%;\n}\n\n.alert__actions__action--toggled {\n  color: var(--x-action);\n}\n\n.alert__actions__action ion-icon {\n  font-size: 20px;\n  margin-right: 7px;\n}\n\n.alert-details {\n  height: 100%;\n}\n\n.alert-details__scroll {\n  overflow: auto;\n  padding-right: 20px;\n  padding-bottom: 80px;\n  display: flex;\n  flex-direction: column;\n  padding: 30px 0px 140px 20px;\n  height: 70vh;\n  border-left: 1px solid var(--x-bg-gray);\n}\n\n@media (max-width: 991px) {\n  .alert-details__scroll {\n    overflow: initial;\n  }\n}\n\n@media (max-width: 991px) {\n  .alert-details__scroll {\n    height: 66vh;\n  }\n}\n\n.alert-details__description__title {\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\n.alert-details__graph {\n  border: 1px solid var(--x-bg-gray);\n  border-radius: 15px;\n  margin-top: 20px;\n  padding: 5px;\n}\n\n.alert-details__comments {\n  margin-top: 40px;\n}\n\n.alert-details__comment-mobile {\n  margin-top: 40px;\n  padding-bottom: 40px;\n}\n\n.comment {\n  position: absolute;\n  height: 145px;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n}\n\n.comment__grid-el {\n  height: 100%;\n}\n\n.comment__container {\n  height: 100%;\n  padding: 0 15px 20px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUNJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQU47O0FBS0E7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUlFO0VBTEY7SUFNSSxjQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0FBREY7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUdJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFETjs7QUFJSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBRk47O0FBSU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZSOztBQUtNO0VBQ0UsMEJBQUE7QUFIUjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTko7O0FBUUk7RUFDRSwrQkFBQTtFQUNBLG9CQUFBO0FBTk47O0FBV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtBQVJGOztBQVVFO0VBWEY7SUFZSSxhQUFBO0VBUEY7QUFDRjs7QUFTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBUEo7O0FBU0k7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBUE47O0FBU007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVBSOztBQVNNO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FBUFI7O0FBWUU7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUFWSjs7QUFhRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFYSjs7QUFhSTtFQUNFLFlBQUE7RUFDQSxrQ0FBQTtBQVhOOztBQWFJO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0FBWE47O0FBYUk7RUFDRSx1QkFBQTtFQUNBLHdDQUFBO0FBWE47O0FBYUk7RUFDRSxvQkFBQTtFQUNBLHFDQUFBO0FBWE47O0FBZUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQWJKOztBQWVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBYk47O0FBZU07RUFDRSxzQkFBQTtBQWJSOztBQWdCTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQWRSOztBQW9CQTtFQUNFLFlBQUE7QUFqQkY7O0FBa0JFO0VBQ0UsY0FBQTtFQU1BLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtBQXJCSjs7QUFXSTtFQUhGO0lBSUksaUJBQUE7RUFSSjtBQUNGOztBQWtCSTtFQWZGO0lBZ0JJLFlBQUE7RUFmSjtBQUNGOztBQW1CSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBakJOOztBQXFCRTtFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFuQko7O0FBc0JFO0VBQ0UsZ0JBQUE7QUFwQko7O0FBdUJFO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQXJCSjs7QUF5QkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUF0QkY7O0FBd0JFO0VBQ0UsWUFBQTtBQXRCSjs7QUF5QkU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUF2QkoiLCJmaWxlIjoiYWxlcnQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGNvbG9yOiB2YXIoLS14LXRleHQpO1xufVxuXG4uY2xvc2Uge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICZfX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbiAgICAmX19jbG9zZSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiKDExMCwgMTEwLCAxMTApO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbn1cblxuLnRyYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXgtYmctZ3JheSk7XG4gIGhlaWdodDogMTAwJTtcblxuICAmX19wZXJzb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJl9fYXZhdGFyIHtcbiAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIH1cblxuICAgICZfX2luZm8ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcblxuICAgICAgJl9fbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgfVxuXG4gICAgICAmX19sb2dpbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS14LXRleHQtbGlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX2ZvbGxvdyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXgtYWN0aW9uLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0teC1hY3Rpb24pO1xuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICAmLS11bmZvbGxvdyB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14LWZhaWwtbGlnaHQpO1xuICAgICAgY29sb3I6IHZhcigtLXgtZmFpbCk7XG4gICAgfVxuICB9XG59XG5cbi5hbGVydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXgtYmctZ3JheSk7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS14LWJnLWdyYXkpO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgaGVpZ2h0OiB1bnNldDtcbiAgfVxuXG4gICZfX2RldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJl9faW5mbyB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBmbGV4LXNocmluazogMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG5cbiAgICAgICZfX2FjdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgfVxuICAgICAgJl9fcHJpY2Uge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS14LXRleHQtbGlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX2RhdGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0teC10ZXh0LWxpZ2h0KTtcbiAgfVxuXG4gICZfX3Jlc3VsdCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuXG4gICAgJi0tbWFkZSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14LXN1Y2Nlc3MpO1xuICAgIH1cbiAgICAmLS1sb3N0IHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXgtZmFpbCk7XG4gICAgfVxuICAgICYtLXVwIHtcbiAgICAgIGNvbG9yOiB2YXIoLS14LXN1Y2Nlc3MpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teC1zdWNjZXNzLWxpZ2h0KTtcbiAgICB9XG4gICAgJi0tZG93biB7XG4gICAgICBjb2xvcjogdmFyKC0teC1mYWlsKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXgtZmFpbC1saWdodCk7XG4gICAgfVxuICB9XG5cbiAgJl9fYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiB2YXIoLS14LXRleHQtZGFya2dyYXkpO1xuXG4gICAgJl9fYWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICYtLXRvZ2dsZWQge1xuICAgICAgICBjb2xvcjogdmFyKC0teC1hY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5hbGVydC1kZXRhaWxzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAmX19zY3JvbGwge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICB9XG5cbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAzMHB4IDBweCAxNDBweCAyMHB4O1xuICAgIGhlaWdodDogNzB2aDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLXgtYmctZ3JheSk7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgIGhlaWdodDogNjZ2aDtcbiAgICB9XG4gIH1cblxuICAmX19kZXNjcmlwdGlvbiB7XG4gICAgJl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICB9XG5cbiAgJl9fZ3JhcGgge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXgtYmctZ3JheSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuXG4gICZfX2NvbW1lbnRzIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG5cbiAgJl9fY29tbWVudC1tb2JpbGUge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIH1cbn1cblxuLmNvbW1lbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTQ1cHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcblxuICAmX19ncmlkLWVsIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAmX19jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDE1cHggMjBweCAyMHB4O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 41051:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/avatar/avatar.component.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.avatar {\n  position: relative;\n}\n\n.avatar img {\n  height: 50px;\n  width: 50px;\n  border: 3px solid white;\n  border-radius: 25px;\n  box-shadow: 1px 2px 9px rgba(0, 0, 0, 0.4);\n}\n\n.avatar__alerts {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: var(--x-action);\n  color: white;\n  font-size: 12px;\n  padding: 3px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2YXRhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYXZhdGFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGltZyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA5cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB9XG4gICZfX2FsZXJ0cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14LWFjdGlvbik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 16817:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/comment/comment.component.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".comment {\n  background: var(--x-bg-lightgray);\n  border: 1px solid var(--x-bg-gray);\n  border-radius: 20px;\n  padding: 10px 15px 5px 15px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.comment__content {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n}\n.comment__content__profile {\n  height: 50px;\n  width: 50px;\n  border-radius: 25px;\n}\n.comment__content__input {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 20px;\n  --padding-end: 0;\n}\n.comment__footer {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 0;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.comment__footer__actions {\n  color: var(--x-text-darkgray);\n  font-size: 20px;\n}\n.comment__footer__actions ion-icon {\n  margin-right: 10px;\n  cursor: pointer;\n}\n.comment__footer__actions ion-icon:hover {\n  color: var(--x-action);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ047QUFFSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQU47QUFJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBRko7QUFJSTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtBQUZOO0FBR007RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFEUjtBQUVRO0VBQ0Usc0JBQUE7QUFBViIsImZpbGUiOiJjb21tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS14LWJnLWxpZ2h0Z3JheSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXgtYmctZ3JheSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweCA1cHggMTVweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICZfX2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAmX19wcm9maWxlIHtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB9XG5cbiAgICAmX19pbnB1dCB7XG4gICAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgfVxuICB9XG5cbiAgJl9fZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICAmX19hY3Rpb25zIHtcbiAgICAgIGNvbG9yOiB2YXIoLS14LXRleHQtZGFya2dyYXkpO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXgtYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 20956:
/*!******************************************************************************************************!*\
  !*** ./src/app/shared/components/comments-list/comments-list-item/comments-list-item.component.scss ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".comment-item {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 10px;\n  position: relative;\n}\n.comment-item__toolbar {\n  position: absolute;\n  top: -10px;\n  right: 20px;\n  background: white;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: row;\n  padding: 5px;\n  font-size: 20px;\n  box-shadow: 1px 2px 9px rgba(0, 0, 0, 0.2);\n  visibility: hidden;\n}\n.comment-item__toolbar ion-icon {\n  margin: 0 5px;\n  cursor: pointer;\n}\n.comment-item__toolbar ion-icon:hover {\n  color: var(--x-action);\n}\n.comment-item:hover .comment-item__toolbar {\n  visibility: visible;\n}\n.comment-item:hover {\n  background: var(--x-bg-lightgray);\n}\n.comment-item__avatar {\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.comment-item__content {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  margin-left: 20px;\n}\n.comment-item__content__details {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.comment-item__content__details__name {\n  font-weight: 500;\n}\n.comment-item__content__details__date {\n  color: var(--x-text-darkgray);\n  font-size: 13px;\n  margin-left: 10px;\n  margin-bottom: -2px;\n}\n.comment-item__content__text {\n  margin-top: 5px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBQ047QUFDTTtFQUNFLHNCQUFBO0FBQ1I7QUFJRTtFQUNFLG1CQUFBO0FBRko7QUFLRTtFQUNFLGlDQUFBO0FBSEo7QUFNRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBSko7QUFPRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUxKO0FBT0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUxOO0FBTU07RUFDRSxnQkFBQTtBQUpSO0FBT007RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTFI7QUFTSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBUE4iLCJmaWxlIjoiY29tbWVudHMtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmX190b29sYmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTBweDtcbiAgICByaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggOXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXgtYWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIC5jb21tZW50LWl0ZW1fX3Rvb2xiYXIge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS14LWJnLWxpZ2h0Z3JheSk7XG4gIH1cblxuICAmX19hdmF0YXIge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgfVxuXG4gICZfX2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG5cbiAgICAmX19kZXRhaWxzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICZfX25hbWUge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuXG4gICAgICAmX19kYXRlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXgtdGV4dC1kYXJrZ3JheSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fdGV4dCB7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 89259:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/comments-list/comments-list.component.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".comments__divider {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.comments__divider__line {\n  border-bottom: 1px solid var(--x-bg-gray);\n  flex-grow: 1;\n  margin: 0 15px;\n}\n.comments__divider__text {\n  font-size: 13px;\n  color: var(--x-text-darkgray);\n}\n.comments__section {\n  margin: 15px 0 25px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBQ0k7RUFDRSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ047QUFDSTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtBQUNOO0FBR0U7RUFDRSxxQkFBQTtBQURKIiwiZmlsZSI6ImNvbW1lbnRzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudHMge1xuICAmX19kaXZpZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAmX19saW5lIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS14LWJnLWdyYXkpO1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgfVxuICAgICZfX3RleHQge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgY29sb3I6IHZhcigtLXgtdGV4dC1kYXJrZ3JheSk7XG4gICAgfVxuICB9XG5cbiAgJl9fc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAxNXB4IDAgMjVweCAwO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 18112:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/company-logo/company-logo.component.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.company {\n  height: 50px;\n  width: 50px;\n  padding: 5px;\n  border-radius: 5px;\n  background-color: var(--x-bg-lightgray);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnktbG9nby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0FBQ0YiLCJmaWxlIjoiY29tcGFueS1sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uY29tcGFueSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14LWJnLWxpZ2h0Z3JheSk7XG59XG4iXX0= */");

/***/ }),

/***/ 28250:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/filter/filter.component.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".filter {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.filter__option {\n  background-color: var(--x-bg-lightgray);\n  padding: 8px 15px;\n  min-width: 100px;\n  text-align: center;\n  cursor: pointer;\n  border-right: 1px solid var(--x-bg-gray);\n  font-size: 14px;\n}\n.filter__option:first-child {\n  border-radius: 10px 0 0 10px;\n}\n.filter__option:last-child {\n  border-radius: 0 10px 10px 0;\n  border: 0;\n}\n.filter__option__inside {\n  padding: 5px;\n  border-radius: 5px;\n}\n.filter__option__inside--selected {\n  background-color: white;\n  font-weight: 500;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0k7RUFDRSw0QkFBQTtBQUNOO0FBRUk7RUFDRSw0QkFBQTtFQUNBLFNBQUE7QUFBTjtBQUdJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBRE47QUFHTTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRFIiLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJl9fb3B0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14LWJnLWxpZ2h0Z3JheSk7XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXgtYmctZ3JheSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xuICAgICAgYm9yZGVyOiAwO1xuICAgIH1cblxuICAgICZfX2luc2lkZSB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICYtLXNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 49378:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/header/header-options/header-options.component.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header-menu {\n  padding: 20px;\n}\n.header-menu__user {\n  font-size: 18px;\n  font-weight: 500;\n  padding-bottom: 10px;\n}\n.header-menu__action {\n  padding: 5px 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  cursor: pointer;\n}\n.header-menu__action:hover {\n  background-color: var(--x-bg-lightgray);\n}\n.header-menu__action ion-icon {\n  font-size: 20px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1vcHRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUVKO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDSTtFQUNFLHVDQUFBO0FBQ047QUFFSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUFOIiwiZmlsZSI6ImhlYWRlci1vcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1tZW51IHtcbiAgcGFkZGluZzogMjBweDtcbiAgJl9fdXNlciB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cblxuICAmX19hY3Rpb24ge1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teC1iZy1saWdodGdyYXkpO1xuICAgIH1cblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 24658:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header::after {\n  background-image: none;\n  border-bottom: 1px solid var(--x-bg-gray);\n}\n\n.header {\n  padding: 0 30px;\n}\n\n.header ::ng-deep .header-background {\n  background: white;\n}\n\n@media (max-width: 767px) {\n  .header {\n    padding: 0 10px;\n  }\n}\n\n.header__mobile-menu {\n  height: 60px;\n  width: 60px;\n}\n\n.header::after {\n  background-image: none;\n  border-bottom: 1px solid var(--x-bg-gray);\n}\n\n.header__container {\n  width: 100%;\n  height: 75px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.header__title {\n  flex-grow: 0;\n  font-size: 25px;\n  font-weight: 500;\n  min-width: 150px;\n}\n\n@media (max-width: 1250px) {\n  .header__title {\n    min-width: unset;\n  }\n}\n\n.header__search {\n  --box-shadow: none;\n  --background: var(--x-bg-lightgray);\n  max-width: 450px;\n  flex-shrink: 1;\n}\n\n.header__actions {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: var(--x-text-darkgray);\n  flex-shrink: 0;\n}\n\n.header__actions__icon {\n  font-size: 25px;\n  margin-left: 15px;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n\n.header__actions__icon:hover {\n  opacity: 0.6;\n}\n\n.header__actions__avatar {\n  flex-shrink: 0;\n  height: 50px;\n  width: 50px;\n  border-radius: 30px;\n  margin-left: 20px;\n  cursor: pointer;\n}\n\nion-searchbar ::ng-deep .searchbar-input {\n  padding-right: 0;\n  padding-left: 40px;\n}\n\nion-searchbar ::ng-deep .searchbar-clear-icon {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EseUNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFSTtFQUNFLGlCQUFBO0FBQU47O0FBSUU7RUFURjtJQVVJLGVBQUE7RUFERjtBQUNGOztBQUdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFESjs7QUFJRTtFQUNFLHNCQUFBO0VBQ0EseUNBQUE7QUFGSjs7QUFLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUhKOztBQU1FO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSko7O0FBTUk7RUFORjtJQU9JLGdCQUFBO0VBSEo7QUFDRjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFKSjs7QUFPRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FBTEo7O0FBT0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUxOOztBQU9NO0VBQ0UsWUFBQTtBQUxSOztBQVNJO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFQTjs7QUFhSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFWTjs7QUFZSTtFQUNFLHdCQUFBO0FBVk4iLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0teC1iZy1ncmF5KTtcbn1cblxuLmhlYWRlciB7XG4gIHBhZGRpbmc6IDAgMzBweDtcblxuICA6Om5nLWRlZXAge1xuICAgIC5oZWFkZXItYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cblxuICAmX19tb2JpbGUtbWVudSB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXgtYmctZ3JheSk7XG4gIH1cblxuICAmX19jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTI1MHB4KSB7XG4gICAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgIH1cbiAgfVxuXG4gICZfX3NlYXJjaCB7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0teC1iZy1saWdodGdyYXkpO1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgZmxleC1zaHJpbms6IDE7XG4gIH1cblxuICAmX19hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0teC10ZXh0LWRhcmtncmF5KTtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgICZfX2ljb24ge1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmbGV4LXNocmluazogMDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19hdmF0YXIge1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cbmlvbi1zZWFyY2hiYXIge1xuICA6Om5nLWRlZXAge1xuICAgIC5zZWFyY2hiYXItaW5wdXQge1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICB9XG4gICAgLnNlYXJjaGJhci1jbGVhci1pY29uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 83547:
/*!************************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".menu__logo {\n  height: 55px;\n  margin: 13px 0 10px 7px;\n}\n.menu__logo-mini {\n  height: 55px;\n  margin: 13px 0 10px 13px;\n}\n.menu__list {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n}\n.menu__list__item {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  color: var(--x-text-lightblue);\n  position: relative;\n}\n.menu__list__item__page {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.menu__list__item__notifications {\n  background-color: var(--x-text-lightblue);\n  color: white;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 14px;\n}\n.menu__list__item__notifications--collapsed {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n}\n.menu__list__item ion-icon {\n  font-size: 25px;\n  margin-right: 10px;\n}\n.menu__list__item--selected {\n  color: white;\n  background-color: var(--x-bg-lightblue);\n  border-radius: 5px;\n}\n.menu__list__item--selected ion-icon {\n  color: var(--x-accent);\n}\n.collapse {\n  display: flex;\n  flex-direction: row-reverse;\n  color: var(--x-bg-gray);\n  margin-top: 100px;\n  align-items: center;\n  cursor: pointer;\n}\n.collapse__icon {\n  padding: 15px 30px 15px 15px;\n  font-size: 25px;\n}\n.collapse__icon--collapse {\n  transform: rotateY(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUFBSjtBQUVFO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFESjtBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBRE47QUFHTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFJTTtFQUNFLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRlI7QUFJUTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFGVjtBQU1NO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBSlI7QUFPTTtFQUNFLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0FBTFI7QUFPUTtFQUNFLHNCQUFBO0FBTFY7QUFZQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFURjtBQVdFO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FBVEo7QUFXSTtFQUNFLDBCQUFBO0FBVE4iLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcbiAgJl9fbG9nbyB7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIG1hcmdpbjogMTNweCAwIDEwcHggN3B4O1xuICB9XG4gICZfX2xvZ28tbWluaSB7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIG1hcmdpbjogMTNweCAwIDEwcHggMTNweDtcbiAgfVxuXG4gICZfX2xpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgJl9faXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIGNvbG9yOiB2YXIoLS14LXRleHQtbGlnaHRibHVlKTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgJl9fcGFnZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgICZfX25vdGlmaWNhdGlvbnMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14LXRleHQtbGlnaHRibHVlKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICAgJi0tY29sbGFwc2VkIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICByaWdodDogLTEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cblxuICAgICAgJi0tc2VsZWN0ZWQge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXgtYmctbGlnaHRibHVlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0teC1hY2NlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jb2xsYXBzZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgY29sb3I6IHZhcigtLXgtYmctZ3JheSk7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJl9faWNvbiB7XG4gICAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMTVweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG5cbiAgICAmLS1jb2xsYXBzZSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 10136:
/*!************************************************************************************************!*\
  !*** ./src/app/shared/components/sort-filter/sort-filter-list/sort-filter-list.component.scss ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".options {\n  padding: 5px 0;\n}\n.options__item {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n.options__item:hover {\n  background-color: var(--x-bg-lightgray);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvcnQtZmlsdGVyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUNJO0VBQ0UsdUNBQUE7QUFDTiIsImZpbGUiOiJzb3J0LWZpbHRlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wdGlvbnMge1xuICBwYWRkaW5nOiA1cHggMDtcblxuICAmX19pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14LWJnLWxpZ2h0Z3JheSk7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 31574:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/sort-filter/sort-filter.component.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".dropdown {\n  background-color: var(--x-bg-lightgray);\n  cursor: pointer;\n  padding: 7px 12px;\n  border-radius: 7px;\n  font-size: 14px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.dropdown__result {\n  color: var(--x-text-light);\n  margin-left: 5px;\n}\n.dropdown__result--placeholder {\n  min-width: 15px;\n}\n.dropdown__icon {\n  margin-left: 3px;\n}\n.bar__label {\n  font-size: 15px;\n  margin-bottom: 5px;\n}\n.bar__options {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.bar__options__option {\n  background-color: var(--x-bg-lightgray);\n  padding: 8px 15px;\n  min-width: 100px;\n  text-align: center;\n  cursor: pointer;\n  border-right: 1px solid var(--x-bg-gray);\n  font-size: 14px;\n}\n.bar__options__option:first-child {\n  border-radius: 10px 0 0 10px;\n}\n.bar__options__option:last-child {\n  border-radius: 0 10px 10px 0;\n  border: 0;\n}\n.bar__options__option__inside {\n  padding: 5px;\n  border-radius: 5px;\n}\n.bar__options__option__inside--selected {\n  background-color: white;\n  font-weight: 500;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvcnQtZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNFLGVBQUE7QUFFTjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSjtBQUtFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBRko7QUFJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRko7QUFJSTtFQUNFLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtBQUZOO0FBSU07RUFDRSw0QkFBQTtBQUZSO0FBS007RUFDRSw0QkFBQTtFQUNBLFNBQUE7QUFIUjtBQU1NO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBSlI7QUFNUTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSlYiLCJmaWxlIjoic29ydC1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14LWJnLWxpZ2h0Z3JheSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogN3B4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICZfX3Jlc3VsdCB7XG4gICAgY29sb3I6IHZhcigtLXgtdGV4dC1saWdodCk7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAmLS1wbGFjZWhvbGRlciB7XG4gICAgICBtaW4td2lkdGg6IDE1cHg7XG4gICAgfVxuICB9XG5cbiAgJl9faWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgfVxufVxuXG4uYmFyIHtcbiAgJl9fbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgJl9fb3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmX19vcHRpb24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teC1iZy1saWdodGdyYXkpO1xuICAgICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0teC1iZy1ncmF5KTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgIH1cblxuICAgICAgJl9faW5zaWRlIHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgJi0tc2VsZWN0ZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 65190:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/trader-info/trader-info.component.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".trader-info__section {\n  padding: 15px;\n  border-bottom: 1px solid var(--x-bg-gray);\n}\n.trader-info__section__title {\n  font-weight: 500;\n  margin-bottom: 15px;\n}\n.trader-info__section:last-child {\n  border: 0;\n}\n.trader-info__stat__value {\n  font-weight: 500;\n}\n.trader-info__stat__title {\n  font-size: 13px;\n  color: var(--x-text-darkgray);\n  margin-top: 2px;\n}\n.trader-info__style {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.trader-info__style__chip {\n  padding: 8px 13px;\n  background: var(--x-bg-lightgray);\n  margin: 5px 5px;\n  border-radius: 10px;\n  font-size: 14px;\n}\n.trader-info__alerts__alert {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background: var(--x-bg-lightgray);\n  border-radius: 15px;\n  padding: 10px 15px;\n  margin-bottom: 10px;\n}\n.trader-info__alerts__alert__details {\n  display: flex;\n  flex-direction: column;\n  margin-left: 20px;\n  flex-grow: 1;\n}\n.trader-info__alerts__alert__details__info {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.trader-info__alerts__alert__details__info__action {\n  font-weight: 500;\n}\n.trader-info__alerts__alert__details__info__date {\n  font-size: 13px;\n  color: var(--x-text-darkgray);\n}\n.trader-info__alerts__alert__details__price {\n  font-size: 14px;\n  color: var(--x-text-darkgray);\n  margin-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWRlci1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLHlDQUFBO0FBQUo7QUFFSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUdJO0VBQ0UsU0FBQTtBQUROO0FBTUk7RUFDRSxnQkFBQTtBQUpOO0FBT0k7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBTE47QUFTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVBKO0FBU0k7RUFDRSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVBOO0FBV0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBVE47QUFXTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQVRSO0FBV1E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBVFY7QUFXVTtFQUNFLGdCQUFBO0FBVFo7QUFXVTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtBQVRaO0FBYVE7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBWFYiLCJmaWxlIjoidHJhZGVyLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhZGVyLWluZm8ge1xuICAmX19zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS14LWJnLWdyYXkpO1xuXG4gICAgJl9fdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gIH1cblxuICAmX19zdGF0IHtcbiAgICAmX192YWx1ZSB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgICZfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGNvbG9yOiB2YXIoLS14LXRleHQtZGFya2dyYXkpO1xuICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIH1cbiAgfVxuXG4gICZfX3N0eWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmX19jaGlwIHtcbiAgICAgIHBhZGRpbmc6IDhweCAxM3B4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0teC1iZy1saWdodGdyYXkpO1xuICAgICAgbWFyZ2luOiA1cHggNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbiAgJl9fYWxlcnRzIHtcbiAgICAmX19hbGVydCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14LWJnLWxpZ2h0Z3JheSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgJl9fZGV0YWlscyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAgICAgJl9faW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgJl9fYWN0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgICZfX2RhdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXgtdGV4dC1kYXJrZ3JheSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJl9fcHJpY2Uge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0teC10ZXh0LWRhcmtncmF5KTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\" class=\"split-pane\" [class.split-pane-collapsed]=\"collapsed\"\n    (ionSplitPaneVisible)=\"splitPaneChanged()\">\n\n    <ion-menu contentId=\"main-content\" type=\"overlay\" class=\"side-menu\">\n      <ion-content>\n        <app-menu></app-menu>\n      </ion-content>\n    </ion-menu>\n\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n\n  </ion-split-pane>\n</ion-app>");

/***/ }),

/***/ 24468:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/alert-modal/alert-modal.component.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"close\">\n  <div class=\"close__container\">\n    <div class=\"close__container__close\" (click)=\"close()\">\n      <ion-icon name=\"close\"></ion-icon>\n    </div>\n  </div>\n</ion-header>\n<div class=\"content\">\n\n  <ion-grid>\n\n    <!-- header -->\n    <ion-row>\n\n      <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" class=\"ion-no-padding\">\n        <div class=\"trader\">\n\n          <div class=\"trader__person\">\n            <app-avatar class=\"trader__person__avatar\" [person]=\"alert.user\"></app-avatar>\n\n            <div class=\"trader__person__info\">\n              <div class=\"trader__person__info__name\">\n                {{alert.user.name}}\n              </div>\n              <div class=\"trader__person__info__login\">\n                @{{alert.user.login}}\n              </div>\n            </div>\n          </div>\n\n          <div class=\"trader__follow\" *ngIf=\"!alert.user.following\">\n            Follow\n          </div>\n          <div class=\"trader__follow trader__follow--unfollow\" *ngIf=\"alert.user.following\">\n            Unfollow\n          </div>\n        </div>\n\n      </ion-col>\n\n      <ion-col size=\"12\" size-md=\"6\" size-lg=\"8\" class=\"ion-no-padding\">\n        <div class=\"alert\">\n          <div class=\"alert__details\">\n\n            <app-company-logo [company]=\"alert.company\"></app-company-logo>\n\n            <div class=\"alert__details__info\">\n              <div class=\"alert__details__info__action\">\n                {{alert.closed ? 'Sold' : 'Bought'}} {{alert.company.code}} shares\n              </div>\n              <div class=\"alert__details__info__price\">\n                @ {{alert.currency}}{{alert.price}}\n              </div>\n            </div>\n          </div>\n\n          <div class=\"alert__date\">\n            {{getDate(alert.closed ? alert.closed : alert.opened)}}\n          </div>\n\n          <div class=\"alert__result\">\n            <div class=\"alert__result alert__result--made\" *ngIf=\"alert.closed && alert.gainLoss > 0\">\n              Made {{alert.gainLoss}}%\n            </div>\n            <div class=\"alert__result alert__result--lost\" *ngIf=\"alert.closed && alert.gainLoss < 0\">\n              Lost {{(alert.gainLoss * -1)}}%\n            </div>\n            <div class=\"alert__result alert__result--up\" *ngIf=\"!alert.closed && alert.gainLoss > 0\">\n              Up {{alert.gainLoss}}%\n            </div>\n            <div class=\"alert__result alert__result--down\" *ngIf=\"!alert.closed && alert.gainLoss < 0\">\n              Down {{(alert.gainLoss * -1)}}%\n            </div>\n            <div class=\"alert__result alert__result--zero\" *ngIf=\"alert.gainLoss === 0\">\n              {{alert.gainLoss}}%\n            </div>\n          </div>\n\n\n          <div class=\"alert__actions\">\n            <div class=\"alert__actions__action\" [class.alert__actions__action--toggled]=\"alert.liked\"\n              (click)=\"like(alert)\">\n              <ion-icon name=\"thumbs-up\"></ion-icon>\n              <div>{{alert.likesCount}}</div>\n            </div>\n            <div class=\"alert__actions__action\" [class.alert__actions__action--toggled]=\"alert.saved\"\n              (click)=\"save(alert)\">\n              <ion-icon name=\"bookmark\"></ion-icon>\n              <div>{{alert.savedCount}}</div>\n            </div>\n            <div class=\"alert__actions__action\" [class.alert__actions__action--toggled]=\"alert.commented\">\n              <ion-icon name=\"chatbox\"></ion-icon>\n              <div>{{alert.commentsCount}}</div>\n            </div>\n          </div>\n\n          <ion-button>\n            <ion-icon slot=\"start\" name=\"cash\"></ion-icon>\n            Give a tip\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- content -->\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" class=\"ion-no-padding\">\n        <app-trader-info [traderId]=\"alert.user.id\"></app-trader-info>\n      </ion-col>\n      <ion-col size=\"12\" size-md=\"6\" size-lg=\"8\" class=\"ion-no-padding\">\n        <div class=\"alert-details\">\n          <div class=\"alert-details__scroll\">\n            <div class=\"alert-details__description\">\n              <div class=\"alert-details__description__title\">\n                SPY entry at old support\n                {{alert.descriptionTitle}}\n              </div>\n              <div class=\"alert-details__description__text\" [innerHTML]=\"alert.descriptionHtml\">\n              </div>\n\n              <div class=\"alert-details__graph\">\n                <img [src]=\"'assets/' + alert.graphUrl\" />\n              </div>\n            </div>\n            <div class=\"alert-details__comments\">\n              <app-comments-list [comments]=\"alert.comments\"></app-comments-list>\n            </div>\n\n            <div class=\"alert-details__comment-mobile hidden-md-up\">\n              <app-comment></app-comment>\n            </div>\n          </div>\n\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"comment hidden-md-down\">\n    <ion-grid class=\"comment__grid-el\">\n      <ion-row class=\"comment__grid-el\">\n        <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" class=\"ion-no-padding\">\n        </ion-col>\n        <ion-col size=\"12\" size-md=\"6\" size-lg=\"8\" class=\"ion-no-padding comment__grid-el\">\n          <div class=\"comment__container\">\n            <app-comment></app-comment>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</div>");

/***/ }),

/***/ 16676:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/avatar/avatar.component.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"avatar\">\n  <img [src]=\"'assets/' + person.imageUrl\" />\n  <div class=\"avatar__alerts\">{{person.alertsCount}}</div>\n</div>");

/***/ }),

/***/ 5394:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/comment/comment.component.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"comment\">\n  <div class=\"comment__content\">\n    <img class=\"comment__content__profile\" src=\"assets/profile.png\" />\n\n    <ion-textarea class=\"comment__content__input\" rows=\"3\" placeholder=\"Write your message...\"></ion-textarea>\n\n  </div>\n  <div class=\"comment__footer\">\n    <div class=\"comment__footer__actions\">\n      <ion-icon name=\"happy-outline\"></ion-icon>\n      <ion-icon name=\"attach-outline\"></ion-icon>\n    </div>\n    <ion-button size=\"small\">Send</ion-button>\n  </div>\n</div>");

/***/ }),

/***/ 28489:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/comments-list/comments-list-item/comments-list-item.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"comment-item\">\n  <div class=\"comment-item__avatar\">\n    <app-avatar class=\"trader__person__avatar\" [person]=\"comment.user\"></app-avatar>\n  </div>\n  <div class=\"comment-item__content\">\n    <div class=\"comment-item__content__details\">\n      <div class=\"comment-item__content__details__name\">\n        {{comment.user.name}}\n      </div>\n      <div class=\"comment-item__content__details__date\">\n        {{comment.date | date:' h:mm a on dd MMM y'}}\n      </div>\n    </div>\n    <div class=\"comment-item__content__text\">\n      {{comment.text}}\n    </div>\n  </div>\n\n  <div class=\"comment-item__toolbar\">\n    <ion-icon name=\"happy-outline\"></ion-icon>\n    <ion-icon name=\"arrow-undo-outline\"></ion-icon>\n    <ion-icon name=\"flag-outline\"></ion-icon>\n    <ion-icon name=\"ellipsis-horizontal-outline\"></ion-icon>\n  </div>\n</div>");

/***/ }),

/***/ 6343:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/comments-list/comments-list.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"comments\">\n  <div class=\"comments__divider\">\n    <div class=\"comments__divider__line\"></div>\n    <div class=\"comments__divider__text\">Today</div>\n    <div class=\"comments__divider__line\"></div>\n  </div>\n  <div class=\"comments__section\">\n    <app-comments-list-item *ngFor=\"let comment of today\" [comment]=\"comment\"></app-comments-list-item>\n  </div>\n\n  <div class=\"comments__divider\">\n    <div class=\"comments__divider__line\"></div>\n    <div class=\"comments__divider__text\">Yesterday</div>\n    <div class=\"comments__divider__line\"></div>\n  </div>\n  <div class=\"comments__section\">\n    <app-comments-list-item *ngFor=\"let comment of yesterday\" [comment]=\"comment\"></app-comments-list-item>\n  </div>\n\n  <div class=\"comments__divider\">\n    <div class=\"comments__divider__line\"></div>\n    <div class=\"comments__divider__text\">Older</div>\n    <div class=\"comments__divider__line\"></div>\n  </div>\n  <div class=\"comments__section\">\n    <app-comments-list-item *ngFor=\"let comment of older\" [comment]=\"comment\"></app-comments-list-item>\n  </div>\n\n</div>");

/***/ }),

/***/ 16197:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/company-logo/company-logo.component.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"company\">\n  <img [src]=\"'assets/' + company.imageUrl\" />\n</div>");

/***/ }),

/***/ 78854:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/filter/filter.component.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"filter\">\n  <div *ngFor=\"let option of options\" class=\"filter__option\" (click)=\"filterSelected(option)\">\n    <div class=\"filter__option__inside\" [class.filter__option__inside--selected]=\"option.key === value?.key\">\n      {{option.value}}\n    </div>\n  </div>\n\n</div>");

/***/ }),

/***/ 99320:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header-options/header-options.component.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"header-menu\">\n  <div class=\"header-menu__user\">\n    Kevin Wan\n  </div>\n\n  <div class=\"header-menu__action hidden-md-up\">\n    <ion-icon name=\"person-add\"></ion-icon>\n    <div>Invite friend</div>\n  </div>\n\n  <div class=\"header-menu__action hidden-md-up\">\n    <ion-icon name=\"notifications\"></ion-icon>\n    <div>Notifications</div>\n  </div>\n\n  <div class=\"header-menu__action hidden-md-up\">\n    <ion-icon name=\"help-circle\"></ion-icon>\n    <div>Help center</div>\n  </div>\n\n  <div class=\"header-menu__action hidden-md-up\">\n    <ion-icon name=\"cog\"></ion-icon>\n    <div>Settings</div>\n  </div>\n\n  <div class=\"header-menu__action\">\n    <ion-icon name=\"close\"></ion-icon>\n    <div>Logout</div>\n  </div>\n</div>");

/***/ }),

/***/ 82517:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border [translucent]=\"true\" class=\"header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"header__mobile-menu\">\n        <img src=\"assets/logo-mini.png\" />\n      </ion-menu-button>\n    </ion-buttons>\n    <div class=\"header__container\">\n\n      <div class=\"header__title hidden-sm-down\">{{title}}</div>\n\n      <ion-searchbar class=\"header__search\" padding-end=\"0\" placeholder=\"Search for ticker, user or other information\">\n      </ion-searchbar>\n\n      <div class=\"header__actions\">\n        <ion-button class=\"hidden-md-down\">\n          <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n          Invite a friend\n        </ion-button>\n        <ion-icon name=\"notifications\" class=\"header__actions__icon hidden-md-down\"></ion-icon>\n        <ion-icon name=\"help-circle\" class=\"header__actions__icon hidden-md-down\"></ion-icon>\n        <ion-icon name=\"cog\" class=\"header__actions__icon hidden-md-down\"></ion-icon>\n        <img src=\"assets/profile.png\" class=\"header__actions__avatar\" (click)=\"openOptions($event)\" />\n      </div>\n\n    </div>\n  </ion-toolbar>\n</ion-header>");

/***/ }),

/***/ 48159:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu/menu.component.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"menu\">\n  <img *ngIf=\"!collapsed\" src=\"assets/logo.png\" class=\"menu__logo\" />\n  <img *ngIf=\"collapsed\" src=\"assets/logo-mini-white.png\" class=\"menu__logo-mini\" />\n\n  <div class=\"menu__list\">\n    <div *ngFor=\"let p of appPages; let i = index\" class=\"menu__list__item\" routerDirection=\"root\"\n      [routerLink]=\"[p.url]\" routerLinkActive=\"menu__list__item--selected\">\n\n      <div class=\"menu__list__item__page\">\n        <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\n        <div *ngIf=\"!collapsed\">{{ p.title }}</div>\n      </div>\n\n      <div *ngIf=\"p.notifications\" class=\"menu__list__item__notifications\"\n        [class.menu__list__item__notifications--collapsed]=\"collapsed\">\n        {{p.notifications}}\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"collapse hidden-md-down\" (click)=\"toggle()\">\n    <ion-icon name=\"exit-outline\" class=\"collapse__icon\" [class.collapse__icon--collapse]=\"!collapsed\"></ion-icon>\n    <!-- <div *ngIf=\"!collapsed\">Collapse</div> -->\n  </div>\n\n  <div></div>\n</div>");

/***/ }),

/***/ 99793:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sort-filter/sort-filter-list/sort-filter-list.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"options\">\n  <div *ngFor=\"let option of options\" class=\"options__item\" (click)=\"select(option)\">\n    <div>{{option.value}}</div>\n    <ion-icon *ngIf=\"option.key === selected?.key\" name=\"checkmark-outline\"></ion-icon>\n  </div>\n</div>");

/***/ }),

/***/ 76441:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sort-filter/sort-filter.component.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"dropdown\" (click)=\"openOptions($event)\" *ngIf=\"display === 'dropdown'\">\n  <div *ngIf=\"!label\">Sort by:</div>\n  <div *ngIf=\"label\">{{label}}</div>\n  <div *ngIf=\"value\" class=\"dropdown__result\">{{value.value}}</div>\n  <div *ngIf=\"!value\" class=\"dropdown__result dropdown__result--placeholder\">{{placeholder}}</div>\n  <ion-icon name=\"chevron-down-outline\" class=\"dropdown__icon\"></ion-icon>\n</div>\n\n<div class=\"bar\" *ngIf=\"display === 'bar'\">\n  <div *ngIf=\"label\" class=\"bar__label\">{{label}}</div>\n  <div class=\"bar__options\">\n    <div *ngFor=\"let option of options\" class=\"bar__options__option\" (click)=\"optionSelected(option)\">\n      <div class=\"bar__options__option__inside\"\n        [class.bar__options__option__inside--selected]=\"option.key === value?.key\">\n        {{option.value}}\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 65136:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/trader-info/trader-info.component.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"trader-info\">\n\n  <div class=\"trader-info__section\">\n    <div class=\"trader-info__section__title\">\n      Trader's stats\n    </div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" size-lg=\"3\" class=\"ion-no-padding\">\n          <div class=\"trader-info__stat__value\">{{trader?.stats?.rank}}</div>\n          <div class=\"trader-info__stat__title\">Rank</div>\n        </ion-col>\n\n        <ion-col size=\"6\" size-lg=\"3\" class=\"ion-no-padding\">\n          <div class=\"trader-info__stat__value\">{{trader?.stats?.winRatePercent}}%</div>\n          <div class=\"trader-info__stat__title\">Win rate</div>\n        </ion-col>\n\n        <ion-col size=\"6\" size-lg=\"3\" class=\"ion-no-padding\">\n          <div class=\"trader-info__stat__value\">{{trader?.stats?.avgGainPercent}}%</div>\n          <div class=\"trader-info__stat__title\">Avg. gain</div>\n        </ion-col>\n\n        <ion-col size=\"6\" size-lg=\"3\" class=\"ion-no-padding\">\n          <div class=\"trader-info__stat__value\">{{trader?.stats?.avgTradeTime}}m</div>\n          <div class=\"trader-info__stat__title\">Avg. trade time</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class=\"trader-info__section\">\n    <div class=\"trader-info__section__title\">\n      Trader's style\n    </div>\n\n    <div class=\"trader-info__style\">\n      <div class=\"trader-info__style__chip\" *ngFor=\"let item of trader?.style\">\n        {{item}}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"trader-info__section\">\n    <div class=\"trader-info__section__title\">\n      Trader's other alerts\n    </div>\n\n    <div class=\"trader-info__alerts\">\n      <div class=\"trader-info__alerts__alert\" *ngFor=\"let alert of trader?.alerts\">\n\n        <app-company-logo [company]=\"alert.company\"></app-company-logo>\n\n        <div class=\"trader-info__alerts__alert__details\">\n\n          <div class=\"trader-info__alerts__alert__details__info\">\n            <div class=\"trader-info__alerts__alert__details__info__action\">\n              {{alert.closed ? 'Sold' : 'Bought'}} {{alert.company.code}} shares\n            </div>\n            <div class=\"trader-info__alerts__alert__details__info__date\">\n              Yesterday, {{ (alert.closed ? alert.closed : alert.opened) | date:' h:mm a'}}\n            </div>\n          </div>\n\n          <div class=\"trader-info__alerts__alert__details__price\">\n            @ {{alert.currency}}{{alert.price}}\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map