(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa/mapa.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa/mapa.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <ion-card-header>\n    <ion-card-title>{{this.title}}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <div id=\"miMapa\" style=\"height: fit-content; width: fit-content;\">\n      content\n    </div>\n  </ion-card-content>\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"background-toolbar\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"showPopover($event)\">\n        <ion-icon name=\"ellipsis-vertical\" class=\"iconos\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"textColor\">\n      NOVEDADES\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"background-toolbar\">\n    <ion-segment value=\"all\">\n      <ion-segment-button value=\"parati\" class=\"background-button-toolbar1\" (click)='this.pestanaParaTi()'>\n        PARA TI\n      </ion-segment-button>\n      <ion-segment-button value=\"fotos\" class=\"background-button-toolbar\" (click)='this.pestanaFotos()'>\n        FOTOS\n      </ion-segment-button>\n      <ion-segment-button value=\"rutas\" class=\"background-button-toolbar\" (click)='this.pestanaRutas()'>\n        RUTAS\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n\n<ion-content [fullscreen]=\"true\" *ngIf='this.paraTi'>\n  <ion-list *ngFor=\"let Route of this.friendsRoutes; let i=index;\">\n    <ion-item>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>\n            {{Route.title}}\n          </ion-card-title>\n        </ion-card-header>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-content [fullscreen]=\"true\" *ngIf='this.fotos'>\n  <ion-card>\n        <img src=\"{{this.myphoto}}\" />\n        <ion-card-header>\n          <ion-card-title>Título de la ruta</ion-card-title>\n          <ion-card-subtitle>{{this.you.username}}</ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n</ion-content>\n\n<ion-content [fullscreen]=\"true\" *ngIf='this.rutas'>\n  <ion-list *ngFor=\"let Route of this.routes; let i=index;\">\n    <ion-item>\n        <app-mapa line=\"{{line}}\" title=\"this.title\"></app-mapa>\n    </ion-item>\n  </ion-list>\n</ion-content>\n</ion-header>\n\n\n");

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
    }
    ngOnInit() {
        this.createMap();
    }
    createMap() {
        console.log("la linea -> " + this.line);
        this.created = true;
        this.miMapa = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Map"]("miMapa").setView(this.line.coordinates.getCenter(), 20);
        Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' })
            .addTo(this.miMapa);
        setTimeout(() => {
            this.miMapa.invalidateSize();
        }, 400);
        Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"])(this.line).addTo(this.miMapa);
    }
};
MapaComponent.ctorParameters = () => [];
MapaComponent.propDecorators = {
    line: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
MapaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mapa',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mapa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mapa/mapa.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mapa.component.scss */ "./src/app/components/mapa/mapa.component.scss")).default]
    })
], MapaComponent);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_popover_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/popover.service */ "./src/app/services/popover.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");







let Tab1Page = class Tab1Page {
    constructor(router, popover, http, authS, camera) {
        this.router = router;
        this.popover = popover;
        this.http = http;
        this.authS = authS;
        this.camera = camera;
        this.paraTi = true;
        this.fotos = false;
        this.rutas = false;
        this.friends = [];
        this.routes = [];
        this.friendsRoutes = [];
        this.mapas = [];
        this.you = this.authS.getUser();
    }
    pestanaParaTi() {
        if (!this.paraTi) {
            this.rutas = false;
            this.fotos = false;
            this.paraTi = true;
            this.getFriends();
        }
    }
    pestanaFotos() {
        if (!this.fotos) {
            this.rutas = false;
            this.paraTi = false;
            this.fotos = true;
        }
    }
    pestanaRutas() {
        if (!this.rutas) {
            this.paraTi = false;
            this.fotos = false;
            this.rutas = true;
            if (this.routes == null) {
                this.getOwnRoutes();
            }
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
                        dat.result.forEach(element => {
                            let route = {
                                title: element.title,
                                username: this.you.username,
                                avatar: this.you.avatar,
                                coordinates: element.coordinates
                            };
                            this.routes.push(route);
                        });
                    }
                    else {
                        //toast
                        console.error("toast");
                    }
                }
            }).catch((err) => {
                console.error(err);
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
                        console.error("FRIENDS --> " + aux.username);
                        this.friends.push(aux);
                        this.getFriendsRoutes();
                    });
                }
            }
        }).catch((err) => {
            console.error("Error en getFriends -> " + err);
        });
    }
    getFriendsRoutes() {
        console.error("FRIENDSROUTES");
        if (this.friends.length > 0) {
            console.error("FRIENDSROUTES 1if");
            this.friends.forEach((friend) => {
                console.error("FRIENDSROUTES FOR");
                this.http.getRoutes(friend.id).then((data) => {
                    console.error("FRIENDSROUTES HTTP");
                    if (data) {
                        console.error("FRIENDSROUTES DATA");
                        let dat = JSON.parse(data.data);
                        if (dat.status == "0") {
                            //todo ok
                            console.error("FRIENDSROUTES OK");
                            let route = {
                                title: dat.result.title,
                                username: friend.username,
                                avatar: friend.avatar,
                                coordinates: dat.result.coordinates
                            };
                            console.error("FRIENDSROUTES " + route.title);
                            this.friendsRoutes.push(route);
                        }
                        else {
                            //toast
                        }
                    }
                }).catch((err) => {
                    //toast
                    console.error("ERROR OBTENIENDO RUTAS " + err);
                });
            });
        }
    }
    showPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popover.createPopover(ev);
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_popover_service__WEBPACK_IMPORTED_MODULE_5__["PopoverService"] },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] }
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