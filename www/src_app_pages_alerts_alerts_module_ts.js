(self["webpackChunktrade"] = self["webpackChunktrade"] || []).push([["src_app_pages_alerts_alerts_module_ts"],{

/***/ 55628:
/*!*******************************************************!*\
  !*** ./src/app/core/state/trending/trending.query.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendingQuery": () => (/* binding */ TrendingQuery)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ 71477);
/* harmony import */ var _trending_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trending.store */ 89226);




let TrendingQuery = class TrendingQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_1__.QueryEntity {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
TrendingQuery.ctorParameters = () => [
    { type: _trending_store__WEBPACK_IMPORTED_MODULE_0__.TrendingStore }
];
TrendingQuery = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], TrendingQuery);



/***/ }),

/***/ 48977:
/*!*********************************************************!*\
  !*** ./src/app/core/state/trending/trending.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendingService": () => (/* binding */ TrendingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var _trending_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trending.query */ 55628);
/* harmony import */ var _trending_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trending.store */ 89226);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);







let TrendingService = class TrendingService {
    constructor(trendinStore, trendingQuery) {
        this.trendinStore = trendinStore;
        this.trendingQuery = trendingQuery;
        this.data = [
            {
                id: 1,
                company: {
                    id: 1,
                    code: 'AAPL',
                    name: 'Apple Inc',
                    imageUrl: 'apple.png'
                },
                alertsCount: 15,
                bullishPercent: 64,
                bearishPercent: 36,
                date: new Date()
            },
            {
                id: 2,
                company: {
                    id: 2,
                    code: 'TSLA',
                    name: 'Tesla Inc',
                    imageUrl: 'tesla.png'
                },
                alertsCount: 12,
                bullishPercent: 55,
                bearishPercent: 45,
                date: new Date()
            },
            {
                id: 3,
                company: {
                    id: 3,
                    code: 'SPY',
                    name: 'S&P 500 Index',
                    imageUrl: 'spy.png'
                },
                alertsCount: 7,
                bullishPercent: 36,
                bearishPercent: 64,
                date: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'days').toDate()
            },
            {
                id: 4,
                company: {
                    id: 4,
                    code: 'AMZN',
                    name: 'Amazon.com',
                    imageUrl: 'amazon.png'
                },
                alertsCount: 17,
                bullishPercent: 55,
                bearishPercent: 45,
                date: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'days').toDate()
            },
            {
                id: 5,
                company: {
                    id: 1,
                    code: 'AAPL',
                    name: 'Apple Inc',
                    imageUrl: 'apple.png'
                },
                alertsCount: 15,
                bullishPercent: 55,
                bearishPercent: 45,
                date: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(8, 'days').toDate()
            },
            {
                id: 6,
                company: {
                    id: 4,
                    code: 'AMZN',
                    name: 'Amazon.com',
                    imageUrl: 'amazon.png'
                },
                alertsCount: 17,
                bullishPercent: 55,
                bearishPercent: 45,
                date: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(8, 'days').toDate()
            },
            {
                id: 7,
                company: {
                    id: 1,
                    code: 'AAPL',
                    name: 'Apple Inc',
                    imageUrl: 'apple.png'
                },
                alertsCount: 15,
                bullishPercent: 55,
                bearishPercent: 45,
                date: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(15, 'days').toDate()
            },
        ];
    }
    getTrending() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(data => this.trendinStore.set(data))).subscribe();
    }
};
TrendingService.ctorParameters = () => [
    { type: _trending_store__WEBPACK_IMPORTED_MODULE_1__.TrendingStore },
    { type: _trending_query__WEBPACK_IMPORTED_MODULE_0__.TrendingQuery }
];
TrendingService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], TrendingService);



/***/ }),

/***/ 89226:
/*!*******************************************************!*\
  !*** ./src/app/core/state/trending/trending.store.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendingStore": () => (/* binding */ TrendingStore)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 71477);



const initialState = {};
let TrendingStore = class TrendingStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.EntityStore {
    constructor() {
        super(initialState);
    }
};
TrendingStore.ctorParameters = () => [];
TrendingStore = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' }),
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: 'trending' })
], TrendingStore);



/***/ }),

/***/ 92572:
/*!*******************************************************!*\
  !*** ./src/app/pages/alerts/alerts-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsPageRoutingModule": () => (/* binding */ AlertsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _alerts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alerts.page */ 8565);




