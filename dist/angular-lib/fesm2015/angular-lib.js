import * as i0 from '@angular/core';
import { Component, NgModule, Input } from '@angular/core';
import * as i1 from 'ng-circle-progress';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CommonModule } from '@angular/common';

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

// import { CircleProgressModule } from './circle-progress/circle-progress.module';
class AngularLibModule {
}
AngularLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AngularLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, declarations: [AngularLibComponent], exports: [AngularLibComponent] });
AngularLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, imports: [[
        // CircleProgressModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, decorators: [{
            type: NgModule,
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
CircleProgressComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CircleProgressComponent, selector: "lib-circle-progress", inputs: { percent: "percent" }, ngImport: i0, template: "<!-- <p>circle-progress works!</p>\n\n<circle-progress\n  [percent]=\"85\"\n  [radius]=\"100\"\n  [outerStrokeWidth]=\"16\"\n  [innerStrokeWidth]=\"8\"\n  [outerStrokeColor]=\"'#78C000'\"\n  [innerStrokeColor]=\"'#C7E596'\"\n  [animation]=\"true\"\n  [animationDuration]=\"300\"\n></circle-progress> -->\n\n<!-- <circle-progress\n  name=\"E\"\n  [options]=\"optionsE\"\n  [renderOnClick]=\"false\"\n  class=\"copy\"\n  ></circle-progress> -->\n\n  <circle-progress\n    [percent]='percent'\n    [radius]=\"60\"\n    [outerStrokeWidth]=\"10\"\n    [innerStrokeWidth]=\"20\"\n    [space]=\"-20\"\n    [outerStrokeColor]=\"'#4882c2'\"\n    [innerStrokeColor]=\"'#e7e8ea'\"\n    [showBackground]=\"false\"\n    [title]=\"subtitleFormat(percent)\"\n    [animateTitle]=\"false\"\n    [showSubtitle]=\"false\"\n    [showUnits]=\"false\"\n    [clockwise]=\"false\"\n    [animationDuration]=\"1000\"\n    [startFromZero]=\"false\"\n    [outerStrokeGradient]=\"true\"\n    [outerStrokeGradientStopColor]=\"'#53a9ff'\"\n    [lazy]=\"true\"\n    [outerStrokeWidth]=\"20\"\n    [outerStrokeLinecap]=\"'butt'\"\n  ></circle-progress>", styles: [""], components: [{ type: i1.CircleProgressComponent, selector: "circle-progress", inputs: ["name", "class", "backgroundGradient", "backgroundColor", "backgroundGradientStopColor", "backgroundOpacity", "backgroundStroke", "backgroundStrokeWidth", "backgroundPadding", "radius", "space", "percent", "toFixed", "maxPercent", "renderOnClick", "units", "unitsFontSize", "unitsFontWeight", "unitsColor", "outerStrokeGradient", "outerStrokeWidth", "outerStrokeColor", "outerStrokeGradientStopColor", "outerStrokeLinecap", "innerStrokeColor", "innerStrokeWidth", "titleFormat", "title", "titleColor", "titleFontSize", "titleFontWeight", "subtitleFormat", "subtitle", "subtitleColor", "subtitleFontSize", "subtitleFontWeight", "imageSrc", "imageHeight", "imageWidth", "animation", "animateTitle", "animateSubtitle", "animationDuration", "showTitle", "showSubtitle", "showUnits", "showImage", "showBackground", "showInnerStroke", "clockwise", "responsive", "startFromZero", "showZeroOuterStroke", "lazy", "options"], outputs: ["onClick"] }] });
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
CircleProgressModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressModule, declarations: [CircleProgressComponent], imports: [CommonModule, i1.NgCircleProgressModule], exports: [CircleProgressComponent] });
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

// export class Date {
// }
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

/*
 * Public API Surface of angular-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularLibComponent, AngularLibModule, CircleProgressComponent, CircleProgressModule };
//# sourceMappingURL=angular-lib.js.map
