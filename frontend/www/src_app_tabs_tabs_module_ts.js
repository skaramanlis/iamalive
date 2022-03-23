"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 654:
/*!*******************************************************!*\
  !*** ./src/app/services/services/iamalive.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IamaliveService": () => (/* binding */ IamaliveService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);




let IamaliveService = class IamaliveService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    search(data) {
        return this.httpClient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API}search`, Object.assign({}, data));
    }
    report(data) {
        return this.httpClient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API}report`, Object.assign({}, data));
    }
    subscribe(data) {
        return this.httpClient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API}subscribe`, Object.assign({}, data));
    }
    unsubscribe(data) {
        return this.httpClient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API}unsubscribe`, Object.assign({}, data));
    }
};
IamaliveService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
IamaliveService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], IamaliveService);



/***/ }),

/***/ 563:
/*!***************************************************!*\
  !*** ./src/app/tabs/contact/contact.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _contact_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component.html?ngResource */ 4373);
/* harmony import */ var _contact_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component.scss?ngResource */ 297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() { }
};
ContactComponent.ctorParameters = () => [];
ContactComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-contact',
        template: _contact_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_contact_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactComponent);



/***/ }),

/***/ 9223:
/*!*************************************************!*\
  !*** ./src/app/tabs/report/report.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportComponent": () => (/* binding */ ReportComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _report_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report.component.html?ngResource */ 238);
/* harmony import */ var _report_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.component.scss?ngResource */ 9153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var src_app_services_services_iamalive_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/services/iamalive.service */ 654);







let ReportComponent = class ReportComponent {
    constructor(iamaliveService, fb) {
        this.iamaliveService = iamaliveService;
        this.fb = fb;
        this.subManager = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    }
    report() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield this.reportForm.getRawValue();
            console.log("report1", data);
            this.subManager.add(this.iamaliveService.report(data)
                .subscribe(() => {
                this.reportForm.patchValue({ country: "hello" });
            }));
        });
    }
    ngOnInit() {
        this.reportForm = this.fb.group({
            mobile: [undefined, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required
                ]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            comment: [undefined, []],
            seen: [undefined, []],
            location: [undefined, []]
        });
    }
    ngOnDestroy() {
        this.subManager.unsubscribe();
    }
};
ReportComponent.ctorParameters = () => [
    { type: src_app_services_services_iamalive_service__WEBPACK_IMPORTED_MODULE_2__.IamaliveService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
ReportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-report',
        template: _report_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_report_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportComponent);



/***/ }),

/***/ 9340:
/*!*************************************************!*\
  !*** ./src/app/tabs/search/search.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component.html?ngResource */ 9216);
/* harmony import */ var _search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component.scss?ngResource */ 6737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SearchComponent = class SearchComponent {
    constructor() { }
    ngOnInit() { }
};
SearchComponent.ctorParameters = () => [];
SearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-search',
        template: _search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchComponent);



/***/ }),

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact/contact.component */ 563);
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report/report.component */ 9223);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ 9340);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ 7942);










const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__.TabsPage,
        children: [
            {
                path: 'search',
                component: _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent
            },
            {
                path: 'report',
                component: _report_report_component__WEBPACK_IMPORTED_MODULE_1__.ReportComponent
            },
            {
                path: 'contact',
                component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent
            },
            {
                path: '',
                component: _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent
            }
        ]
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, _report_report_component__WEBPACK_IMPORTED_MODULE_1__.ReportComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent],
        exports: [_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, _report_report_component__WEBPACK_IMPORTED_MODULE_1__.ReportComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 5230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 4710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 297:
/*!****************************************************************!*\
  !*** ./src/app/tabs/contact/contact.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 9153:
/*!**************************************************************!*\
  !*** ./src/app/tabs/report/report.component.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 6737:
/*!**************************************************************!*\
  !*** ./src/app/tabs/search/search.component.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 4710:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4373:
/*!****************************************************************!*\
  !*** ./src/app/tabs/contact/contact.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ionic-button color=\"primary\" (click)=\"report()\">Report</ionic-button>";

/***/ }),

/***/ 238:
/*!**************************************************************!*\
  !*** ./src/app/tabs/report/report.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"margin: 50px\">\r\n  <form [formGroup]=\"reportForm\">    \r\n    <div class=\"wrapper\">\r\n      <ion-content fullscreen>\r\n        {{reportForm.value | json}}\r\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\r\n          <ion-item-group>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Country code</ion-label>\r\n              <ion-input autocomplete=\"tel-country-code\" inputmode=\"tel-country-code\" type=\"tel-country-code\"  placeholder=\"Country code\" formControlName=\"country\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Mobile number of person seen alive</ion-label>\r\n               <ion-input autocomplete=\"tel\" inputmode=\"tel\" type=\"tel\"  placeholder=\"Mobile number\" formControlName=\"mobile\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Seen alive date</ion-label>\r\n             <ion-input autocomplete=\"tel\" inputmode=\"tel\" type=\"tel\"  placeholder=\"Mobile number\" formControlName=\"seen\" ></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Seen alive loocation</ion-label>\r\n             <ion-input autocomplete=\"tel\" inputmode=\"tel\" type=\"tel\"  placeholder=\"Mobile number\" formControlName=\"location\" ></ion-input>\r\n            </ion-item> \r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Comment</ion-label>\r\n              <ion-input autocomplete=\"tel\" inputmode=\"tel\" type=\"tel\"  placeholder=\"Mobile number\" formControlName=\"comment\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"btn btn-primary\" (click)=\"report()\">Report person</div>\r\n        </ion-item-group>\r\n        </ion-list>\r\n      </ion-content>\r\n    </div>\r\n  </form>\r\n</div>\r\n";

/***/ }),

/***/ 9216:
/*!**************************************************************!*\
  !*** ./src/app/tabs/search/search.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<p>\n  search works!\n  <ion-input type=\"tel\" value=\"333\"></ion-input>\n\n  <ion-content fullscreen>\n    <ion-list lines=\"full\" class=\"ion-no-margin\">\n      <ion-item-group>\n      <ion-item>\n          <ion-label position=\"stacked\">Country code</ion-label>\n          <ion-input autocomplete=\"tel-country-code\" inputmode=\"tel-country-code\" type=\"tel-country-code\"  placeholder=\"Country code\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Mobile number</ion-label>\n          <ion-input autocomplete=\"tel\" inputmode=\"tel\" type=\"tel\"  placeholder=\"Mobile number\"></ion-input>\n      </ion-item>\n    </ion-item-group>\n    </ion-list>\n  </ion-content>\n</p>\n";

/***/ }),

/***/ 5230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"search\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      <ion-label>Search</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"report\">\n      <ion-icon name=\"finger-print-outline\"></ion-icon>\n      <ion-label>Report</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"contact\">\n      <ion-icon name=\"mail-outline\"></ion-icon>\n      <ion-label>Contact</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map