const routes = [
    {
        path: '',
        component: _alerts_page__WEBPACK_IMPORTED_MODULE_0__.AlertsPage
    }
];
let AlertsPageRoutingModule = class AlertsPageRoutingModule {
};
AlertsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AlertsPageRoutingModule);



/***/ }),

/***/ 88659:
/*!***********************************************!*\
  !*** ./src/app/pages/alerts/alerts.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsPageModule": () => (/* binding */ AlertsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _alerts_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerts-routing.module */ 92572);
/* harmony import */ var _alerts_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alerts.page */ 8565);
/* harmony import */ var _recent_alerts_alerts_table_alerts_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recent-alerts/alerts-table/alerts-table.component */ 68204);
/* harmony import */ var _recent_alerts_recent_alerts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recent-alerts/recent-alerts.component */ 84876);
/* harmony import */ var _trending_tickers_trending_tickers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trending-tickers/trending-tickers.component */ 12068);
/* harmony import */ var _trending_tickers_trending_tile_trending_tile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trending-tickers/trending-tile/trending-tile.component */ 4271);









let AlertsPageModule = class AlertsPageModule {
};
AlertsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _alerts_routing_module__WEBPACK_IMPORTED_MODULE_1__.AlertsPageRoutingModule
        ],
        declarations: [
            _trending_tickers_trending_tickers_component__WEBPACK_IMPORTED_MODULE_5__.TrendingTickersComponent,
            _trending_tickers_trending_tile_trending_tile_component__WEBPACK_IMPORTED_MODULE_6__.TrendingTileComponent,
            _recent_alerts_recent_alerts_component__WEBPACK_IMPORTED_MODULE_4__.RecentAlertsComponent,
            _alerts_page__WEBPACK_IMPORTED_MODULE_2__.AlertsPage,
            _recent_alerts_alerts_table_alerts_table_component__WEBPACK_IMPORTED_MODULE_3__.AlertsTableComponent,
        ],
        entryComponents: []
    })
], AlertsPageModule);



/***/ }),

/***/ 8565:
/*!*********************************************!*\
  !*** ./src/app/pages/alerts/alerts.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsPage": () => (/* binding */ AlertsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_alerts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./alerts.page.html */ 1853);
/* harmony import */ var _alerts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerts.page.scss */ 11112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let AlertsPage = class AlertsPage {
    constructor() { }
    ngOnInit() {
    }
};
AlertsPage.ctorParameters = () => [];
AlertsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-alerts',
        template: _raw_loader_alerts_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_alerts_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AlertsPage);



/***/ }),

/***/ 68204:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/alerts/recent-alerts/alerts-table/alerts-table.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsTableComponent": () => (/* binding */ AlertsTableComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_alerts_table_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./alerts-table.component.html */ 82426);
/* harmony import */ var _alerts_table_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerts-table.component.scss */ 94670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_core_state_alerts_alerts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/state/alerts/alerts.service */ 40699);
/* harmony import */ var src_app_shared_components_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/alert-modal/alert-modal.component */ 83544);








let AlertsTableComponent = class AlertsTableComponent {
    constructor(alertsService, modalCtrl) {
        this.alertsService = alertsService;
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    getDate(date) {
        const momentDate = moment__WEBPACK_IMPORTED_MODULE_2__(date);
        if (momentDate.isAfter(moment__WEBPACK_IMPORTED_MODULE_2__().subtract(moment__WEBPACK_IMPORTED_MODULE_2__().hour(), 'hours'))) {
            return momentDate.format('h:mm A');
        }
        else if (momentDate.isAfter(moment__WEBPACK_IMPORTED_MODULE_2__().subtract(2, 'days'))) {
            return 'yesterday';
        }
        else if (momentDate.isAfter(moment__WEBPACK_IMPORTED_MODULE_2__().subtract(3, 'days'))) {
            return '2 days ago';
        }
        else {
            return momentDate.format('DD/MM');
        }
    }
    like(event, alert) {
        event.preventDefault();
        this.alertsService.like(alert);
    }
    save(event, alert) {
        event.preventDefault();
        this.alertsService.save(alert);
    }
    openAlert(alert) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const data = {
                alert
            };
            const previewModal = yield this.modalCtrl.create({
                component: src_app_shared_components_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_4__.AlertModalComponent,
                cssClass: 'modal-very-big',
                componentProps: data,
                backdropDismiss: true,
            });
            yield previewModal.present();
        });
    }
};
AlertsTableComponent.ctorParameters = () => [
    { type: src_app_core_state_alerts_alerts_service__WEBPACK_IMPORTED_MODULE_3__.AlertsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
AlertsTableComponent.propDecorators = {
    alerts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
AlertsTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-alerts-table',
        template: _raw_loader_alerts_table_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_alerts_table_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AlertsTableComponent);



/***/ }),

