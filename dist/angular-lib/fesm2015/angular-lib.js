import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class AngularLibService {
    constructor() { }
}
AngularLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AngularLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

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

class AngularLibModule {
}
AngularLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AngularLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, declarations: [AngularLibComponent], exports: [AngularLibComponent] });
AngularLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, decorators: [{
            type: NgModule,
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

export { AngularLibComponent, AngularLibModule, AngularLibService };
//# sourceMappingURL=angular-lib.js.map
