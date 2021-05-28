(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-register-register-module~pages-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"background-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"this.dismissRegister()\" defaultHref=\"/welcome\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"textColor\">REGISTRARSE</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class=\"content\">\n    <form [formGroup]=\"regist\" (ngSubmit)=\"this.registration()\">\n      <ion-item>\n        <ion-input type=\"user\" formControlName=\"username\" placeholder=\"Nombre de Usuario\"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n                <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Contraseña\"></ion-input>\n      </ion-item>\n      <ion-button type=\"submit\" shape=\"round\" color=\"danger\" [disabled]=\"!regist.valid\">Registrarse</ion-button>\n    </form>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");








let RegisterPage = class RegisterPage {
    constructor(modalcontroller, formBuilder, http, authService, loading, toastS) {
        this.modalcontroller = modalcontroller;
        this.formBuilder = formBuilder;
        this.http = http;
        this.authService = authService;
        this.loading = loading;
        this.toastS = toastS;
        this.regist = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    ngOnInit() {
    }
    dismissRegister() {
        this.modalcontroller.dismiss();
    }
    registration() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Creando Loading
            yield this.loading.createLoading();
            //Añadir nuevo usuario
            this.http.addUser(this.regist.get("username").value, this.regist.get("password").value).then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (data) {
                    let dat = JSON.parse(data.data);
                    if (dat.status == "0") {
                        //Todo ok
                        this.user = {
                            id: dat.result,
                            username: this.regist.get("username").value
                        };
                        yield this.authService.login(this.user);
                        this.dismissRegister();
                    }
                    else {
                        //Error
                        this.user = {
                            id: -1,
                            username: ""
                        };
                        yield this.toastS.createToastBottom("Usuario en uso...", true, 400, "danger");
                    }
                }
                //Eliminando loading
                yield this.loading.cancelLoading();
            })).catch((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.user = {
                    id: -1,
                    username: ''
                };
                //toast
                yield this.toastS.createToastBottom("Usuario en uso...", true, 400, "danger");
                //Eliminando loading
                yield this.loading.cancelLoading();
            }));
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")).default]
    })
], RegisterPage);



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
    getCountRoutes(id) {
        let url = this.ip + '/routes/' + id;
        return this.http.get(url, {}, { 'apikey': this.apiKey });
    }
    getPhotos(id) {
        let url = this.ip + '/photo/' + id;
        return this.http.get(url, {}, { 'apikey': this.apiKey });
    }
    getLikes(id) {
        let url = this.ip + '/route/likes';
        return this.http.post(url, { 'id_route': id }, { 'apikey': this.apiKey });
    }
    getLike(id, id_user) {
        let url = this.ip + '/route/user/like';
        return this.http.post(url, { 'id_route': id, 'id_user': id_user }, { 'apikey': this.apiKey });
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
    addRoute(idUser, title, coordinates, level) {
        let url = this.ip + '/route/add';
        return this.http.post(url, { 'idUser': idUser, 'title': title, 'coordinates': coordinates, 'level': level }, { 'apikey': this.apiKey });
    }
    addPhoto(idUser, title, description, image) {
        let url = this.ip + '/photo/add';
        return this.http.post(url, { 'idUser': idUser, 'title': title, 'description': description, 'url': image }, { 'apikey': this.apiKey });
    }
    addPhotoToRoute(idPhoto, idRoute) {
        let url = this.ip + '/route/newPhoto';
        return this.http.post(url, { 'idPhoto': idPhoto, 'idRoute': idRoute }, { 'apikey': this.apiKey });
    }
    addLike(idRoute, idUser) {
        let url = this.ip + '/route/like';
        return this.http.post(url, { 'id_route': idRoute, 'id_user': idUser }, { 'apikey': this.apiKey });
    }
    avatar(id_user, avatar) {
        let url = this.ip + '/user/' + id_user + "/avatar";
        return this.http.post(url, avatar, { 'apikey': this.apiKey });
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
    updateRoute(id, title, level) {
        let url = this.ip + '/route/update';
        return this.http.put(url, { 'id': id, 'title': title, 'level': level }, { 'apikey': this.apiKey });
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
    deleteLike(id_route, id_user) {
        let url = this.ip + '/route/like';
        return this.http.delete(url, { 'id_route': id_route, 'id_user': id_user }, { 'apikey': this.apiKey });
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



/***/ })

}]);
//# sourceMappingURL=default~pages-register-register-module~pages-welcome-welcome-module-es2015.js.map