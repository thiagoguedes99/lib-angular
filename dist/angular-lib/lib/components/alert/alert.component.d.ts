import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AlertComponent implements OnInit {
    color: 'green' | 'red' | 'blue' | 'yellow';
    className: string;
    style: object;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "lib-alert", never, { "color": "color"; "className": "className"; "style": "style"; }, {}, never, ["*"]>;
}
