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
TextComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: TextComponent, selector: "lib-text", inputs: { type: "type", state: "state", className: "className", style: "style" }, ngImport: i0, template: "<p\n  [ngClass]=\"[\n    'text__container',\n    'text__type--' + type,\n    'text__state--' + state,\n    className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <ng-content></ng-content>\n</p>\n", styles: [".text__container{font-family:Roboto}.text__type--small{font-size:12px}.text__type--normal{font-size:16px}.text__type--large{font-size:16px}.text__state--normal{font-weight:normal}.text__state--bold{font-weight:500}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdGV4dC90ZXh0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy90ZXh0L3RleHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sYUFBYTtJQVN4QjtRQVBTLFNBQUksR0FBaUMsUUFBUSxDQUFDO1FBQzlDLFVBQUssR0FBdUIsUUFBUSxDQUFDO1FBRXJDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsVUFBSyxHQUFXLEVBQUUsQ0FBQztJQUVaLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OzBHQVpVLGFBQWE7OEZBQWIsYUFBYSxrSUNQMUIsNExBV0E7MkZESmEsYUFBYTtrQkFMekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsV0FBVyxFQUFFLHVCQUF1QjtvQkFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ3BDOzBFQUdVLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRUcsU0FBUztzQkFBakIsS0FBSztnQkFFRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXRleHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHR5cGU6ICdzbWFsbCcgfCAnbWlkaXVtJyB8ICdsYXJnZScgPSAnbWlkaXVtJztcbiAgQElucHV0KCkgc3RhdGU6ICdub3JtYWwnIHwgJ2JvbGQnICA9ICdub3JtYWwnO1xuXG4gIEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KCkgc3R5bGU6IG9iamVjdCA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPHBcbiAgW25nQ2xhc3NdPVwiW1xuICAgICd0ZXh0X19jb250YWluZXInLFxuICAgICd0ZXh0X190eXBlLS0nICsgdHlwZSxcbiAgICAndGV4dF9fc3RhdGUtLScgKyBzdGF0ZSxcbiAgICBjbGFzc05hbWVcbiAgXVwiXG4gIFtuZ1N0eWxlXT1cInN0eWxlXCJcbj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9wPlxuIl19