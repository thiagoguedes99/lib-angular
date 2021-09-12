(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ng-apexcharts'), require('ng-circle-progress')) :
  typeof define === 'function' && define.amd ? define('angular-lib', ['exports', '@angular/core', '@angular/common', 'ng-apexcharts', 'ng-circle-progress'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['angular-lib'] = {}, global.ng.core, global.ng.common, global.i1$1, global.i1$2));
}(this, (function (exports, i0, i1, i1$1, i1$2) { 'use strict';

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
  var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
  var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);

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

  var ColComponent = /** @class */ (function () {
      function ColComponent() {
          this.xs = '';
          this.xsPush = '';
          this.xsHidden = '';
          this.sm = '';
          this.smPush = '';
          this.smHidden = '';
          this.md = '';
          this.mdPush = '';
          this.mdHidden = '';
          this.lg = '';
          this.lgPush = '';
          this.lgHidden = '';
          this.xl = '';
          this.xlPush = '';
          this.xlHidden = '';
          this.noPadding = '';
          this.className = '';
          this.style = {};
      }
      ColComponent.prototype.ngOnInit = function () {
      };
      return ColComponent;
  }());
  ColComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: ColComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  ColComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: ColComponent, selector: "lib-col", inputs: { xs: "xs", xsPush: "xsPush", xsHidden: "xsHidden", sm: "sm", smPush: "smPush", smHidden: "smHidden", md: "md", mdPush: "mdPush", mdHidden: "mdHidden", lg: "lg", lgPush: "lgPush", lgHidden: "lgHidden", xl: "xl", xlPush: "xlPush", xlHidden: "xlHidden", noPadding: "noPadding", className: "className", style: "style" }, ngImport: i0__namespace, template: "<!-- <div [ngClass]=\"{`col-xs-{{ xs }}`: xs, 'second': true, 'third': false}\"> -->\n<div\n  [ngClass]=\"[\n    xs ? 'col-xs-' + xs : '',\n    xsPush ? 'col-xs-push-' + xsPush : '',\n    xsHidden ? 'col-xs-hidden' : '',\n\n    sm ? 'col-sm-' + sm : '',\n    smPush ? 'col-sm-push-' + smPush : '',\n    smHidden ? 'col-sm-hidden-' : '',\n\n    md ? 'col-md-' + md : '',\n    mdPush ? 'col-md-push-' + mdPush : '',\n    mdHidden ? 'col-md-hidden' : '',\n\n    lg ? 'col-lg-' + lg : '',\n    lgPush ? 'col-lg-push-' + lgPush : '',\n    lgHidden ? 'col-lg-hidden' : '',\n\n    xl ? 'col-xl-' + xl : '',\n    xlPush ? 'col-xl-push-' + xlPush : '',\n    xlHidden ? 'col-xl-hidden' : '',\n\n    noPadding ? 'col-no-padding' : '',\n\n    className\n  ]\"\n  [ngStyle]=\"style\"\n>\n\n  <ng-content></ng-content>\n</div>", styles: [".col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,.col-xs-3,.col-sm-3,.col-md-3,.col-lg-3,.col-xs-4,.col-sm-4,.col-md-4,.col-lg-4,.col-xs-5,.col-sm-5,.col-md-5,.col-lg-5,.col-xs-6,.col-sm-6,.col-md-6,.col-lg-6,.col-xs-7,.col-sm-7,.col-md-7,.col-lg-7,.col-xs-8,.col-sm-8,.col-md-8,.col-lg-8,.col-xs-9,.col-sm-9,.col-md-9,.col-lg-9,.col-xs-10,.col-sm-10,.col-md-10,.col-lg-10,.col-xs-11,.col-sm-11,.col-md-11,.col-lg-11,.col-xs-12,.col-sm-12,.col-md-12,.col-lg-12{min-height:1px;padding:0 8px}.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{margin-left:100%}.col-xs-push-11{margin-left:91.66666667%}.col-xs-push-10{margin-left:83.33333333%}.col-xs-push-9{margin-left:75%}.col-xs-push-8{margin-left:66.66666667%}.col-xs-push-7{margin-left:58.33333333%}.col-xs-push-6{margin-left:50%}.col-xs-push-5{margin-left:41.66666667%}.col-xs-push-4{margin-left:33.33333333%}.col-xs-push-3{margin-left:25%}.col-xs-push-2{margin-left:16.66666667%}.col-xs-push-1{margin-left:8.33333333%}.col-xs-push-0{margin-left:auto}@media (max-width: 720px){.col-xs-hidden{display:none}.col-sm-hidden{display:none}.col-md-hidden{display:none}.col-lg-hidden{display:none}}@media (min-width: 720px){.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{float:left;padding:0 12px}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{margin-left:100%}.col-sm-push-11{margin-left:91.66666667%}.col-sm-push-10{margin-left:83.33333333%}.col-sm-push-9{margin-left:75%}.col-sm-push-8{margin-left:66.66666667%}.col-sm-push-7{margin-left:58.33333333%}.col-sm-push-6{margin-left:50%}.col-sm-push-5{margin-left:41.66666667%}.col-sm-push-4{margin-left:33.33333333%}.col-sm-push-3{margin-left:25%}.col-sm-push-2{margin-left:16.66666667%}.col-sm-push-1{margin-left:8.33333333%}.col-sm-push-0{margin-left:auto}@media (min-width: 720px) and (max-width: 960px){.col-sm-hidden{display:none}}}@media (min-width: 960px){.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{float:left;padding:0 12px}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{margin-left:100%}.col-md-push-11{margin-left:91.66666667%}.col-md-push-10{margin-left:83.33333333%}.col-md-push-9{margin-left:75%}.col-md-push-8{margin-left:66.66666667%}.col-md-push-7{margin-left:58.33333333%}.col-md-push-6{margin-left:50%}.col-md-push-5{margin-left:41.66666667%}.col-md-push-4{margin-left:33.33333333%}.col-md-push-3{margin-left:25%}.col-md-push-2{margin-left:16.66666667%}.col-md-push-1{margin-left:8.33333333%}.col-md-push-0{margin-left:auto}@media (min-width: 960px) and (max-width: 1280px){.col-md-hidden{display:none}}}@media (min-width: 1280px){.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{float:left;padding:0 12px}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{margin-left:100%}.col-lg-push-11{margin-left:91.66666667%}.col-lg-push-10{margin-left:83.33333333%}.col-lg-push-9{margin-left:75%}.col-lg-push-8{margin-left:66.66666667%}.col-lg-push-7{margin-left:58.33333333%}.col-lg-push-6{margin-left:50%}.col-lg-push-5{margin-left:41.66666667%}.col-lg-push-4{margin-left:33.33333333%}.col-lg-push-3{margin-left:25%}.col-lg-push-2{margin-left:16.66666667%}.col-lg-push-1{margin-left:8.33333333%}.col-lg-push-0{margin-left:auto}@media (min-width: 1280px) and (max-width: 1600px){.col-lg-hidden{display:none}}}@media (min-width: 1600px){.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12{float:left;padding:0 12px}.col-xl-12{width:100%}.col-xl-11{width:91.66666667%}.col-xl-10{width:83.33333333%}.col-xl-9{width:75%}.col-xl-8{width:66.66666667%}.col-xl-7{width:58.33333333%}.col-xl-6{width:50%}.col-xl-5{width:41.66666667%}.col-xl-4{width:33.33333333%}.col-xl-3{width:25%}.col-xl-2{width:16.66666667%}.col-xl-1{width:8.33333333%}.col-xl-pull-12{right:100%}.col-xl-pull-11{right:91.66666667%}.col-xl-pull-10{right:83.33333333%}.col-xl-pull-9{right:75%}.col-xl-pull-8{right:66.66666667%}.col-xl-pull-7{right:58.33333333%}.col-xl-pull-6{right:50%}.col-xl-pull-5{right:41.66666667%}.col-xl-pull-4{right:33.33333333%}.col-xl-pull-3{right:25%}.col-xl-pull-2{right:16.66666667%}.col-xl-pull-1{right:8.33333333%}.col-xl-pull-0{right:auto}.col-xl-push-12{margin-left:100%}.col-xl-push-11{margin-left:91.66666667%}.col-xl-push-10{margin-left:83.33333333%}.col-xl-push-9{margin-left:75%}.col-xl-push-8{margin-left:66.66666667%}.col-xl-push-7{margin-left:58.33333333%}.col-xl-push-6{margin-left:50%}.col-xl-push-5{margin-left:41.66666667%}.col-xl-push-4{margin-left:33.33333333%}.col-xl-push-3{margin-left:25%}.col-xl-push-2{margin-left:16.66666667%}.col-xl-push-1{margin-left:8.33333333%}.col-xl-push-0{margin-left:auto}}.col-no-padding{padding:0}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: ColComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-col',
                      templateUrl: './col.component.html',
                      styleUrls: ['./col.component.css']
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { xs: [{
                  type: i0.Input
              }], xsPush: [{
                  type: i0.Input
              }], xsHidden: [{
                  type: i0.Input
              }], sm: [{
                  type: i0.Input
              }], smPush: [{
                  type: i0.Input
              }], smHidden: [{
                  type: i0.Input
              }], md: [{
                  type: i0.Input
              }], mdPush: [{
                  type: i0.Input
              }], mdHidden: [{
                  type: i0.Input
              }], lg: [{
                  type: i0.Input
              }], lgPush: [{
                  type: i0.Input
              }], lgHidden: [{
                  type: i0.Input
              }], xl: [{
                  type: i0.Input
              }], xlPush: [{
                  type: i0.Input
              }], xlHidden: [{
                  type: i0.Input
              }], noPadding: [{
                  type: i0.Input
              }], className: [{
                  type: i0.Input
              }], style: [{
                  type: i0.Input
              }] } });

  var ContainerComponent = /** @class */ (function () {
      function ContainerComponent() {
          this.full = false;
          this.className = '';
          this.style = {};
      }
      ContainerComponent.prototype.ngOnInit = function () {
      };
      return ContainerComponent;
  }());
  ContainerComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: ContainerComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  ContainerComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: ContainerComponent, selector: "lib-container", inputs: { full: "full", className: "className", style: "style" }, ngImport: i0__namespace, template: "<main\n  [ngClass]=\"[\n    'container',\n    full ? 'container__full' : '',\n    className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <ng-content></ng-content>\n</main>", styles: [".container{min-height:calc(100vh - 440px);margin-right:16px;margin-left:16px}@media (min-width: 720px){.container{margin-right:24px;margin-left:24px}}@media (min-width: 960px){.container{margin-right:40px;margin-left:40px}}@media (min-width: 1280px){.container{margin-right:40px;margin-left:40px}}@media (min-width: 1600px){.container{max-width:1600px;margin:0 auto;&__full{max-width:100%;margin-right:72px;margin-left:72px}}}.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.clearfix:before,.clearfix:after,.container:before,.container:after,.container-fluid:before,.container-fluid:after,.row:before,.row:after{display:table;content:\" \"}.clearfix:after,.container:after,.container-fluid:after,.row:after{clear:both}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: ContainerComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-container',
                      templateUrl: './container.component.html',
                      styleUrls: ['./container.component.css']
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { full: [{
                  type: i0.Input
              }], className: [{
                  type: i0.Input
              }], style: [{
                  type: i0.Input
              }] } });

  var ChartCollumnComponent = /** @class */ (function () {
      function ChartCollumnComponent() {
          this.isHorizontal = false;
          this.isYLegend = false;
          this.height = '266';
          this.chart = i1$1.ChartComponent;
      }
      ChartCollumnComponent.prototype.ngOnInit = function () {
          this.chartOptions = {
              series: [
                  {
                      data: this.data.map(function (item) { return item.data; })
                  }
              ],
              chart: {
                  height: this.height,
                  type: "bar"
              },
              colors: this.data.map(function (item) { return item.color; }),
              plotOptions: {
                  bar: {
                      columnWidth: "45%",
                      distributed: true,
                      horizontal: this.isHorizontal
                  }
              },
              tooltip: {
                  custom: function (_a) {
                      var series = _a.series, seriesIndex = _a.seriesIndex, dataPointIndex = _a.dataPointIndex, w = _a.w;
                      return "<div class=\"chart-collumn__tooltip\">\n            <p class=\"chart-collumn__tooltip__title\">" + w.config.xaxis.categories[dataPointIndex].join(' ') + "</p>\n            <span class=\"chart-collumn__tooltip__bullet\" style=\"color: " + w.config.colors[dataPointIndex] + ";\"></span>\n            <span class=\"color: #B2B5BF;\">Valor: </span> <span>" + series[seriesIndex][dataPointIndex] + "</span>\n            </div>";
                  }
              },
              dataLabels: {
                  enabled: false
              },
              legend: {
                  show: false
              },
              grid: {
                  show: false
              },
              yaxis: {
                  show: this.isYLegend
              },
              xaxis: {
                  categories: this.data.map(function (item) { return item.name.split(' '); }),
                  labels: {
                      style: {
                          fontSize: "12px"
                      }
                  }
              }
          };
      };
      return ChartCollumnComponent;
  }());
  ChartCollumnComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: ChartCollumnComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  ChartCollumnComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: ChartCollumnComponent, selector: "lib-chart-collumn", inputs: { isHorizontal: "isHorizontal", isYLegend: "isYLegend", height: "height", data: "data" }, viewQueries: [{ propertyName: "chart", first: true, predicate: ["chart"], descendants: true }], ngImport: i0__namespace, template: "<div id=\"chart\">\n  <apx-chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [dataLabels]=\"chartOptions.dataLabels\"\n    [plotOptions]=\"chartOptions.plotOptions\"\n    [yaxis]=\"chartOptions.yaxis\"\n    [xaxis]=\"chartOptions.xaxis\"\n    [legend]=\"chartOptions.legend\"\n    [colors]=\"chartOptions.colors\"\n    [grid]=\"chartOptions.grid\"\n    [tooltip]=\"chartOptions.tooltip\"\n  ></apx-chart>\n</div>\n\n<!-- <div class=\"chart-collumn__tooltip\"></div>\n\n<lib-card></lib-card> -->\n", styles: [":host ::ng-deep .chart-collumn__tooltip{padding:8px}:host ::ng-deep .chart-collumn__tooltip__title{font-style:normal;font-weight:bold;font-size:16px;line-height:120%;color:#484a4d;margin:0 0 8px}:host ::ng-deep .chart-collumn__tooltip__bullet:before{content:\"\\2022\";font-weight:bold;margin-right:5px}\n"], components: [{ type: i1__namespace$1.ChartComponent, selector: "apx-chart", inputs: ["autoUpdateSeries", "chart", "annotations", "colors", "dataLabels", "series", "stroke", "labels", "legend", "markers", "noData", "fill", "tooltip", "plotOptions", "responsive", "xaxis", "yaxis", "grid", "states", "title", "subtitle", "theme"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: ChartCollumnComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-chart-collumn',
                      templateUrl: './chart-collumn.component.html',
                      styleUrls: ['./chart-collumn.component.css']
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { chart: [{
                  type: i0.ViewChild,
                  args: ["chart"]
              }], isHorizontal: [{
                  type: i0.Input
              }], isYLegend: [{
                  type: i0.Input
              }], height: [{
                  type: i0.Input
              }], data: [{
                  type: i0.Input
              }] } });

  var CardComponent = /** @class */ (function () {
      function CardComponent() {
          this.className = '';
          this.style = {};
      }
      CardComponent.prototype.ngOnInit = function () {
      };
      return CardComponent;
  }());
  CardComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CardComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  CardComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CardComponent, selector: "lib-card", inputs: { className: "className", style: "style" }, ngImport: i0__namespace, template: "<article\n  [ngClass]=\"[\n    'card__container',\n    className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <ng-content></ng-content>\n</article>", styles: [".card__container{width:100%;background:#FFFFFF;box-shadow:0 3.43611px 3.43611px #cdcdcd40;border-radius:8px;float:left}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], encapsulation: i0__namespace.ViewEncapsulation.None });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CardComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-card',
                      templateUrl: './card.component.html',
                      styleUrls: ['./card.component.css'],
                      encapsulation: i0.ViewEncapsulation.None
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { className: [{
                  type: i0.Input
              }], style: [{
                  type: i0.Input
              }] } });

  var AlertComponent = /** @class */ (function () {
      function AlertComponent() {
          this.color = 'green';
          this.className = '';
          this.style = {};
      }
      AlertComponent.prototype.ngOnInit = function () {
      };
      return AlertComponent;
  }());
  AlertComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AlertComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  AlertComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: AlertComponent, selector: "lib-alert", inputs: { color: "color", className: "className", style: "style" }, ngImport: i0__namespace, template: "<div\n  [ngClass]=\"[\n    'disclaimer__container',\n    'disclaimer__' + color,\n    className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <ng-content></ng-content>\n</div>", styles: [".disclaimer__container{display:flex;align-items:center;border-radius:5px;padding:12px}.disclaimer__red{background:#F8E8E8;border:1px solid #B71C1C}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AlertComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-alert',
                      templateUrl: './alert.component.html',
                      styleUrls: ['./alert.component.css']
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                  type: i0.Input
              }], className: [{
                  type: i0.Input
              }], style: [{
                  type: i0.Input
              }] } });

  var TextComponent = /** @class */ (function () {
      function TextComponent() {
          this.type = 'midium';
          this.state = 'normal';
          this.className = '';
          this.style = {};
      }
      TextComponent.prototype.ngOnInit = function () {
      };
      return TextComponent;
  }());
  TextComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: TextComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  TextComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: TextComponent, selector: "lib-text", inputs: { type: "type", state: "state", className: "className", style: "style" }, ngImport: i0__namespace, template: "<p\n  [ngClass]=\"[\n    'text__container',\n    'text__type--' + type,\n    'text__state--' + state,\n    className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <ng-content></ng-content>\n</p>\n", styles: [".text__container{font-family:Roboto}.text__type--small{font-size:12px}.text__type--normal{font-size:16px}.text__type--large{font-size:16px}.text__state--normal{font-weight:normal}.text__state--bold{font-weight:500}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: TextComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-text',
                      templateUrl: './text.component.html',
                      styleUrls: ['./text.component.css']
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { type: [{
                  type: i0.Input
              }], state: [{
                  type: i0.Input
              }], className: [{
                  type: i0.Input
              }], style: [{
                  type: i0.Input
              }] } });

  var PersonComponent = /** @class */ (function () {
      function PersonComponent() {
          this.style = {};
      }
      PersonComponent.prototype.ngOnInit = function () {
      };
      return PersonComponent;
  }());
  PersonComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: PersonComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  PersonComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: PersonComponent, selector: "lib-person", inputs: { style: "style" }, ngImport: i0__namespace, template: "\n    <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" [ngStyle]=\"style\">\n      <path d=\"M12.6667 1.98334H9.88C9.6 1.21646 8.86667 0.661133 8 0.661133C7.13333 0.661133 6.4 1.21646 6.12 1.98334H3.33333C2.6 1.98334 2 2.57834 2 3.30555V12.561C2 13.2882 2.6 13.8832 3.33333 13.8832H12.6667C13.4 13.8832 14 13.2882 14 12.561V3.30555C14 2.57834 13.4 1.98334 12.6667 1.98334ZM8 1.98334C8.36667 1.98334 8.66667 2.28084 8.66667 2.64445C8.66667 3.00806 8.36667 3.30555 8 3.30555C7.63333 3.30555 7.33333 3.00806 7.33333 2.64445C7.33333 2.28084 7.63333 1.98334 8 1.98334ZM8 4.62776C9.10667 4.62776 10 5.51365 10 6.61108C10 7.70852 9.10667 8.5944 8 8.5944C6.89333 8.5944 6 7.70852 6 6.61108C6 5.51365 6.89333 4.62776 8 4.62776ZM12 12.561H4V11.6355C4 10.3133 6.66667 9.58605 8 9.58605C9.33333 9.58605 12 10.3133 12 11.6355V12.561Z\" fill=\"#323232\"/>\n    </svg>\n  ", isInline: true, styles: [""], directives: [{ type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: PersonComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-person',
                      template: "\n    <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" [ngStyle]=\"style\">\n      <path d=\"M12.6667 1.98334H9.88C9.6 1.21646 8.86667 0.661133 8 0.661133C7.13333 0.661133 6.4 1.21646 6.12 1.98334H3.33333C2.6 1.98334 2 2.57834 2 3.30555V12.561C2 13.2882 2.6 13.8832 3.33333 13.8832H12.6667C13.4 13.8832 14 13.2882 14 12.561V3.30555C14 2.57834 13.4 1.98334 12.6667 1.98334ZM8 1.98334C8.36667 1.98334 8.66667 2.28084 8.66667 2.64445C8.66667 3.00806 8.36667 3.30555 8 3.30555C7.63333 3.30555 7.33333 3.00806 7.33333 2.64445C7.33333 2.28084 7.63333 1.98334 8 1.98334ZM8 4.62776C9.10667 4.62776 10 5.51365 10 6.61108C10 7.70852 9.10667 8.5944 8 8.5944C6.89333 8.5944 6 7.70852 6 6.61108C6 5.51365 6.89333 4.62776 8 4.62776ZM12 12.561H4V11.6355C4 10.3133 6.66667 9.58605 8 9.58605C9.33333 9.58605 12 10.3133 12 11.6355V12.561Z\" fill=\"#323232\"/>\n    </svg>\n  ",
                      // template: `
                      //   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      //     <rect width="16" height="16" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 16 0)" fill="url(#pattern1)"/>
                      //     <defs>
                      //       <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                      //         <use xlink:href="#image1" transform="translate(-0.17795 -0.227273) scale(0.0222437 0.0227273)"/>
                      //       </pattern>
                      //       <image id="image1" width="59" height="62" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA+CAYAAACV6GMAAAACeUlEQVRoBe1ZPcrCQBDNBWy8hFiIldhaaS1YeAUPYWFno6WVYKNg5Q3ECwgqgoIiVjYiYmEj/szHCwjfF+LnamZCSGYgaHbfTObNW9fdjUURMitCXEnJhlVtVVaVDUEFdBiHQERXCqqsa1lC0KjKhkBEVwqqrGtZQtDoq7KXy4Umkwn1ej0aDAY0nU7per36VkZfyD4eDxoOh5TJZMiyrD8X2tAHjLSJkwUJKBmLxahSqdBqtaL7/W5f+I429AEjTVic7Gw2o2QySfV63XXIYhijDxhgJU2U7O12o2q1SsVikY7H40se6AMGWPhImSjZ0+lEpVKJms3m2/yBARY+UiZK9nA4UKFQoG63+zZ/YICFj5SJko2UspH6zWI4RmY2BtlI/c8+CUdiBfV7Zv29NsaKCetktPllorOxXyRMn6NkTStlisP6d7vd0mg0cr3Q58dWT1TZ8/lMrVaLUqnUn22dc5uHe2CAhY+UiZFdLpeUz+cpHo9TrVaj+XzuOhlhglqv1zYGWPjAV8JEyC4WC8pms/ZOZrPZGOcNLHY/8EUMbmMnu9/v7YTL5TLh+6cGH/iC9Df+/z2PnWy73aZ0Ou1JGaiKGIjFaaxkn5vwRqPh6YgFS0zEeLfp/7QQrGTH4zElEgnCp1fjjPXMhZVsv9+nXC5Hu93uGf/rT8RALMTkMlaynKcNn5xymBZDyZpWyolTZZ0VMbzXYWxYqFcw9t+s2yLfS5vJMewrcs52VrI4Ou10OvbrDLzS8HohFuehOStZZyWDdq9kg6YIVz6qLFclgxZHlQ2aIlz5qLJclQxaHFU2aIpw5aPKclUyaHFU2aApwpVPpJT9AYdKlzjjKB/VAAAAAElFTkSuQmCC"/>
                      //     </defs>
                      //   </svg>
                      // `,
                      styleUrls: ['./person.component.css']
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { style: [{
                  type: i0.Input
              }] } });

  var RefreshComponent = /** @class */ (function () {
      function RefreshComponent() {
      }
      RefreshComponent.prototype.ngOnInit = function () {
      };
      return RefreshComponent;
  }());
  RefreshComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: RefreshComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  RefreshComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: RefreshComponent, selector: "lib-refresh", ngImport: i0__namespace, template: "\n    <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g clip-path=\"url(#clip0)\">\n        <path d=\"M7.99999 3.96666V5.94998L10.6667 3.30555L7.99999 0.661133V2.64445C5.05332 2.64445 2.66666 5.01121 2.66666 7.93329C2.66666 8.97123 2.97332 9.93644 3.49332 10.7496L4.46666 9.78439C4.16666 9.23567 3.99999 8.60101 3.99999 7.93329C3.99999 5.74503 5.79332 3.96666 7.99999 3.96666ZM12.5067 5.11698L11.5333 6.0822C11.8267 6.63752 12 7.26557 12 7.93329C12 10.1215 10.2067 11.8999 7.99999 11.8999V9.91661L5.33332 12.561L7.99999 15.2054V13.2221C10.9467 13.2221 13.3333 10.8554 13.3333 7.93329C13.3333 6.89536 13.0267 5.93014 12.5067 5.11698Z\" fill=\"#323232\"/>\n      </g>\n      <defs>\n        <clipPath id=\"clip0\">\n          <rect width=\"16\" height=\"15.8665\" fill=\"white\"/>\n        </clipPath>\n      </defs>\n    </svg>\n  ", isInline: true, styles: [""] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: RefreshComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-refresh',
                      template: "\n    <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g clip-path=\"url(#clip0)\">\n        <path d=\"M7.99999 3.96666V5.94998L10.6667 3.30555L7.99999 0.661133V2.64445C5.05332 2.64445 2.66666 5.01121 2.66666 7.93329C2.66666 8.97123 2.97332 9.93644 3.49332 10.7496L4.46666 9.78439C4.16666 9.23567 3.99999 8.60101 3.99999 7.93329C3.99999 5.74503 5.79332 3.96666 7.99999 3.96666ZM12.5067 5.11698L11.5333 6.0822C11.8267 6.63752 12 7.26557 12 7.93329C12 10.1215 10.2067 11.8999 7.99999 11.8999V9.91661L5.33332 12.561L7.99999 15.2054V13.2221C10.9467 13.2221 13.3333 10.8554 13.3333 7.93329C13.3333 6.89536 13.0267 5.93014 12.5067 5.11698Z\" fill=\"#323232\"/>\n      </g>\n      <defs>\n        <clipPath id=\"clip0\">\n          <rect width=\"16\" height=\"15.8665\" fill=\"white\"/>\n        </clipPath>\n      </defs>\n    </svg>\n  ",
                      // template: `
                      //   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      //   <rect width="16" height="16" transform="matrix(1 0 0 -1 0 16)" fill="url(#pattern0)"/>
                      //     <defs>
                      //       <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                      //         <use xlink:href="#image0" transform="translate(-0.0909091) scale(0.0218531 0.0227273)"/>
                      //       </pattern>
                      //       <image id="image0" width="52" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAyCAYAAAATIfj2AAAEJklEQVRoBe2Yyyt+QRjH33/AxkJZKSVZSJIsbCixESmSBdlISUpISIoIZSUWsiBkIaJk4VLIxqVcEqJcchdCcsnl++s7/c6by9E7M+95T9KZejvnPefMPPN5LjPPMy78seb6YzxwgH67RR0LORayWQOOy9mscGVxllvo/Pwc/f39yM3NRWRkJFwul/j5+/sjKSkJtbW1WFhYwMvLi/JkZTpYAvT+/o6VlRXk5OTAz88PnHxGRgbq6+vR1taGgYEBNDY2oqyszA0ZHh6O9vZ23N/fy8xT+huvga6urlBeXi5AkpOTMTExgefn5x8nQPijoyMBGxQUhOjoaExNTYHPrWheAW1vbyMxMREREREYHx/H29ub0pwuLi5QWloqlNHZ2WnqhtfX18jMzMTo6KjU2NpAW1tbiI2NRVpaGvb396WEmX3EWOrq6kJgYCCam5u/QU1OTiIsLAyrq6tm3b890wI6OztDamqq+PHe20Z36+vrQ0BAgLga7vf09ISioiKxwMjGmjIQNVpZWYmYmBhsbGx4y+Luz3G5cNB9jXHX19eFdQYHB93febpRBpqZmQGDeXh42NPYpu9fX1+xvLws3PRrzDFeuDqWlJSA1mFcxcXF4fj42HQss4dKQIYLcHm+vb01G8/jM/ZjkHN/opVbW1txenrqXuUYM1TY2NiYiM/q6mpQCbJNCYgLAV1CxQXMJkLL0K3q6uoQGhoq4Ljkc0M+ODhAdnY2goODBdj8/LzZED8+UwLq7e1VdoEfJf9/wdhZW1tDVVWVAODGzMWBFiTY3d2dpyE+vZcGotkrKipQUFCAx8fHT4NY9YdwTIuKi4sFHGNItUkDUVPUWENDg6oMW7+XBrq8vBTJJd3uNzcHqLu72+cGYo6XkJAAHW+QttDDwwPy8/NRU1Pj3jN8Rba5uQmWF3Nzc8oipIE4MheE9PR03NzcKAtS6cDMPSoqCjs7OyrdxLdKQKqZr/JsAJEVMDtgxSubkH6UowR0cnIifLulpcVnbre7uytSIp09iGBKQEzrOzo6RPrDNMjqxs2bNVF8fLyoanXGVwKiAB6CpKSkoLCwEFworGyLi4siQ+jp6dH2AGUgAkxPTyMkJORTMeYtmFE05uXlacWOIV8LiDkXXYNJJLX5ta4xBpe98tCEFTBLem9dWQuIE/0IxbM2nRWJMUk3I4gVMJyXNpABxbMA4ziK+wdBZRpXTOP4i0kvizwrmldAxgT29vbEISNrGO7wTU1NWFpaEhuwceDBs7rDw0OMjIwgKytLHF2xuKNCWAlb1SwB4mQ4cVahRi1jHAGbXY3qVMdNPYFbBvRREN2O1pidncXQ0JA4DmaWwcMRq5f6j3J57xOgr0Ls/O8A2altHVmOhXS0Zmcfx0J2altHlmMhHa3Z2cexkJ3a1pH15yz0D0gIEVAcOsGWAAAAAElFTkSuQmCC"/>
                      //     </defs>
                      //   </svg>   
                      // `,
                      styleUrls: ['./refresh.component.css']
                  }]
          }], ctorParameters: function () { return []; } });

  var CartComponent = /** @class */ (function () {
      function CartComponent() {
      }
      CartComponent.prototype.ngOnInit = function () {
      };
      return CartComponent;
  }());
  CartComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CartComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  CartComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CartComponent, selector: "lib-cart", ngImport: i0__namespace, template: "\n    <svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M4.70592 12C3.96642 12 3.36809 12.6 3.36809 13.3333C3.36809 14.0666 3.96642 14.6666 4.70592 14.6666C5.44542 14.6666 6.05047 14.0666 6.05047 13.3333C6.05047 12.6 5.44542 12 4.70592 12ZM0.672272 1.33331V2.66665H2.01682L4.43701 7.72665L3.52944 9.35998C3.42188 9.54665 3.36137 9.76665 3.36137 9.99998C3.36137 10.7333 3.96642 11.3333 4.70592 11.3333H12.7732V9.99998H4.98828C4.89416 9.99998 4.82021 9.92665 4.82021 9.83331L4.84038 9.75331L5.44542 8.66665H10.4539C10.9581 8.66665 11.4018 8.39331 11.6304 7.97998L14.0371 3.65331C14.0909 3.55998 14.1178 3.44665 14.1178 3.33331C14.1178 2.96665 13.8152 2.66665 13.4455 2.66665H3.50255L2.87061 1.33331H0.672272ZM11.4287 12C10.6892 12 10.0908 12.6 10.0908 13.3333C10.0908 14.0666 10.6892 14.6666 11.4287 14.6666C12.1682 14.6666 12.7732 14.0666 12.7732 13.3333C12.7732 12.6 12.1682 12 11.4287 12Z\" fill=\"#323232\"/>\n    </svg>\n  ", isInline: true, styles: [""] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CartComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-cart',
                      template: "\n    <svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M4.70592 12C3.96642 12 3.36809 12.6 3.36809 13.3333C3.36809 14.0666 3.96642 14.6666 4.70592 14.6666C5.44542 14.6666 6.05047 14.0666 6.05047 13.3333C6.05047 12.6 5.44542 12 4.70592 12ZM0.672272 1.33331V2.66665H2.01682L4.43701 7.72665L3.52944 9.35998C3.42188 9.54665 3.36137 9.76665 3.36137 9.99998C3.36137 10.7333 3.96642 11.3333 4.70592 11.3333H12.7732V9.99998H4.98828C4.89416 9.99998 4.82021 9.92665 4.82021 9.83331L4.84038 9.75331L5.44542 8.66665H10.4539C10.9581 8.66665 11.4018 8.39331 11.6304 7.97998L14.0371 3.65331C14.0909 3.55998 14.1178 3.44665 14.1178 3.33331C14.1178 2.96665 13.8152 2.66665 13.4455 2.66665H3.50255L2.87061 1.33331H0.672272ZM11.4287 12C10.6892 12 10.0908 12.6 10.0908 13.3333C10.0908 14.0666 10.6892 14.6666 11.4287 14.6666C12.1682 14.6666 12.7732 14.0666 12.7732 13.3333C12.7732 12.6 12.1682 12 11.4287 12Z\" fill=\"#323232\"/>\n    </svg>\n  ",
                      styleUrls: ['./cart.component.css']
                  }]
          }], ctorParameters: function () { return []; } });

  var VerificationComponent = /** @class */ (function () {
      function VerificationComponent() {
      }
      VerificationComponent.prototype.ngOnInit = function () {
      };
      return VerificationComponent;
  }());
  VerificationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: VerificationComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  VerificationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: VerificationComponent, selector: "lib-verification", ngImport: i0__namespace, template: "\n    <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M11.0667 7.1928L10.12 6.25403L7.29333 9.06373L5.88 7.65557L4.93333 8.59434L7.29333 10.9347L11.0667 7.1928Z\" fill=\"#323232\"/>\n      <path d=\"M12.6667 2.64441H3.33333C2.59333 2.64441 2 3.2394 2 3.96662V11.8999C2 12.6271 2.59333 13.2221 3.33333 13.2221H12.6667C13.4 13.2221 14 12.6271 14 11.8999V3.96662C14 3.2394 13.4067 2.64441 12.6667 2.64441ZM12.6667 11.8999H3.33333V5.28883H12.6667V11.8999Z\" fill=\"#323232\"/>\n    </svg>  \n  ", isInline: true, styles: [""] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: VerificationComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-verification',
                      template: "\n    <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M11.0667 7.1928L10.12 6.25403L7.29333 9.06373L5.88 7.65557L4.93333 8.59434L7.29333 10.9347L11.0667 7.1928Z\" fill=\"#323232\"/>\n      <path d=\"M12.6667 2.64441H3.33333C2.59333 2.64441 2 3.2394 2 3.96662V11.8999C2 12.6271 2.59333 13.2221 3.33333 13.2221H12.6667C13.4 13.2221 14 12.6271 14 11.8999V3.96662C14 3.2394 13.4067 2.64441 12.6667 2.64441ZM12.6667 11.8999H3.33333V5.28883H12.6667V11.8999Z\" fill=\"#323232\"/>\n    </svg>  \n  ",
                      styleUrls: ['./verification.component.css']
                  }]
          }], ctorParameters: function () { return []; } });

  var AtentionComponent = /** @class */ (function () {
      function AtentionComponent() {
          this.style = {};
      }
      AtentionComponent.prototype.ngOnInit = function () {
      };
      return AtentionComponent;
  }());
  AtentionComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AtentionComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  AtentionComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: AtentionComponent, selector: "lib-atention", inputs: { style: "style" }, ngImport: i0__namespace, template: "\n    <svg width=\"22\" height=\"19\" viewBox=\"0 0 22 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" [ngStyle]=\"style\">\n      <path d=\"M0 19H22L11 0L0 19ZM12 16H10V14H12V16ZM12 12H10V8H12V12Z\" fill=\"#B71C1C\"/>\n    </svg>  \n  ", isInline: true, styles: [""], directives: [{ type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AtentionComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-atention',
                      template: "\n    <svg width=\"22\" height=\"19\" viewBox=\"0 0 22 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" [ngStyle]=\"style\">\n      <path d=\"M0 19H22L11 0L0 19ZM12 16H10V14H12V16ZM12 12H10V8H12V12Z\" fill=\"#B71C1C\"/>\n    </svg>  \n  ",
                      styleUrls: ['./atention.component.css']
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { style: [{
                  type: i0.Input
              }] } });

  var IconComponent = /** @class */ (function () {
      function IconComponent() {
          this.name = '';
          this.style = {};
      }
      IconComponent.prototype.ngOnInit = function () {
          console.log('ngOnInit Icon inicio');
          console.log(this.name);
          console.log('ngOnInit Icon final');
      };
      return IconComponent;
  }());
  IconComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: IconComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  IconComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: IconComponent, selector: "lib-icon", inputs: { name: "name", style: "style" }, ngImport: i0__namespace, template: "<lib-person [style]=\"style\" *ngIf=\"name === 'person'\"></lib-person>\n\n<lib-refresh [style]=\"style\" *ngIf=\"name === 'refresh'\"></lib-refresh>\n\n<lib-cart [style]=\"style\" *ngIf=\"name === 'cart'\"></lib-cart>\n\n<lib-verification [style]=\"style\" *ngIf=\"name === 'verification'\"></lib-verification>\n\n<lib-atention [style]=\"style\" *ngIf=\"name === 'atention'\"></lib-atention>", styles: [""], components: [{ type: PersonComponent, selector: "lib-person", inputs: ["style"] }, { type: RefreshComponent, selector: "lib-refresh" }, { type: CartComponent, selector: "lib-cart" }, { type: VerificationComponent, selector: "lib-verification" }, { type: AtentionComponent, selector: "lib-atention", inputs: ["style"] }], directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: IconComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-icon',
                      templateUrl: './icon.component.html',
                      styleUrls: ['./icon.component.css']
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { name: [{
                  type: i0.Input
              }], style: [{
                  type: i0.Input
              }] } });

  var IconModule = /** @class */ (function () {
      function IconModule() {
      }
      return IconModule;
  }());
  IconModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: IconModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  IconModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: IconModule, declarations: [IconComponent,
          PersonComponent,
          RefreshComponent,
          CartComponent,
          VerificationComponent,
          AtentionComponent], imports: [i1.CommonModule], exports: [IconComponent] });
  IconModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: IconModule, imports: [[
              i1.CommonModule,
          ]] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: IconModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: [
                          IconComponent,
                          PersonComponent,
                          RefreshComponent,
                          CartComponent,
                          VerificationComponent,
                          AtentionComponent,
                      ],
                      imports: [
                          i1.CommonModule,
                      ],
                      exports: [
                          IconComponent
                      ]
                  }]
          }] });

  var PointerInfoComponent = /** @class */ (function () {
      function PointerInfoComponent() {
          this.color = '';
          this.text = '';
          this.type = 'midium';
          this.className = '';
          this.style = {};
      }
      PointerInfoComponent.prototype.ngOnInit = function () {
      };
      return PointerInfoComponent;
  }());
  PointerInfoComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: PointerInfoComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  PointerInfoComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: PointerInfoComponent, selector: "lib-pointer-info", inputs: { color: "color", text: "text", type: "type", className: "className", style: "style" }, ngImport: i0__namespace, template: "<div\n  [ngClass]=\"[\n    'pointer-info__container',\n    className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <span\n    [ngClass]=\"[\n      'pointer-info__color',\n      type === 'small' ? 'pointer-info__color--small' : '',\n      type === 'midium' ? 'pointer-info__color--midium' : '',\n    ]\"\n    [ngStyle]=\"{'background-color': color}\"\n  >\n  </span>\n  <span\n    [ngClass]=\"[\n      'pointer-info__text',\n      type === 'small' ? 'pointer-info__text--small' : '',\n      type === 'midium' ? 'pointer-info__text--midium' : '',\n    ]\"\n  >\n    {{ text }}\n  </span>\n</div>", styles: [".pointer-info__container{display:inline-flex;align-items:center}.pointer-info__color{display:inline-block;border-radius:50%;margin-right:8px}.pointer-info__color--small{height:8px;width:8px}.pointer-info__color--midium{height:14px;width:14px}.pointer-info__text{font-family:Roboto;font-style:normal;font-weight:normal;line-height:25px;color:#89837f}.pointer-info__text--small{font-size:16px}.pointer-info__text--midium{font-size:12px}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: PointerInfoComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-pointer-info',
                      templateUrl: './pointer-info.component.html',
                      styleUrls: ['./pointer-info.component.css']
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                  type: i0.Input
              }], text: [{
                  type: i0.Input
              }], type: [{
                  type: i0.Input
              }], className: [{
                  type: i0.Input
              }], style: [{
                  type: i0.Input
              }] } });

  var TagComponent = /** @class */ (function () {
      function TagComponent() {
          this.color = '';
          this.text = '';
      }
      TagComponent.prototype.ngOnInit = function () {
      };
      return TagComponent;
  }());
  TagComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: TagComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  TagComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: TagComponent, selector: "lib-tag", inputs: { color: "color", text: "text" }, ngImport: i0__namespace, template: "<span\n  class=\"tag__container\"\n  [ngStyle]=\"{'background-color': color}\"\n>\n  {{ text }}\n</span>", styles: [".tag__container{display:flex;align-items:center;justify-content:center;width:52px;height:25px;border-radius:12.4242px;color:#fff;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:25px}\n"], directives: [{ type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: TagComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-tag',
                      templateUrl: './tag.component.html',
                      styleUrls: ['./tag.component.css']
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                  type: i0.Input
              }], text: [{
                  type: i0.Input
              }] } });

  var TableComponent = /** @class */ (function () {
      function TableComponent() {
          this.className = '';
          this.style = {};
      }
      TableComponent.prototype.ngOnInit = function () {
      };
      return TableComponent;
  }());
  TableComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: TableComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  TableComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: TableComponent, selector: "lib-table", inputs: { className: "className", style: "style" }, ngImport: i0__namespace, template: "<table\n  [ngClass]=\"[\n  'table',\n  'table-responsive',\n  className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <thead>\n    <tr>\n      <ng-content></ng-content>\n    </tr>\n  </thead>\n\n  <tbody>\n    <ng-content select=\"[tbody]\"></ng-content>\n  </tbody>\n</table>\n", styles: [":host ::ng-deep .table{max-width:100%;background-color:transparent;border-collapse:collapse;border-spacing:0;font-family:arial}:host ::ng-deep .table{width:100%}:host ::ng-deep .table th,:host ::ng-deep .table td{font-size:14px;padding:8px;line-height:20px;text-align:center;vertical-align:middle}:host ::ng-deep .table tbody tr:last-child>td{border-bottom:none}:host ::ng-deep .table tbody td{line-height:17px;border-bottom:#F0F1F2 solid 1px;padding-top:16px;padding-bottom:16px;color:#484a4d}:host ::ng-deep .table td:last-child{border-right:0}:host ::ng-deep .table thead th{color:#b2b5bf}:host ::ng-deep .table thead th *,:host ::ng-deep .table tbody td *{display:block}@media (max-width: 800px){:host ::ng-deep .table tbody td{border-bottom:none;border-right:#F0F1F2 solid 1px;padding:8px 15px}:host ::ng-deep .table td:last-child{border-right:#F0F1F2 solid 1px}:host ::ng-deep .table-responsive{display:block;position:relative;width:100%}:host ::ng-deep .table-responsive thead,:host ::ng-deep .table-responsive tbody,:host ::ng-deep .table-responsive th,:host ::ng-deep .table-responsive td,:host ::ng-deep .table-responsive tr{display:block}:host ::ng-deep .table-responsive td,:host ::ng-deep .table-responsive th{height:50px}:host ::ng-deep .table td{height:50}:host ::ng-deep .table-responsive thead{float:left}:host ::ng-deep .table-responsive tbody{width:auto;position:relative;overflow-x:auto;-webkit-overflow-scrolling:touch;white-space:nowrap}:host ::ng-deep .table-responsive tbody tr{display:inline-block}}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: TableComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-table',
                      templateUrl: './table.component.html',
                      styleUrls: ['./table.component.css']
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { className: [{
                  type: i0.Input
              }], style: [{
                  type: i0.Input
              }] } });

  var ChartLineComponent = /** @class */ (function () {
      function ChartLineComponent() {
          this.height = '266';
          this.title = '';
          this.monthNames = [
              'janeiro',
              'fevereiro',
              'março',
              'abril',
              'maio',
              'junho',
              'julho',
              'agosto',
              'setembro',
              'outubro',
              'novembro',
              'dezembro',
          ];
          this.chart = i1$1.ChartComponent;
      }
      ChartLineComponent.prototype.ngOnInit = function () {
          var _this = this;
          this.chartOptions = {
              series: [
                  {
                      data: this.data.map(function (item) { return item.data; })
                  }
              ],
              chart: {
                  height: this.height,
                  type: "line",
                  zoom: {
                      enabled: false
                  }
              },
              stroke: {
                  curve: "straight"
              },
              title: {
                  text: this.title,
                  align: "left"
              },
              tooltip: {
                  custom: function (e) { return _this.CustomToolTip(e, _this.monthNames); }
              },
              xaxis: {
                  type: "datetime",
                  categories: this.data.map(function (item) { return new Date(item.date.replace('-', '/')).getTime(); }),
              }
          };
      };
      ChartLineComponent.prototype.CustomToolTip = function (_a, monthNames) {
          var series = _a.series, seriesIndex = _a.seriesIndex, dataPointIndex = _a.dataPointIndex, w = _a.w;
          var date = new Date(w.config.xaxis.categories[dataPointIndex]);
          return "<div class=\"chart-line__tooltip\">\n      <p class=\"chart-line__tooltip__title\">" + date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear() + "</p>\n      <span class=\"color: #B2B5BF;\">Valor: </span> <span>" + series[seriesIndex][dataPointIndex] + "</span>\n      </div>";
      };
      return ChartLineComponent;
  }());
  ChartLineComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: ChartLineComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  ChartLineComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: ChartLineComponent, selector: "lib-chart-line", inputs: { height: "height", title: "title", data: "data" }, viewQueries: [{ propertyName: "chart", first: true, predicate: ["chart"], descendants: true }], ngImport: i0__namespace, template: "<div id=\"chart\">\n  <apx-chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [xaxis]=\"chartOptions.xaxis\"\n    [dataLabels]=\"chartOptions.dataLabels\"\n    [grid]=\"chartOptions.grid\"\n    [stroke]=\"chartOptions.stroke\"\n    [title]=\"chartOptions.title\"\n    [tooltip]=\"chartOptions.tooltip\"\n  ></apx-chart>\n</div>", styles: [":host ::ng-deep .chart-line__tooltip{padding:8px}:host ::ng-deep .chart-line__tooltip__title{font-style:normal;font-weight:bold;font-size:16px;line-height:120%;color:#484a4d;margin:0 0 8px}\n"], components: [{ type: i1__namespace$1.ChartComponent, selector: "apx-chart", inputs: ["autoUpdateSeries", "chart", "annotations", "colors", "dataLabels", "series", "stroke", "labels", "legend", "markers", "noData", "fill", "tooltip", "plotOptions", "responsive", "xaxis", "yaxis", "grid", "states", "title", "subtitle", "theme"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: ChartLineComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-chart-line',
                      templateUrl: './chart-line.component.html',
                      styleUrls: ['./chart-line.component.css']
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { chart: [{
                  type: i0.ViewChild,
                  args: ["chart"]
              }], height: [{
                  type: i0.Input
              }], title: [{
                  type: i0.Input
              }], data: [{
                  type: i0.Input
              }] } });

  var ChartDonutComponent = /** @class */ (function () {
      function ChartDonutComponent() {
          this.data = [];
          this.totalData = 0;
          this.chart = i1$1.ChartComponent;
      }
      ChartDonutComponent.prototype.ngOnInit = function () {
          this.totalData = this.data
              .map(function (item) { return item.data; })
              .reduce(function (previousValue, currentValue) { return Number(previousValue) + Number(currentValue); });
          this.chartOptions = {
              series: this.data.map(function (item) { return Number(item.data); }),
              chart: {
                  width: 380,
                  type: "donut"
              },
              labels: this.data.map(function (item) { return item.name; }),
              fill: {
                  colors: this.data.map(function (item) { return item.color; })
              },
              dataLabels: {
                  enabled: false
              },
              responsive: [
                  {
                      breakpoint: 480,
                      options: {
                          chart: {
                              width: 200
                          },
                      }
                  }
              ]
          };
      };
      return ChartDonutComponent;
  }());
  ChartDonutComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: ChartDonutComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  ChartDonutComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: ChartDonutComponent, selector: "lib-chart-donut", inputs: { data: "data" }, viewQueries: [{ propertyName: "chart", first: true, predicate: ["chart"], descendants: true }], ngImport: i0__namespace, template: "<div id=\"chart\" class=\"chart-donut__container\">\n\n  <p class=\"chart-donut__total\">\n    <span>{{ totalData }}</span>\n    <span class=\"chart-donut__total__text\">Hist\u00F3rias</span>\n  </p>\n\n  <apx-chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [labels]=\"chartOptions.labels\"\n    [fill]=\"chartOptions.fill\"\n    [dataLabels]=\"chartOptions.dataLabels\"\n    [responsive]=\"chartOptions.responsive\"\n  ></apx-chart>\n</div>\n", styles: [":host ::ng-deep .apexcharts-legend{display:none}.chart-donut__container{position:relative;display:inline-flex}.chart-donut__total{position:absolute;display:inline-flex;flex-direction:column;align-items:center;transform:translate(-58%,-100%);top:50%;left:50%}.chart-donut__total__text{font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:20px;color:#89837f}\n"], components: [{ type: i1__namespace$1.ChartComponent, selector: "apx-chart", inputs: ["autoUpdateSeries", "chart", "annotations", "colors", "dataLabels", "series", "stroke", "labels", "legend", "markers", "noData", "fill", "tooltip", "plotOptions", "responsive", "xaxis", "yaxis", "grid", "states", "title", "subtitle", "theme"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: ChartDonutComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-chart-donut',
                      templateUrl: './chart-donut.component.html',
                      styleUrls: ['./chart-donut.component.css']
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { chart: [{
                  type: i0.ViewChild,
                  args: ["chart"]
              }], data: [{
                  type: i0.Input
              }] } });

  var AngularLibModule = /** @class */ (function () {
      function AngularLibModule() {
      }
      return AngularLibModule;
  }());
  AngularLibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AngularLibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  AngularLibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AngularLibModule, declarations: [AngularLibComponent,
          ColComponent,
          ContainerComponent,
          ChartCollumnComponent,
          CardComponent,
          AlertComponent,
          TextComponent,
          PointerInfoComponent,
          TagComponent,
          TableComponent,
          ChartLineComponent,
          ChartDonutComponent], imports: [i1.CommonModule,
          i1$1.NgApexchartsModule], exports: [AngularLibComponent,
          ContainerComponent,
          ColComponent,
          ChartCollumnComponent,
          CardComponent,
          AlertComponent,
          TextComponent,
          IconModule,
          PointerInfoComponent,
          TagComponent,
          TableComponent,
          ChartLineComponent,
          ChartDonutComponent] });
  AngularLibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AngularLibModule, imports: [[
              i1.CommonModule,
              i1$1.NgApexchartsModule,
          ], IconModule] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: AngularLibModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: [
                          AngularLibComponent,
                          ColComponent,
                          ContainerComponent,
                          ChartCollumnComponent,
                          CardComponent,
                          AlertComponent,
                          TextComponent,
                          PointerInfoComponent,
                          TagComponent,
                          TableComponent,
                          ChartLineComponent,
                          ChartDonutComponent,
                      ],
                      imports: [
                          i1.CommonModule,
                          i1$1.NgApexchartsModule,
                      ],
                      exports: [
                          AngularLibComponent,
                          ContainerComponent,
                          ColComponent,
                          ChartCollumnComponent,
                          CardComponent,
                          AlertComponent,
                          TextComponent,
                          IconModule,
                          PointerInfoComponent,
                          TagComponent,
                          TableComponent,
                          ChartLineComponent,
                          ChartDonutComponent
                      ]
                  }]
          }] });

  var CircleProgressComponent = /** @class */ (function () {
      function CircleProgressComponent() {
          this.percent = 0;
      }
      CircleProgressComponent.prototype.ngOnInit = function () {
      };
      CircleProgressComponent.prototype.subtitleFormat = function (percent) {
          return percent + "%";
      };
      return CircleProgressComponent;
  }());
  CircleProgressComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CircleProgressComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  CircleProgressComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CircleProgressComponent, selector: "lib-circle-progress", inputs: { percent: "percent" }, ngImport: i0__namespace, template: "<circle-progress\n  [percent]='percent'\n  [radius]=\"60\"\n  [outerStrokeWidth]=\"10\"\n  [innerStrokeWidth]=\"20\"\n  [space]=\"-20\"\n  [outerStrokeColor]=\"'#4882c2'\"\n  [innerStrokeColor]=\"'#e7e8ea'\"\n  [showBackground]=\"false\"\n  [title]=\"subtitleFormat(percent)\"\n  [animateTitle]=\"true\"\n  [animation]=\"true\"\n  [showSubtitle]=\"false\"\n  [showUnits]=\"false\"\n  [clockwise]=\"false\"\n  [animationDuration]=\"1000\"\n  [startFromZero]=\"false\"\n  [outerStrokeGradient]=\"true\"\n  [outerStrokeGradientStopColor]=\"'#53a9ff'\"\n  [lazy]=\"false\"\n  [outerStrokeWidth]=\"20\"\n  [outerStrokeLinecap]=\"'butt'\"\n  [responsive]=\"true\"\n></circle-progress>", styles: [""], components: [{ type: i1__namespace$2.CircleProgressComponent, selector: "circle-progress", inputs: ["name", "class", "backgroundGradient", "backgroundColor", "backgroundGradientStopColor", "backgroundOpacity", "backgroundStroke", "backgroundStrokeWidth", "backgroundPadding", "radius", "space", "percent", "toFixed", "maxPercent", "renderOnClick", "units", "unitsFontSize", "unitsFontWeight", "unitsColor", "outerStrokeGradient", "outerStrokeWidth", "outerStrokeColor", "outerStrokeGradientStopColor", "outerStrokeLinecap", "innerStrokeColor", "innerStrokeWidth", "titleFormat", "title", "titleColor", "titleFontSize", "titleFontWeight", "subtitleFormat", "subtitle", "subtitleColor", "subtitleFontSize", "subtitleFontWeight", "imageSrc", "imageHeight", "imageWidth", "animation", "animateTitle", "animateSubtitle", "animationDuration", "showTitle", "showSubtitle", "showUnits", "showImage", "showBackground", "showInnerStroke", "clockwise", "responsive", "startFromZero", "showZeroOuterStroke", "lazy", "options"], outputs: ["onClick"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CircleProgressComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-circle-progress',
                      templateUrl: './circle-progress.component.html',
                      styleUrls: ['./circle-progress.component.css']
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { percent: [{
                  type: i0.Input
              }] } });

  var CircleProgressModule = /** @class */ (function () {
      function CircleProgressModule() {
      }
      return CircleProgressModule;
  }());
  CircleProgressModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CircleProgressModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  CircleProgressModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CircleProgressModule, declarations: [CircleProgressComponent], imports: [i1.CommonModule, i1__namespace$2.NgCircleProgressModule], exports: [CircleProgressComponent] });
  CircleProgressModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: CircleProgressModule, imports: [[
              i1.CommonModule,
              i1$2.NgCircleProgressModule.forRoot({
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
                          i1.CommonModule,
                          i1$2.NgCircleProgressModule.forRoot({
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

  var maskDate = function (value) {
      var date = String(value).replace(/\D/g, '');
      return date.length > 4
          ? date.replace(/(\d{2})(\d{2})((\d{2,4})|(\d{1}))$/, '$1/$2/$3')
          : date.replace(/(\d{2})(\d{1,2})$/, '$1/$2');
  };
  var myDate = function (date) {
      if (date === void 0) { date = ''; }
      var clearDate = String(date).replace(/[-]/g, '').replace(/[/]/g, '');
      var newDate = clearDate.substr(6, 2) + clearDate.substr(4, 2) + clearDate.substr(0, 4);
      return !date || !Number(clearDate) ? '' : maskDate(newDate);
  };

  var monthNames = {
      '01': 'janeiro',
      '02': 'fevereiro',
      '03': 'março',
      '04': 'abril',
      '05': 'maio',
      '06': 'junho',
      '07': 'julho',
      '08': 'agosto',
      '09': 'setembro',
      '10': 'outubro',
      '11': 'novembro',
      '12': 'dezembro',
  };
  var fullDate = function (value) {
      var simpleDate = myDate(value).split('/');
      return simpleDate[0] + " de " + monthNames[simpleDate[1]] + " de " + simpleDate[2];
  };

  var FormatService = /** @class */ (function () {
      function FormatService() {
      }
      FormatService.prototype.date = function (date) {
          if (date === void 0) { date = ''; }
          return myDate(date);
      };
      /** Recebe a data em formato americano e devolte a data em formato brasileiro com descrição do mês */
      FormatService.prototype.fullDate = function (date) {
          if (date === void 0) { date = ''; }
          return fullDate(date);
      };
      return FormatService;
  }());
  FormatService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: FormatService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
  FormatService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: FormatService, providedIn: 'root' });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: FormatService, decorators: [{
              type: i0.Injectable,
              args: [{
                      providedIn: 'root'
                  }]
          }], ctorParameters: function () { return []; } });

  /*
   * Public API Surface of angular-lib
   */
  // export * from './lib/fuctions/fuctions.module';
  // export * from './lib/fuctions/date';

  /**
   * Generated bundle index. Do not edit.
   */

  exports.AlertComponent = AlertComponent;
  exports.AngularLibComponent = AngularLibComponent;
  exports.AngularLibModule = AngularLibModule;
  exports.CardComponent = CardComponent;
  exports.ChartCollumnComponent = ChartCollumnComponent;
  exports.ChartDonutComponent = ChartDonutComponent;
  exports.ChartLineComponent = ChartLineComponent;
  exports.CircleProgressComponent = CircleProgressComponent;
  exports.CircleProgressModule = CircleProgressModule;
  exports.ColComponent = ColComponent;
  exports.ContainerComponent = ContainerComponent;
  exports.FormatService = FormatService;
  exports.IconComponent = IconComponent;
  exports.IconModule = IconModule;
  exports.PointerInfoComponent = PointerInfoComponent;
  exports.TableComponent = TableComponent;
  exports.TagComponent = TagComponent;
  exports.TextComponent = TextComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-lib.umd.js.map
