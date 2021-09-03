import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TextComponent implements OnInit {
    type: 'small' | 'normal' | 'large';
    state: 'normal' | 'bold';
    className: string;
    style: object;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextComponent, "lib-text", never, { "type": "type"; "state": "state"; "className": "className"; "style": "style"; }, {}, never, ["*"]>;
}
