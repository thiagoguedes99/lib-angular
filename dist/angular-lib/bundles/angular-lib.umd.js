(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['angular-lib'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var AngularLibService = /** @class */ (function () {
        function AngularLibService() {
        }
        return AngularLibService;
    }());
    AngularLibService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AngularLibService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AngularLibService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AngularLibService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AngularLibService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var AngularLibComponent = /** @class */ (function () {
        function AngularLibComponent() {
        }
        AngularLibComponent.prototype.ngOnInit = function () {
        };
        return AngularLibComponent;
    }());
    AngularLibComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AngularLibComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    AngularLibComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: AngularLibComponent, selector: "lib-angular-lib", ngImport: i0__namespace, template: "\n    <p>\n      angular-lib works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AngularLibComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-angular-lib',
                        template: "\n    <p>\n      angular-lib works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var AngularLibModule = /** @class */ (function () {
        function AngularLibModule() {
        }
        return AngularLibModule;
    }());
    AngularLibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AngularLibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AngularLibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AngularLibModule, declarations: [AngularLibComponent], exports: [AngularLibComponent] });
    AngularLibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AngularLibModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AngularLibModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            AngularLibComponent
                        ],
                        imports: [],
                        exports: [
                            AngularLibComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of angular-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AngularLibComponent = AngularLibComponent;
    exports.AngularLibModule = AngularLibModule;
    exports.AngularLibService = AngularLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-lib.umd.js.map
