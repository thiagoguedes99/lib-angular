import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CircleProgressComponent implements OnInit {
    percent: number;
    constructor();
    ngOnInit(): void;
    subtitleFormat(percent: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CircleProgressComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CircleProgressComponent, "lib-circle-progress", never, { "percent": "percent"; }, {}, never, never>;
}
