(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar class=\"background-toolbar\">\r\n    <ion-buttons slot=\"end\" *ngIf=\"this.searchB\">\r\n      <ion-button (click)=\"this.showSearch()\">\r\n        <ion-icon name=\"search-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"textColor\">\r\n      AMIGOS\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-searchbar placeholder=\"Buscar\" (ionChange)=\"this.searchFriend($event)\" *ngIf=\"searchBar\"\r\n    (ionBlur)=\"this.closeSearch()\"> </ion-searchbar>\r\n  <ion-toolbar class=\"background-toolbar\">\r\n    <ion-segment value=\"all\">\r\n      <ion-segment-button value=\"buscar\" class=\"background-button-toolbar\" (click)='this.goSearch()' class=\"background-button-toolbar1\">\r\n        BUSCAR\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"peticiones\" class=\"background-button-toolbar\" (click)='this.goRequest()' class=\"background-button-toolbar\">\r\n        PETICIONES\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"lista\" class=\"background-button-toolbar\" (click)='this.goList()' class=\"background-button-toolbar\">\r\n        LISTA\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"this.search\">\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let User of this.users; let i=index\">\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button>\r\n          <ion-icon name=\"person-add-sharp\" (click)=\"this.sendFriendRequest(User)\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-avatar>\r\n        <img src=\"{{User.avatar}}\">\r\n      </ion-avatar>\r\n      <ion-label>{{User.username}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"this.requests\">\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let User of this.friendReq; let i=index\">\r\n      <ion-icon (click)=\"this.acceptFriend(User.id)\" slot=\"end\" src=\"assets/icon/accept.svg\"></ion-icon>\r\n      <ion-icon slot=\"end\" src=\"assets/icon/cancel.svg\"></ion-icon>\r\n        <ion-avatar>\r\n          <img src=\"{{User.avatar}}\">\r\n        </ion-avatar>\r\n        <ion-label>{{User.username}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  <p *ngIf = \"this.friendReq.length == 0\" style=\"text-align: center;\">\r\n    No tienes peticiones por ahora\r\n    <ion-icon src=\"assets/icon/sad.svg\"></ion-icon>\r\n  </p>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"this.list\">\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let User of this.friendList; let i=index\">\r\n      <ion-avatar>\r\n        <img src=\"{{User.avatar}}\">\r\n      </ion-avatar>\r\n      <ion-label>{{User.username}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");



