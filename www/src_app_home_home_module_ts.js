"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 58029:
/*!*****************************************************!*\
  !*** ./src/app/components/drive/drive.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriveComponent": () => (/* binding */ DriveComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _drive_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drive.component.html?ngResource */ 53771);
/* harmony import */ var _drive_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drive.component.scss?ngResource */ 91910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




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

/***/ 66577:
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.component.html?ngResource */ 59645);
/* harmony import */ var _settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component.scss?ngResource */ 24842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);







let SettingsComponent = class SettingsComponent {
  constructor(storage, alertController) {
    this.storage = storage;
    this.alertController = alertController;
    this.tab = "swarm";
    this.ipfs = "";
    this.batchId = "";
    this.url = "";
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.changeTab(_this.tab);

      yield _this.storage.getIPFSToken().then(data => {
        _this.ipfs = data;
      }).catch( /*#__PURE__*/function () {
        var _ref = (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          yield _this.showAlert("IPFS Token", e);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      yield _this.storage.getSwarmBatchId().then(data => {
        _this.batchId = data;
      }).catch( /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          yield _this.showAlert("Swarm Postage Batch Id", e);
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
      yield _this.storage.getSwarmUrl().then(data => {
        _this.url = data;
      }).catch( /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          yield _this.showAlert("Swarm Url", e);
        });

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }

  updateIPFSToken() {
    var _this2 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.storage.setIPFSToken(_this2.ipfs).then( /*#__PURE__*/(0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this2.showAlert("Update Token", "IPFS Token updated successfully...");
      })).catch( /*#__PURE__*/function () {
        var _ref5 = (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          yield _this2.showAlert("Update Alert", e);
        });

        return function (_x4) {
          return _ref5.apply(this, arguments);
        };
      }());
    })();
  }

  removeIPFSToken() {
    var _this3 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.storage.removeIPFSToken().then( /*#__PURE__*/(0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this3.showAlert("Remove Token", "IPFS Token removed successfully...");
        _this3.ipfs = "";
      })).catch( /*#__PURE__*/function () {
        var _ref7 = (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          yield _this3.showAlert("Remove Alert", e);
        });

        return function (_x5) {
          return _ref7.apply(this, arguments);
        };
      }());
    })();
  }

  updateSwarmBatchId() {
    var _this4 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.storage.setSwarmBatchId(_this4.batchId).then( /*#__PURE__*/(0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this4.showAlert("Update Swarm Postage Batch Id", "Postage Batch Id updated successfully...");
      })).catch( /*#__PURE__*/function () {
        var _ref9 = (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          yield _this4.showAlert("Update Alert", e);
        });

        return function (_x6) {
          return _ref9.apply(this, arguments);
        };
      }());
    })();
  }

  removeSwarmBatchId() {
    var _this5 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.storage.removeSwarmBatchId().then( /*#__PURE__*/(0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this5.showAlert("Remove Batch Id", "Postage Batch Id removed successfully...");
        _this5.batchId = "";
      })).catch( /*#__PURE__*/function () {
        var _ref11 = (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          yield _this5.showAlert("Remove Alert", e);
        });

        return function (_x7) {
          return _ref11.apply(this, arguments);
        };
      }());
    })();
  }

  updateSwarmUrl() {
    var _this6 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.storage.setSwarmUrl(_this6.url).then( /*#__PURE__*/(0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this6.showAlert("Update Swarm Url", "Url updated successfully...");
      })).catch( /*#__PURE__*/function () {
        var _ref13 = (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          yield _this6.showAlert("Update Alert", e);
        });

        return function (_x8) {
          return _ref13.apply(this, arguments);
        };
      }());
    })();
  }

  removeSwarmUrl() {
    var _this7 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this7.storage.removeSwarmUrl().then( /*#__PURE__*/(0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this7.showAlert("Remove Url", "Url removed successfully...");
        _this7.url = "";
      })).catch( /*#__PURE__*/function () {
        var _ref15 = (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          yield _this7.showAlert("Remove Alert", e);
        });

        return function (_x9) {
          return _ref15.apply(this, arguments);
        };
      }());
    })();
  }

  showAlert(header, message) {
    var _this8 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this8.alertController.create({
        header: header,
        message: message,
        buttons: ['Ok']
      });
      yield alert.present();
    })();
  }

  changeTab(tab) {
    document.getElementById('swarm').style.borderBottom = 'none';
    document.getElementById('ipfs').style.borderBottom = 'none'; //document.getElementById('fair').style.borderBottom = 'none';

    document.getElementById(tab).style.borderBottom = '2px solid var(--ion-color-tertiary)';
    this.tab = tab;
  }

};

