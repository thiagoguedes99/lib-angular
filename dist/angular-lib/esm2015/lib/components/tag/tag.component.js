import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TagComponent {
    constructor() {
        this.color = '';
        this.text = '';
    }
    ngOnInit() {
    }
}
TagComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: TagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TagComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: TagComponent, selector: "lib-tag", inputs: { color: "color", text: "text" }, ngImport: i0, template: "<span\n  class=\"tag__container\"\n  [ngStyle]=\"{'background-color': color}\"\n>\n  {{ text }}\n</span>", styles: [".tag__container{display:flex;align-items:center;justify-content:center;width:52px;height:25px;border-radius:12.4242px;color:#fff;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:25px}\n"], directives: [{ type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: TagComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-tag',
                    templateUrl: './tag.component.html',
                    styleUrls: ['./tag.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], text: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy90YWcvdGFnLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy90YWcvdGFnLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPekQsTUFBTSxPQUFPLFlBQVk7SUFLdkI7UUFIUyxVQUFLLEdBQVcsRUFBRSxDQUFBO1FBQ2xCLFNBQUksR0FBVyxFQUFFLENBQUE7SUFFVixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzt5R0FSVSxZQUFZOzZGQUFaLFlBQVkseUZDUHpCLDBHQUtPOzJGREVNLFlBQVk7a0JBTHhCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFdBQVcsRUFBRSxzQkFBc0I7b0JBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2lCQUNuQzswRUFHVSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10YWcnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFnLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFnLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnJ1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgPSAnJ1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPHNwYW5cbiAgY2xhc3M9XCJ0YWdfX2NvbnRhaW5lclwiXG4gIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbG9yfVwiXG4+XG4gIHt7IHRleHQgfX1cbjwvc3Bhbj4iXX0=