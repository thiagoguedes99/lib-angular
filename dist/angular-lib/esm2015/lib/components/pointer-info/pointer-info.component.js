import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class PointerInfoComponent {
    constructor() {
        this.color = '';
        this.text = '';
        this.type = 'midium';
        this.className = '';
        this.style = {};
    }
    ngOnInit() {
    }
}
PointerInfoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: PointerInfoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PointerInfoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: PointerInfoComponent, selector: "lib-pointer-info", inputs: { color: "color", text: "text", type: "type", className: "className", style: "style" }, ngImport: i0, template: "<div\n  [ngClass]=\"[\n    'pointer-info__container',\n    className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <span\n    [ngClass]=\"[\n      'pointer-info__color',\n      type === 'small' ? 'pointer-info__color--small' : '',\n      type === 'midium' ? 'pointer-info__color--midium' : '',\n    ]\"\n    [ngStyle]=\"{'background-color': color}\"\n  >\n  </span>\n  <span\n    [ngClass]=\"[\n      'pointer-info__text',\n      type === 'small' ? 'pointer-info__text--small' : '',\n      type === 'midium' ? 'pointer-info__text--midium' : '',\n    ]\"\n  >\n    {{ text }}\n  </span>\n</div>", styles: [".pointer-info__container{display:inline-flex;align-items:center}.pointer-info__color{display:inline-block;border-radius:50%;margin-right:8px}.pointer-info__color--small{height:8px;width:8px}.pointer-info__color--midium{height:14px;width:14px}.pointer-info__text{font-family:Roboto;font-style:normal;font-weight:normal;line-height:25px;color:#89837f}.pointer-info__text--small{font-size:16px}.pointer-info__text--midium{font-size:12px}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
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
            }], className: [{
                type: Input
            }], style: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pbnRlci1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9wb2ludGVyLWluZm8vcG9pbnRlci1pbmZvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9wb2ludGVyLWluZm8vcG9pbnRlci1pbmZvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPekQsTUFBTSxPQUFPLG9CQUFvQjtJQVUvQjtRQVJTLFVBQUssR0FBVyxFQUFFLENBQUE7UUFDbEIsU0FBSSxHQUFXLEVBQUUsQ0FBQTtRQUNqQixTQUFJLEdBQWlDLFFBQVEsQ0FBQztRQUU5QyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLFVBQUssR0FBVyxFQUFFLENBQUM7SUFHWixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOztpSEFiVSxvQkFBb0I7cUdBQXBCLG9CQUFvQix3SkNQakMseWtCQXlCTTsyRkRsQk8sb0JBQW9CO2tCQUxoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2lCQUM1QzswRUFHVSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFFRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcG9pbnRlci1pbmZvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BvaW50ZXItaW5mby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BvaW50ZXItaW5mby5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUG9pbnRlckluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnJ1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgPSAnJ1xuICBASW5wdXQoKSB0eXBlOiAnc21hbGwnIHwgJ21pZGl1bScgfCAnbGFyZ2UnID0gJ21pZGl1bSc7XG5cbiAgQElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgc3R5bGU6IG9iamVjdCA9IHt9O1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8ZGl2XG4gIFtuZ0NsYXNzXT1cIltcbiAgICAncG9pbnRlci1pbmZvX19jb250YWluZXInLFxuICAgIGNsYXNzTmFtZVxuICBdXCJcbiAgW25nU3R5bGVdPVwic3R5bGVcIlxuPlxuICA8c3BhblxuICAgIFtuZ0NsYXNzXT1cIltcbiAgICAgICdwb2ludGVyLWluZm9fX2NvbG9yJyxcbiAgICAgIHR5cGUgPT09ICdzbWFsbCcgPyAncG9pbnRlci1pbmZvX19jb2xvci0tc21hbGwnIDogJycsXG4gICAgICB0eXBlID09PSAnbWlkaXVtJyA/ICdwb2ludGVyLWluZm9fX2NvbG9yLS1taWRpdW0nIDogJycsXG4gICAgXVwiXG4gICAgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3J9XCJcbiAgPlxuICA8L3NwYW4+XG4gIDxzcGFuXG4gICAgW25nQ2xhc3NdPVwiW1xuICAgICAgJ3BvaW50ZXItaW5mb19fdGV4dCcsXG4gICAgICB0eXBlID09PSAnc21hbGwnID8gJ3BvaW50ZXItaW5mb19fdGV4dC0tc21hbGwnIDogJycsXG4gICAgICB0eXBlID09PSAnbWlkaXVtJyA/ICdwb2ludGVyLWluZm9fX3RleHQtLW1pZGl1bScgOiAnJyxcbiAgICBdXCJcbiAgPlxuICAgIHt7IHRleHQgfX1cbiAgPC9zcGFuPlxuPC9kaXY+Il19