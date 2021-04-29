(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"background-toolbar\">\n    <ion-title class=\"textColor\">\n      PERFIL\n    </ion-title>\n  </ion-toolbar>\n  <ion-card color=\"light\">\n      <div class=\"img-wrapper\">\n        <ion-avatar slot=\"start\" (click)=\"this.getImage()\">\n          <img src=\"{{this.myphoto}}\">\n        </ion-avatar>\n      </div>\n    <ion-card-content class=\"ion-text-center\">\n      <h2 style=\"margin-top: 5%;\">{{this.usuario.username}}</h2>\n      <ion-text color=\"medium\">\n      </ion-text>\n    </ion-card-content>\n  </ion-card>\n  <ion-list>\n    <ion-item>\n      <ion-icon slot=\"end\" name=\"chevron-forward-sharp\"></ion-icon>\n      <ion-label>Fotos</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon slot=\"end\" name=\"chevron-forward-sharp\"></ion-icon>\n      <ion-label>Rutas</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon slot=\"end\" name=\"chevron-forward-sharp\"></ion-icon>\n      <ion-label>Todo</ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-label></ion-label>\n    <ion-item>\n      <ion-button (click)=\"this.insertImagen()\" class=\"background-button\" shape=\"round\">Subir imagen<ion-icon name=\"camera-outline\"></ion-icon></ion-button>\n      <ion-button (click)=\"this.logout()\" class=\"background-button\" shape=\"round\">Cerrar Sesión<ion-icon\n          name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>");

/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");




let AuthService = class AuthService {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
        this.user = {
            id: -1,
            username: '',
            password: '',
            avatar: ''
        };
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = {
                id: -1,
                username: '',
                password: '',
                avatar: ''
            };
            yield this.storage.setItem("user", this.user);
            this.router.navigate(["login"]);
        });
    }
    login(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = yield this.storage.setItem("user", user);
            this.router.navigate(["/"]);
        });
    }
    canActivate(route) {
        if (!this.isLogged()) {
            this.router.navigate(["welcome"]);
            return false;
        }
        return true;
    }
    isLogged() {
        if (this.user.id != -1) {
            return true;
        }
        else {
            return false;
        }
    }
    getUser() {
        return this.user;
    }
};
AuthService.ctorParameters = () => [
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



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

/***/ "./src/app/services/popover.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/popover.service.ts ***!
  \*********************************************/
/*! exports provided: PopoverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverService", function() { return PopoverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_menupopover_menupopover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/menupopover/menupopover.component */ "./src/app/components/menupopover/menupopover.component.ts");




let PopoverService = class PopoverService {
    constructor(popover) {
        this.popover = popover;
    }
    createPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const pop = yield this.popover.create({
                component: _components_menupopover_menupopover_component__WEBPACK_IMPORTED_MODULE_3__["MenupopoverComponent"],
                event: ev
            });
            return yield pop.present();
        });
    }
};
PopoverService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
PopoverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PopoverService);



/***/ }),

/***/ "./src/app/tab4/tab4-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab4PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function() { return Tab4PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"]
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ "./src/app/tab4/tab4.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab4-routing.module */ "./src/app/tab4/tab4-routing.module.ts");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");







let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab4PageRoutingModule"]
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })
], Tab4PageModule);



/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab4/tab4.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_popover_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/popover.service */ "./src/app/services/popover.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");







let Tab4Page = class Tab4Page {
    constructor(popover, authS, router, camera, http) {
        this.popover = popover;
        this.authS = authS;
        this.router = router;
        this.camera = camera;
        this.http = http;
        this.croppedImagepath = "";
        this.isLoading = false;
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
        };
        this.usuario = authS.getUser();
    }
    ngOnInit() {
        console.error("avatar " + this.usuario.avatar);
        console.error("username " + this.usuario.username);
        this.avatar();
    }
    showPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popover.createPopover(ev);
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authS.logout();
            if (!this.authS.isLogged()) {
                this.router.navigate(['/login']);
            }
        });
    }
    avatar() {
        if (this.usuario.avatar == undefined || this.usuario.avatar == "") {
            this.myphoto = "assets/icon/usuario.svg";
        }
        else {
            this.myphoto = this.usuario.avatar;
        }
    }
    newAvatar(photo) {
        this.http.addAvatar(photo, this.usuario.id).then((data) => {
            if (data) {
                let dat = JSON.parse(data.data);
                if (dat.status != "0") {
                    //Error
                    //toast error al subir foto
                    console.error("Error subiendo foto...");
                }
            }
        });
    }
    getImage() {
        const options = {
            quality: 10,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        return this.camera.getPicture(options).then((imageData) => {
            this.myphoto = 'data:image/jpeg;base64,' + imageData;
            this.newAvatar(this.myphoto);
        }, (err) => {
            console.log(err);
        });
    }
    newPhoto(photo) {
        this.http.addPhoto(this.usuario.id, "titulo", "prueba", photo).then((data) => {
            if (data) {
                let dat = JSON.parse(data.data);
                if (dat.status != "0") {
                    //Error
                    //toast error al subir foto
                    console.error("Error subiendo foto...");
                }
            }
        });
    }
    insertImagen() {
        const options = {
            quality: 10,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        return this.camera.getPicture(options).then((imageData) => {
            this.myphoto = 'data:image/jpeg;base64,' + imageData;
            this.newPhoto(this.myphoto);
        }, (err) => {
            console.log(err);
        });
    }
};
Tab4Page.ctorParameters = () => [
    { type: _services_popover_service__WEBPACK_IMPORTED_MODULE_4__["PopoverService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }
];
Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab4',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab4.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")).default]
    })
], Tab4Page);



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module-es2015.js.map