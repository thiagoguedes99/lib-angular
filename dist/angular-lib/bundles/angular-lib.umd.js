(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-circle-progress'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('angular-lib', ['exports', '@angular/core', 'ng-circle-progress', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['angular-lib'] = {}, global.ng.core, global.i1, global.ng.common));
}(this, (function (exports, i0, i1, common) { 'use strict';

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
  var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

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
      // optionsE = {
      //   percent: 75,
      //   radius: 60,
      //   outerStrokeWidth: 10,
      //   innerStrokeWidth: 10,
      //   space: -10,
      //   outerStrokeColor: "#4882c2",
      //   innerStrokeColor: "#e7e8ea",
      //   showBackground: false,
      //   title: 'UI',
      //   animateTitle: false,
      //   showUnits: false,
      //   clockwise: false,
      //   animationDuration: 1000,
      //   startFromZero: false,
      //   outerStrokeGradient: true,
      //   outerStrokeGradientStopColor: '#53a9ff',
      //   lazy: true,
      //   subtitleFormat: (percent: number): string => {
      //     return `${percent}%`;
      //   }
      // }
      function CircleProgressComponent() {
      }
      CircleProgressComponent.prototype.ngOnInit = function () {
      };
      return CircleProgressComponent;
  }());
  CircleProgressComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CircleProgressComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  CircleProgressComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CircleProgressComponent, selector: "lib-circle-progress", ngImport: i0__namespace, template: "<p>circle-progress works!</p>\n\n<circle-progress\n  [percent]=\"85\"\n  [radius]=\"100\"\n  [outerStrokeWidth]=\"16\"\n  [innerStrokeWidth]=\"8\"\n  [outerStrokeColor]=\"'#78C000'\"\n  [innerStrokeColor]=\"'#C7E596'\"\n  [animation]=\"true\"\n  [animationDuration]=\"300\"\n></circle-progress>\n\n<!-- <circle-progress\n  name=\"E\"\n  [options]=\"optionsE\"\n  [renderOnClick]=\"false\"\n  class=\"copy\"\n  ></circle-progress> -->\n\n  <circle-progress\n\n  [percent]=\"75\"\n  [radius]=\"60\"\n  [outerStrokeWidth]=\"10\"\n  [innerStrokeWidth]=\"10\"\n  [space]=\"-10\"\n  [outerStrokeColor]=\"'#4882c2'\"\n  [innerStrokeColor]=\"'#e7e8ea'\"\n  [showBackground]=\"false\"\n  [title]=\"'UI'\"\n  [animateTitle]=\"false\"\n  [showUnits]=\"false\"\n  [clockwise]=\"false\"\n  [animationDuration]=\"1000\"\n  [startFromZero]=\"false\"\n  [outerStrokeGradient]=\"true\"\n  [outerStrokeGradientStopColor]=\"'#53a9ff'\"\n  [lazy]=\"true\"\n  ></circle-progress>", styles: [""], components: [{ type: i1__namespace.CircleProgressComponent, selector: "circle-progress", inputs: ["name", "class", "backgroundGradient", "backgroundColor", "backgroundGradientStopColor", "backgroundOpacity", "backgroundStroke", "backgroundStrokeWidth", "backgroundPadding", "radius", "space", "percent", "toFixed", "maxPercent", "renderOnClick", "units", "unitsFontSize", "unitsFontWeight", "unitsColor", "outerStrokeGradient", "outerStrokeWidth", "outerStrokeColor", "outerStrokeGradientStopColor", "outerStrokeLinecap", "innerStrokeColor", "innerStrokeWidth", "titleFormat", "title", "titleColor", "titleFontSize", "titleFontWeight", "subtitleFormat", "subtitle", "subtitleColor", "subtitleFontSize", "subtitleFontWeight", "imageSrc", "imageHeight", "imageWidth", "animation", "animateTitle", "animateSubtitle", "animationDuration", "showTitle", "showSubtitle", "showUnits", "showImage", "showBackground", "showInnerStroke", "clockwise", "responsive", "startFromZero", "showZeroOuterStroke", "lazy", "options"], outputs: ["onClick"] }] });
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
  CircleProgressModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CircleProgressModule, declarations: [CircleProgressComponent], imports: [common.CommonModule, i1__namespace.NgCircleProgressModule], exports: [CircleProgressComponent] });
  CircleProgressModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CircleProgressModule, imports: [[
              common.CommonModule,
              i1.NgCircleProgressModule.forRoot({
                  // set defaults here
                  radius: 100,
                  outerStrokeWidth: 16,
                  innerStrokeWidth: 8,
                  outerStrokeColor: "#78C000",
                  innerStrokeColor: "#C7E596",
                  animationDuration: 300,
              })
          ]] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CircleProgressModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: [
                          CircleProgressComponent
                      ],
                      imports: [
                          common.CommonModule,
                          i1.NgCircleProgressModule.forRoot({
                              // set defaults here
                              radius: 100,
                              outerStrokeWidth: 16,
                              innerStrokeWidth: 8,
                              outerStrokeColor: "#78C000",
                              innerStrokeColor: "#C7E596",
                              animationDuration: 300,
                          })
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
