import * as i0 from '@angular/core';
import { Component, Input, ViewChild, NgModule, Injectable } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from 'ng-apexcharts';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import * as i1$2 from 'ng-circle-progress';
import { NgCircleProgressModule } from 'ng-circle-progress';

class AngularLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
AngularLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AngularLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: AngularLibComponent, selector: "lib-angular-lib", ngImport: i0, template: `
    <p>
      angular-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-angular-lib',
                    template: `
    <p>
      angular-lib works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class ColComponent {
    constructor() {
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
    ngOnInit() {
    }
}
ColComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ColComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ColComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: ColComponent, selector: "lib-col", inputs: { xs: "xs", xsPush: "xsPush", xsHidden: "xsHidden", sm: "sm", smPush: "smPush", smHidden: "smHidden", md: "md", mdPush: "mdPush", mdHidden: "mdHidden", lg: "lg", lgPush: "lgPush", lgHidden: "lgHidden", xl: "xl", xlPush: "xlPush", xlHidden: "xlHidden", noPadding: "noPadding", className: "className", style: "style" }, ngImport: i0, template: "<!-- <div [ngClass]=\"{`col-xs-{{ xs }}`: xs, 'second': true, 'third': false}\"> -->\n<div\n  [ngClass]=\"[\n    xs ? 'col-xs-' + xs : '',\n    xsPush ? 'col-xs-push-' + xsPush : '',\n    xsHidden ? 'col-xs-hidden' : '',\n\n    sm ? 'col-sm-' + sm : '',\n    smPush ? 'col-sm-push-' + smPush : '',\n    smHidden ? 'col-sm-hidden-' : '',\n\n    md ? 'col-md-' + md : '',\n    mdPush ? 'col-md-push-' + mdPush : '',\n    mdHidden ? 'col-md-hidden' : '',\n\n    lg ? 'col-lg-' + lg : '',\n    lgPush ? 'col-lg-push-' + lgPush : '',\n    lgHidden ? 'col-lg-hidden' : '',\n\n    xl ? 'col-xl-' + xl : '',\n    xlPush ? 'col-xl-push-' + xlPush : '',\n    xlHidden ? 'col-xl-hidden' : '',\n\n    noPadding ? 'col-no-padding' : '',\n\n    className\n  ]\"\n  [ngStyle]=\"style\"\n>\n\n  <ng-content></ng-content>\n</div>", styles: [".col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,.col-xs-3,.col-sm-3,.col-md-3,.col-lg-3,.col-xs-4,.col-sm-4,.col-md-4,.col-lg-4,.col-xs-5,.col-sm-5,.col-md-5,.col-lg-5,.col-xs-6,.col-sm-6,.col-md-6,.col-lg-6,.col-xs-7,.col-sm-7,.col-md-7,.col-lg-7,.col-xs-8,.col-sm-8,.col-md-8,.col-lg-8,.col-xs-9,.col-sm-9,.col-md-9,.col-lg-9,.col-xs-10,.col-sm-10,.col-md-10,.col-lg-10,.col-xs-11,.col-sm-11,.col-md-11,.col-lg-11,.col-xs-12,.col-sm-12,.col-md-12,.col-lg-12{min-height:1px;padding:0 8px}.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{margin-left:100%}.col-xs-push-11{margin-left:91.66666667%}.col-xs-push-10{margin-left:83.33333333%}.col-xs-push-9{margin-left:75%}.col-xs-push-8{margin-left:66.66666667%}.col-xs-push-7{margin-left:58.33333333%}.col-xs-push-6{margin-left:50%}.col-xs-push-5{margin-left:41.66666667%}.col-xs-push-4{margin-left:33.33333333%}.col-xs-push-3{margin-left:25%}.col-xs-push-2{margin-left:16.66666667%}.col-xs-push-1{margin-left:8.33333333%}.col-xs-push-0{margin-left:auto}@media (max-width: 720px){.col-xs-hidden{display:none}.col-sm-hidden{display:none}.col-md-hidden{display:none}.col-lg-hidden{display:none}}@media (min-width: 720px){.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{float:left;padding:0 12px}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{margin-left:100%}.col-sm-push-11{margin-left:91.66666667%}.col-sm-push-10{margin-left:83.33333333%}.col-sm-push-9{margin-left:75%}.col-sm-push-8{margin-left:66.66666667%}.col-sm-push-7{margin-left:58.33333333%}.col-sm-push-6{margin-left:50%}.col-sm-push-5{margin-left:41.66666667%}.col-sm-push-4{margin-left:33.33333333%}.col-sm-push-3{margin-left:25%}.col-sm-push-2{margin-left:16.66666667%}.col-sm-push-1{margin-left:8.33333333%}.col-sm-push-0{margin-left:auto}@media (min-width: 720px) and (max-width: 960px){.col-sm-hidden{display:none}}}@media (min-width: 960px){.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{float:left;padding:0 12px}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{margin-left:100%}.col-md-push-11{margin-left:91.66666667%}.col-md-push-10{margin-left:83.33333333%}.col-md-push-9{margin-left:75%}.col-md-push-8{margin-left:66.66666667%}.col-md-push-7{margin-left:58.33333333%}.col-md-push-6{margin-left:50%}.col-md-push-5{margin-left:41.66666667%}.col-md-push-4{margin-left:33.33333333%}.col-md-push-3{margin-left:25%}.col-md-push-2{margin-left:16.66666667%}.col-md-push-1{margin-left:8.33333333%}.col-md-push-0{margin-left:auto}@media (min-width: 960px) and (max-width: 1280px){.col-md-hidden{display:none}}}@media (min-width: 1280px){.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{float:left;padding:0 12px}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{margin-left:100%}.col-lg-push-11{margin-left:91.66666667%}.col-lg-push-10{margin-left:83.33333333%}.col-lg-push-9{margin-left:75%}.col-lg-push-8{margin-left:66.66666667%}.col-lg-push-7{margin-left:58.33333333%}.col-lg-push-6{margin-left:50%}.col-lg-push-5{margin-left:41.66666667%}.col-lg-push-4{margin-left:33.33333333%}.col-lg-push-3{margin-left:25%}.col-lg-push-2{margin-left:16.66666667%}.col-lg-push-1{margin-left:8.33333333%}.col-lg-push-0{margin-left:auto}@media (min-width: 1280px) and (max-width: 1600px){.col-lg-hidden{display:none}}}@media (min-width: 1600px){.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12{float:left;padding:0 12px}.col-xl-12{width:100%}.col-xl-11{width:91.66666667%}.col-xl-10{width:83.33333333%}.col-xl-9{width:75%}.col-xl-8{width:66.66666667%}.col-xl-7{width:58.33333333%}.col-xl-6{width:50%}.col-xl-5{width:41.66666667%}.col-xl-4{width:33.33333333%}.col-xl-3{width:25%}.col-xl-2{width:16.66666667%}.col-xl-1{width:8.33333333%}.col-xl-pull-12{right:100%}.col-xl-pull-11{right:91.66666667%}.col-xl-pull-10{right:83.33333333%}.col-xl-pull-9{right:75%}.col-xl-pull-8{right:66.66666667%}.col-xl-pull-7{right:58.33333333%}.col-xl-pull-6{right:50%}.col-xl-pull-5{right:41.66666667%}.col-xl-pull-4{right:33.33333333%}.col-xl-pull-3{right:25%}.col-xl-pull-2{right:16.66666667%}.col-xl-pull-1{right:8.33333333%}.col-xl-pull-0{right:auto}.col-xl-push-12{margin-left:100%}.col-xl-push-11{margin-left:91.66666667%}.col-xl-push-10{margin-left:83.33333333%}.col-xl-push-9{margin-left:75%}.col-xl-push-8{margin-left:66.66666667%}.col-xl-push-7{margin-left:58.33333333%}.col-xl-push-6{margin-left:50%}.col-xl-push-5{margin-left:41.66666667%}.col-xl-push-4{margin-left:33.33333333%}.col-xl-push-3{margin-left:25%}.col-xl-push-2{margin-left:16.66666667%}.col-xl-push-1{margin-left:8.33333333%}.col-xl-push-0{margin-left:auto}}.col-no-padding{padding:0}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ColComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-col',
                    templateUrl: './col.component.html',
                    styleUrls: ['./col.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { xs: [{
                type: Input
            }], xsPush: [{
                type: Input
            }], xsHidden: [{
                type: Input
            }], sm: [{
                type: Input
            }], smPush: [{
                type: Input
            }], smHidden: [{
                type: Input
            }], md: [{
                type: Input
            }], mdPush: [{
                type: Input
            }], mdHidden: [{
                type: Input
            }], lg: [{
                type: Input
            }], lgPush: [{
                type: Input
            }], lgHidden: [{
                type: Input
            }], xl: [{
                type: Input
            }], xlPush: [{
                type: Input
            }], xlHidden: [{
                type: Input
            }], noPadding: [{
                type: Input
            }], className: [{
                type: Input
            }], style: [{
                type: Input
            }] } });

