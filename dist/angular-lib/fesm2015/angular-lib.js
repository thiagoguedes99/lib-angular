import * as i0 from '@angular/core';
import { Component, Input, ViewEncapsulation, ViewChild, NgModule, Injectable } from '@angular/core';
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
CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CardComponent, selector: "lib-card", inputs: { className: "className", style: "style" }, ngImport: i0, template: "<article\n  [ngClass]=\"[\n    'card__container',\n    className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <ng-content></ng-content>\n</article>", styles: [".card__container{width:100%;background:#FFFFFF;box-shadow:0 3.43611px 3.43611px #cdcdcd40;border-radius:8px;float:left}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-card',
                    templateUrl: './card.component.html',
                    styleUrls: ['./card.component.css'],
                    encapsulation: ViewEncapsulation.None
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
        this.height = '266';
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
                // height: '200',
                height: this.height,
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
ChartCollumnComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: ChartCollumnComponent, selector: "lib-chart-collumn", inputs: { isHorizontal: "isHorizontal", isYLegend: "isYLegend", height: "height", data: "data" }, viewQueries: [{ propertyName: "chart", first: true, predicate: ["chart"], descendants: true }], ngImport: i0, template: "<div id=\"chart\">\n  <apx-chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [dataLabels]=\"chartOptions.dataLabels\"\n    [plotOptions]=\"chartOptions.plotOptions\"\n    [yaxis]=\"chartOptions.yaxis\"\n    [xaxis]=\"chartOptions.xaxis\"\n    [legend]=\"chartOptions.legend\"\n    [colors]=\"chartOptions.colors\"\n    [grid]=\"chartOptions.grid\"\n    [tooltip]=\"chartOptions.tooltip\" \n  ></apx-chart>\n</div>\n\n<div class=\"chart-collumn__tooltip\"></div>\n\n<lib-card></lib-card>\n", styles: [":host ::ng-deep .chart-collumn__tooltip{padding:8px}:host ::ng-deep .chart-collumn__tooltip__title{font-style:normal;font-weight:bold;font-size:16px;line-height:120%;color:#484a4d;margin:0 0 8px}:host ::ng-deep .chart-collumn__tooltip__bullet:before{content:\"\\2022\";font-weight:bold;margin-right:5px}\n"], components: [{ type: i1$1.ChartComponent, selector: "apx-chart", inputs: ["autoUpdateSeries", "chart", "annotations", "colors", "dataLabels", "series", "stroke", "labels", "legend", "markers", "noData", "fill", "tooltip", "plotOptions", "responsive", "xaxis", "yaxis", "grid", "states", "title", "subtitle", "theme"] }, { type: CardComponent, selector: "lib-card", inputs: ["className", "style"] }] });
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
            }], height: [{
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
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: AlertComponent, selector: "lib-alert", inputs: { color: "color", className: "className", style: "style" }, ngImport: i0, template: "<div\n  [ngClass]=\"[\n    'disclaimer__container',\n    'disclaimer__' + color,\n    className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <ng-content></ng-content>\n</div>", styles: [".disclaimer__container{display:flex;align-items:center;border-radius:5px;padding:12px}.disclaimer__red{background:#F8E8E8;border:1px solid #B71C1C}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
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
        this.type = 'midium';
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

class PersonComponent {
    constructor() { }
    ngOnInit() {
    }
}
PersonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: PersonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PersonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: PersonComponent, selector: "lib-person", ngImport: i0, template: `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6667 1.98334H9.88C9.6 1.21646 8.86667 0.661133 8 0.661133C7.13333 0.661133 6.4 1.21646 6.12 1.98334H3.33333C2.6 1.98334 2 2.57834 2 3.30555V12.561C2 13.2882 2.6 13.8832 3.33333 13.8832H12.6667C13.4 13.8832 14 13.2882 14 12.561V3.30555C14 2.57834 13.4 1.98334 12.6667 1.98334ZM8 1.98334C8.36667 1.98334 8.66667 2.28084 8.66667 2.64445C8.66667 3.00806 8.36667 3.30555 8 3.30555C7.63333 3.30555 7.33333 3.00806 7.33333 2.64445C7.33333 2.28084 7.63333 1.98334 8 1.98334ZM8 4.62776C9.10667 4.62776 10 5.51365 10 6.61108C10 7.70852 9.10667 8.5944 8 8.5944C6.89333 8.5944 6 7.70852 6 6.61108C6 5.51365 6.89333 4.62776 8 4.62776ZM12 12.561H4V11.6355C4 10.3133 6.66667 9.58605 8 9.58605C9.33333 9.58605 12 10.3133 12 11.6355V12.561Z" fill="#323232"/>
    </svg>
  `, isInline: true, styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: PersonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-person',
                    template: `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6667 1.98334H9.88C9.6 1.21646 8.86667 0.661133 8 0.661133C7.13333 0.661133 6.4 1.21646 6.12 1.98334H3.33333C2.6 1.98334 2 2.57834 2 3.30555V12.561C2 13.2882 2.6 13.8832 3.33333 13.8832H12.6667C13.4 13.8832 14 13.2882 14 12.561V3.30555C14 2.57834 13.4 1.98334 12.6667 1.98334ZM8 1.98334C8.36667 1.98334 8.66667 2.28084 8.66667 2.64445C8.66667 3.00806 8.36667 3.30555 8 3.30555C7.63333 3.30555 7.33333 3.00806 7.33333 2.64445C7.33333 2.28084 7.63333 1.98334 8 1.98334ZM8 4.62776C9.10667 4.62776 10 5.51365 10 6.61108C10 7.70852 9.10667 8.5944 8 8.5944C6.89333 8.5944 6 7.70852 6 6.61108C6 5.51365 6.89333 4.62776 8 4.62776ZM12 12.561H4V11.6355C4 10.3133 6.66667 9.58605 8 9.58605C9.33333 9.58605 12 10.3133 12 11.6355V12.561Z" fill="#323232"/>
    </svg>
  `,
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
        }], ctorParameters: function () { return []; } });

