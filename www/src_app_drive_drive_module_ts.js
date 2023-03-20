"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_drive_drive_module_ts"],{

/***/ 9075:
/*!*************************************************************!*\
  !*** ./src/app/components/file-item/file-item.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileItemComponent": () => (/* binding */ FileItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _file_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-item.component.html?ngResource */ 2816);
/* harmony import */ var _file_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-item.component.scss?ngResource */ 2685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let FileItemComponent = class FileItemComponent {
    constructor() { }
    ngOnInit() { }
};
FileItemComponent.ctorParameters = () => [];
FileItemComponent.propDecorators = {
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
FileItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-file-item',
        template: _file_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_file_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FileItemComponent);



/***/ }),

/***/ 9467:
/*!***********************************************!*\
  !*** ./src/app/drive/drive-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrivePageRoutingModule": () => (/* binding */ DrivePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _drive_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drive.page */ 8254);




const routes = [
    {
        path: '',
        component: _drive_page__WEBPACK_IMPORTED_MODULE_0__.DrivePage
    }
];
let DrivePageRoutingModule = class DrivePageRoutingModule {
};
DrivePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DrivePageRoutingModule);



/***/ }),

/***/ 9450:
/*!***************************************!*\
  !*** ./src/app/drive/drive.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrivePageModule": () => (/* binding */ DrivePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _drive_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drive-routing.module */ 9467);
/* harmony import */ var _drive_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drive.page */ 8254);
/* harmony import */ var _components_file_item_file_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/file-item/file-item.component */ 9075);








let DrivePageModule = class DrivePageModule {
};
DrivePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _drive_routing_module__WEBPACK_IMPORTED_MODULE_0__.DrivePageRoutingModule,
        ],
        declarations: [_drive_page__WEBPACK_IMPORTED_MODULE_1__.DrivePage, _components_file_item_file_item_component__WEBPACK_IMPORTED_MODULE_2__.FileItemComponent]
    })
], DrivePageModule);



/***/ }),

/***/ 8254:
/*!*************************************!*\
  !*** ./src/app/drive/drive.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrivePage": () => (/* binding */ DrivePage)
/* harmony export */ });
/* harmony import */ var C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _drive_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drive.page.html?ngResource */ 5677);
/* harmony import */ var _drive_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drive.page.scss?ngResource */ 2170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _services_fair_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/fair.service */ 1944);
/* harmony import */ var _services_ipfs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ipfs.service */ 4073);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/storage.service */ 1188);
/* harmony import */ var _services_swarm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/swarm.service */ 1054);











let DrivePage = class DrivePage {
  constructor(route, data, storage, swarm, ipfs, fair) {
    this.route = route;
    this.data = data;
    this.storage = storage;
    this.swarm = swarm;
    this.ipfs = ipfs;
    this.fair = fair;
    this.files = [];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.drive = this.data.getDriveById(this.id).name;
    this.getFileList();
  }

  refresh(ev) {
    var _this = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.getFileList();
      setTimeout(() => {
        ev.detail.complete();
      }, 3000);
    })();
  }

  getFileList() {
    var _this2 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.storage.getFiles(_this2.id).then(data => {
        _this2.files = data;
      }).catch(() => {});
    })();
  }

  upload(e) {
    var _this3 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.storage.saveFile({
        id: 'gfjhwf564ggg35g46',
        name: 'my picture 1'
      }, _this3.id).then(() => {}); //await this.getFileList();
    })();
  }

};

DrivePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
}, {
  type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
}, {
  type: _services_swarm_service__WEBPACK_IMPORTED_MODULE_7__.SwarmService
}, {
  type: _services_ipfs_service__WEBPACK_IMPORTED_MODULE_5__.IpfsService
}, {
  type: _services_fair_service__WEBPACK_IMPORTED_MODULE_4__.FairService
}];

DrivePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-drive',
  template: _drive_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_drive_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DrivePage);


/***/ }),

/***/ 1944:
/*!******************************************!*\
  !*** ./src/app/services/fair.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FairService": () => (/* binding */ FairService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let FairService = class FairService {
    constructor() { }
};
FairService.ctorParameters = () => [];
FairService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], FairService);



/***/ }),

/***/ 4073:
/*!******************************************!*\
  !*** ./src/app/services/ipfs.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IpfsService": () => (/* binding */ IpfsService)