SettingsComponent.ctorParameters = () => [{
  type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
}];

SettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-settings',
  template: _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SettingsComponent);


/***/ }),

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);




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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _components_drive_drive_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/drive/drive.component */ 58029);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/settings/settings.component */ 66577);









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
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _components_drive_drive_component__WEBPACK_IMPORTED_MODULE_2__.DriveComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__.SettingsComponent]
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 91670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ 71188);









let HomePage = class HomePage {
  constructor(data, router, alertController, storage) {
    this.data = data;
    this.router = router;
    this.alertController = alertController;
    this.storage = storage;
    this.checked = false;
    this.isLoginOpen = true;
    this.isRegisterOpen = false;
    this.isLoggedIn = false;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.storage.isAuto().then(data => {
        if (data) {
          _this.isLoggedIn = true;
          _this.isLoginOpen = false;
          _this.checked = true;
        }
      });
    })();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.account.dismiss(null, 'cancel');
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
    var _this2 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.isLoggedIn) {
        _this2.router.navigate(['home/drive', {
          id: id
        }]);
      } else {
        yield _this2.showAlert('Failed', 'Please sign in to access drives.');
      }
    })();
  }

  login(username, password, auto) {
    var _this3 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.data.showSpinner();

      yield _this3.storage.signIn(username, password, auto).then( /*#__PURE__*/function () {
        var _ref = (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this3.isLoggedIn = data;
          _this3.isLoginOpen = false;
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()).catch( /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          yield _this3.showAlert("Failed", e);
          _this3.isLoginOpen = true;
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }()).finally(() => {
        _this3.data.hideSpinner();
      });
    })();
  }

  register(username, password, confirm) {
    var _this4 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (password != confirm) {
        yield _this4.showAlert('Failed', 'Error: Password does not match!');
        return;
      }

      yield _this4.storage.setUser({
        username: username,
        password: password,
        auto: false
      }).then( /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          if (data) {
            yield _this4.showAlert("Success ", "User signed up successfully...");
            _this4.isLoggedIn = true;
            _this4.isRegisterOpen = false;
          } else {
            _this4.openLogin();

            yield _this4.showAlert("Failed ", "An account already exists, please sign in.");
          }
        });

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }()).catch( /*#__PURE__*/function () {
        var _ref4 = (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          yield _this4.showAlert("Failed", e);
        });

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
    })();
  }

  openLogin() {
    this.isRegisterOpen = false;
    this.isLoginOpen = true;
  }

  openRegister() {
    this.isLoginOpen = false;
    this.isRegisterOpen = true;
  }

  showAlert(header, message) {
    var _this5 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
        header: header,
        message: message,
        buttons: ['Ok']
      });
      yield alert.present();
    })();
  }

};

HomePage.ctorParameters = () => [{
  type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService
}];

HomePage.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonModal]
  }],
  account: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonModal]
  }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 52468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


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
    showSpinner() {
        document.getElementById("spinner").style.display = "block";
    }
    hideSpinner() {
        document.getElementById("spinner").style.display = "none";
    }
};
DataService.ctorParameters = () => [];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 71188:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ 43506);