class RefreshComponent {
    constructor() { }
    ngOnInit() {
    }
}
RefreshComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: RefreshComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
RefreshComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: RefreshComponent, selector: "lib-refresh", ngImport: i0, template: `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <path d="M7.99999 3.96666V5.94998L10.6667 3.30555L7.99999 0.661133V2.64445C5.05332 2.64445 2.66666 5.01121 2.66666 7.93329C2.66666 8.97123 2.97332 9.93644 3.49332 10.7496L4.46666 9.78439C4.16666 9.23567 3.99999 8.60101 3.99999 7.93329C3.99999 5.74503 5.79332 3.96666 7.99999 3.96666ZM12.5067 5.11698L11.5333 6.0822C11.8267 6.63752 12 7.26557 12 7.93329C12 10.1215 10.2067 11.8999 7.99999 11.8999V9.91661L5.33332 12.561L7.99999 15.2054V13.2221C10.9467 13.2221 13.3333 10.8554 13.3333 7.93329C13.3333 6.89536 13.0267 5.93014 12.5067 5.11698Z" fill="#323232"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="16" height="15.8665" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `, isInline: true, styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: RefreshComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-refresh',
                    template: `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <path d="M7.99999 3.96666V5.94998L10.6667 3.30555L7.99999 0.661133V2.64445C5.05332 2.64445 2.66666 5.01121 2.66666 7.93329C2.66666 8.97123 2.97332 9.93644 3.49332 10.7496L4.46666 9.78439C4.16666 9.23567 3.99999 8.60101 3.99999 7.93329C3.99999 5.74503 5.79332 3.96666 7.99999 3.96666ZM12.5067 5.11698L11.5333 6.0822C11.8267 6.63752 12 7.26557 12 7.93329C12 10.1215 10.2067 11.8999 7.99999 11.8999V9.91661L5.33332 12.561L7.99999 15.2054V13.2221C10.9467 13.2221 13.3333 10.8554 13.3333 7.93329C13.3333 6.89536 13.0267 5.93014 12.5067 5.11698Z" fill="#323232"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="16" height="15.8665" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `,
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

