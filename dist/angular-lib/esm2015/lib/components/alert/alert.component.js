import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class AlertComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1saWIvc3JjL2xpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBT3pELE1BQU0sT0FBTyxjQUFjO0lBUXpCO1FBTlMsVUFBSyxHQUF3QyxPQUFPLENBQUM7UUFFckQsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUV2QixVQUFLLEdBQVcsRUFBRSxDQUFDO0lBRVosQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7MkdBWFUsY0FBYzsrRkFBZCxjQUFjLHFIQ1AzQix1S0FTTTsyRkRGTyxjQUFjO2tCQUwxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixXQUFXLEVBQUUsd0JBQXdCO29CQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDckM7MEVBR1UsS0FBSztzQkFBYixLQUFLO2dCQUVHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBRUcsS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hbGVydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY29sb3I6ICdncmVlbicgfCAncmVkJyB8ICdibHVlJyB8ICd5ZWxsb3cnID0gJ2dyZWVuJztcblxuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgpIHN0eWxlOiBvYmplY3QgPSB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiIsIjxkaXZcbiAgW25nQ2xhc3NdPVwiW1xuICAgICdkaXNjbGFpbWVyX19jb250YWluZXInLFxuICAgICdkaXNjbGFpbWVyX18nICsgY29sb3IsXG4gICAgY2xhc3NOYW1lXG4gIF1cIlxuICBbbmdTdHlsZV09XCJzdHlsZVwiXG4+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PiJdfQ==