class ContainerComponent {
    constructor() {
        this.full = false;
        this.className = '';
        this.style = {};
    }
    ngOnInit() {
    }
}
ContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: ContainerComponent, selector: "lib-container", inputs: { full: "full", className: "className", style: "style" }, ngImport: i0, template: "<main\n  [ngClass]=\"[\n    'container',\n    full ? 'container__full' : '',\n    className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <ng-content></ng-content>\n</main>", styles: [".container{min-height:calc(100vh - 440px);margin-right:16px;margin-left:16px}@media (min-width: 720px){.container{margin-right:24px;margin-left:24px}}@media (min-width: 960px){.container{margin-right:40px;margin-left:40px}}@media (min-width: 1280px){.container{margin-right:40px;margin-left:40px}}@media (min-width: 1600px){.container{max-width:1600px;margin:0 auto;&__full{max-width:100%;margin-right:72px;margin-left:72px}}}.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.clearfix:before,.clearfix:after,.container:before,.container:after,.container-fluid:before,.container-fluid:after,.row:before,.row:after{display:table;content:\" \"}.clearfix:after,.container:after,.container-fluid:after,.row:after{clear:both}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-container',
                    templateUrl: './container.component.html',
                    styleUrls: ['./container.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { full: [{
                type: Input
            }], className: [{
                type: Input
            }], style: [{
                type: Input
            }] } });