/***/ 84876:
/*!***********************************************************************!*\
  !*** ./src/app/pages/alerts/recent-alerts/recent-alerts.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecentAlertsComponent": () => (/* binding */ RecentAlertsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_recent_alerts_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recent-alerts.component.html */ 7010);
/* harmony import */ var _recent_alerts_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recent-alerts.component.scss */ 90865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var src_app_core_state_alerts_alerts_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/state/alerts/alerts.query */ 50412);
/* harmony import */ var src_app_core_state_alerts_alerts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/state/alerts/alerts.service */ 40699);








let RecentAlertsComponent = class RecentAlertsComponent {
    constructor(alertsService, alertsQuery) {
        this.alertsService = alertsService;
        this.alertsQuery = alertsQuery;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this.sortOptions = [
            {
                key: 'opened',
                value: 'Opened'
            },
            {
                key: 'closed',
                value: 'Closed'
            },
            {
                key: 'price',
                value: 'Price'
            },
            {
                key: 'gain',
                value: 'Gain'
            },
        ];
        this.filterOptions = [
            {
                key: 'all',
                value: 'All'
            },
            {
                key: 'top',
                value: 'Top Alerts'
            },
            {
                key: 'following',
                value: 'Following'
            },
        ];
    }
    ngOnInit() {
        this.selectedFilterOption = this.filterOptions.find(x => x.key === 'all');
        this.subscription.add(this.alertsQuery.selectAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(x => !!x && x.length > 0)).subscribe(alerts => {
            this.alertsList = alerts;
            this.filterChanged();
        }));
        this.alertsService.getAlerts();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    filterChanged() {
        switch (this.selectedFilterOption.key) {
            case 'top':
                this.sortedFilteredAlertsList = this.alertsList.filter(x => x.top);
                break;
            case 'following':
                this.sortedFilteredAlertsList = this.alertsList.filter(x => x.user.following);
                break;
            case 'all':
            default:
                this.sortedFilteredAlertsList = this.alertsList;
                break;
        }
        this.sortChanged();
    }
    sortChanged() {
        var _a;
        switch ((_a = this.selectedSortOption) === null || _a === void 0 ? void 0 : _a.key) {
            case 'opened':
                this.sortedFilteredAlertsList = this.sortedFilteredAlertsList.sort((a, b) => a.opened < b.opened ? 1 : -1);
                break;
            case 'closed':
                this.sortedFilteredAlertsList = this.sortedFilteredAlertsList.sort((a, b) => a.closed < b.closed ? 1 : -1);
                break;
            case 'price':
                this.sortedFilteredAlertsList = this.sortedFilteredAlertsList.sort((a, b) => a.price < b.price ? 1 : -1);
                break;
            case 'gain':
                this.sortedFilteredAlertsList = this.sortedFilteredAlertsList.sort((a, b) => a.gainLoss < b.gainLoss ? 1 : -1);
                break;
            default:
                this.sortedFilteredAlertsList = this.sortedFilteredAlertsList;
                break;
        }
    }
};
RecentAlertsComponent.ctorParameters = () => [
    { type: src_app_core_state_alerts_alerts_service__WEBPACK_IMPORTED_MODULE_3__.AlertsService },
    { type: src_app_core_state_alerts_alerts_query__WEBPACK_IMPORTED_MODULE_2__.AlertsQuery }
];
RecentAlertsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-recent-alerts',
        template: _raw_loader_recent_alerts_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recent_alerts_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecentAlertsComponent);



/***/ }),

/***/ 12068:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/alerts/trending-tickers/trending-tickers.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendingTickersComponent": () => (/* binding */ TrendingTickersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_trending_tickers_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./trending-tickers.component.html */ 87635);
/* harmony import */ var _trending_tickers_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trending-tickers.component.scss */ 78565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var src_app_core_state_trending_trending_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/state/trending/trending.query */ 55628);
/* harmony import */ var src_app_core_state_trending_trending_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/state/trending/trending.service */ 48977);