class CartComponent {
    constructor() { }
    ngOnInit() {
    }
}
CartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CartComponent, selector: "lib-cart", ngImport: i0, template: `
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.70592 12C3.96642 12 3.36809 12.6 3.36809 13.3333C3.36809 14.0666 3.96642 14.6666 4.70592 14.6666C5.44542 14.6666 6.05047 14.0666 6.05047 13.3333C6.05047 12.6 5.44542 12 4.70592 12ZM0.672272 1.33331V2.66665H2.01682L4.43701 7.72665L3.52944 9.35998C3.42188 9.54665 3.36137 9.76665 3.36137 9.99998C3.36137 10.7333 3.96642 11.3333 4.70592 11.3333H12.7732V9.99998H4.98828C4.89416 9.99998 4.82021 9.92665 4.82021 9.83331L4.84038 9.75331L5.44542 8.66665H10.4539C10.9581 8.66665 11.4018 8.39331 11.6304 7.97998L14.0371 3.65331C14.0909 3.55998 14.1178 3.44665 14.1178 3.33331C14.1178 2.96665 13.8152 2.66665 13.4455 2.66665H3.50255L2.87061 1.33331H0.672272ZM11.4287 12C10.6892 12 10.0908 12.6 10.0908 13.3333C10.0908 14.0666 10.6892 14.6666 11.4287 14.6666C12.1682 14.6666 12.7732 14.0666 12.7732 13.3333C12.7732 12.6 12.1682 12 11.4287 12Z" fill="#323232"/>
    </svg>
  `, isInline: true, styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-cart',
                    template: `
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.70592 12C3.96642 12 3.36809 12.6 3.36809 13.3333C3.36809 14.0666 3.96642 14.6666 4.70592 14.6666C5.44542 14.6666 6.05047 14.0666 6.05047 13.3333C6.05047 12.6 5.44542 12 4.70592 12ZM0.672272 1.33331V2.66665H2.01682L4.43701 7.72665L3.52944 9.35998C3.42188 9.54665 3.36137 9.76665 3.36137 9.99998C3.36137 10.7333 3.96642 11.3333 4.70592 11.3333H12.7732V9.99998H4.98828C4.89416 9.99998 4.82021 9.92665 4.82021 9.83331L4.84038 9.75331L5.44542 8.66665H10.4539C10.9581 8.66665 11.4018 8.39331 11.6304 7.97998L14.0371 3.65331C14.0909 3.55998 14.1178 3.44665 14.1178 3.33331C14.1178 2.96665 13.8152 2.66665 13.4455 2.66665H3.50255L2.87061 1.33331H0.672272ZM11.4287 12C10.6892 12 10.0908 12.6 10.0908 13.3333C10.0908 14.0666 10.6892 14.6666 11.4287 14.6666C12.1682 14.6666 12.7732 14.0666 12.7732 13.3333C12.7732 12.6 12.1682 12 11.4287 12Z" fill="#323232"/>
    </svg>
  `,
                    styleUrls: ['./cart.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class VerificationComponent {
    constructor() { }
    ngOnInit() {
    }
}
VerificationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: VerificationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VerificationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: VerificationComponent, selector: "lib-verification", ngImport: i0, template: `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.0667 7.1928L10.12 6.25403L7.29333 9.06373L5.88 7.65557L4.93333 8.59434L7.29333 10.9347L11.0667 7.1928Z" fill="#323232"/>
      <path d="M12.6667 2.64441H3.33333C2.59333 2.64441 2 3.2394 2 3.96662V11.8999C2 12.6271 2.59333 13.2221 3.33333 13.2221H12.6667C13.4 13.2221 14 12.6271 14 11.8999V3.96662C14 3.2394 13.4067 2.64441 12.6667 2.64441ZM12.6667 11.8999H3.33333V5.28883H12.6667V11.8999Z" fill="#323232"/>
    </svg>  
  `, isInline: true, styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: VerificationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-verification',
                    template: `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.0667 7.1928L10.12 6.25403L7.29333 9.06373L5.88 7.65557L4.93333 8.59434L7.29333 10.9347L11.0667 7.1928Z" fill="#323232"/>
      <path d="M12.6667 2.64441H3.33333C2.59333 2.64441 2 3.2394 2 3.96662V11.8999C2 12.6271 2.59333 13.2221 3.33333 13.2221H12.6667C13.4 13.2221 14 12.6271 14 11.8999V3.96662C14 3.2394 13.4067 2.64441 12.6667 2.64441ZM12.6667 11.8999H3.33333V5.28883H12.6667V11.8999Z" fill="#323232"/>
    </svg>  
  `,
                    styleUrls: ['./verification.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class AtentionComponent {
    constructor() { }
    ngOnInit() {
    }
}
AtentionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AtentionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AtentionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: AtentionComponent, selector: "lib-atention", ngImport: i0, template: `
    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 19H22L11 0L0 19ZM12 16H10V14H12V16ZM12 12H10V8H12V12Z" fill="#B71C1C"/>
    </svg>  
  `, isInline: true, styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AtentionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-atention',
                    template: `
    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 19H22L11 0L0 19ZM12 16H10V14H12V16ZM12 12H10V8H12V12Z" fill="#B71C1C"/>
    </svg>  
  `,
                    styleUrls: ['./atention.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class IconComponent {
    constructor() {
        this.name = '';
    }
    ngOnInit() {
        console.log('ngOnInit Icon inicio');
        console.log(this.name);
        console.log('ngOnInit Icon final');
    }
}
IconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
IconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: IconComponent, selector: "lib-icon", inputs: { name: "name" }, ngImport: i0, template: "<lib-person *ngIf=\"name === 'person'\"></lib-person>\n\n<lib-refresh *ngIf=\"name === 'refresh'\"></lib-refresh>\n\n<lib-cart *ngIf=\"name === 'cart'\"></lib-cart>\n\n<lib-verification *ngIf=\"name === 'verification'\"></lib-verification>\n\n<lib-atention *ngIf=\"name === 'atention'\"></lib-atention>", styles: [""], components: [{ type: PersonComponent, selector: "lib-person" }, { type: RefreshComponent, selector: "lib-refresh" }, { type: CartComponent, selector: "lib-cart" }, { type: VerificationComponent, selector: "lib-verification" }, { type: AtentionComponent, selector: "lib-atention" }], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-icon',
                    templateUrl: './icon.component.html',
                    styleUrls: ['./icon.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { name: [{
                type: Input
            }] } });

