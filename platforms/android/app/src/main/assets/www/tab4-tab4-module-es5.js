(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab4Tab4PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"background-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"menu-main\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"this.logout()\">\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"textColor\">\n      Perfil\n    </ion-title>\n  </ion-toolbar>\n  <ion-card color=\"light\">\n    <div class=\"img-wrapper\">\n      <img src=\"{{this.usuario.avatar}}\" onError=\"this.onError=null;this.src='assets/icon/usuario.svg';\">\n    </div>\n    <ion-card-content class=\"ion-text-center\">\n      <h2 style=\"margin-top: 5%;\" class=\"textColor\">{{this.usuario.username}}</h2>\n    </ion-card-content>\n  </ion-card>\n\n\n  <div style=\"text-align: center; border: none; margin-bottom: 5%;\">\n    <ion-label>Cambiar avatar</ion-label>\n  </div>\n  <div style=\"text-align: center;\">\n    <ion-button class=\"background-button\">\n      <ion-icon name=\"image\"></ion-icon>\n      <input type=\"file\" accept=\"image/*\" id=\"botonAvatar\" (change)=\"onFileSelected($event)\">\n    </ion-button>\n  </div>";
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
          key: "getLikes",
          value: function getLikes(id) {
            var url = this.ip + '/route/likes';
            return this.http.post(url, {
              'id_route': id
            }, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "getLike",
          value: function getLike(id, id_user) {
            var url = this.ip + '/route/user/like';
            return this.http.post(url, {
              'id_route': id,
              'id_user': id_user
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
          value: function addLike(idRoute, idUser) {
            var url = this.ip + '/route/like';
            return this.http.post(url, {
              'id_route': idRoute,
              'id_user': idUser
            }, {
              'apikey': this.apiKey
            });
          }
        }, {
          key: "avatar",
          value: function avatar(id_user, _avatar) {
            var url = this.ip + '/user/' + id_user + "/avatar";
            return this.http.post(url, _avatar, {
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
          value: function updateRoute(id, title, level) {
            var url = this.ip + '/route/update';
            return this.http.put(url, {
              'id': id,
              'title': title,
              'level': level
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
          value: function deleteLike(id_route, id_user) {
            var url = this.ip + '/route/like';
            return this.http["delete"](url, {
              'id_route': id_route,
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
    "./src/app/services/loading.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/loading.service.ts ***!
      \*********************************************/

    /*! exports provided: LoadingService */

    /***/
    function srcAppServicesLoadingServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
        return LoadingService;
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

      var LoadingService = /*#__PURE__*/function () {
        function LoadingService(loadingC) {
          _classCallCheck(this, LoadingService);

          this.loadingC = loadingC;
        }

        _createClass(LoadingService, [{
          key: "createLoadingMsg",
          value: function createLoadingMsg(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingC.create({
                        message: msg,
                        spinner: 'dots',
                        mode: 'ios',
                        translucent: true
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      _context.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "createLoading",
          value: function createLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingC.create({
                        spinner: 'dots',
                        mode: 'ios',
                        translucent: true
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "cancelLoading",
          value: function cancelLoading() {
            this.loadingC.dismiss();
          }
        }]);

        return LoadingService;
      }();

      LoadingService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoadingService);
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
                        position: "top",
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
        }, {
          key: "createToastBottom",
          value: function createToastBottom(msg, animation, time, color) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var cToast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toast.create({
                        message: msg,
                        animated: animation,
                        duration: time,
                        position: 'bottom',
                        color: color,
                        mode: "ios"
                      });

                    case 2:
                      cToast = _context4.sent;
                      _context4.next = 5;
                      return cToast.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "createToastMiddle",
          value: function createToastMiddle(msg, animation, time, color) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var cToast;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toast.create({
                        message: msg,
                        animated: animation,
                        duration: time,
                        position: 'middle',
                        color: color,
                        mode: "ios"
                      });

                    case 2:
                      cToast = _context5.sent;
                      _context5.next = 5;
                      return cToast.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
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
    "./src/app/tab4/tab4-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab4/tab4-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab4PageRoutingModule */

    /***/
    function srcAppTab4Tab4RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function () {
        return Tab4PageRoutingModule;
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


      var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab4.page */
      "./src/app/tab4/tab4.page.ts");

      var routes = [{
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"]
      }];

      var Tab4PageRoutingModule = function Tab4PageRoutingModule() {
        _classCallCheck(this, Tab4PageRoutingModule);
      };

      Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab4PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab4/tab4.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab4/tab4.module.ts ***!
      \*************************************/

    /*! exports provided: Tab4PageModule */

    /***/
    function srcAppTab4Tab4ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function () {
        return Tab4PageModule;
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


      var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab4-routing.module */
      "./src/app/tab4/tab4-routing.module.ts");
      /* harmony import */


      var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab4.page */
      "./src/app/tab4/tab4.page.ts");

      var Tab4PageModule = function Tab4PageModule() {
        _classCallCheck(this, Tab4PageModule);
      };

      Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab4PageRoutingModule"]],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
      })], Tab4PageModule);
      /***/
    },

    /***/
    "./src/app/tab4/tab4.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab4/tab4.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab4Tab4PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/tab4/tab4.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab4/tab4.page.ts ***!
      \***********************************/

    /*! exports provided: Tab4Page */

    /***/
    function srcAppTab4Tab4PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4Page", function () {
        return Tab4Page;
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


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/toast.service */
      "./src/app/services/toast.service.ts");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/loading.service */
      "./src/app/services/loading.service.ts");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");

      var Tab4Page = /*#__PURE__*/function () {
        function Tab4Page(toast, authS, router, loading, camera, http, Http) {
          _classCallCheck(this, Tab4Page);

          this.toast = toast;
          this.authS = authS;
          this.router = router;
          this.loading = loading;
          this.camera = camera;
          this.http = http;
          this.Http = Http;
          this.isLoading = false;
          this.usuario = authS.getUser();
        }

        _createClass(Tab4Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.avatar();
            this.getCountRoutes();
          }
        }, {
          key: "getCountRoutes",
          value: function getCountRoutes() {
            var _this = this;

            this.nRoutes = 0;
            this.http.getCountRoutes(this.usuario.id).then(function (data) {
              if (data) {
                var dat = JSON.parse(data.data);

                if (dat.status == "0") {
                  dat.result.forEach(function (element) {
                    _this.nRoutes = element.rutas;
                  });
                }
              }
            })["catch"](function (err) {});
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.authS.logout();

                    case 2:
                      if (!this.authS.isLogged()) {
                        this.router.navigate(['/welcome']);
                      }

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "avatar",
          value: function avatar() {
            if (this.usuario.avatar == undefined || this.usuario.avatar == "") {
              this.myphoto = "assets/icon/usuario.svg";
            } else {
              this.myphoto = "https://fishingtrack.duckdns.org:3022/avatar/" + this.usuario.avatar;
            }
          }
        }, {
          key: "onFileSelected",
          value: function onFileSelected($event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.userAvatar = $event.target.files[0];
                      _context7.next = 3;
                      return this.updateUserAvatar();

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "updateUserAvatar",
          value: function updateUserAvatar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this2 = this;

              var formData;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      formData = new FormData();
                      formData.append('avatar', this.userAvatar, this.userAvatar.filename);
                      _context10.next = 4;
                      return this.loading.createLoading();

                    case 4:
                      this.Http.setDataSerializer('multipart');
                      this.http.avatar(this.authS.getUser().id, formData).then(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                          var dat;
                          return regeneratorRuntime.wrap(function _callee8$(_context8) {
                            while (1) {
                              switch (_context8.prev = _context8.next) {
                                case 0:
                                  dat = JSON.parse(data.data);

                                  if (!(dat.status == "1")) {
                                    _context8.next = 9;
                                    break;
                                  }

                                  this.usuario.avatar = dat.result;
                                  _context8.next = 5;
                                  return this.authS.saveUser(this.usuario);

                                case 5:
                                  _context8.next = 7;
                                  return this.toast.createToastBottom("Se ha actualizado la foto de perfil", true, 350, "success");

                                case 7:
                                  _context8.next = 11;
                                  break;

                                case 9:
                                  _context8.next = 11;
                                  return this.toast.createToastBottom("No se ha podido actualizar la foto", true, 350, "danger");

                                case 11:
                                  _context8.next = 13;
                                  return this.loading.cancelLoading();

                                case 13:
                                case "end":
                                  return _context8.stop();
                              }
                            }
                          }, _callee8, this);
                        }));
                      })["catch"](function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) {
                              switch (_context9.prev = _context9.next) {
                                case 0:
                                  console.log(err);
                                  _context9.next = 3;
                                  return this.loading.cancelLoading();

                                case 3:
                                case "end":
                                  return _context9.stop();
                              }
                            }
                          }, _callee9, this);
                        }));
                      });
                      this.Http.setDataSerializer('urlencoded');

                    case 7:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }]);

        return Tab4Page;
      }();

      Tab4Page.ctorParameters = function () {
        return [{
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]
        }, {
          type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
        }, {
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"]
        }];
      };

      Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab4',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab4.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab4.page.scss */
        "./src/app/tab4/tab4.page.scss"))["default"]]
      })], Tab4Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab4-tab4-module-es5.js.map