let TrendingTickersComponent = class TrendingTickersComponent {
    constructor(trendingQuery, trendingService) {
        this.trendingQuery = trendingQuery;
        this.trendingService = trendingService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.sortOptions = [
            {
                key: 'today',
                value: 'Today'
            },
            {
                key: 'week',
                value: 'This week'
            },
            {
                key: 'month',
                value: 'This month'
            },
        ];
    }
    ngOnInit() {
        this.selectedSortOption = this.sortOptions.find(x => x.key === 'month');
        this.subscription.add(this.trendingQuery.selectAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(x => !!x)).subscribe(trending => {
            this.trendingList = trending;
            this.sortChanged();
        }));
        this.trendingService.getTrending();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    sortChanged() {
        let daysToSubstract;
        switch (this.selectedSortOption.key) {
            case 'today':
                daysToSubstract = 1;
                break;
            case 'week':
                daysToSubstract = 7;
                break;
            case 'month':
                daysToSubstract = 30;
                break;
        }
        this.filteredTrendingList = this.trendingList.filter(x => moment__WEBPACK_IMPORTED_MODULE_2__(x.date).isAfter(moment__WEBPACK_IMPORTED_MODULE_2__().subtract(daysToSubstract, 'days')));
    }
};
TrendingTickersComponent.ctorParameters = () => [
    { type: src_app_core_state_trending_trending_query__WEBPACK_IMPORTED_MODULE_3__.TrendingQuery },
    { type: src_app_core_state_trending_trending_service__WEBPACK_IMPORTED_MODULE_4__.TrendingService }
];
TrendingTickersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-trending-tickers',
        template: _raw_loader_trending_tickers_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_trending_tickers_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TrendingTickersComponent);



/***/ }),

/***/ 4271:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/alerts/trending-tickers/trending-tile/trending-tile.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendingTileComponent": () => (/* binding */ TrendingTileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_trending_tile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./trending-tile.component.html */ 99475);
/* harmony import */ var _trending_tile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trending-tile.component.scss */ 94793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let TrendingTileComponent = class TrendingTileComponent {
    constructor() { }
    ngOnInit() {
        if (this.trending.bullishPercent >= 50) {
            this.chartUrl = 'bullish.png';
            this.percent = this.trending.bullishPercent;
            this.label = 'bullish';
        }
        else {
            this.chartUrl = 'bearish.png';
            this.percent = this.trending.bearishPercent;
            this.label = 'bearish';
        }
    }
};
TrendingTileComponent.ctorParameters = () => [];
TrendingTileComponent.propDecorators = {
    trending: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
TrendingTileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-trending-tile',
        template: _raw_loader_trending_tile_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_trending_tile_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TrendingTileComponent);



/***/ }),