let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
        this.ip = "https://fishingtrack.duckdns.org:3022/fishingtrack";
        this.apiKey = "HS$TF{nasiRYDk@#";
    }
    //GET methods
    getUser(username, pass) {
        let url = this.ip + '/user';
        return this.http.post(url, { 'username': username, 'password': pass }, { 'apikey': this.apiKey });
    }
    getUserByUsername(username) {
        let url = this.ip + '/user/' + username;
        return this.http.get(url, {}, { 'apikey': this.apiKey });
    }
    getFriends(id) {
        let url = this.ip + '/friend/' + id;
        return this.http.get(url, {}, { 'apikey': this.apiKey });
    }
    getFriendRequest(id) {
        let url = this.ip + '/user/friends/request/' + id;
        return this.http.get(url, {}, { 'apikey': this.apiKey });
    }
    getRoutes(id) {
        let url = this.ip + '/route/' + id;
        return this.http.get(url, {}, { 'apikey': this.apiKey });
    }
    getPhotos(id) {
        let url = this.ip + '/photo/' + id;
        return this.http.get(url, {}, { 'apikey': this.apiKey });
    }
    getLike(id) {
        let url = this.ip + '/photo/like';
        return this.http.get(url, { 'id_photo': id }, { 'apikey': this.apiKey });
    }
    //POST methods
    addUser(username, password) {
        let url = this.ip + '/user/register';
        return this.http.post(url, { 'username': username, 'password': password }, { 'apikey': this.apiKey });
    }
    addAvatar(photo, id) {
        let url = this.ip + '/user/avatar';
        return this.http.post(url, { 'avatar': photo, 'id': id }, { 'apikey': this.apiKey });
    }
    addFriendRequest(idUser1, idUser2, status) {
        let url = this.ip + '/user/friends/request';
        return this.http.post(url, { 'idUser1': idUser1, 'idUser2': idUser2, 'friendStatus': status }, { 'apikey': this.apiKey });
    }
    addRoute(idUser, title, coordinates) {
        let url = this.ip + '/route/add';
        return this.http.post(url, { 'idUser': idUser, 'title': title, 'coordinates': coordinates }, { 'apikey': this.apiKey });
    }
    addPhoto(idUser, title, description, image) {
        let url = this.ip + '/photo/add';
        return this.http.post(url, { 'idUser': idUser, 'title': title, 'description': description, 'url': image }, { 'apikey': this.apiKey });
    }
    addPhotoToRoute(idPhoto, idRoute) {
        let url = this.ip + '/route/newPhoto';
        return this.http.post(url, { 'idPhoto': idPhoto, 'idRoute': idRoute }, { 'apikey': this.apiKey });
    }
    addLike(idPhoto, idUser) {
        let url = this.ip + '/photo/like';
        return this.http.post(url, { 'id_photo': idPhoto, 'id_user': idUser }, { 'apikey': this.apiKey });
    }
    //PUT methods
    updateUser(password, username) {
        let url = this.ip + '/user/profile/update';
        return this.http.put(url, { 'password': password, 'username': username }, { 'apikey': this.apiKey });
    }
    updateFriend(id, status, id2) {
        let url = this.ip + '/user/friends/update';
        return this.http.put(url, { 'id': id, 'friendStatus': status, 'id2': id2 }, { 'apikey': this.apiKey });
    }
    updateRoute(id, title) {
        let url = this.ip + '/route/update';
        return this.http.put(url, { 'id': id, 'title': title }, { 'apikey': this.apiKey });
    }
    updatePhoto(id, title, description) {
        let url = this.ip + '/photo/update';
        return this.http.put(url, { 'id': id, 'title': title, 'description': description }, { 'apikey': this.apiKey });
    }
    //DELETE methods
    deleteUser(id) {
        let url = this.ip + '/user/remove/account/' + id;
        return this.http.delete(url, {}, { 'apikey': this.apiKey });
    }
    deleteFriend(id, idFriend) {
        let url = this.ip + '/user/' + id + '/friend/' + idFriend;
        return this.http.delete(url, {}, { 'apikey': this.apiKey });
    }
    deleteRoute(id) {
        let url = this.ip + '/route/remove/' + id;
        return this.http.delete(url, {}, { 'apikey': this.apiKey });
    }
    deletePhoto(id) {
        let url = this.ip + '/photo/remove/' + id;
        return this.http.delete(url, {}, { 'apikey': this.apiKey });
    }
    deleteLike(id_photo, id_user) {
        let url = this.ip + '/photo/like';
        return this.http.delete(url, { 'id_photo': id_photo, 'id_user': id_user }, { 'apikey': this.apiKey });
    }
};
HttpService.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"] }
];
HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



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

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ToastService = class ToastService {
    constructor(toast) {
        this.toast = toast;
    }
    createToastTop(msg, animation, time, color) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let cToast = yield this.toast.create({
                message: msg,
                animated: animation,
                duration: time,
                position: "top",
                color: color,
                mode: "ios"
            });
            yield cToast.present();
        });
    }
    createToastBottom(msg, animation, time, color) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let cToast = yield this.toast.create({
                message: msg,
                animated: animation,
                duration: time,
                position: 'bottom',
                color: color,
                mode: "ios"
            });
            yield cToast.present();
        });
    }
    createToastMiddle(msg, animation, time, color) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let cToast = yield this.toast.create({
                message: msg,
                animated: animation,
                duration: time,
                position: 'middle',
                color: color,
                mode: "ios"
            });
            yield cToast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ "./src/app/tab5/tab5-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab5/tab5-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab5PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageRoutingModule", function() { return Tab5PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab5.page */ "./src/app/tab5/tab5.page.ts");




const routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_3__["Tab5Page"]
    }
];
let Tab5PageRoutingModule = class Tab5PageRoutingModule {
};
Tab5PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab5PageRoutingModule);



/***/ }),

/***/ "./src/app/tab5/tab5.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/*! exports provided: Tab5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function() { return Tab5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab5-routing.module */ "./src/app/tab5/tab5-routing.module.ts");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab5.page */ "./src/app/tab5/tab5.page.ts");







let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab5PageRoutingModule"]
        ],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]]
    })
], Tab5PageModule);



/***/ }),