class CardComponent {
    constructor() {
        this.className = '';
        this.style = {};
    }
    ngOnInit() {
    }
}
CardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CardComponent, selector: "lib-card", inputs: { className: "className", style: "style" }, ngImport: i0, template: "<article\n  [ngClass]=\"[\n    'card__container',\n    className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <ng-content></ng-content>\n</article>", styles: [".card__container{width:100%;background:#FFFFFF;box-shadow:0 3.43611px 3.43611px #cdcdcd40;border-radius:8px}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-card',
                    templateUrl: './card.component.html',
                    styleUrls: ['./card.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { className: [{
                type: Input
            }], style: [{
                type: Input
            }] } });

class ChartCollumnComponent {
    constructor() {
        // @Input() isHorizontal: boolean | string = false
        this.isHorizontal = false;
        this.isYLegend = false;
        this.chart = ChartComponent;
        // this.dataChart = dataChart;
        // this.chartOptions = {
        //   series: [
        //     {
        //       // name: "distibuted",
        //       data: [21, 22, 10]
        //     }
        //     // {
        //     //   name: "distibuted2",
        //     //   data: [21, 22, 10, 28, 16, 21, 13, 30]
        //     // }
        //   ],
        //   chart: {
        //     height: 350,
        //     type: "bar"
        //     // events: {
        //     //   click: function (chart, w, e) {
        //     //     // console.log(chart, w, e)
        //     //   }
        //     // }
        //   },
        //   colors: [
        //     "#0095D9",
        //     "#5A892E",
        //     "#CB22D7",
        //     "#F64A00",
        //     "#355C7D",
        //     "#AE7B15",
        //     "#33A49D",
        //     "#6247DE"
        //   ],
        //   plotOptions: {
        //     bar: {
        //       columnWidth: "45%",
        //       distributed: true,
        //       // horizontal: Boolean(this.isHorizontal)
        //       horizontal: this.isHorizontal
        //     }
        //   },
        //   dataLabels: {
        //     enabled: false
        //   },
        //   legend: {
        //     show: false
        //     // show: true
        //   },
        //   grid: {
        //     show: false
        //   },
        //   yaxis: {
        //     show: true
        //   },
        //   xaxis: {
        //     // show: false,
        //     categories: [
        //       // "South Korea",
        //       "Excelência operacional",
        //       // ["John", "Doe"],
        //       ["Joe", "Smith"],
        //       ["Jake", "Williams"]
        //     ],
        //     labels: {
        //       style: {
        //         colors: [
        //           "#008FFB",
        //           "#00E396",
        //           "#FEB019",
        //           "#FF4560",
        //           "#775DD0",
        //           "#546E7A",
        //           "#26a69a",
        //           "#D10CE8"
        //         ],
        //         fontSize: "12px"
        //       }
        //     }
        //   }
        // };
    }
    ngOnInit() {
        console.log(this.chartOptions);
        console.log(this.isHorizontal);
        this.chartOptions = {
            series: [
                {
                    // name: "distibuted",
                    // data: [21, 22, 10]
                    data: this.data.map((item) => item.data)
                }
                // {
                //   name: "distibuted2",
                //   data: [21, 22, 10, 28, 16, 21, 13, 30]
                // }
            ],
            chart: {
                height: 350,
                type: "bar"
                // events: {
                //   click: function (chart, w, e) {
                //     // console.log(chart, w, e)
                //   }
                // }
            },
            // colors: [
            //   "#0095D9",
            //   "#5A892E",
            //   "#CB22D7",
            //   "#F64A00",
            //   "#355C7D",
            //   "#AE7B15",
            //   "#33A49D",
            //   "#6247DE"
            // ],
            colors: this.data.map((item) => item.color),
            plotOptions: {
                bar: {
                    columnWidth: "45%",
                    distributed: true,
                    // horizontal: Boolean(this.isHorizontal)
                    horizontal: this.isHorizontal
                }
            },
            tooltip: {
                custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                    console.log(series);
                    console.log(seriesIndex);
                    console.log(dataPointIndex);
                    console.log(w);
                    // return '<div class="arrow_box">' +
                    //   '<p>' + w.config.xaxis.categories[dataPointIndex].join(' ') + '</p>' +
                    //   '<span style="color: ${color};>' + w.config.colors + '</span>' +
                    //   '<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
                    //   '</div>'
                    return `<div class="chart-collumn__tooltip">
            <p class="chart-collumn__tooltip__title">${w.config.xaxis.categories[dataPointIndex].join(' ')}</p>
            <span class="chart-collumn__tooltip__bullet" style="color: ${w.config.colors[dataPointIndex]};"></span>
            <span class="color: #B2B5BF;">Valor: </span> <span>${series[seriesIndex][dataPointIndex]}</span>
            </div>`;
                    // return `<lib-card></lib-card>`
                }
                // custon: CircleProgressComponent
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
                // show: true
            },
            grid: {
                show: false
            },
            yaxis: {
                show: this.isYLegend
            },
            xaxis: {
                // show: false,
                // categories: [
                //   // "South Korea",
                //   "Excelência operacional",
                //   // ["John", "Doe"],
                //   ["Joe", "Smith"],
                //   ["Jake", "Williams"]
                // ],
                categories: this.data.map((item) => item.name.split(' ')),
                labels: {
                    style: {
                        // colors: [
                        //   "#008FFB",
                        //   "#00E396",
                        //   "#FEB019",
                        //   "#FF4560",
                        //   "#775DD0",
                        //   "#546E7A",
                        //   "#26a69a",
                        //   "#D10CE8"
                        // ],
                        // colors: this.data.map((item: string | number | any) => item.color),
                        fontSize: "12px"
                    }
                }
            }
        };
        console.log(this.chartOptions);
        console.log(this.isHorizontal);
    }
}
ChartCollumnComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ChartCollumnComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChartCollumnComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: ChartCollumnComponent, selector: "lib-chart-collumn", inputs: { isHorizontal: "isHorizontal", isYLegend: "isYLegend", data: "data" }, viewQueries: [{ propertyName: "chart", first: true, predicate: ["chart"], descendants: true }], ngImport: i0, template: "<div id=\"chart\">\n  <apx-chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [dataLabels]=\"chartOptions.dataLabels\"\n    [plotOptions]=\"chartOptions.plotOptions\"\n    [yaxis]=\"chartOptions.yaxis\"\n    [xaxis]=\"chartOptions.xaxis\"\n    [legend]=\"chartOptions.legend\"\n    [colors]=\"chartOptions.colors\"\n    [grid]=\"chartOptions.grid\"\n    [tooltip]=\"chartOptions.tooltip\" \n  ></apx-chart>\n</div>\n\n<div class=\"chart-collumn__tooltip\"></div>\n\n<lib-card></lib-card>\n", styles: [".chart-collumn__tooltip{color:red;width:50px;height:50px}.chart-collumn__tooltip__bullet{color:red}.chart-collumn__tooltip__bullet:before{content:\"\\2022\";font-weight:bold;margin-right:5px}\n"], components: [{ type: i1$1.ChartComponent, selector: "apx-chart", inputs: ["autoUpdateSeries", "chart", "annotations", "colors", "dataLabels", "series", "stroke", "labels", "legend", "markers", "noData", "fill", "tooltip", "plotOptions", "responsive", "xaxis", "yaxis", "grid", "states", "title", "subtitle", "theme"] }, { type: CardComponent, selector: "lib-card", inputs: ["className", "style"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ChartCollumnComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-chart-collumn',
                    templateUrl: './chart-collumn.component.html',
                    styleUrls: ['./chart-collumn.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { chart: [{
                type: ViewChild,
                args: ["chart"]
            }], isHorizontal: [{
                type: Input
            }], isYLegend: [{
                type: Input
            }], data: [{
                type: Input
            }] } });

