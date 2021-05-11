'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var AppAvailability = /** @class */ (function (_super) {
    tslib.__extends(AppAvailability, _super);
    function AppAvailability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppAvailability.prototype.check = function (app) { return core.cordova(this, "check", {}, arguments); };
    AppAvailability.pluginName = "AppAvailability";
    AppAvailability.plugin = "cordova-plugin-appavailability";
    AppAvailability.pluginRef = "appAvailability";
    AppAvailability.repo = "https://github.com/ohh2ahh/AppAvailability";
    AppAvailability.platforms = ["Android", "iOS"];
    AppAvailability.decorators = [
        { type: core$1.Injectable }
    ];
    return AppAvailability;
}(core.IonicNativePlugin));

exports.AppAvailability = AppAvailability;