/***/ "./src/app/tab5/tab5.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjUvdGFiNS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab5/tab5.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/*! exports provided: Tab5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5Page", function() { return Tab5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");






let Tab5Page = class Tab5Page {
    constructor(http, toastS, loading, authS) {
        this.http = http;
        this.toastS = toastS;
        this.loading = loading;
        this.authS = authS;
        this.searchB = false;
        this.searchBar = false;
        this.users = [];
        this.friendReq = [];
        this.friendList = [];
        this.search = false;
        this.list = true;
        this.requests = false;
        this.you = this.authS.getUser();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getFriends();
        this.friendRequest();
    }
    goSearch() {
        if (!this.search) {
            this.list = false;
            this.requests = false;
            this.search = true;
            this.searchB = true;
        }
    }
    goList() {
        if (!this.list) {
            this.search = false;
            this.requests = false;
            this.list = true;
            this.getFriends();
        }
    }
    goRequest() {
        if (!this.requests) {
            this.list = false;
            this.search = false;
            this.requests = true;
            this.friendRequest();
        }
    }
    showSearch() {
        this.searchBar = true;
    }
    closeSearch() {
        this.searchBar = false;
    }
    getFriends() {
        this.friendList = [];
        this.http.getFriends(this.you.id).then((data) => {
            if (data) {
                let dat = JSON.parse(data.data);
                if (dat.status == "0") {
                    dat.result.forEach(element => {
                        if (element.avatar == undefined) {
                            element.avatar = "assets/icon/usuario.svg";
                        }
                        this.friendList.push(element);
                    });
                }
            }
        }).catch((err) => {
        });
    }
    acceptFriend(id) {
        this.http.updateFriend(id, 2, this.you.id).then((data) => {
            if (data) {
                let dat = JSON.parse(data.data);
                if (dat.status == "0") {
                    //Toast ahora sois amigos
                }
                else {
                    //Error
                }
            }
        }).catch((err) => {
            console.error("Fallo al aceptar la peticion");
        });
    }
    searchFriend(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const val = evt.target.value;
            this.users = [];
            let aux = [];
            let result;
            if (val && val.trim() != '') {
                this.http.getUserByUsername(val).then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (data) {
                        let dat = JSON.parse(data.data);
                        if (dat.status == "0") {
                            //Todo ok
                            dat.result.forEach(element => {
                                if (element.id != this.you.id) {
                                    if (element.avatar == undefined) {
                                        element.avatar = "assets/icon/usuario.svg";
                                    }
                                    aux.push(element);
                                }
                            });
                            this.friendList.forEach(friend => {
                                let i = aux.indexOf(aux.find(x => friend));
                                aux.splice(i, 1);
                            });
                            const set = new Set(aux);
                            result = [...set];
                            this.users = result;
                        }
                    }
                    else {
                        //Error buscando usuario
                        yield this.toastS.createToastBottom("No hay coincidencias", true, 400, "danger");
                    }
                })).catch((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    //Toast
                    yield this.toastS.createToastBottom("No hay coincidencias", true, 400, "danger");
                    console.log(err);
                }));
            }
        });
    }
    sendFriendRequest(u2) {
        console.log("USUARIO " + u2);
        let user1 = this.you;
        this.http.updateFriend(user1.id, 1, u2.id).then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data) {
                console.log("LAGGGGGGGGGGGGGGGGGGGG");
                let dat = JSON.parse(data.data);
                if (dat.status == "0") {
                    dat.result.foreach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        yield this.toastS.createToastBottom("Petición enviada con éxito", true, 300, "success");
                    }));
                }
            }
        })).catch((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.toastS.createToastBottom("Error enviando petición pruebe más tarde", true, 400, "danger");
        }));
    }
    friendRequest() {
        this.user = this.authS.getUser();
        this.friendReq = [];
        this.http.getFriendRequest(this.user.id).then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data) {
                let dat = JSON.parse(data.data);
                if (dat.status == "0") {
                    //Todo ok
                    dat.result.forEach(element => {
                        this.friendReq.push(element);
                    });
                }
            }
        })).catch((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Toast
            yield this.toastS.createToastBottom("Fallo al cargar peticiones de amistad", true, 400, "danger");
            console.log(err);
        }));
    }
};
Tab5Page.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
Tab5Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab5',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab5.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab5.page.scss */ "./src/app/tab5/tab5.page.scss")).default]
    })
], Tab5Page);



/***/ })

}]);
//# sourceMappingURL=tab5-tab5-module-es2015.js.map