class IconModule {
}
IconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: IconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: IconModule, declarations: [IconComponent,
        PersonComponent,
        RefreshComponent,
        CartComponent,
        VerificationComponent,
        AtentionComponent], imports: [CommonModule], exports: [IconComponent] });
IconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: IconModule, imports: [[
            CommonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: IconModule, decorators: [{
            type: NgModule,
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
                        CommonModule,
                    ],
                    exports: [
                        IconComponent
                    ]
                }]
        }] });

class PointerInfoComponent {
    constructor() {
        this.color = '';
        this.text = '';
        this.type = 'midium';
    }
    ngOnInit() {
    }
}
PointerInfoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: PointerInfoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PointerInfoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: PointerInfoComponent, selector: "lib-pointer-info", inputs: { color: "color", text: "text", type: "type" }, ngImport: i0, template: "<div class=\"pointer-info__container\">\n  <span\n    [ngClass]=\"[\n      'pointer-info__color',\n      type === 'small' ? 'pointer-info__color--small' : '',\n      type === 'midium' ? 'pointer-info__color--midium' : '',\n    ]\"\n    [ngStyle]=\"{'background-color': color}\"\n  >\n  </span>\n  <span\n    [ngClass]=\"[\n      'pointer-info__text',\n      type === 'small' ? 'pointer-info__text--small' : '',\n      type === 'midium' ? 'pointer-info__text--midium' : '',\n    ]\"\n  >\n    {{ text }}\n  </span>\n</div>", styles: [".pointer-info__container{display:flex;align-items:center}.pointer-info__color{display:inline-block;border-radius:50%;margin-right:8px}.pointer-info__color--small{height:8px;width:8px}.pointer-info__color--midium{height:14px;width:14px}.pointer-info__text{font-family:Roboto;font-style:normal;font-weight:normal;line-height:25px;color:#89837f}.pointer-info__text--small{font-size:16px}.pointer-info__text--midium{font-size:12px}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: PointerInfoComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-pointer-info',
                    templateUrl: './pointer-info.component.html',
                    styleUrls: ['./pointer-info.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], text: [{
                type: Input
            }], type: [{
                type: Input
            }] } });