class AlertComponent {
    constructor() {
        this.color = 'green';
        this.className = '';
        this.style = {};
    }
    ngOnInit() {
    }
}
AlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: AlertComponent, selector: "lib-alert", inputs: { color: "color", className: "className", style: "style" }, ngImport: i0, template: "<p>alert works!</p>\n\n\n<div\n  [ngClass]=\"[\n    'disclaimer__container',\n    'disclaimer__' + color,\n    className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <ng-content></ng-content>\n</div>", styles: [".disclaimer__container{display:flex;align-items:center;border-radius:5px;padding:12px}.disclaimer__red{background:#F8E8E8;border:1px solid #B71C1C}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-alert',
                    templateUrl: './alert.component.html',
                    styleUrls: ['./alert.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], className: [{
                type: Input
            }], style: [{
                type: Input
            }] } });

class TextComponent {
    constructor() {
        this.type = 'normal';
        this.state = 'normal';
        this.className = '';
        this.style = {};
    }
    ngOnInit() {
    }
}
TextComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: TextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TextComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: TextComponent, selector: "lib-text", inputs: { type: "type", state: "state", className: "className", style: "style" }, ngImport: i0, template: "<!-- <p\n  [ngClass]=\"[\n    'text__container',\n    'text__type-' + type,\n    'text__state-' + state,\n    className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <ng-content></ng-content>\n</p> -->\n\n<p\n  [ngClass]=\"[\n    'text__container',\n    'text__type--' + type,\n    'text__state--' + state,\n    className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <ng-content></ng-content>\n</p>\n", styles: [".text__container{font-family:Roboto}.text__type--small{font-size:12px}.text__type--normal{font-size:16px}.text__type--large{font-size:16px}.text__state--normal{font-weight:normal}.text__state--bold{font-weight:500}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: TextComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-text',
                    templateUrl: './text.component.html',
                    styleUrls: ['./text.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { type: [{
                type: Input
            }], state: [{
                type: Input
            }], className: [{
                type: Input
            }], style: [{
                type: Input
            }] } });

