(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('angular-lib', ['exports', '@angular/core', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['angular-lib'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

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

  // import { CircleProgressModule } from './circle-progress/circle-progress.module';
  var AngularLibModule = /** @class */ (function () {
      function AngularLibModule() {
      }
      return AngularLibModule;
  }());
  AngularLibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AngularLibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  AngularLibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AngularLibModule, declarations: [AngularLibComponent], exports: [AngularLibComponent] });
  AngularLibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AngularLibModule, imports: [[
          // CircleProgressModule
          ]] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AngularLibModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: [
                          AngularLibComponent,
                      ],
                      imports: [
                      // CircleProgressModule
                      ],
                      exports: [
                          AngularLibComponent,
                          // CircleProgressModule
                      ]
                  }]
          }] });

  var CircleProgressComponent = /** @class */ (function () {
      function CircleProgressComponent() {
      }
      CircleProgressComponent.prototype.ngOnInit = function () {
      };
      return CircleProgressComponent;
  }());
  CircleProgressComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CircleProgressComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  CircleProgressComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CircleProgressComponent, selector: "lib-circle-progress", ngImport: i0__namespace, template: "<p>circle-progress works!</p>\n", styles: [""] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CircleProgressComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-circle-progress',
                      templateUrl: './circle-progress.component.html',
                      styleUrls: ['./circle-progress.component.css']
                  }]
          }], ctorParameters: function () { return []; } });

  var CircleProgressModule = /** @class */ (function () {
      function CircleProgressModule() {
      }
      return CircleProgressModule;
  }());
  CircleProgressModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CircleProgressModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  CircleProgressModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CircleProgressModule, declarations: [CircleProgressComponent], imports: [common.CommonModule], exports: [CircleProgressComponent] });
  CircleProgressModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CircleProgressModule, imports: [[
              common.CommonModule
          ]] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CircleProgressModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: [
                          CircleProgressComponent
                      ],
                      imports: [
                          common.CommonModule
                      ],
                      exports: [
                          CircleProgressComponent
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
  exports.CircleProgressComponent = CircleProgressComponent;
  exports.CircleProgressModule = CircleProgressModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-lib.umd.js.map