class TagComponent {
    constructor() {
        this.color = '';
        this.text = '';
    }
    ngOnInit() {
    }
}
TagComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: TagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TagComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: TagComponent, selector: "lib-tag", inputs: { color: "color", text: "text" }, ngImport: i0, template: "<span\n  class=\"tag__container\"\n  [ngStyle]=\"{'background-color': color}\"\n>\n  {{ text }}\n</span>", styles: [".tag__container{display:flex;align-items:center;justify-content:center;width:52px;height:25px;border-radius:12.4242px;color:#fff;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:25px}\n"], directives: [{ type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: TagComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-tag',
                    templateUrl: './tag.component.html',
                    styleUrls: ['./tag.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], text: [{
                type: Input
            }] } });

class TableComponent {
    constructor() {
        this.thead = [];
        this.tbody = [];
        this.className = '';
        this.style = {};
    }
    ngOnInit() {
    }
}
TableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: TableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: TableComponent, selector: "lib-table", inputs: { thead: "thead", tbody: "tbody", className: "className", style: "style" }, ngImport: i0, template: "<!-- <p>table works!</p>\n -->\n\n<table\n  [ngClass]=\"[\n  'table',\n  'table-responsive',\n  className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <thead>\n    <tr>\n      <!-- {thead.map((item, index) => <th key={index}>{item}</th> )} -->\n      <!-- <th key={index}>{item}</th> -->\n      <ng-content></ng-content>\n    </tr>\n  </thead>\n  <tbody>\n    <!-- {\n      tbody.map((item, index) =>\n        <tr key={index}>\n          {item.map((i, ind) => <td key={ind}>{i}</td> )}\n        </tr>\n      )} -->\n    <!-- <tr> -->\n       <ng-content select=\"[tbody]\"></ng-content>\n    <!-- </tr> -->\n  </tbody>\n</table>\n", styles: [":host ::ng-deep .table{max-width:100%;background-color:transparent;border-collapse:collapse;border-spacing:0;font-family:arial}:host ::ng-deep .table{width:100%}:host ::ng-deep .table th,:host ::ng-deep .table td{font-size:14px;padding:8px;line-height:20px;text-align:center;vertical-align:middle}:host ::ng-deep .table tbody tr:last-child>td{border-bottom:none}:host ::ng-deep .table tbody td{line-height:17px;border-bottom:#F0F1F2 solid 1px;padding-top:16px;padding-bottom:16px;color:#484a4d}:host ::ng-deep .table td:last-child{border-right:0}:host ::ng-deep .table thead th{color:#b2b5bf}:host ::ng-deep .table thead th *,:host ::ng-deep .table tbody td *{display:block}@media (max-width: 800px){:host ::ng-deep .table tbody td{border-bottom:none;border-right:#F0F1F2 solid 1px;padding:8px 15px}:host ::ng-deep .table td:last-child{border-right:#F0F1F2 solid 1px}:host ::ng-deep .table-responsive{display:block;position:relative;width:100%}:host ::ng-deep .table-responsive thead,:host ::ng-deep .table-responsive tbody,:host ::ng-deep .table-responsive th,:host ::ng-deep .table-responsive td,:host ::ng-deep .table-responsive tr{display:block}:host ::ng-deep .table-responsive td,:host ::ng-deep .table-responsive th{height:50px}:host ::ng-deep .table td{height:50}:host ::ng-deep .table-responsive thead{float:left}:host ::ng-deep .table-responsive tbody{width:auto;position:relative;overflow-x:auto;-webkit-overflow-scrolling:touch;white-space:nowrap}:host ::ng-deep .table-responsive tbody tr{display:inline-block}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-table',
                    templateUrl: './table.component.html',
                    styleUrls: ['./table.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { thead: [{
                type: Input
            }], tbody: [{
                type: Input
            }], className: [{
                type: Input
            }], style: [{
                type: Input
            }] } });

