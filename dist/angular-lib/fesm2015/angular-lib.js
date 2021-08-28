import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
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
    constructor() { }
    ngOnInit() {
    }
}
CircleProgressComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CircleProgressComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CircleProgressComponent, selector: "lib-circle-progress", ngImport: i0, template: "<p>circle-progress works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-circle-progress',
                    templateUrl: './circle-progress.component.html',
                    styleUrls: ['./circle-progress.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class CircleProgressModule {
}
CircleProgressModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CircleProgressModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressModule, declarations: [CircleProgressComponent], imports: [CommonModule], exports: [CircleProgressComponent] });
CircleProgressModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CircleProgressComponent
                    ],
                    imports: [
                        CommonModule
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

export { AngularLibComponent, AngularLibModule, CircleProgressComponent, CircleProgressModule };
//# sourceMappingURL=angular-lib.js.map
