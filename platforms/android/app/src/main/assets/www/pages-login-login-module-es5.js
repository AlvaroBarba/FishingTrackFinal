(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "./src/app/pages/login/login-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/pages/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/services/auth.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/native-storage/ngx */
      "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(storage, router) {
          _classCallCheck(this, AuthService);

          this.storage = storage;
          this.router = router;
          this.user = {
            id: -1,
            username: '',
            password: '',
            avatar: ''
          };
        }

        _createClass(AuthService, [{
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.user = {
                        id: -1,
                        username: '',
                        password: '',
                        avatar: ''
                      };
                      _context.next = 3;
                      return this.storage.setItem("user", this.user);

                    case 3:
                      this.router.navigate(["login"]);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "login",
          value: function login(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.storage.setItem("user", user);

                    case 2:
                      this.user = _context2.sent;
                      this.router.navigate(["/"]);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "canActivate",
          value: function canActivate(route) {
            if (!this.isLogged()) {
              this.router.navigate(["welcome"]);
              return false;
            }

            return true;
          }
        }, {
          key: "isLogged",
          value: function isLogged() {
            if (this.user.id != -1) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return this.user;
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
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
          value: function addRoute(idUser, title, coordinates) {
            var url = this.ip + '/route/add';
            return this.http.post(url, {
              'idUser': idUser,
              'title': title,
              'coordinates': coordinates
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingC.create({
                        message: msg,
                        spinner: 'dots',
                        mode: 'ios',
                        translucent: true
                      });

                    case 2:
                      loading = _context3.sent;
                      _context3.next = 5;
                      return loading.present();

                    case 5:
                      _context3.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context3.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "createLoading",
          value: function createLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var loading;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingC.create({
                        spinner: 'dots',
                        mode: 'ios',
                        translucent: true
                      });

                    case 2:
                      loading = _context4.sent;
                      _context4.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
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
                        position: "top",
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
        }, {
          key: "createToastBottom",
          value: function createToastBottom(msg, animation, time, color) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var cToast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toast.create({
                        message: msg,
                        animated: animation,
                        duration: time,
                        position: 'bottom',
                        color: color,
                        mode: "ios"
                      });

                    case 2:
                      cToast = _context6.sent;
                      _context6.next = 5;
                      return cToast.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "createToastMiddle",
          value: function createToastMiddle(msg, animation, time, color) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var cToast;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.toast.create({
                        message: msg,
                        animated: animation,
                        duration: time,
                        position: 'middle',
                        color: color,
                        mode: "ios"
                      });

                    case 2:
                      cToast = _context7.sent;
                      _context7.next = 5;
                      return cToast.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
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
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map