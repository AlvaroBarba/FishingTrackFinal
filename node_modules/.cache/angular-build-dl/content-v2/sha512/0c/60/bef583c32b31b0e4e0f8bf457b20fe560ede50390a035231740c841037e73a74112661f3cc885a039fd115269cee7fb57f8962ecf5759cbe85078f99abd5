(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa/mapa.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa/mapa.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [attr.id]=\"this.route\" style=\"position:absolute; height: 100%; width: 100%;\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"background-toolbar\">\n    <ion-segment value=\"all\">\n      <ion-segment-button value=\"parati\" class=\"background-button-toolbar1\" (click)='this.pestanaParaTi()'>\n        Amigos\n      </ion-segment-button>\n      <ion-segment-button value=\"fotos\" class=\"background-button-toolbar\" (click)='this.pestanaRutas()'>\n        Tú\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" *ngIf='this.paraTi'>\n  <ion-card style=\"height: 70%; width: 100%;\" *ngFor=\"let Route of this.friendsRoutes; let i=index;\">\n    <ion-list>\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img src=\"{{this.Route.avatar}}\">\n        </ion-avatar>\n        <ion-label>{{this.Route.username}}</ion-label>\n        <ion-buttons>\n          <ion-button>\n            <ion-icon slot=\"end\" src=\"assets/icon/corazon.svg\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n    </ion-list>\n    <div (click)=\"this.goShowRoute(Route)\">\n      <ion-card-title style=\"margin-left: 5%; margin-bottom: 3.5%;\"> {{Route.title}}</ion-card-title>\n      <app-mapa [attr.id]=\"i\" route=\"{{i}}\" line=\"{{this.Route.coordinates}}\" title=\"this.title\"\n        style=\"position: absolute; height: 50%; width: 100%;\">\n      </app-mapa>\n    </div>\n  </ion-card>\n</ion-content>\n\n<ion-content [fullscreen]=\"true\" *ngIf='this.rutas'>\n  <ion-card style=\"height: 70%; width: 100%;\" *ngFor=\"let Route of this.routes; let i=index;\">\n    <ion-list>\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img src=\"{{this.you.avatar}}\">\n        </ion-avatar>\n        <ion-label>{{this.you.username}}</ion-label>\n        <ion-buttons>\n          <ion-button (click)=\"this.editaRuta(Route)\">\n            <ion-icon slot=\"end\" src=\"assets/icon/editar.svg\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"this.confirmDelete(Route)\">\n            <ion-icon name=\"trash\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"this.changeIcon()\">\n            <ion-icon *ngIf=\"!this.flagLike\" slot=\"end\" src=\"assets/icon/corazon.svg\"></ion-icon>\n            <ion-icon *ngIf=\"this.flagLike\" slot=\"end\" src=\"assets/icon/heart.svg\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n    </ion-list>\n    <div (click)=\"this.goShowRoute(Route)\">\n      <ion-card-title style=\"margin-left: 5%; margin-bottom: 3.5%;\"> {{Route.title}}</ion-card-title>\n      <app-mapa [attr.id]=\"i\" route=\"{{i}}\" line=\"{{this.Route.coordinates}}\" title=\"this.title\"\n        style=\"position: absolute; height: 50%; width: 100%;\">\n      </app-mapa>\n    </div>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/components/mapa/mapa.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/mapa/mapa.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwYS9tYXBhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/mapa/mapa.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/mapa/mapa.component.ts ***!
  \***************************************************/
/*! exports provided: MapaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaComponent", function() { return MapaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);



let MapaComponent = class MapaComponent {
    constructor() {
        this.created = false;
        this.id = "";
    }
    ngOnInit() {
        this.createMap();
    }
    createMap() {
        this.created = true;
        this.miMapa = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Map"](this.route);
        this.miMapa.dragging.disable();
        Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.miMapa);
        //let coordenadas1:LatLng = JSON.parse(this.line).coordinates[0]; obtener 1 punto de la ruta
        this.miMapa.setView([40, -3], 10);
        setTimeout(() => {
            this.miMapa.invalidateSize();
        }, 400);
        let myroute = new leaflet__WEBPACK_IMPORTED_MODULE_2__["GeoJSON"](JSON.parse(this.line));
        myroute.addTo(this.miMapa);
        this.miMapa.fitBounds(myroute.getBounds());
        this.miMapa.on("load", () => {
            let myroute = new leaflet__WEBPACK_IMPORTED_MODULE_2__["GeoJSON"]();
            myroute.addTo(this.miMapa);
            myroute.addData({
                type: "FeatureCollection",
                features: [this.line]
            });
        });
        this.miMapa.setZoom(17);
        myroute.setStyle({
            color: "red",
            opacity: 60
        });
        this.miMapa.on("click", () => {
            this.miMapa.dragging.enable();
        });
    }
};
MapaComponent.ctorParameters = () => [];
MapaComponent.propDecorators = {
    line: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    route: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
MapaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mapa',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mapa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa/mapa.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mapa.component.scss */ "./src/app/components/mapa/mapa.component.scss")).default]
    })
], MapaComponent);



/***/ }),

