import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CardComponent {
    constructor() {
        this.className = '';
        this.style = {};
    }
    ngOnInit() {
    }
}
CardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CardComponent, selector: "lib-card", inputs: { className: "className", style: "style" }, ngImport: i0, template: "<article\n  [ngClass]=\"[\n    'card__container',\n    className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <ng-content></ng-content>\n</article>", styles: [".card__container{width:100%;background:#FFFFFF;box-shadow:0 3.43611px 3.43611px #cdcdcd40;border-radius:8px;float:left}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-card',
                    templateUrl: './card.component.html',
                    styleUrls: ['./card.component.css'],
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { className: [{
                type: Input
            }], style: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVE1RSxNQUFNLE9BQU8sYUFBYTtJQU14QjtRQUpTLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsVUFBSyxHQUFXLEVBQUUsQ0FBQztJQUVaLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OzBHQVRVLGFBQWE7OEZBQWIsYUFBYSxvR0NSMUIsNElBUVU7MkZEQUcsYUFBYTtrQkFOekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsV0FBVyxFQUFFLHVCQUF1QjtvQkFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ25DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0QzswRUFHVSxTQUFTO3NCQUFqQixLQUFLO2dCQUVHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KCkgc3R5bGU6IG9iamVjdCA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPGFydGljbGVcbiAgW25nQ2xhc3NdPVwiW1xuICAgICdjYXJkX19jb250YWluZXInLFxuICAgIGNsYXNzTmFtZVxuICBdXCJcbiAgW25nU3R5bGVdPVwic3R5bGVcIlxuPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2FydGljbGU+Il19