(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"background-toolbar\">\n    <ion-title class=\"textColor\">\n      Ruta\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div id=\"mapa\" style=\"height: 75%; width: 150%;\"></div>\n  <div class=\"changeButton\">\n    <button style=\"background-color: transparent; max-width: 125px; max-height: 125px;\" block (click)=\"this.changeButton()\" >\n      <ion-img src=\"assets/buttons/play.png\" *ngIf=\"this.change\"></ion-img>\n      <ion-img src=\"assets/buttons/stop.png\" *ngIf=\"!this.change\"></ion-img>\n    </button>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/services/background-geo.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/background-geo.service.ts ***!
  \****************************************************/
/*! exports provided: BackgroundGeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundGeoService", function() { return BackgroundGeoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/background-geolocation/ngx */ "./node_modules/@ionic-native/background-geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toast.service */ "./src/app/services/toast.service.ts");








let BackgroundGeoService = class BackgroundGeoService {
    constructor(geolocation, toast, http, alert, authS) {
        this.geolocation = geolocation;
        this.toast = toast;
        this.http = http;
        this.alert = alert;
        this.authS = authS;
        this.flag = true;
        this.i = 0;
        this.created = false;
        this.config = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 5,
            debug: false,
            stopOnTerminate: true,
            notificationText: "Localizacion activada...",
            locationProvider: _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["BackgroundGeolocationLocationProvider"].RAW_PROVIDER,
            startForeground: true,
            interval: 2000,
            fastestInterval: 1000
        };
        this.gps = this.geolocation.configure(this.config).then((response) => {
            this.geolocation.on(_ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["BackgroundGeolocationEvents"].location).subscribe((location) => {
                if (!this.flag) {
                    this.coordinates = {
                        lat: location.latitude,
                        lng: location.longitude
                    };
                    if (this.coordinates && this.created) {
                        this.drawPolyline(this.coordinates);
                        this.mapa.setView(this.coordinates);
                    }
                }
            });
            this.geolocation.start();
            //this.geolocation.finish(); // SOLO IOS
        });
        this.setDefaultPolyline();
        this.user = this.authS.getUser();
    }
    setDefaultPolyline() {
        this.coordinates = {
            lat: undefined,
            lng: undefined
        };
        if (!this.created) {
            this.polyline = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Polyline"]([], {
                color: "red",
                opacity: 0.5,
                weight: 2.5
            });
        }
        else {
            this.polyline = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Polyline"]([], {
                color: "red",
                opacity: 0.5,
                weight: 2.5
            }).addTo(this.mapa);
        }
    }
    startBackgroundGeolocation() {
        this.geolocation.start();
        this.flag = false;
    }
    stopBackgroundGeolocation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.geolocation.stop();
            yield this.waterLevel();
            this.flag = true;
        });
    }
    routeTitle(level) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: "custom",
                header: "Guardar Ruta",
                subHeader: "Titulo de la ruta",
                inputs: [
                    {
                        name: "title",
                        type: "text",
                        placeholder: "T??tulo",
                        id: "routeTitle"
                    }
                ],
                buttons: [
                    {
                        text: "No",
                        role: "cancel",
                        handler: () => {
                            this.mapa.removeLayer(this.polyline);
                            this.setDefaultPolyline();
                        }
                    },
                    {
                        text: "Si",
                        handler: (data) => {
                            this.saveRoute(data.title, level);
                            this.mapa.removeLayer(this.polyline);
                            this.setDefaultPolyline();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    waterLevel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let selected = -1;
            const alertWater = yield this.alert.create({
                cssClass: "custom",
                header: "Nivel del agua",
                subHeader: "Elija el nivel del agua actual",
                inputs: [
                    {
                        name: "highLevel",
                        type: "radio",
                        label: "Nivel Optimo",
                        value: "1",
                        checked: true
                    },
                    {
                        name: "mediunLevel",
                        type: "radio",
                        label: "Nivel Medio",
                        value: "2"
                    },
                    {
                        name: "lowLevel",
                        type: "radio",
                        label: "Nivel Bajo",
                        value: "3"
                    }
                ],
                buttons: [
                    {
                        text: "No",
                        role: "cancel",
                        handler: () => {
                            this.mapa.removeLayer(this.polyline);
                            this.setDefaultPolyline();
                        }
                    },
                    {
                        text: "Si",
                        handler: (data) => {
                            selected = data;
                        }
                    }
                ]
            });
            yield alertWater.present();
            alertWater.onDidDismiss().then(() => {
                this.routeTitle(selected);
            });
        });
    }
    saveRoute(title, level) {
        console.log("Me cagao 2 " + this.polyline.getLatLngs());
        let input = this.polyline.toGeoJSON();
        this.http.addRoute(this.authS.getUser().id, title, input, level).then((data) => {
            if (data) {
                let dat = JSON.parse(data.data);
                if (dat.status == "0") {
                    //Todo ok
                    this.setDefaultPolyline();
                }
                else {
                    //Error guardando ruta
                    this.toast.createToastBottom("Error al guardar la ruta...", true, 400, "Danger");
                }
            }
        }).catch(err => {
            this.toast.createToastBottom("Tiempo de espera agotado...", true, 400, "Danger");
        });
    }
    drawPolyline(location) {
        this.polyline.addTo(this.mapa);
        this.polyline.addLatLng(location);
    }
    createMap() {
        this.created = true;
        this.mapa = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Map"]("mapa").locate({ setView: true, maxZoom: 20 });
        Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.mapa);
        setTimeout(() => {
            this.mapa.invalidateSize();
        }, 400);
        return this.mapa;
    }
};
BackgroundGeoService.ctorParameters = () => [
    { type: _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["BackgroundGeolocation"] },
    { type: _toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
BackgroundGeoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BackgroundGeoService);



/***/ }),

/***/ "./src/app/tab3/tab3-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "./src/app/tab3/tab3-routing.module.ts");









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_background_geo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/background-geo.service */ "./src/app/services/background-geo.service.ts");




let Tab3Page = class Tab3Page {
    constructor(location, storage) {
        this.location = location;
        this.storage = storage;
        this.cargaMapa = false;
        this.linea = undefined;
        this.change = true;
        this.button = "assets/buttons/play.png";
    }
    ngOnInit() {
        if (!this.cargaMapa) {
            this.vistaMapa();
        }
    }
    ionViewWillEnter() {
        if (!this.cargaMapa) {
            this.vistaMapa();
        }
    }
    vistaMapa() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cargaMapa = true;
            this.mapa = this.location.createMap();
        });
    }
    refreshRoute() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.cargaMapa)
                this.location.line.addTo(this.mapa);
        });
    }
    startLocation() {
        this.location.startBackgroundGeolocation();
    }
    stopLocation() {
        this.location.stopBackgroundGeolocation();
    }
    changeButton() {
        if (this.change) {
            this.startLocation();
            this.change = false;
        }
        else {
            this.change = true;
            this.stopLocation();
        }
    }
};
Tab3Page.ctorParameters = () => [
    { type: _services_background_geo_service__WEBPACK_IMPORTED_MODULE_3__["BackgroundGeoService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
    })
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map