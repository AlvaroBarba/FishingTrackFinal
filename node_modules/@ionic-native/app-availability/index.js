var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AppAvailabilityOriginal = /** @class */ (function (_super) {
    __extends(AppAvailabilityOriginal, _super);
    function AppAvailabilityOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppAvailabilityOriginal.prototype.check = function (app) { return cordova(this, "check", {}, arguments); };
    AppAvailabilityOriginal.pluginName = "AppAvailability";
    AppAvailabilityOriginal.plugin = "cordova-plugin-appavailability";
    AppAvailabilityOriginal.pluginRef = "appAvailability";
    AppAvailabilityOriginal.repo = "https://github.com/ohh2ahh/AppAvailability";
    AppAvailabilityOriginal.platforms = ["Android", "iOS"];
    return AppAvailabilityOriginal;
}(IonicNativePlugin));
var AppAvailability = new AppAvailabilityOriginal();
export { AppAvailability };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1hdmFpbGFiaWxpdHkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBeUNuQyxtQ0FBaUI7Ozs7SUFPcEQsK0JBQUssYUFBQyxHQUFXOzs7Ozs7MEJBakRuQjtFQTBDcUMsaUJBQWlCO1NBQXpDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBcHAgQXZhaWxhYmlsaXR5XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gY2hlY2sgaWYgYW4gYXBwIGlzIGluc3RhbGxlZCBvbiB0aGUgdXNlcidzIGRldmljZS4gSXQgcmVxdWlyZXMgYW4gVVJJIFNjaGVtZSAoZS5nLiB0d2l0dGVyOi8vKSBvbiBpT1Mgb3IgYSBQYWNrYWdlIE5hbWUgKGUuZyBjb20udHdpdHRlci5hbmRyb2lkKSBvbiBBbmRyb2lkLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1hcHBhdmFpbGFiaWxpdHkuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtBcHBBdmFpbGFiaWxpdHkgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9vaGgyYWhoL0FwcEF2YWlsYWJpbGl0eSkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBcHBBdmFpbGFiaWxpdHkgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FwcC1hdmFpbGFiaWxpdHkvbmd4JztcbiAqIGltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhcHBBdmFpbGFiaWxpdHk6IEFwcEF2YWlsYWJpbGl0eSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGxldCBhcHA7XG4gKlxuICogaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpKSB7XG4gKiAgIGFwcCA9ICd0d2l0dGVyOi8vJztcbiAqIH0gZWxzZSBpZiAodGhpcy5wbGF0Zm9ybS5pcygnYW5kcm9pZCcpKSB7XG4gKiAgIGFwcCA9ICdjb20udHdpdHRlci5hbmRyb2lkJztcbiAqIH1cbiAqXG4gKiB0aGlzLmFwcEF2YWlsYWJpbGl0eS5jaGVjayhhcHApXG4gKiAgIC50aGVuKFxuICogICAgICh5ZXM6IGJvb2xlYW4pID0+IGNvbnNvbGUubG9nKGFwcCArICcgaXMgYXZhaWxhYmxlJyksXG4gKiAgICAgKG5vOiBib29sZWFuKSA9PiBjb25zb2xlLmxvZyhhcHAgKyAnIGlzIE5PVCBhdmFpbGFibGUnKVxuICogICApO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXBwQXZhaWxhYmlsaXR5JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBwYXZhaWxhYmlsaXR5JyxcbiAgcGx1Z2luUmVmOiAnYXBwQXZhaWxhYmlsaXR5JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9vaGgyYWhoL0FwcEF2YWlsYWJpbGl0eScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBBdmFpbGFiaWxpdHkgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYW4gYXBwIGlzIGF2YWlsYWJsZSBvbiBkZXZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFwcCBQYWNrYWdlIG5hbWUgb24gYW5kcm9pZCwgb3IgVVJJIHNjaGVtZSBvbiBpT1NcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNoZWNrKGFwcDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=