let StorageService = class StorageService {
  constructor(storage) {
    this.storage = storage;
    this.SwarmStore = "swarm";
    this.IPFSStore = "ipfs";
    this.FairStore = "fair";
    this.SwarmBatchId = "SwarmBatchId";
    this.SwarmUrl = "SwarmUrl";
    this.IPFSToken = "IPFSToken";
    storage.ready();
  }

  saveFile(file, store) {
    var _this = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (store == 0) {
        yield _this.saveSwarm(file);
      } else if (store == 1) {
        yield _this.saveIPFS(file);
      }
      /* else if(store == 2) {
      await this.saveFair(file);
      }*/

    })();
  }

  getFiles(store) {
    var _this2 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let files = [];

      if (store == 0) {
        yield _this2.getSwarm().then(data => {
          files = data;
        }).catch(e => {});
      } else if (store == 1) {
        yield _this2.getIPFS().then(data => {
          files = data;
        }).catch(e => {});
      }
      /* else if(store == 2) {
      await this.getFair().then(data => {
        files = data
      }).catch(e => {
      });
      }*/


      return files;
    })();
  }

  saveSwarm(file) {
    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  getSwarm() {
    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return [];
    })();
  }

  saveIPFS(file) {
    var _this3 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.storage.get(_this3.IPFSStore).then(data => {
        let files = data;
        files.push(file);

        _this3.storage.set(_this3.IPFSStore, files);
      }).catch(e => {
        _this3.storage.set(_this3.IPFSStore, [file]);
      });
    })();
  }

  getIPFS() {
    var _this4 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let files = [];
      yield _this4.storage.get(_this4.IPFSStore).then(data => {
        files = data;
      }).catch(e => {});
      return files;
    })();
  }

  setSwarmBatchId(batchId) {
    var _this5 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.storage.set(_this5.SwarmBatchId, batchId);
    })();
  }

  setSwarmUrl(url) {
    var _this6 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.storage.set(_this6.SwarmUrl, url);
    })();
  }

  getSwarmBatchId() {
    var _this7 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this7.storage.get(_this7.SwarmBatchId);
    })();
  }

  getSwarmUrl() {
    var _this8 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this8.storage.get(_this8.SwarmUrl);
    })();
  }

  removeSwarmBatchId() {
    var _this9 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this9.storage.remove(_this9.SwarmBatchId);
    })();
  }

  removeSwarmUrl() {
    var _this10 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this10.storage.remove(_this10.SwarmUrl);
    })();
  }

  setIPFSToken(token) {
    var _this11 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this11.storage.set(_this11.IPFSToken, token);
    })();
  }

  getIPFSToken() {
    var _this12 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this12.storage.get(_this12.IPFSToken);
    })();
  }

  removeIPFSToken() {
    var _this13 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this13.storage.remove(_this13.IPFSToken);
    })();
  }

  setUser(user) {
    var _this14 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let result = false;
      yield _this14.storage.get('user').then( /*#__PURE__*/function () {
        var _ref = (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          if (!data) {
            yield _this14.storage.set('user', user);
            result = true;
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()).catch( /*#__PURE__*/(0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this14.storage.set('user', user);
        result = true;
      }));
      return result;
    })();
  }

  isAuto() {
    var _this15 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let result = false;
      yield _this15.storage.get('user').then(user => {
        result = user.auto;
      });
      return result;
    })();
  }

  isUser() {
    var _this16 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let result = false;
      yield _this16.storage.get('user').then(user => {
        if (user) {
          result = true;
        }
      });
      return result;
    })();
  }

  signIn(username, password, auto) {
    var _this17 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let result = false;
      yield _this17.storage.get('user').then( /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
          if (user.username == username && user.password == password) {
            result = true;
            let usr = user;
            usr.auto = auto;
            yield _this17.storage.set('user', usr);
          } else {
            throw Error("Invalid username or password!");
          }
        });

        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }()).catch(e => {
        throw Error("User not found, please signup!");
      });
      return result;
    })();
  }

};

StorageService.ctorParameters = () => [{
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__.Storage
}];

StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], StorageService);


/***/ }),

/***/ 91910:
/*!******************************************************************!*\
  !*** ./src/app/components/drive/drive.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".logo {\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n}\n\n.title {\n  text-align: center;\n  font-size: large;\n  font-weight: 600;\n}\n\nion-card:active {\n  background-color: gray;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyaXZlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTmljZSUyMFByb2plY3RzXFxTd2FybUZhaXJPc0lQRlNEYXBwXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcZHJpdmVcXGRyaXZlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJkcml2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuaW9uLWNhcmQ6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn0iLCIubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1jYXJkOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIG9wYWNpdHk6IDAuNTtcbn0iXX0= */";

/***/ }),

/***/ 24842:
/*!************************************************************************!*\
  !*** ./src/app/components/settings/settings.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  border-radius: 6px;\n  box-shadow: 1px 1px 2px 0 black;\n  background-color: transparent;\n  margin-bottom: 15px;\n}\n\nion-img {\n  height: 30px;\n}\n\n.content {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTmljZSUyMFByb2plY3RzXFxTd2FybUZhaXJPc0lQRlNEYXBwXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcc2V0dGluZ3NcXHNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAwIGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbmlvbi1pbWcge1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn0iLCJpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbmlvbi1pbWcge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn0iXX0= */";

/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".spinner {\n  display: none;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  padding-top: 45vh;\n  padding-left: 45vw;\n  z-index: 9999;\n}\n\n.center {\n  text-align: center;\n}\n\nion-title {\n  text-align: center;\n}\n\nion-item {\n  border-radius: 6px;\n  box-shadow: 1px 1px 2px 0 black;\n  --background: none;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxOaWNlJTIwUHJvamVjdHNcXFN3YXJtRmFpck9zSVBGU0RhcHBcXHNyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmctdG9wOiA0NXZoO1xyXG4gIHBhZGRpbmctbGVmdDogNDV2dztcclxuICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDAgYmxhY2s7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn0iLCIuc3Bpbm5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nLXRvcDogNDV2aDtcbiAgcGFkZGluZy1sZWZ0OiA0NXZ3O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAwIGJsYWNrO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */";

