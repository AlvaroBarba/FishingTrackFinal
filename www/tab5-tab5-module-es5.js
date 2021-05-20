(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab5Tab5PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"background-toolbar\">\n    <ion-buttons slot=\"end\" *ngIf=\"this.searchB\">\n      <ion-button (click)=\"this.showSearch()\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"textColor\">\n      Amigos\n    </ion-title>\n  </ion-toolbar>\n  \n  <ion-toolbar class=\"background-toolbar\">\n    <ion-segment value=\"all\">\n      <ion-segment-button value=\"buscar\" class=\"background-button-toolbar\" (click)='this.goSearch()' class=\"background-button-toolbar1\">\n        Busca\n      </ion-segment-button>\n      <ion-segment-button value=\"peticiones\" class=\"background-button-toolbar\" (click)='this.goRequest()' class=\"background-button-toolbar\">\n        Peticiones\n      </ion-segment-button>\n      <ion-segment-button value=\"lista\" class=\"background-button-toolbar\" (click)='this.goList()' class=\"background-button-toolbar\">\n        Lista\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content *ngIf=\"this.search\">\n  <ion-searchbar placeholder=\"Buscar\" (ionChange)=\"this.searchFriend($event)\" *ngIf=\"searchBar\"\n  (ionBlur)=\"this.closeSearch()\"> </ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor=\"let User of this.users; let i=index\">\n      <ion-buttons slot=\"end\">\n        <ion-button *ngIf=\"!this.User.isFriend\" (click)=\"this.sendFriendRequest(User)\">\n          <ion-icon name=\"person-add-sharp\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-avatar>\n        <img src=\"{{User.avatar}}\">\n      </ion-avatar>\n      <ion-label>{{User.username}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-content *ngIf=\"this.requests\">\n  <ion-list>\n    <ion-item *ngFor=\"let User of this.friendReq; let i=index\">\n      <ion-icon (click)=\"this.acceptFriend(User.id)\" slot=\"end\" src=\"assets/icon/accept.svg\"></ion-icon>\n      <ion-icon (click)=\"this.rejectFriend(User.id)\" slot=\"end\" src=\"assets/icon/cancel.svg\"></ion-icon>\n        <ion-avatar>\n          <img src=\"{{User.avatar}}\">\n        </ion-avatar>\n        <ion-label>{{User.username}}</ion-label>\n    </ion-item>\n  </ion-list>\n  <p *ngIf = \"this.friendReq.length == 0\" style=\"text-align: center;\">\n    No tienes peticiones por ahora\n    <ion-icon src=\"assets/icon/sad.svg\"></ion-icon>\n  </p>\n</ion-content>\n\n<ion-content *ngIf=\"this.list\">\n  <ion-list>\n    <ion-item *ngFor=\"let User of this.friendList; let i=index\">\n      <ion-icon (click)=\"this.deleteFriend(User.id)\" slot=\"end\" src=\"assets/icon/delete-friend.svg\"></ion-icon>\n      <ion-avatar>\n        <img src=\"{{User.avatar}}\">\n      </ion-avatar>\n      <ion-label>{{User.username}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/services/http.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/http.service.ts ***!
      \******************************************/

    /*! exports provided: HttpService */

    /***/
    function srcAppServicesHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");

      var HttpService = /*#__PURE__*/function () {
        function HttpService(http) {
          _classCallCheck(this, HttpService);

          this.http = http;
          this.ip = "https://fishingtrack.duckdns.org:3022/fishingtrack";
          this.apiKey = "HS$TF{nasiRYDk@#";
        } //GET methods


        _createClass(HttpService, [{
          key: "getUser",
          value: function getUser(username, pass) {
            var url = this.ip + '/user';
            return this.http.post(url, {
              'username': username,
              'password': pass
            }, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "getUserByUsername",
          value: function getUserByUsername(username) {
            var url = this.ip + '/user/' + username;
            return this.http.get(url, {}, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "getFriends",
          value: function getFriends(id) {
            var url = this.ip + '/friend/' + id;
            return this.http.get(url, {}, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "getFriendRequest",
          value: function getFriendRequest(id) {
            var url = this.ip + '/user/friends/request/' + id;
            return this.http.get(url, {}, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "getRoutes",
          value: function getRoutes(id) {
            var url = this.ip + '/route/' + id;
            return this.http.get(url, {}, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "getCountRoutes",
          value: function getCountRoutes(id) {
            var url = this.ip + '/routes/' + id;
            return this.http.get(url, {}, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "getPhotos",
          value: function getPhotos(id) {
            var url = this.ip + '/photo/' + id;
            return this.http.get(url, {}, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "getLike",
          value: function getLike(id) {
            var url = this.ip + '/photo/like';
            return this.http.get(url, {
              'id_photo': id
            }, {
              'apikey': this.apiKey
            });
          } //POST methods

        }, {
          key: "addUser",
          value: function addUser(username, password) {
            var url = this.ip + '/user/register';
            return this.http.post(url, {
              'username': username,
              'password': password
            }, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "addAvatar",
          value: function addAvatar(photo, id) {
            var url = this.ip + '/user/avatar';
            return this.http.post(url, {
              'avatar': photo,
              'id': id
            }, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "addFriendRequest",
          value: function addFriendRequest(idUser1, idUser2, status) {
            var url = this.ip + '/user/friends/request';
            return this.http.post(url, {
              'idUser1': idUser1,
              'idUser2': idUser2,
              'friendStatus': status
            }, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "addRoute",
          value: function addRoute(idUser, title, coordinates, level) {
            var url = this.ip + '/route/add';
            return this.http.post(url, {
              'idUser': idUser,
              'title': title,
              'coordinates': coordinates,
              'level': level
            }, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "addPhoto",
          value: function addPhoto(idUser, title, description, image) {
            var url = this.ip + '/photo/add';
            return this.http.post(url, {
              'idUser': idUser,
              'title': title,
              'description': description,
              'url': image
            }, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "addPhotoToRoute",
          value: function addPhotoToRoute(idPhoto, idRoute) {
            var url = this.ip + '/route/newPhoto';
            return this.http.post(url, {
              'idPhoto': idPhoto,
              'idRoute': idRoute
            }, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "addLike",
          value: function addLike(idPhoto, idUser) {
            var url = this.ip + '/photo/like';
            return this.http.post(url, {
              'id_photo': idPhoto,
              'id_user': idUser
            }, {
              'apikey': this.apiKey
            });
          } //PUT methods

        }, {
          key: "updateUser",
          value: function updateUser(password, username) {
            var url = this.ip + '/user/profile/update';
            return this.http.put(url, {
              'password': password,
              'username': username
            }, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "updateFriend",
          value: function updateFriend(id, status, id2) {
            var url = this.ip + '/user/friends/update';
            return this.http.put(url, {
              'id': id,
              'friendStatus': status,
              'id2': id2
            }, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "updateRoute",
          value: function updateRoute(id, title) {
            var url = this.ip + '/route/update';
            return this.http.put(url, {
              'id': id,
              'title': title
            }, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "updatePhoto",
          value: function updatePhoto(id, title, description) {
            var url = this.ip + '/photo/update';
            return this.http.put(url, {
              'id': id,
              'title': title,
              'description': description
            }, {
              'apikey': this.apiKey
            });
          } //DELETE methods

        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            var url = this.ip + '/user/remove/account/' + id;
            return this.http["delete"](url, {}, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "deleteFriend",
          value: function deleteFriend(id, idFriend) {
            var url = this.ip + '/user/' + id + '/friend/' + idFriend;
            return this.http["delete"](url, {}, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "deleteRoute",
          value: function deleteRoute(id) {
            var url = this.ip + '/route/remove/' + id;
            return this.http["delete"](url, {}, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "deletePhoto",
          value: function deletePhoto(id) {
            var url = this.ip + '/photo/remove/' + id;
            return this.http["delete"](url, {}, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "deleteLike",
          value: function deleteLike(id_photo, id_user) {
            var url = this.ip + '/photo/like';
            return this.http["delete"](url, {
              'id_photo': id_photo,
              'id_user': id_user
            }, {
              'apikey': this.apiKey
            });
          }
        }]);

        return HttpService;
      }();

      HttpService.ctorParameters = function () {
        return [{
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]
        }];
      };

      HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], HttpService);
      /***/
    },

    /***/
    "./src/app/services/toast.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/toast.service.ts ***!
      \*******************************************/

    /*! exports provided: ToastService */

    /***/
    function srcAppServicesToastServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ToastService = /*#__PURE__*/function () {
        function ToastService(toast) {
          _classCallCheck(this, ToastService);

          this.toast = toast;
        }

        _createClass(ToastService, [{
          key: "createToastTop",
          value: function createToastTop(msg, animation, time, color) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var cToast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toast.create({
                        message: msg,
                        animated: animation,
                        duration: time,
                        position: "top",
                        color: color,
                        mode: "ios"
                      });

                    case 2:
                      cToast = _context.sent;
                      _context.next = 5;
                      return cToast.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "createToastBottom",
          value: function createToastBottom(msg, animation, time, color) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var cToast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toast.create({
                        message: msg,
                        animated: animation,
                        duration: time,
                        position: 'bottom',
                        color: color,
                        mode: "ios"
                      });

                    case 2:
                      cToast = _context2.sent;
                      _context2.next = 5;
                      return cToast.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "createToastMiddle",
          value: function createToastMiddle(msg, animation, time, color) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var cToast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toast.create({
                        message: msg,
                        animated: animation,
                        duration: time,
                        position: 'middle',
                        color: color,
                        mode: "ios"
                      });

                    case 2:
                      cToast = _context3.sent;
                      _context3.next = 5;
                      return cToast.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return ToastService;
      }();

      ToastService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ToastService);
      /***/
    },

    /***/
    "./src/app/tab5/tab5-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab5/tab5-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab5PageRoutingModule */

    /***/
    function srcAppTab5Tab5RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab5PageRoutingModule", function () {
        return Tab5PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tab5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab5.page */
      "./src/app/tab5/tab5.page.ts");

      var routes = [{
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_3__["Tab5Page"]
      }];

      var Tab5PageRoutingModule = function Tab5PageRoutingModule() {
        _classCallCheck(this, Tab5PageRoutingModule);
      };

      Tab5PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab5PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab5/tab5.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab5/tab5.module.ts ***!
      \*************************************/

    /*! exports provided: Tab5PageModule */

    /***/
    function srcAppTab5Tab5ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function () {
        return Tab5PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab5-routing.module */
      "./src/app/tab5/tab5-routing.module.ts");
      /* harmony import */


      var _tab5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab5.page */
      "./src/app/tab5/tab5.page.ts");

      var Tab5PageModule = function Tab5PageModule() {
        _classCallCheck(this, Tab5PageModule);
      };

      Tab5PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab5PageRoutingModule"]],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]]
      })], Tab5PageModule);
      /***/
    },

    /***/
    "./src/app/tab5/tab5.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab5/tab5.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab5Tab5PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjUvdGFiNS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/tab5/tab5.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab5/tab5.page.ts ***!
      \***********************************/

    /*! exports provided: Tab5Page */

    /***/
    function srcAppTab5Tab5PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab5Page", function () {
        return Tab5Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/toast.service */
      "./src/app/services/toast.service.ts");

      var Tab5Page = /*#__PURE__*/function () {
        function Tab5Page(http, toast, authS) {
          _classCallCheck(this, Tab5Page);

          this.http = http;
          this.toast = toast;
          this.authS = authS;
          this.searchB = false;
          this.searchBar = false;
          this.users = [];
          this.friendReq = [];
          this.friendList = [];
          this.search = false;
          this.list = true;
          this.requests = false;
          this.yourFriends = [];
          this.you = this.authS.getUser();
        }

        _createClass(Tab5Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getFriends();
            this.friendRequest();
          }
        }, {
          key: "goSearch",
          value: function goSearch() {
            if (!this.search) {
              this.list = false;
              this.requests = false;
              this.search = true;
              this.searchB = true;
            }
          }
        }, {
          key: "goList",
          value: function goList() {
            if (!this.list) {
              this.search = false;
              this.requests = false;
              this.list = true;
              this.getFriends();
            }
          }
        }, {
          key: "goRequest",
          value: function goRequest() {
            if (!this.requests) {
              this.list = false;
              this.search = false;
              this.requests = true;
              this.friendRequest();
            }
          }
        }, {
          key: "showSearch",
          value: function showSearch() {
            this.searchBar = true;
          }
        }, {
          key: "closeSearch",
          value: function closeSearch() {
            this.searchBar = false;
          }
        }, {
          key: "getFriends",
          value: function getFriends() {
            var _this = this;

            this.friendList = [];
            this.http.getFriends(this.you.id).then(function (data) {
              if (data) {
                var dat = JSON.parse(data.data);

                if (dat.status == "0") {
                  dat.result.forEach(function (element) {
                    if (element.avatar == undefined) {
                      element.avatar = "assets/icon/usuario.svg";
                    }

                    _this.friendList.push(element);
                  });
                }
              }
            })["catch"](function (err) {
              _this.toast.createToastBottom("Revise su conexión a internet...", true, 400, "warning");
            });
          }
        }, {
          key: "acceptFriend",
          value: function acceptFriend(id) {
            var _this2 = this;

            this.http.updateFriend(id, 2, this.you.id).then(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var dat;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!data) {
                          _context4.next = 8;
                          break;
                        }

                        dat = JSON.parse(data.data);

                        if (!(dat.status == "0")) {
                          _context4.next = 8;
                          break;
                        }

                        _context4.next = 5;
                        return this.friendRequest();

                      case 5:
                        this.toast.createToastMiddle("Bien hora sois amigos!!", true, 350, "success");
                        _context4.next = 8;
                        break;

                      case 8:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            })["catch"](function (err) {
              _this2.toast.createToastBottom("Revise su conexión a internet...", true, 400, "warning");
            });
          }
        }, {
          key: "deleteFriend",
          value: function deleteFriend(id) {
            var _this3 = this;

            this.http.deleteFriend(this.you.id, id).then(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var dat;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        if (!data) {
                          _context5.next = 8;
                          break;
                        }

                        dat = JSON.parse(data.data);

                        if (!(dat.status == "0")) {
                          _context5.next = 8;
                          break;
                        }

                        _context5.next = 5;
                        return this.getFriends();

                      case 5:
                        this.toast.createToastMiddle("Dejasteis de ser amigos", true, 350, "warning");
                        _context5.next = 8;
                        break;

                      case 8:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
            })["catch"](function (err) {
              _this3.toast.createToastBottom("Revise su conexión a internet...", true, 400, "warning");
            });
          }
        }, {
          key: "rejectFriend",
          value: function rejectFriend(id) {
            var _this4 = this;

            this.http.updateFriend(id, 3, this.you.id).then(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var dat;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        if (!data) {
                          _context6.next = 8;
                          break;
                        }

                        dat = JSON.parse(data.data);

                        if (!(dat.status == "0")) {
                          _context6.next = 8;
                          break;
                        }

                        _context6.next = 5;
                        return this.friendRequest();

                      case 5:
                        this.toast.createToastMiddle("Rechazaste la petición", true, 350, "warning");
                        _context6.next = 8;
                        break;

                      case 8:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));
            })["catch"](function (err) {
              _this4.toast.createToastBottom("Revise su conexión a internet...", true, 400, "warning");
            });
          }
        }, {
          key: "searchFriend",
          value: function searchFriend(evt) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this5 = this;

              var val, aux;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      val = evt.target.value;
                      this.users = [];
                      aux = [];

                      if (val && val.trim() != '') {
                        this.http.getUserByUsername(val).then(function (data) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                            var _this6 = this;

                            var dat;
                            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                              while (1) {
                                switch (_context7.prev = _context7.next) {
                                  case 0:
                                    if (!data) {
                                      _context7.next = 9;
                                      break;
                                    }

                                    dat = JSON.parse(data.data);

                                    if (!(dat.status == "0")) {
                                      _context7.next = 7;
                                      break;
                                    }

                                    //Todo ok
                                    dat.result.forEach(function (element) {
                                      if (element.id != _this6.you.id) {
                                        if (element.avatar == undefined) {
                                          element.avatar = "assets/icon/usuario.svg";
                                        }

                                        element.isFriend = false;
                                        aux.push(element);
                                      }
                                    });
                                    this.users = aux;
                                    _context7.next = 7;
                                    return this.isFriend();

                                  case 7:
                                    _context7.next = 11;
                                    break;

                                  case 9:
                                    _context7.next = 11;
                                    return this.toast.createToastBottom("No hay coincidencias", true, 400, "danger");

                                  case 11:
                                  case "end":
                                    return _context7.stop();
                                }
                              }
                            }, _callee7, this);
                          }));
                        })["catch"](function (err) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                            return regeneratorRuntime.wrap(function _callee8$(_context8) {
                              while (1) {
                                switch (_context8.prev = _context8.next) {
                                  case 0:
                                    _context8.next = 2;
                                    return this.toast.createToastBottom("No hay coincidencias", true, 400, "danger");

                                  case 2:
                                  case "end":
                                    return _context8.stop();
                                }
                              }
                            }, _callee8, this);
                          }));
                        });
                      }

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "sendFriendRequest",
          value: function sendFriendRequest(u2) {
            var _this7 = this;

            var user1 = this.you;
            this.http.addFriendRequest(user1.id, u2.id, 1).then(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                var dat;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        if (!data) {
                          _context10.next = 5;
                          break;
                        }

                        dat = JSON.parse(data.data);

                        if (!(dat.status == "0")) {
                          _context10.next = 5;
                          break;
                        }

                        _context10.next = 5;
                        return this.toast.createToastBottom("Petición enviada con éxito", true, 300, "success");

                      case 5:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this);
              }));
            })["catch"](function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        _context11.next = 2;
                        return this.toast.createToastBottom("Error enviando petición pruebe más tarde", true, 400, "danger");

                      case 2:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, this);
              }));
            });
          }
        }, {
          key: "isFriend",
          value: function isFriend() {
            var _this8 = this;

            this.users.forEach(function (element) {
              _this8.friendList.forEach(function (data) {
                if (element.username == data.username) {
                  _this8.users[_this8.users.indexOf(element)].isFriend = true;
                }
              });
            });
          }
        }, {
          key: "friendRequest",
          value: function friendRequest() {
            var _this9 = this;

            this.user = this.authS.getUser();
            this.friendReq = [];
            this.http.getFriendRequest(this.user.id).then(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                var _this10 = this;

                var dat;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        if (data) {
                          dat = JSON.parse(data.data);

                          if (dat.status == "0") {
                            //Todo ok
                            dat.result.forEach(function (element) {
                              if (element.avatar == undefined) {
                                element.avatar = "assets/icon/usuario.svg";
                              }

                              _this10.friendReq.push(element);
                            });
                          }
                        }

                      case 1:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12);
              }));
            })["catch"](function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        _context13.next = 2;
                        return this.toast.createToastBottom("Fallo al cargar peticiones de amistad", true, 400, "danger");

                      case 2:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13, this);
              }));
            });
          }
        }]);

        return Tab5Page;
      }();

      Tab5Page.ctorParameters = function () {
        return [{
          type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
        }, {
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      Tab5Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab5',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab5.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab5.page.scss */
        "./src/app/tab5/tab5.page.scss"))["default"]]
      })], Tab5Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab5-tab5-module-es5.js.map