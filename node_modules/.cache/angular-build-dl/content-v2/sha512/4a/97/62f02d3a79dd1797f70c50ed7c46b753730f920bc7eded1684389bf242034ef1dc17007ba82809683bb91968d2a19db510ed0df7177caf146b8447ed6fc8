(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-register-register-module~pages-welcome-welcome-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"background-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"this.dismissRegister()\" defaultHref=\"/welcome\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"textColor\">REGISTRARSE</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class=\"content\">\n    <form [formGroup]=\"regist\" (ngSubmit)=\"this.registration()\">\n      <ion-item>\n        <ion-input type=\"user\" formControlName=\"username\" placeholder=\"Nombre de Usuario\"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n                <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Contraseña\"></ion-input>\n      </ion-item>\n      <ion-button type=\"submit\" shape=\"round\" color=\"danger\" [disabled]=\"!regist.valid\">Registrarse</ion-button>\n    </form>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/register/register.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/register/register.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/register/register.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/register/register.page.ts ***!
      \*************************************************/

    /*! exports provided: RegisterPage */

    /***/
    function srcAppPagesRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/loading.service */
      "./src/app/services/loading.service.ts");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "./src/app/services/toast.service.ts");

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(modalcontroller, formBuilder, http, authService, loading, toastS) {
          _classCallCheck(this, RegisterPage);

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

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismissRegister",
          value: function dismissRegister() {
            this.modalcontroller.dismiss();
          }
        }, {
          key: "registration",
          value: function registration() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loading.createLoading();

                    case 2:
                      //Añadir nuevo usuario
                      this.http.addUser(this.regist.get("username").value, this.regist.get("password").value).then(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var dat;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (!data) {
                                    _context.next = 12;
                                    break;
                                  }

                                  dat = JSON.parse(data.data);

                                  if (!(dat.status == "0")) {
                                    _context.next = 9;
                                    break;
                                  }

                                  //Todo ok
                                  this.user = {
                                    id: dat.result,
                                    username: this.regist.get("username").value
                                  };
                                  _context.next = 6;
                                  return this.authService.login(this.user);

                                case 6:
                                  this.dismissRegister();
                                  _context.next = 12;
                                  break;

                                case 9:
                                  //Error
                                  this.user = {
                                    id: -1,
                                    username: ""
                                  };
                                  _context.next = 12;
                                  return this.toastS.createToastBottom("Usuario en uso...", true, 400, "danger");

                                case 12:
                                  _context.next = 14;
                                  return this.loading.cancelLoading();

                                case 14:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      })["catch"](function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  this.user = {
                                    id: -1,
                                    username: ''
                                  }; //toast

                                  _context2.next = 3;
                                  return this.toastS.createToastBottom("Usuario en uso...", true, 400, "danger");

                                case 3:
                                  _context2.next = 5;
                                  return this.loading.cancelLoading();

                                case 5:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      });

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./register.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./register.page.scss */
        "./src/app/pages/register/register.page.scss"))["default"]]
      })], RegisterPage);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingC.create({
                        message: msg,
                        spinner: 'dots',
                        mode: 'ios',
                        translucent: true
                      });

                    case 2:
                      loading = _context4.sent;
                      _context4.next = 5;
                      return loading.present();

                    case 5:
                      _context4.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context4.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "createLoading",
          value: function createLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var loading;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loadingC.create({
                        spinner: 'dots',
                        mode: 'ios',
                        translucent: true
                      });

                    case 2:
                      loading = _context5.sent;
                      _context5.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
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
                        position: "top",
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
          key: "createToastBottom",
          value: function createToastBottom(msg, animation, time, color) {
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
                        position: 'bottom',
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
        }, {
          key: "createToastMiddle",
          value: function createToastMiddle(msg, animation, time, color) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var cToast;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.toast.create({
                        message: msg,
                        animated: animation,
                        duration: time,
                        position: 'middle',
                        color: color,
                        mode: "ios"
                      });

                    case 2:
                      cToast = _context8.sent;
                      _context8.next = 5;
                      return cToast.present();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
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
//# sourceMappingURL=default~pages-register-register-module~pages-welcome-welcome-module-es5.js.map