/***/ }),

/***/ 53771:
/*!******************************************************************!*\
  !*** ./src/app/components/drive/drive.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-card style=\"padding: 10px;\">\n  <div class=\"logo\">\n    <img [src]=\"drive?.icon\" height=\"75px\">\n  </div>\n  <div class=\"title\">{{drive ? drive.name : \"Drive\"}}</div>\n</ion-card>";

/***/ }),

/***/ 59645:
/*!************************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-tab-bar slot=\"top\">\n  <ion-tab-button (click)=\"changeTab('swarm')\" style=\"padding: 0; margin: 0;\">\n    <div id=\"swarm\" style=\"width: 100%; height: 100%;\">\n      <ion-img src=\"../../../assets/swarm.png\"></ion-img>\n      <ion-label style=\"font-size: small; font-weight: 700; width: 100%;\">Swarm</ion-label>\n    </div>\n  </ion-tab-button>\n  <ion-tab-button (click)=\"changeTab('ipfs')\">\n    <div id=\"ipfs\" style=\"width: 100%; height: 100%;\">\n      <ion-img src=\"../../../assets/ipfs.png\"></ion-img>\n      <ion-label style=\"font-size: small; font-weight: 700; width: 100%;\">IPFS</ion-label>\n    </div>\n  </ion-tab-button>\n  <!--<ion-tab-button (click)=\"changeTab('fair')\">\n    <ion-img src=\"../../../assets/fair.svg\"></ion-img>\n    <ion-label id=\"fair\" style=\"font-size: small; font-weight: 700; width: 100%;\">Fair</ion-label>\n  </ion-tab-button>-->\n</ion-tab-bar>\n\n\n\n<div class=\"content\"  *ngIf=\"tab == 'swarm'\">\n\n  <ion-item>\n    <ion-input [(ngModel)]=\"batchId\" type=\"text\" placeholder=\"Postage Batch Id...\"></ion-input>\n  </ion-item>\n\n  <ion-buttons slot=\"start\" style=\"display: flex; justify-content: space-between; width: 100%; gap: 10px;\">\n    <ion-button (click)=\"removeSwarmBatchId()\" color=\"warning\" style=\"width: 100%; box-shadow: 1px 1px 2px 0 var(--ion-color-tertiary)\">Remove</ion-button>\n    <ion-button (click)=\"updateSwarmBatchId()\" color=\"success\" style=\"width: 100%; box-shadow: 1px 1px 2px 0 var(--ion-color-tertiary)\">Update</ion-button>\n  </ion-buttons>\n\n  <div style=\"border-bottom: 2px solid var(--ion-color-tertiary); margin: 20px 0;\"></div>\n\n  <ion-item>\n    <ion-input [(ngModel)]=\"url\" type=\"text\" placeholder=\"URL...\"></ion-input>\n  </ion-item>\n\n  <ion-buttons slot=\"start\" style=\"display: flex; justify-content: space-between; width: 100%; gap: 10px;\">\n    <ion-button (click)=\"removeSwarmUrl()\" color=\"warning\" style=\"width: 100%; box-shadow: 1px 1px 2px 0 var(--ion-color-tertiary)\">Remove</ion-button>\n    <ion-button (click)=\"updateSwarmUrl()\" color=\"success\" style=\"width: 100%; box-shadow: 1px 1px 2px 0 var(--ion-color-tertiary)\">Update</ion-button>\n  </ion-buttons>\n</div>\n\n\n\n\n<div class=\"content\" *ngIf=\"tab == 'ipfs'\">\n  <ion-item>\n    <ion-input type=\"text\" placeholder=\"Web3Storage Token (IPFS)...\" [(ngModel)]=\"ipfs\"></ion-input>\n  </ion-item>\n  \n  <ion-buttons slot=\"start\" style=\"display: flex; justify-content: space-between; width: 100%; gap: 10px;\">\n    <ion-button (click)=\"removeIPFSToken()\" color=\"warning\" style=\"width: 100%; box-shadow: 1px 1px 2px 0 var(--ion-color-tertiary)\">Remove</ion-button>\n    <ion-button (click)=\"updateIPFSToken()\" color=\"success\" style=\"width: 100%; box-shadow: 1px 1px 2px 0 var(--ion-color-tertiary)\">Update</ion-button>\n  </ion-buttons>\n</div>\n\n\n\n\n\n<!--<div class=\"content\"  *ngIf=\"tab == 'fair'\">\n  <ion-item>\n    <ion-input type=\"text\" placeholder=\"Batch Id...\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type=\"text\" placeholder=\"URL...\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type=\"text\" placeholder=\"Wallet Username...\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type=\"password\" placeholder=\"Wallet Password...\"></ion-input>\n  </ion-item>\n\n  <ion-buttons slot=\"start\" style=\"display: flex; justify-content: space-between; width: 100%; gap: 10px;\">\n    <ion-button color=\"warning\" style=\"width: 100%; box-shadow: 1px 1px 2px 0 var(--ion-color-tertiary)\">Remove</ion-button>\n    <ion-button color=\"success\" style=\"width: 100%; box-shadow: 1px 1px 2px 0 var(--ion-color-tertiary)\">Update</ion-button>\n  </ion-buttons>\n</div>-->";

/***/ }),

