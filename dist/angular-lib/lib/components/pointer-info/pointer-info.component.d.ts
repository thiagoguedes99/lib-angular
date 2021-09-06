import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PointerInfoComponent implements OnInit {
    color: string;
    text: string;
    type: 'small' | 'midium' | 'large';
    className: string;
    style: object;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PointerInfoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PointerInfoComponent, "lib-pointer-info", never, { "color": "color"; "text": "text"; "type": "type"; "className": "className"; "style": "style"; }, {}, never, never>;
}