/***/ "./src/app/services/loading.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let LoadingService = class LoadingService {
    constructor(loadingC) {
        this.loadingC = loadingC;
    }
    createLoadingMsg(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingC.create({
                message: msg,
                spinner: 'dots',
                mode: 'ios',
                translucent: true
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
        });
    }
    createLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingC.create({
                spinner: 'dots',
                mode: 'ios',
                translucent: true
            });
            yield loading.present();
        });
    }
    cancelLoading() {
        this.loadingC.dismiss();
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");
/* harmony import */ var _components_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/mapa/mapa.component */ "./src/app/components/mapa/mapa.component.ts");









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"], _components_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_8__["MapaComponent"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pages_edit_edit_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/edit/edit.page */ "./src/app/pages/edit/edit.page.ts");
/* harmony import */ var _pages_show_route_show_route_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/show-route/show-route.page */ "./src/app/pages/show-route/show-route.page.ts");










let Tab1Page = class Tab1Page {
    constructor(toast, modalcontroller, alert, http, authS, camera, router) {
        this.toast = toast;
        this.modalcontroller = modalcontroller;
        this.alert = alert;
        this.http = http;
        this.authS = authS;
        this.camera = camera;
        this.router = router;
        this.paraTi = false;
        this.rutas = true;
        this.friends = [];
        this.routes = [];
        this.friendsRoutes = [];
        this.mapas = [];
        this.flagLike = false;
        this.you = this.authS.getUser();
        if (this.you.avatar == undefined || this.you.avatar == null) {
            this.you.avatar = "assets/icon/usuario.svg";
        }
    }
    ionViewWillEnter() {
        this.getOwnRoutes();
    }
    changeIcon() {
        if (this.flagLike) {
            this.flagLike = false;
        }
        else {
            this.flagLike = true;
        }
    }
    pestanaParaTi() {
        if (!this.paraTi) {
            this.rutas = false;
            this.paraTi = true;
            this.getFriends();
        }
    }
    pestanaRutas() {
        if (!this.rutas) {
            this.paraTi = false;
            this.rutas = true;
            this.getOwnRoutes();
        }
    }
    getOwnRoutes() {
        this.routes = [];
        this.mapas = [];
        this.line = null;
        if (this.you.id != -1) {
            this.http.getRoutes(this.you.id).then((data) => {
                if (data) {
                    let dat = JSON.parse(data.data);
                    if (dat.status == "0") {
                        //todo ok
                        dat.result.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            let route = {
                                id: element.id,
                                title: element.title,
                                username: this.you.username,
                                avatar: this.you.avatar,
                                coordinates: element.coordinates,
                                waterLevel: element.level
                            };
                            this.routes.push(route);
                        }));
                    }
                }
            }).catch((err) => {
                this.toast.createToastBottom("Revise su conexión a internet...", true, 400, "warning");
            });
        }
    }
    getFriends() {
        this.friends = [];
        this.http.getFriends(this.you.id).then((data) => {
            if (data) {
                let dat = JSON.parse(data.data);
                if (dat.status == "0") {
                    //Todo ok
                    dat.result.forEach(element => {
                        let aux = {
                            id: element.id,
                            username: element.username,
                            avatar: element.avatar
                        };
                        if (aux.avatar == undefined) {
                            aux.avatar = "assets/icon/usuario.svg";
                        }
                        this.friends.push(aux);
                        this.getFriendsRoutes();
                    });
                }
            }
        }).catch((err) => {
            this.toast.createToastBottom("Revise su conexión a internet...", true, 400, "warning");
        });
    }
    getFriendsRoutes() {
        let aux = [];
        let flag = true;
        if (this.friends.length > 0) {
            this.friends.forEach((friend) => {
                this.http.getRoutes(friend.id).then((data) => {
                    if (data) {
                        let dat = JSON.parse(data.data);
                        if (dat.status == "0") {
                            //todo ok
                            dat.result.forEach(element => {
                                let route = {
                                    id: element.id,
                                    title: element.title,
                                    username: friend.username,
                                    avatar: friend.avatar,
                                    coordinates: element.coordinates,
                                    waterLevel: element.level
                                };
                                aux.push(route);
                            });
                            this.friendsRoutes = aux.filter(this.onlyUnique);
                        }
                    }
                }).catch((err) => {
                    //toast
                    this.toast.createToastBottom("Revise su conexión a internet...", true, 400, "warning");
                });
            });
        }
    }
    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    goShowRoute(route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalcontroller.create({
                component: _pages_show_route_show_route_page__WEBPACK_IMPORTED_MODULE_9__["ShowRoutePage"],
                cssClass: 'my-custom-class',
                componentProps: {
                    route: route
                }
            });
            return yield modal.present();
        });
    }
    editaRuta(route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalcontroller.create({
                component: _pages_edit_edit_page__WEBPACK_IMPORTED_MODULE_8__["EditPage"],
                cssClass: 'my-custom-class',
                componentProps: {
                    route: route
                }
            });
            return yield modal.present();
        });
    }
    confirmDelete(route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: "custom",
                header: "Borrar " + route.title,
                subHeader: "¿Seguro que desea borrar su ruta?",
                buttons: [
                    {
                        text: "No",
                        role: "cancel",
                        handler: () => {
                            alert.dismiss();
                        }
                    },
                    {
                        text: "Si",
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            yield this.deleteRoute(route);
                            yield this.getOwnRoutes();
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteRoute(route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.http.deleteRoute(route.id).then((data) => {
                if (data) {
                    let dat = JSON.parse(data.data);
                    if (dat.status = "0") {
                        this.toast.createToastBottom("Ruta borrada con éxito", true, 350, "info");
                    }
                    else {
                        this.toast.createToastBottom("Error borrando ruta", true, 350, "warning");
                    }
                }
            }).catch(err => {
                this.toast.createToastBottom("Error de conexión, pruebe más tarde ", true, 350, "warning");
            });
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map