import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class PointerInfoComponent {
    constructor() {
        this.color = '';
        this.text = '';
        this.type = 'midium';
    }
    ngOnInit() {
    }
}
PointerInfoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: PointerInfoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PointerInfoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: PointerInfoComponent, selector: "lib-pointer-info", inputs: { color: "color", text: "text", type: "type" }, ngImport: i0, template: "<div class=\"pointer-info__container\">\n  <span\n    [ngClass]=\"[\n      'pointer-info__color',\n      type === 'small' ? 'pointer-info__color--small' : '',\n      type === 'midium' ? 'pointer-info__color--midium' : '',\n    ]\"\n    [ngStyle]=\"{'background-color': color}\"\n  >\n  </span>\n  <span\n    [ngClass]=\"[\n      'pointer-info__text',\n      type === 'small' ? 'pointer-info__text--small' : '',\n      type === 'midium' ? 'pointer-info__text--midium' : '',\n    ]\"\n  >\n    {{ text }}\n  </span>\n</div>", styles: [".pointer-info__container{display:flex;align-items:center}.pointer-info__color{display:inline-block;border-radius:50%;margin-right:8px}.pointer-info__color--small{height:8px;width:8px}.pointer-info__color--midium{height:14px;width:14px}.pointer-info__text{font-family:Roboto;font-style:normal;font-weight:normal;line-height:25px;color:#89837f}.pointer-info__text--small{font-size:16px}.pointer-info__text--midium{font-size:12px}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: PointerInfoComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-pointer-info',
                    templateUrl: './pointer-info.component.html',
                    styleUrls: ['./pointer-info.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], text: [{
                type: Input
            }], type: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pbnRlci1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9wb2ludGVyLWluZm8vcG9pbnRlci1pbmZvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9wb2ludGVyLWluZm8vcG9pbnRlci1pbmZvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPekQsTUFBTSxPQUFPLG9CQUFvQjtJQU0vQjtRQUpTLFVBQUssR0FBVyxFQUFFLENBQUE7UUFDbEIsU0FBSSxHQUFXLEVBQUUsQ0FBQTtRQUNqQixTQUFJLEdBQWlDLFFBQVEsQ0FBQztJQUV2QyxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOztpSEFUVSxvQkFBb0I7cUdBQXBCLG9CQUFvQixnSENQakMsMmdCQW1CTTsyRkRaTyxvQkFBb0I7a0JBTGhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsV0FBVyxFQUFFLCtCQUErQjtvQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7aUJBQzVDOzBFQUdVLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wb2ludGVyLWluZm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9pbnRlci1pbmZvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcG9pbnRlci1pbmZvLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQb2ludGVySW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICcnXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZyA9ICcnXG4gIEBJbnB1dCgpIHR5cGU6ICdzbWFsbCcgfCAnbWlkaXVtJyB8ICdsYXJnZScgPSAnbWlkaXVtJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJwb2ludGVyLWluZm9fX2NvbnRhaW5lclwiPlxuICA8c3BhblxuICAgIFtuZ0NsYXNzXT1cIltcbiAgICAgICdwb2ludGVyLWluZm9fX2NvbG9yJyxcbiAgICAgIHR5cGUgPT09ICdzbWFsbCcgPyAncG9pbnRlci1pbmZvX19jb2xvci0tc21hbGwnIDogJycsXG4gICAgICB0eXBlID09PSAnbWlkaXVtJyA/ICdwb2ludGVyLWluZm9fX2NvbG9yLS1taWRpdW0nIDogJycsXG4gICAgXVwiXG4gICAgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3J9XCJcbiAgPlxuICA8L3NwYW4+XG4gIDxzcGFuXG4gICAgW25nQ2xhc3NdPVwiW1xuICAgICAgJ3BvaW50ZXItaW5mb19fdGV4dCcsXG4gICAgICB0eXBlID09PSAnc21hbGwnID8gJ3BvaW50ZXItaW5mb19fdGV4dC0tc21hbGwnIDogJycsXG4gICAgICB0eXBlID09PSAnbWlkaXVtJyA/ICdwb2ludGVyLWluZm9fX3RleHQtLW1pZGl1bScgOiAnJyxcbiAgICBdXCJcbiAgPlxuICAgIHt7IHRleHQgfX1cbiAgPC9zcGFuPlxuPC9kaXY+Il19