class AngularLibModule {
}
AngularLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AngularLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, declarations: [AngularLibComponent,
        ColComponent,
        ContainerComponent,
        ChartCollumnComponent,
        CardComponent,
        AlertComponent,
        TextComponent,
        PointerInfoComponent,
        TagComponent,
        TableComponent], imports: [CommonModule,
        NgApexchartsModule], exports: [AngularLibComponent,
        ContainerComponent,
        ColComponent,
        ChartCollumnComponent,
        CardComponent,
        AlertComponent,
        TextComponent,
        IconModule,
        PointerInfoComponent,
        TagComponent,
        TableComponent] });
AngularLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, imports: [[
            CommonModule,
            NgApexchartsModule,
        ], IconModule] });
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
                        PointerInfoComponent,
                        TagComponent,
                        TableComponent,
                    ],
                    imports: [
                        CommonModule,
                        NgApexchartsModule,
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
                        TableComponent
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
CircleProgressComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CircleProgressComponent, selector: "lib-circle-progress", inputs: { percent: "percent" }, ngImport: i0, template: "<!-- <p>circle-progress works!</p>\n\n<circle-progress\n  [percent]=\"85\"\n  [radius]=\"100\"\n  [outerStrokeWidth]=\"16\"\n  [innerStrokeWidth]=\"8\"\n  [outerStrokeColor]=\"'#78C000'\"\n  [innerStrokeColor]=\"'#C7E596'\"\n  [animation]=\"true\"\n  [animationDuration]=\"300\"\n></circle-progress> -->\n\n<!-- <circle-progress\n  name=\"E\"\n  [options]=\"optionsE\"\n  [renderOnClick]=\"false\"\n  class=\"copy\"\n  ></circle-progress> -->\n\n  <circle-progress\n    [percent]='percent'\n    [radius]=\"60\"\n    [outerStrokeWidth]=\"10\"\n    [innerStrokeWidth]=\"20\"\n    [space]=\"-20\"\n    [outerStrokeColor]=\"'#4882c2'\"\n    [innerStrokeColor]=\"'#e7e8ea'\"\n    [showBackground]=\"false\"\n    [title]=\"subtitleFormat(percent)\"\n    [animateTitle]=\"true\"\n    [animation]=\"true\"\n    [showSubtitle]=\"false\"\n    [showUnits]=\"false\"\n    [clockwise]=\"false\"\n    [animationDuration]=\"1000\"\n    [startFromZero]=\"false\"\n    [outerStrokeGradient]=\"true\"\n    [outerStrokeGradientStopColor]=\"'#53a9ff'\"\n    [lazy]=\"false\"\n    [outerStrokeWidth]=\"20\"\n    [outerStrokeLinecap]=\"'butt'\"\n    [responsive]=\"true\"\n  ></circle-progress>", styles: [""], components: [{ type: i1$2.CircleProgressComponent, selector: "circle-progress", inputs: ["name", "class", "backgroundGradient", "backgroundColor", "backgroundGradientStopColor", "backgroundOpacity", "backgroundStroke", "backgroundStrokeWidth", "backgroundPadding", "radius", "space", "percent", "toFixed", "maxPercent", "renderOnClick", "units", "unitsFontSize", "unitsFontWeight", "unitsColor", "outerStrokeGradient", "outerStrokeWidth", "outerStrokeColor", "outerStrokeGradientStopColor", "outerStrokeLinecap", "innerStrokeColor", "innerStrokeWidth", "titleFormat", "title", "titleColor", "titleFontSize", "titleFontWeight", "subtitleFormat", "subtitle", "subtitleColor", "subtitleFontSize", "subtitleFontWeight", "imageSrc", "imageHeight", "imageWidth", "animation", "animateTitle", "animateSubtitle", "animationDuration", "showTitle", "showSubtitle", "showUnits", "showImage", "showBackground", "showInnerStroke", "clockwise", "responsive", "startFromZero", "showZeroOuterStroke", "lazy", "options"], outputs: ["onClick"] }] });
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

export { AlertComponent, AngularLibComponent, AngularLibModule, CardComponent, ChartCollumnComponent, CircleProgressComponent, CircleProgressModule, ColComponent, ContainerComponent, FormatService, IconComponent, IconModule, PointerInfoComponent, TableComponent, TagComponent, TextComponent };
//# sourceMappingURL=angular-lib.js.map