// import { CircleProgressModule } from './circle-progress/circle-progress.module';
class AngularLibModule {
}
AngularLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AngularLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, declarations: [AngularLibComponent,
        ColComponent,
        ContainerComponent,
        ChartCollumnComponent,
        CardComponent,
        AlertComponent,
        TextComponent], imports: [CommonModule,
        NgApexchartsModule
        // CircleProgressModule
    ], exports: [AngularLibComponent,
        ContainerComponent,
        ColComponent,
        ChartCollumnComponent,
        CardComponent,
        AlertComponent,
        TextComponent
        // CircleProgressModule
    ] });
AngularLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, imports: [[
            CommonModule,
            NgApexchartsModule
            // CircleProgressModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AngularLibComponent,
                        ColComponent,
                        ContainerComponent,
                        ChartCollumnComponent,
                        CardComponent,
                        AlertComponent,
                        TextComponent,
                    ],
                    imports: [
                        CommonModule,
                        NgApexchartsModule
                        // CircleProgressModule
                    ],
                    exports: [
                        AngularLibComponent,
                        ContainerComponent,
                        ColComponent,
                        ChartCollumnComponent,
                        CardComponent,
                        AlertComponent,
                        TextComponent
                        // CircleProgressModule
                    ]
                }]
        }] });

