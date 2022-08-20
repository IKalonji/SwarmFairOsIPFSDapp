"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 41729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 87047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_use_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/use-service.service */ 97158);







let LoginPage = class LoginPage {
    constructor(router, loading, userService, alertController) {
        this.router = router;
        this.loading = loading;
        this.userService = userService;
        this.alertController = alertController;
        this.userName = "";
        this.userEmail = "";
        this.userPassword = "";
        this.user = {};
        this.user = this.userService.getUser();
    }
    ngOnInit() {
    }
    login() {
        console.log("Login clicked");
        console.log(this.userName, this.userEmail, this.userPassword);
        this.loader("Logging in. Please wait.");
        setTimeout(() => {
            if (this.userName == this.user.username && this.userEmail == this.user.email && this.userPassword == this.user.password) {
                this.router.navigate(["/home"]);
            }
            else {
                this.invalidLogin();
            }
        }, 3000);
    }
    loader(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let load = yield this.loading.create({
                message: message,
                duration: 2500
            });
            yield load.present();
        });
    }
    invalidLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let alert = yield this.alertController.create({
                header: "Invalid Login",
                message: "Please check your username, email and password",
                buttons: ["OK"]
            });
            yield alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _services_use_service_service__WEBPACK_IMPORTED_MODULE_2__.UseServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 97158:
/*!*************************************************!*\
  !*** ./src/app/services/use-service.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UseServiceService": () => (/* binding */ UseServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let UseServiceService = class UseServiceService {
    constructor() {
        this.debugUsername = "debug_user";
        this.debugEmail = "debug@test.com";
        this.debugPassword = "debug_password";
    }
    getUser() {
        return {
            username: this.debugUsername,
            email: this.debugEmail,
            password: this.debugPassword
        };
    }
};
UseServiceService.ctorParameters = () => [];
UseServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], UseServiceService);



/***/ }),

/***/ 87047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".custom-font {\n  font-family: \"Josefin Sans\", sans-serif;\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\nion-toolbar ion-title {\n  padding: 20px 0 46px 0;\n  font-weight: 900;\n}\n\nion-toolbar .back-circle {\n  z-index: -1;\n  width: 200px;\n  height: 200px;\n  background: #e5ecf1;\n  position: absolute;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\nion-content {\n  --background: rgba(237, 242, 245, .8) ;\n}\n\n.back-blob {\n  z-index: -1;\n  width: 600px;\n  position: absolute;\n  left: -40%;\n  top: 0;\n}\n\nform {\n  margin-top: 100px;\n}\n\n.wrap-input {\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  margin-bottom: 26px;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.12);\n}\n\n.input {\n  display: block;\n  width: 100%;\n  background: transparent;\n  font-family: Josefin Sans;\n  font-size: 16px;\n  line-height: 1.2;\n  border: none;\n  outline: none;\n  height: 46px;\n  padding: 0 20px 2 23px;\n}\n\n.container-form-btn {\n  display: flex;\n  justify-content: center;\n}\n\n.form-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  min-width: 160px;\n  height: 42px;\n  background-color: #394752;\n  border-radius: 20px;\n  font-size: 14px;\n  color: #ffffff;\n  text-transform: uppercase;\n  padding-top: 5px;\n  transition: all 0.45;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.5);\n}\n\n.form-btn:hover {\n  background-color: #28333b;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUFBO0FBQ0o7O0FBRUE7RUFDQSx5QkFBQTtBQUNBOztBQUNJO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQUNSOztBQUVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUFSOztBQUtBO0VBQ0ksc0NBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtBQUZKOztBQUtBO0VBQ0ksaUJBQUE7QUFGSjs7QUFLQTtFQUNJLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtEQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpREFBQTtBQUZKOztBQUtBO0VBQ0kseUJBQUE7RUFDQSxpREFBQTtBQUZKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tZm9udHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbi0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgaW9uLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDAgNDZweCAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2stY2lyY2xlIHtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTVlY2YxO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIzNywgMjQyLCAyNDUsIC44KVxyXG59XHJcblxyXG4uYmFjay1ibG9iIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTQwJTtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuLndyYXAtaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSg1Nyw3MSw4MiwwLjEyKTtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtZmFtaWx5OiBKb3NlZmluIFNhbnM7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIHBhZGRpbmc6IDAgMjBweCAyIDIzcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItZm9ybS1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk0NzUyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40NTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDU3LCA3MSwgODIsIDAuNSk7XHJcbn1cclxuXHJcbi5mb3JtLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzMzNiO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoNTcsIDcxLCA4MiwgMC44KTtcclxufSJdfQ== */";

/***/ }),

/***/ 41729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<link href=\"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap\" rel=\"stylesheet\">\r\n\r\n<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"back-circle\">\r\n    </div>\r\n    <ion-title class=\"ion-text-center custom-font\">Login/Signup</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <svg class=\"back-blob\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <path fill=\"#FF9D5C\" d=\"M64.8,-36.9C78.7,-13.3,81.2,17.5,68.5,33.5C55.8,49.4,27.9,50.6,6.3,46.9C-15.2,43.3,-30.4,34.8,-41.5,19.7C-52.7,4.7,-59.8,-17,-52.2,-36.9C-44.6,-56.8,-22.3,-75.1,1.6,-76C25.4,-76.9,50.8,-60.5,64.8,-36.9Z\" transform=\"translate(100 100)\" />\r\n  </svg>\r\n\r\n  <div class=\"ion-padding\">\r\n    <form class=\"ion-padding\">\r\n\r\n      <div class=\"wrap-input\">\r\n        <input class=\"input\" type=\"text\" name=\"user-name\" placeholder=\"User Name\" [(ngModel)]=\"userName\">\r\n      </div>\r\n\r\n      <div class=\"wrap-input\">\r\n        <input class=\"input\" type=\"text\" name=\"user-email\" placeholder=\"Email\" [(ngModel)]=\"userEmail\">\r\n      </div>\r\n\r\n      <div class=\"wrap-input\">\r\n        <input class=\"input\" type=\"password\" name=\"user-password\" placeholder=\"Password\" [(ngModel)]=\"userPassword\">\r\n      </div>\r\n\r\n      <div class=\"container-form-btn\">\r\n        <button class=\"form-btn custom-font\" (click)=\"login()\">\r\n          Submit\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <p class=\"ion-text-center custom-font\">Your Mobile Decentralized Storage</p>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n<!--  -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map