/***/ 91670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar style=\"border-bottom: 1px solid gray;\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button id=\"account\" (click)=\"openLogin()\">\r\n      <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title class=\"center\">Mobile File Drive</ion-title>\r\n  <ion-buttons slot=\"end\">\r\n    <ion-button id=\"open-modal\">\r\n      <ion-icon slot=\"icon-only\" name=\"settings\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar class=\"center\">\r\n  <ion-title size=\"small\">Available Drives</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-list style=\"background-color: transparent;\">\r\n    <app-drive *ngFor=\"let d of getDrives()\" [drive]=\"d\" (click)=\"openDrive(d.id)\"></app-drive>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<ion-modal trigger=\"open-modal\" (willDismiss)=\"onWillDismiss($event)\">\r\n  <ng-template>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-back-button (click)=\"cancel()\" default-href=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Configuration</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button>\r\n            <ion-icon name=\"settings\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content class=\"ion-padding\">\r\n      <app-settings></app-settings>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n<ion-modal trigger=\"account\" [isOpen]=\"isLoginOpen\" (willDismiss)=\"onWillDismiss($event)\" [initialBreakpoint]=\"0.5\" [breakpoints]=\"[0.5,0.6,0.7,0.75]\">\r\n  <ng-template>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-icon></ion-icon>\r\n        </ion-buttons>\r\n        <ion-title>Sign In</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-icon></ion-icon>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content class=\"ion-padding \">\r\n      <ion-item>\r\n        <ion-input #loginUser type=\"text\" placeholder=\"Username...\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-input #loginPass type=\"password\" placeholder=\"Password...\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Auto Sign In?</ion-label>\r\n        <ion-checkbox #auto [(ngModel)]=\"checked\" style=\"margin: 0;\"></ion-checkbox>\r\n      </ion-item>\r\n\r\n      <ion-buttons style=\"display: flex; justify-content: space-between; width: 100%; gap: 10px;\">\r\n        <ion-button (click)=\"openRegister()\" color=\"warning\" style=\"width: 100%; box-shadow: 1px 1px 2px 0 var(--ion-color-tertiary)\">Sign Up</ion-button>\r\n        <ion-button (click)=\"login(loginUser.value, loginPass.value, auto.checked)\" color=\"success\" style=\"width: 100%; box-shadow: 1px 1px 2px 0 var(--ion-color-tertiary)\">Sign In</ion-button>\r\n      </ion-buttons>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n<ion-modal [isOpen]=\"isRegisterOpen\" (willDismiss)=\"onWillDismiss($event)\" [initialBreakpoint]=\"0.5\" [breakpoints]=\"[0.5,0.6,0.7,0.75]\">\r\n  <ng-template>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-icon></ion-icon>\r\n        </ion-buttons>\r\n        <ion-title>Create Account</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-icon></ion-icon>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content class=\"ion-padding \">\r\n      <ion-item>\r\n        <ion-input #registerUser placeholder=\"Username...\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input #registerPass type=\"password\" placeholder=\"Password...\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input #registerConf type=\"password\" placeholder=\"Confirm Password...\"></ion-input>\r\n      </ion-item>\r\n      <ion-toolbar style=\"border-radius: 5px;\">\r\n        <ion-buttons slot=\"start\" style=\"display: flex; justify-content: space-between; width: 100%; gap: 10px; padding-right: 5px;\">\r\n          <ion-button (click)=\"openLogin()\" color=\"warning\" style=\"width: 100%; box-shadow: 1px 1px 2px 0 var(--ion-color-tertiary)\">Sign In</ion-button>\r\n          <ion-button (click)=\"register(registerUser.value, registerPass.value, registerConf.value)\" color=\"success\" style=\"width: 100%; box-shadow: 1px 1px 2px 0 var(--ion-color-tertiary)\">Sign Up</ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n<div class=\"spinner\" id=\"spinner\">\r\n  <ion-spinner name=\"circular\"></ion-spinner>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map