class CircleProgressComponent {
    constructor() {
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
        this.percent = 0;
    }
    ngOnInit() {
    }
    subtitleFormat(percent) {
        return `${percent}%`;
    }
}
CircleProgressComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CircleProgressComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CircleProgressComponent, selector: "lib-circle-progress", inputs: { percent: "percent" }, ngImport: i0, template: "<!-- <p>circle-progress works!</p>\n\n<circle-progress\n  [percent]=\"85\"\n  [radius]=\"100\"\n  [outerStrokeWidth]=\"16\"\n  [innerStrokeWidth]=\"8\"\n  [outerStrokeColor]=\"'#78C000'\"\n  [innerStrokeColor]=\"'#C7E596'\"\n  [animation]=\"true\"\n  [animationDuration]=\"300\"\n></circle-progress> -->\n\n<!-- <circle-progress\n  name=\"E\"\n  [options]=\"optionsE\"\n  [renderOnClick]=\"false\"\n  class=\"copy\"\n  ></circle-progress> -->\n\n  <circle-progress\n    [percent]='percent'\n    [radius]=\"60\"\n    [outerStrokeWidth]=\"10\"\n    [innerStrokeWidth]=\"20\"\n    [space]=\"-20\"\n    [outerStrokeColor]=\"'#4882c2'\"\n    [innerStrokeColor]=\"'#e7e8ea'\"\n    [showBackground]=\"false\"\n    [title]=\"subtitleFormat(percent)\"\n    [animateTitle]=\"false\"\n    [showSubtitle]=\"false\"\n    [showUnits]=\"false\"\n    [clockwise]=\"false\"\n    [animationDuration]=\"1000\"\n    [startFromZero]=\"false\"\n    [outerStrokeGradient]=\"true\"\n    [outerStrokeGradientStopColor]=\"'#53a9ff'\"\n    [lazy]=\"true\"\n    [outerStrokeWidth]=\"20\"\n    [outerStrokeLinecap]=\"'butt'\"\n  ></circle-progress>", styles: [""], components: [{ type: i1$2.CircleProgressComponent, selector: "circle-progress", inputs: ["name", "class", "backgroundGradient", "backgroundColor", "backgroundGradientStopColor", "backgroundOpacity", "backgroundStroke", "backgroundStrokeWidth", "backgroundPadding", "radius", "space", "percent", "toFixed", "maxPercent", "renderOnClick", "units", "unitsFontSize", "unitsFontWeight", "unitsColor", "outerStrokeGradient", "outerStrokeWidth", "outerStrokeColor", "outerStrokeGradientStopColor", "outerStrokeLinecap", "innerStrokeColor", "innerStrokeWidth", "titleFormat", "title", "titleColor", "titleFontSize", "titleFontWeight", "subtitleFormat", "subtitle", "subtitleColor", "subtitleFontSize", "subtitleFontWeight", "imageSrc", "imageHeight", "imageWidth", "animation", "animateTitle", "animateSubtitle", "animationDuration", "showTitle", "showSubtitle", "showUnits", "showImage", "showBackground", "showInnerStroke", "clockwise", "responsive", "startFromZero", "showZeroOuterStroke", "lazy", "options"], outputs: ["onClick"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-circle-progress',
                    templateUrl: './circle-progress.component.html',
                    styleUrls: ['./circle-progress.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { percent: [{
                type: Input
            }] } });

