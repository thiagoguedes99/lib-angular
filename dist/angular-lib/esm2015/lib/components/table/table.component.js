import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TableComponent {
    constructor() {
        this.className = '';
        this.style = {};
    }
    ngOnInit() {
    }
}
TableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: TableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: TableComponent, selector: "lib-table", inputs: { className: "className", style: "style" }, ngImport: i0, template: "<table\n  [ngClass]=\"[\n  'table',\n  'table-responsive',\n  className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <thead>\n    <tr>\n      <ng-content></ng-content>\n    </tr>\n  </thead>\n\n  <tbody>\n    <ng-content select=\"[tbody]\"></ng-content>\n  </tbody>\n</table>\n", styles: [":host ::ng-deep .table{max-width:100%;background-color:transparent;border-collapse:collapse;border-spacing:0;font-family:arial}:host ::ng-deep .table{width:100%}:host ::ng-deep .table th,:host ::ng-deep .table td{font-size:14px;padding:8px;line-height:20px;text-align:center;vertical-align:middle}:host ::ng-deep .table tbody tr:last-child>td{border-bottom:none}:host ::ng-deep .table tbody td{line-height:17px;border-bottom:#F0F1F2 solid 1px;padding-top:16px;padding-bottom:16px;color:#484a4d}:host ::ng-deep .table td:last-child{border-right:0}:host ::ng-deep .table thead th{color:#b2b5bf}:host ::ng-deep .table thead th *,:host ::ng-deep .table tbody td *{display:block}@media (max-width: 800px){:host ::ng-deep .table tbody td{border-bottom:none;border-right:#F0F1F2 solid 1px;padding:8px 15px}:host ::ng-deep .table td:last-child{border-right:#F0F1F2 solid 1px}:host ::ng-deep .table-responsive{display:block;position:relative;width:100%}:host ::ng-deep .table-responsive thead,:host ::ng-deep .table-responsive tbody,:host ::ng-deep .table-responsive th,:host ::ng-deep .table-responsive td,:host ::ng-deep .table-responsive tr{display:block}:host ::ng-deep .table-responsive td,:host ::ng-deep .table-responsive th{height:50px}:host ::ng-deep .table td{height:50}:host ::ng-deep .table-responsive thead{float:left}:host ::ng-deep .table-responsive tbody{width:auto;position:relative;overflow-x:auto;-webkit-overflow-scrolling:touch;white-space:nowrap}:host ::ng-deep .table-responsive tbody tr{display:inline-block}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-table',
                    templateUrl: './table.component.html',
                    styleUrls: ['./table.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { className: [{
                type: Input
            }], style: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1saWIvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBT3pELE1BQU0sT0FBTyxjQUFjO0lBT3pCO1FBTFMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUV2QixVQUFLLEdBQVcsRUFBRSxDQUFDO0lBR1osQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7MkdBVlUsY0FBYzsrRkFBZCxjQUFjLHFHQ1AzQiw4UUFrQkE7MkZEWGEsY0FBYztrQkFMMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsV0FBVyxFQUFFLHdCQUF3QjtvQkFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ3JDOzBFQUdVLFNBQVM7c0JBQWpCLEtBQUs7Z0JBRUcsS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoKSBzdHlsZTogb2JqZWN0ID0ge307XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiIsIjx0YWJsZVxuICBbbmdDbGFzc109XCJbXG4gICd0YWJsZScsXG4gICd0YWJsZS1yZXNwb25zaXZlJyxcbiAgY2xhc3NOYW1lXG4gIF1cIlxuICBbbmdTdHlsZV09XCJzdHlsZVwiXG4+XG4gIDx0aGVhZD5cbiAgICA8dHI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC90cj5cbiAgPC90aGVhZD5cblxuICA8dGJvZHk+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Rib2R5XVwiPjwvbmctY29udGVudD5cbiAgPC90Ym9keT5cbjwvdGFibGU+XG4iXX0=