/* harmony export */ });
/* harmony import */ var C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



let IpfsService = class IpfsService {
  constructor() {}

  upload(file) {
    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  download(id) {
    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

};

IpfsService.ctorParameters = () => [];

IpfsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], IpfsService);


/***/ }),

/***/ 1188:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ 3506);




let StorageService = class StorageService {
  constructor(storage) {
    this.storage = storage;
    this.SwarmStore = "swarm";
    this.IPFSStore = "ipfs";
    this.FairStore = "fair";
    storage.ready();
    storage.clear();
  }

  saveFile(file, store) {
    var _this = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (store == 0) {
        yield _this.saveSwarm(file);
      } else if (store == 1) {
        yield _this.saveIPFS(file);
      } else if (store == 2) {
        yield _this.saveFair(file);
      }
    })();
  }

  getFiles(store) {
    var _this2 = this;

    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let files = [];

      if (store == 0) {
        yield _this2.getSwarm().then(data => {
          files = data;
        }).catch(e => {
          console.log(e);
        });
      } else if (store == 1) {
        yield _this2.getIPFS().then(data => {
          files = data;
        }).catch(e => {
          console.log(e);
        });
      } else if (store == 2) {
        yield _this2.getFair().then(data => {
          files = data;
        }).catch(e => {
          console.log(e);
        });
      }

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
        alert(data.length);
        let files = data;
        files.push(file);

        _this3.storage.set(_this3.IPFSStore, files);

        alert(data[1]);
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

  saveFair(file) {
    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  getFair() {
    return (0,C_Users_bbdnet2576_Desktop_Projects_Nice_Projects_SwarmFairOsIPFSDapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return [];
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

/***/ 1054:
/*!*******************************************!*\
  !*** ./src/app/services/swarm.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwarmService": () => (/* binding */ SwarmService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let SwarmService = class SwarmService {
    constructor() { }
};
SwarmService.ctorParameters = () => [];
SwarmService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], SwarmService);



/***/ }),

/***/ 2685:
/*!**************************************************************************!*\
  !*** ./src/app/components/file-item/file-item.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".row {\n  display: flex;\n  justify-content: space-between;\n  margin: 15px;\n  padding: 5px;\n  border-radius: 4px;\n  box-shadow: 1px 1px 2px 0 gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtaXRlbS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE5pY2UlMjBQcm9qZWN0c1xcU3dhcm1GYWlyT3NJUEZTRGFwcFxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZpbGUtaXRlbVxcZmlsZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDQ0oiLCJmaWxlIjoiZmlsZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMCBncmF5O1xyXG59IiwiLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAxNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMCBncmF5O1xufSJdfQ== */";

/***/ }),

/***/ 2170:
/*!**************************************************!*\
  !*** ./src/app/drive/drive.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcml2ZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2816:
/*!**************************************************************************!*\
  !*** ./src/app/components/file-item/file-item.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\n  <ion-label>{{file ? file.name : \"File\"}}</ion-label>\n  <div class=\"download\">Download</div>\n</div>";

/***/ }),

/***/ 5677:
/*!**************************************************!*\
  !*** ./src/app/drive/drive.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar style=\"border-bottom: 1px solid gray;\">\n  <ion-buttons slot=\"start\">\n    <ion-back-button default-href=\"home\"></ion-back-button>\n  </ion-buttons>\n  <ion-title style=\"text-align: center;\">{{drive}} ({{files.length}})</ion-title>\n  <ion-buttons slot=\"end\">\n    <ion-button>\n      <ion-icon name=\"folder-open\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content class=\"content\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to reload\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Loading...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n<app-file-item *ngFor=\"let item of files\" [file]=\"item\"></app-file-item>\n  \n  <ion-card style=\"padding: 15px;\" *ngIf=\"files.length == 0\">\n    <ion-title style=\"text-align: center;\">No Files Availbable!</ion-title>\n  </ion-card>\n</ion-content>\n\n<ion-fab slot=\"fixed\" horizontal=\"end\" vertical=\"bottom\">\n  <ion-fab-button>\n    <ion-icon name=\"cloud-upload\"></ion-icon>\n    <input type=\"file\" (change)=\"upload($event)\" id=\"file-input\" accept=\"file\">\n  </ion-fab-button>\n</ion-fab>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_drive_drive_module_ts.js.map