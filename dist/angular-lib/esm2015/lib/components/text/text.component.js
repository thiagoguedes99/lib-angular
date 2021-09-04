import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TextComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdGV4dC90ZXh0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy90ZXh0L3RleHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sYUFBYTtJQVN4QjtRQVBTLFNBQUksR0FBaUMsUUFBUSxDQUFDO1FBQzlDLFVBQUssR0FBdUIsUUFBUSxDQUFDO1FBRXJDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsVUFBSyxHQUFXLEVBQUUsQ0FBQztJQUVaLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OzBHQVpVLGFBQWE7OEZBQWIsYUFBYSxrSUNQMUIsK1hBdUJBOzJGRGhCYSxhQUFhO2tCQUx6QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixXQUFXLEVBQUUsdUJBQXVCO29CQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDcEM7MEVBR1UsSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFFRyxTQUFTO3NCQUFqQixLQUFLO2dCQUVHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdGV4dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdHlwZTogJ3NtYWxsJyB8ICdtaWRpdW0nIHwgJ2xhcmdlJyA9ICdtaWRpdW0nO1xuICBASW5wdXQoKSBzdGF0ZTogJ25vcm1hbCcgfCAnYm9sZCcgID0gJ25vcm1hbCc7XG5cbiAgQElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoKSBzdHlsZTogb2JqZWN0ID0ge307XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8IS0tIDxwXG4gIFtuZ0NsYXNzXT1cIltcbiAgICAndGV4dF9fY29udGFpbmVyJyxcbiAgICAndGV4dF9fdHlwZS0nICsgdHlwZSxcbiAgICAndGV4dF9fc3RhdGUtJyArIHN0YXRlLFxuICAgIGNsYXNzTmFtZVxuICBdXCJcbiAgW25nU3R5bGVdPVwic3R5bGVcIlxuPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L3A+IC0tPlxuXG48cFxuICBbbmdDbGFzc109XCJbXG4gICAgJ3RleHRfX2NvbnRhaW5lcicsXG4gICAgJ3RleHRfX3R5cGUtLScgKyB0eXBlLFxuICAgICd0ZXh0X19zdGF0ZS0tJyArIHN0YXRlLFxuICAgIGNsYXNzTmFtZVxuICBdXCJcbiAgW25nU3R5bGVdPVwic3R5bGVcIlxuPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L3A+XG4iXX0=