/***/ 11112:
/*!***********************************************!*\
  !*** ./src/app/pages/alerts/alerts.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".alerts__recent {\n  margin-top: 30px;\n  padding-bottom: 300px;\n}\n\n.content {\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBREYiLCJmaWxlIjoiYWxlcnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydHMge1xuICAmX19yZWNlbnQge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwMHB4O1xuICB9XG59XG5cbi5jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ 94670:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/alerts/recent-alerts/alerts-table/alerts-table.component.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".table {\n  background-color: var(--x-bg-lightgray);\n  border-radius: 20px;\n  padding: 15px;\n}\n@media (max-width: 991px) {\n  .table {\n    padding: 0px;\n  }\n}\n.table__row {\n  background-color: white;\n  border-radius: 15px;\n  margin: 10px 0;\n  padding: 5px;\n  cursor: pointer;\n}\n@media (max-width: 991px) {\n  .table__row {\n    padding: 10px;\n  }\n}\n.table__row--closed {\n  background-color: var(--x-bg-gray);\n}\n.table__person {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 100%;\n}\n.table__person__info {\n  flex-grow: 1;\n  flex-shrink: 1;\n  display: flex;\n  flex-direction: column;\n  margin-left: 15px;\n}\n.table__person__info__name {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.table__person__info__login {\n  font-size: 13px;\n  color: var(--x-text-light);\n}\n.table__action {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 100%;\n}\n.table__action__info {\n  flex-grow: 1;\n  flex-shrink: 1;\n  display: flex;\n  flex-direction: column;\n  margin-left: 15px;\n}\n.table__action__info__action {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.table__action__info__price {\n  font-size: 13px;\n  color: var(--x-text-light);\n}\n.table__date {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 100%;\n}\n.table__date__container {\n  flex-grow: 1;\n  flex-shrink: 1;\n  display: flex;\n  flex-direction: column;\n}\n.table__date__closed {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.table__date__opened {\n  font-size: 13px;\n  color: var(--x-text-light);\n}\n.table__type {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 100%;\n}\n.table__type__text {\n  flex-grow: 1;\n  flex-shrink: 1;\n  color: var(--x-text-light);\n  font-size: 15px;\n}\n.table__result {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 100%;\n  font-size: 15px;\n}\n.table__result__container {\n  border-radius: 5px;\n  padding: 5px 10px;\n}\n.table__result__container--made {\n  color: white;\n  background-color: var(--x-success);\n}\n.table__result__container--lost {\n  color: white;\n  background-color: var(--x-fail);\n}\n.table__result__container--up {\n  color: var(--x-success);\n  background-color: var(--x-success-light);\n}\n.table__result__container--down {\n  color: var(--x-fail);\n  background-color: var(--x-fail-light);\n}\n.table__actions {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  height: 100%;\n  color: var(--x-text-darkgray);\n}\n.table__actions__action {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 7px 13px 7px 0;\n  cursor: pointer;\n  height: 100%;\n}\n.table__actions__action--toggled {\n  color: var(--x-action);\n}\n.table__actions__action ion-icon {\n  font-size: 20px;\n  margin-right: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0cy10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDRTtFQUxGO0lBTUksWUFBQTtFQUVGO0FBQ0Y7QUFDRTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDSjtBQUNJO0VBUEY7SUFRSSxhQUFBO0VBRUo7QUFDRjtBQUFJO0VBQ0Usa0NBQUE7QUFFTjtBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBREo7QUFHSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFETjtBQUdNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQUlNO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FBRlI7QUFRRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQU5KO0FBUUk7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBTk47QUFRTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTlI7QUFRTTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQU5SO0FBWUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFWSjtBQVlJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFWTjtBQVlJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFWTjtBQVlJO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FBVk47QUFlRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWJKO0FBZUk7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQWJOO0FBa0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWhCSjtBQWtCSTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFoQk47QUFrQk07RUFDRSxZQUFBO0VBQ0Esa0NBQUE7QUFoQlI7QUFrQk07RUFDRSxZQUFBO0VBQ0EsK0JBQUE7QUFoQlI7QUFrQk07RUFDRSx1QkFBQTtFQUNBLHdDQUFBO0FBaEJSO0FBa0JNO0VBQ0Usb0JBQUE7RUFDQSxxQ0FBQTtBQWhCUjtBQXNCRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBcEJKO0FBc0JJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBcEJOO0FBc0JNO0VBQ0Usc0JBQUE7QUFwQlI7QUF1Qk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFyQlIiLCJmaWxlIjoiYWxlcnRzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teC1iZy1saWdodGdyYXkpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIC8vIFJPV1xuICAmX19yb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICAmLS1jbG9zZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teC1iZy1ncmF5KTtcbiAgICB9XG4gIH1cblxuICAvLyBQRVJTT05cbiAgJl9fcGVyc29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAmX19pbmZvIHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcblxuICAgICAgJl9fbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgfVxuXG4gICAgICAmX19sb2dpbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXgtdGV4dC1saWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQUNUSU9OXG4gICZfX2FjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgJl9faW5mbyB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBmbGV4LXNocmluazogMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG5cbiAgICAgICZfX2FjdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgfVxuICAgICAgJl9fcHJpY2Uge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS14LXRleHQtbGlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERBVEVcbiAgJl9fZGF0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgJl9fY29udGFpbmVyIHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgICZfX2Nsb3NlZCB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgICAmX19vcGVuZWQge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgY29sb3I6IHZhcigtLXgtdGV4dC1saWdodCk7XG4gICAgfVxuICB9XG5cbiAgLy8gVFlQRVxuICAmX190eXBlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAmX190ZXh0IHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgICAgY29sb3I6IHZhcigtLXgtdGV4dC1saWdodCk7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICB9XG5cbiAgLy8gUkVTVUxUXG4gICZfX3Jlc3VsdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcblxuICAgICZfX2NvbnRhaW5lciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweDtcblxuICAgICAgJi0tbWFkZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teC1zdWNjZXNzKTtcbiAgICAgIH1cbiAgICAgICYtLWxvc3Qge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXgtZmFpbCk7XG4gICAgICB9XG4gICAgICAmLS11cCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS14LXN1Y2Nlc3MpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14LXN1Y2Nlc3MtbGlnaHQpO1xuICAgICAgfVxuICAgICAgJi0tZG93biB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS14LWZhaWwpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14LWZhaWwtbGlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEFDVElPTlNcbiAgJl9fYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6IHZhcigtLXgtdGV4dC1kYXJrZ3JheSk7XG5cbiAgICAmX19hY3Rpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogN3B4IDEzcHggN3B4IDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICYtLXRvZ2dsZWQge1xuICAgICAgICBjb2xvcjogdmFyKC0teC1hY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 90865:
/*!*************************************************************************!*\
  !*** ./src/app/pages/alerts/recent-alerts/recent-alerts.component.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".alerts__title {\n  font-size: 20px;\n  font-weight: 500;\n}\n.alerts__toolbar {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 10px;\n  flex-wrap: wrap-reverse;\n}\n.alerts__toolbar__item {\n  margin: 5px 0;\n}\n.alerts__table {\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VudC1hbGVydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUdJO0VBQ0UsYUFBQTtBQUROO0FBS0U7RUFDRSxnQkFBQTtBQUhKIiwiZmlsZSI6InJlY2VudC1hbGVydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRzIHtcbiAgJl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgJl9fdG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XG5cbiAgICAmX19pdGVtIHtcbiAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgfVxuICB9XG5cbiAgJl9fdGFibGUge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 78565:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/alerts/trending-tickers/trending-tickers.component.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".trending__header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.trending__header__filter {\n  flex-shrink: 0;\n}\n.trending__header__title {\n  font-size: 20px;\n  font-weight: 500;\n}\n.trending__content {\n  background-color: var(--x-bg-lightgray);\n  border-radius: 20px;\n  padding-top: 20px;\n  margin-top: 15px;\n}\n.trending__content__scrollable {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  overflow: auto;\n  padding-bottom: 10px;\n}\n.trending__content__item {\n  flex-shrink: 0;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZW5kaW5nLXRpY2tlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUo7QUFFSTtFQUNFLGNBQUE7QUFBTjtBQUdJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRE47QUFLRTtFQUNFLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSEo7QUFLSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFITjtBQU1JO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFKTiIsImZpbGUiOiJ0cmVuZGluZy10aWNrZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyZW5kaW5nIHtcbiAgJl9faGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAmX19maWx0ZXIge1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cblxuICAmX19jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS14LWJnLWxpZ2h0Z3JheSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuXG4gICAgJl9fc2Nyb2xsYWJsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAmX19pdGVtIHtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 94793:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/alerts/trending-tickers/trending-tile/trending-tile.component.scss ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".tile {\n  border-radius: 20px;\n  padding: 20px;\n  background-color: white;\n  height: 185px;\n  width: 300px;\n  box-shadow: 4px 6px 13px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n}\n.tile__header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.tile__header__data {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.tile__header__data__info {\n  display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n}\n.tile__header__data__info__code {\n  margin-bottom: 5px;\n  font-weight: 500;\n}\n.tile__header__data__info__name {\n  color: var(--x-text-light);\n  font-size: 14px;\n}\n.tile__header__icon {\n  color: var(--x-text-darkgray);\n  font-size: 25px;\n}\n.tile__chart {\n  flex-grow: 1;\n  flex-shrink: 1;\n  margin-top: 10px;\n}\n.tile__footer {\n  flex-grow: 0;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n.tile__footer__alerts {\n  font-weight: 500;\n}\n.tile__footer__trend {\n  font-size: 15px;\n  color: var(--x-text-light);\n}\n.tile__footer__trend__bullish {\n  color: var(--x-success);\n  font-weight: 500;\n}\n.tile__footer__trend__bearish {\n  color: var(--x-fail);\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZW5kaW5nLXRpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNOO0FBQ007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUNSO0FBQ1E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQ1Y7QUFFUTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtBQUFWO0FBS0k7RUFDRSw2QkFBQTtFQUNBLGVBQUE7QUFITjtBQU9FO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUxKO0FBUUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQU5KO0FBUUk7RUFDRSxnQkFBQTtBQU5OO0FBU0k7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUFQTjtBQVNNO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQVBSO0FBU007RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FBUFIiLCJmaWxlIjoidHJlbmRpbmctdGlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aWxlIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTg1cHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm94LXNoYWRvdzogNHB4IDZweCAxM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAmX19oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgJl9fZGF0YSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICZfX2luZm8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcblxuICAgICAgICAmX19jb2RlIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX25hbWUge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS14LXRleHQtbGlnaHQpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICZfX2ljb24ge1xuICAgICAgY29sb3I6IHZhcigtLXgtdGV4dC1kYXJrZ3JheSk7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxuICB9XG5cbiAgJl9fY2hhcnQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgJl9fZm9vdGVyIHtcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAmX19hbGVydHMge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAmX190cmVuZCB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjb2xvcjogdmFyKC0teC10ZXh0LWxpZ2h0KTtcblxuICAgICAgJl9fYnVsbGlzaCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS14LXN1Y2Nlc3MpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgICAgJl9fYmVhcmlzaCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS14LWZhaWwpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 1853:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alerts/alerts.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [title]=\"'Alerts'\"></app-header>\n\n<ion-content class=\"content\">\n\n  <div>\n    <app-trending-tickers></app-trending-tickers>\n  </div>\n\n  <div class=\"alerts__recent\">\n    <app-recent-alerts></app-recent-alerts>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ 82426:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alerts/recent-alerts/alerts-table/alerts-table.component.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table\">\n\n  <ion-grid>\n    <ion-row *ngFor=\"let alert of alerts\" class=\"table__row\" [class.table__row--closed]=\"alert.closed\"\n      (click)=\"openAlert(alert)\">\n\n      <!-- AVATAR, NAME -->\n      <ion-col size=\"12\" size-md=\"12\" size-lg=\"2\">\n        <div class=\"table__person\">\n\n          <app-avatar [person]=\"alert.user\"></app-avatar>\n\n          <div class=\"table__person__info\">\n            <div class=\"table__person__info__name\">\n              {{alert.user.name}}\n            </div>\n            <div class=\"table__person__info__login\">\n              @{{alert.user.login}}\n            </div>\n          </div>\n        </div>\n      </ion-col>\n\n      <!-- COMPANY, ACTION -->\n      <ion-col size=\"12\" size-md=\"12\" size-lg=\"3\">\n        <div class=\"table__action\">\n\n          <app-company-logo [company]=\"alert.company\"></app-company-logo>\n\n          <div class=\"table__action__info\">\n            <div class=\"table__action__info__action\">\n              {{alert.closed ? 'Sold' : 'Bought'}} {{alert.company.code}} shares\n            </div>\n            <div class=\"table__action__info__price\">\n              @ {{alert.currency}}{{alert.price}}\n            </div>\n          </div>\n        </div>\n      </ion-col>\n\n      <!-- DATE -->\n      <ion-col size=\"6\" size-md=\"3\" size-lg=\"2\">\n        <div class=\"table__date\">\n          <div class=\"table__date__container\">\n            <div class=\"table__date__closed\" *ngIf=\"alert.closed\">\n              Closed {{getDate(alert.closed)}}\n            </div>\n            <div class=\"table__date__opened\">\n              Opened {{getDate(alert.opened)}}\n            </div>\n          </div>\n        </div>\n      </ion-col>\n\n      <!-- TYPE -->\n      <ion-col size=\"6\" size-md=\"3\" size-lg=\"1\">\n        <div class=\"table__type\">\n          <div class=\"table__type__text\">\n            {{alert.type}}\n          </div>\n        </div>\n      </ion-col>\n\n      <!-- RESULT -->\n      <ion-col size=\"6\" size-md=\"3\" size-lg=\"2\">\n        <div class=\"table__result\">\n          <div>\n            <div class=\"table__result__container table__result__container--made\"\n              *ngIf=\"alert.closed && alert.gainLoss > 0\">\n              Made {{alert.gainLoss}}%\n            </div>\n            <div class=\"table__result__container table__result__container--lost\"\n              *ngIf=\"alert.closed && alert.gainLoss < 0\">\n              Lost {{(alert.gainLoss * -1)}}%\n            </div>\n            <div class=\"table__result__container table__result__container--up\"\n              *ngIf=\"!alert.closed && alert.gainLoss > 0\">\n              Up {{alert.gainLoss}}%\n            </div>\n            <div class=\"table__result__container table__result__container--down\"\n              *ngIf=\"!alert.closed && alert.gainLoss < 0\">\n              Down {{(alert.gainLoss * -1)}}%\n            </div>\n            <div class=\"table__result__container table__result__container--zero\" *ngIf=\"alert.gainLoss === 0\">\n              {{alert.gainLoss}}%\n            </div>\n          </div>\n        </div>\n      </ion-col>\n\n      <!-- ACTIONS -->\n      <ion-col size=\"6\" size-md=\"3\" size-lg=\"2\">\n        <div class=\"table__actions\">\n          <div class=\"table__actions__action\" [class.table__actions__action--toggled]=\"alert.commented\">\n            <ion-icon name=\"chatbox\"></ion-icon>\n            <div>{{alert.commentsCount}}</div>\n          </div>\n          <div class=\"table__actions__action\" [class.table__actions__action--toggled]=\"alert.saved\"\n            (click)=\"save($event, alert)\">\n            <ion-icon name=\"bookmark\"></ion-icon>\n            <div>{{alert.savedCount}}</div>\n          </div>\n          <div class=\"table__actions__action\" [class.table__actions__action--toggled]=\"alert.liked\"\n            (click)=\"like($event, alert)\">\n            <ion-icon name=\"thumbs-up\"></ion-icon>\n            <div>{{alert.likesCount}}</div>\n          </div>\n        </div>\n      </ion-col>\n\n\n    </ion-row>\n  </ion-grid>\n\n</div>");

/***/ }),