class CircleProgressModule {
}
CircleProgressModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CircleProgressModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressModule, declarations: [CircleProgressComponent], imports: [CommonModule, i1$2.NgCircleProgressModule], exports: [CircleProgressComponent] });
CircleProgressModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressModule, imports: [[
            CommonModule,
            NgCircleProgressModule.forRoot({
                // set defaults here
                radius: 100,
                outerStrokeWidth: 16,
                innerStrokeWidth: 8,
                outerStrokeColor: "#78C000",
                innerStrokeColor: "#C7E596",
                animationDuration: 300,
            })
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CircleProgressComponent
                    ],
                    imports: [
                        CommonModule,
                        NgCircleProgressModule.forRoot({
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

const maskDate = (value) => {
    let date = String(value).replace(/\D/g, '');
    return date.length > 4
        ? date.replace(/(\d{2})(\d{2})((\d{2,4})|(\d{1}))$/, '$1/$2/$3')
        : date.replace(/(\d{2})(\d{1,2})$/, '$1/$2');
};
const myDate = (date = '') => {
    const clearDate = String(date).replace(/[-]/g, '').replace(/[/]/g, '');
    const newDate = clearDate.substr(6, 2) + clearDate.substr(4, 2) + clearDate.substr(0, 4);
    return !date || !Number(clearDate) ? '' : maskDate(newDate);
};

const monthNames = {
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
const fullDate = (value) => {
    const simpleDate = myDate(value).split('/');
    return `${simpleDate[0]} de ${monthNames[simpleDate[1]]} de ${simpleDate[2]}`;
};

class FormatService {
    constructor() { }
    date(date = '') {
        return myDate(date);
    }
    /** Recebe a data em formato americano e devolte a data em formato brasileiro com descrição do mês */
    fullDate(date = '') {
        return fullDate(date);
    }
}
FormatService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: FormatService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FormatService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: FormatService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: FormatService, decorators: [{
            type: Injectable,
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

export { AlertComponent, AngularLibComponent, AngularLibModule, CardComponent, ChartCollumnComponent, CircleProgressComponent, CircleProgressModule, ColComponent, ContainerComponent, FormatService, TextComponent };
//# sourceMappingURL=angular-lib.js.map
