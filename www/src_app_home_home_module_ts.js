"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 1922:
/*!*********************************************************!*\
  !*** ./src/app/components/account/account.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountComponent": () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _account_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.component.html?ngResource */ 1610);
/* harmony import */ var _account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.component.scss?ngResource */ 1161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AccountComponent = class AccountComponent {
    constructor() { }
    ngOnInit() { }
};
AccountComponent.ctorParameters = () => [];
AccountComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-account',
        template: _account_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountComponent);



/***/ }),

/***/ 8029:
/*!*****************************************************!*\
  !*** ./src/app/components/drive/drive.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriveComponent": () => (/* binding */ DriveComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _drive_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drive.component.html?ngResource */ 3771);
/* harmony import */ var _drive_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drive.component.scss?ngResource */ 1910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let DriveComponent = class DriveComponent {
    constructor() { }
    ngOnInit() { }
};
DriveComponent.ctorParameters = () => [];
DriveComponent.propDecorators = {
    drive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
DriveComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-drive',
        template: _drive_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_drive_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DriveComponent);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    },
    {
        path: 'drive',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_drive_drive_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../drive/drive.module */ 9450)).then(m => m.DrivePageModule)
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _components_drive_drive_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/drive/drive.component */ 8029);
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/account/account.component */ 1922);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _components_drive_drive_component__WEBPACK_IMPORTED_MODULE_2__.DriveComponent, _components_account_account_component__WEBPACK_IMPORTED_MODULE_3__.AccountComponent]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 2468);







let HomePage = class HomePage {
    constructor(data, router) {
        this.data = data;
        this.router = router;
    }
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }
    confirm() {
        this.modal.dismiss(this.name, 'confirm');
    }
    onWillDismiss(event) {
        const ev = event;
        if (ev.detail.role === 'confirm') {
            this.message = `Hello, ${ev.detail.data}!`;
        }
    }
    getDrives() {
        return this.data.getDrives();
    }
    openDrive(id) {
        this.router.navigate(['home/drive', { id: id }]);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
HomePage.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonModal,] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let DataService = class DataService {
    constructor() {
        this.drives = [
            {
                name: 'Swarm',
                icon: '../assets/swarm.png',
                id: 0
            },
            {
                name: 'IPFS',
                icon: '../assets/ipfs.png',
                id: 1
            },
            {
                name: 'Fair',
                icon: '../assets/fair.svg',
                id: 2
            },
        ];
    }
    getDrives() {
        return this.drives;
    }
    getDriveById(id) {
        return this.drives[id];
    }
};
DataService.ctorParameters = () => [];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 1161:
/*!**********************************************************************!*\
  !*** ./src/app/components/account/account.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 1910:
/*!******************************************************************!*\
  !*** ./src/app/components/drive/drive.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".logo {\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n}\n\n.title {\n  text-align: center;\n  font-size: large;\n  font-weight: 600;\n}\n\nion-card:active {\n  background-color: gray;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyaXZlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTmljZSUyMFByb2plY3RzXFxTd2FybUZhaXJPc0lQRlNEYXBwXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcZHJpdmVcXGRyaXZlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJkcml2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuaW9uLWNhcmQ6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn0iLCIubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1jYXJkOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIG9wYWNpdHk6IDAuNTtcbn0iXX0= */";

/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".center {\n  text-align: center;\n}\n\nion-title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxOaWNlJTIwUHJvamVjdHNcXFN3YXJtRmFpck9zSVBGU0RhcHBcXHNyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";

/***/ }),

/***/ 1610:
/*!**********************************************************************!*\
  !*** ./src/app/components/account/account.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<p>\n  account works!\n</p>\n";

/***/ }),

/***/ 3771:
/*!******************************************************************!*\
  !*** ./src/app/components/drive/drive.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-card style=\"padding: 10px;\">\n  <div class=\"logo\">\n    <img [src]=\"drive?.icon\" height=\"75px\">\n  </div>\n  <div class=\"title\">{{drive ? drive.name : \"Drive\"}}</div>\n</ion-card>";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar style=\"border-bottom: 1px solid gray;\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button>\r\n      <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title class=\"center\">Mobile File Drive</ion-title>\r\n  <ion-buttons slot=\"end\">\r\n    <ion-button id=\"open-modal\">\r\n      <ion-icon slot=\"icon-only\" name=\"settings\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar class=\"center\">\r\n  <ion-title size=\"small\">Available Drives</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-list style=\"background-color: transparent;\">\r\n    <app-drive *ngFor=\"let d of getDrives()\" [drive]=\"d\" (click)=\"openDrive(d.id)\"></app-drive>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<ion-modal trigger=\"open-modal\" (willDismiss)=\"onWillDismiss($event)\">\r\n  <ng-template>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-back-button (click)=\"cancel()\" default-href=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Configuration</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button>\r\n            <ion-icon name=\"settings\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content class=\"ion-padding\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Enter your name</ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Your name\" [(ngModel)]=\"name\"></ion-input>\r\n      </ion-item>\r\n    </ion-content>\r\n\r\n    <ion-footer>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"confirm()\" [strong]=\"true\">Confirm</ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-footer>\r\n  </ng-template>\r\n</ion-modal>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map