/***/ 7010:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alerts/recent-alerts/recent-alerts.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"alerts\">\n  <div class=\"alerts__title\">Recent alerts</div>\n  <div class=\"alerts__toolbar\">\n\n    <app-sort-filter class=\"alerts__toolbar__item\" [display]=\"'bar'\" [options]=\"filterOptions\"\n      [(value)]=\"selectedFilterOption\" (valueChange)=\"filterChanged()\">\n    </app-sort-filter>\n\n    <app-sort-filter class=\"alerts__toolbar__item\" [options]=\"sortOptions\" [(value)]=\"selectedSortOption\"\n      (valueChange)=\"sortChanged()\">\n    </app-sort-filter>\n\n  </div>\n\n  <div class=\"alerts__table\">\n    <app-alerts-table [alerts]=\"sortedFilteredAlertsList\"></app-alerts-table>\n  </div>\n\n</div>");

/***/ }),

/***/ 87635:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alerts/trending-tickers/trending-tickers.component.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"trending\">\n  <div class=\"trending__header\">\n    <div class=\"trending__header__title\">Trending tickers</div>\n\n    <app-sort-filter class=\"trending__header__filter\" [label]=\"'Filter by:'\" [options]=\"sortOptions\"\n      [(value)]=\"selectedSortOption\" (valueChange)=\"sortChanged()\">\n    </app-sort-filter>\n  </div>\n\n  <div class=\"trending__content\">\n    <div class=\"trending__content__scrollable\">\n\n      <app-trending-tile *ngFor=\"let trending of filteredTrendingList\" [trending]=\"trending\"\n        class=\"trending__content__item\">\n      </app-trending-tile>\n\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 99475:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alerts/trending-tickers/trending-tile/trending-tile.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"tile\">\n  <!-- HEADER -->\n  <div class=\"tile__header\">\n    <div class=\"tile__header__data\">\n\n      <app-company-logo [company]=\"trending.company\"></app-company-logo>\n\n      <div class=\"tile__header__data__info\">\n        <div class=\"tile__header__data__info__code\">{{trending.company.code}}</div>\n        <div class=\"tile__header__data__info__name\">{{trending.company.name}}</div>\n      </div>\n    </div>\n    <ion-icon name=\"ellipsis-horizontal\" class=\"tile__header__icon\"></ion-icon>\n  </div>\n\n  <!-- CHART -->\n  <div class=\"tile__chart\">\n    <img [src]=\"'assets/' + chartUrl\" />\n  </div>\n\n  <!-- FOOTER -->\n  <div class=\"tile__footer\">\n    <div class=\"tile__footer__alerts\">{{trending.alertsCount}} alerts</div>\n    <div class=\"tile__footer__trend\">\n      <span [class.tile__footer__trend__bullish]=\"label === 'bullish'\"\n        [class.tile__footer__trend__bearish]=\"label === 'bearish'\">{{percent}}% </span>\n      <span>{{label}}</span>\n    </div>\n  </div>\n\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_alerts_alerts_module_ts.js.map