import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TableComponent {
    constructor() {
        this.thead = [];
        this.tbody = [];
        this.className = '';
        this.style = {};
    }
    ngOnInit() {
    }
}
TableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: TableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: TableComponent, selector: "lib-table", inputs: { thead: "thead", tbody: "tbody", className: "className", style: "style" }, ngImport: i0, template: "<!-- <p>table works!</p>\n -->\n\n<table\n  [ngClass]=\"[\n  'table',\n  'table-responsive',\n  className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <thead>\n    <tr>\n      <!-- {thead.map((item, index) => <th key={index}>{item}</th> )} -->\n      <!-- <th key={index}>{item}</th> -->\n      <ng-content></ng-content>\n    </tr>\n  </thead>\n  <tbody>\n    <!-- {\n      tbody.map((item, index) =>\n        <tr key={index}>\n          {item.map((i, ind) => <td key={ind}>{i}</td> )}\n        </tr>\n      )} -->\n    <!-- <tr> -->\n       <ng-content select=\"[tbody]\"></ng-content>\n    <!-- </tr> -->\n  </tbody>\n</table>\n", styles: [":host ::ng-deep .table{max-width:100%;background-color:transparent;border-collapse:collapse;border-spacing:0;font-family:arial}:host ::ng-deep .table{width:100%}:host ::ng-deep .table th,:host ::ng-deep .table td{font-size:14px;padding:8px;line-height:20px;text-align:left;vertical-align:middle}:host ::ng-deep .table tbody tr:last-child>td{border-bottom:none}:host ::ng-deep .table tbody td{line-height:17px;border-bottom:#F0F1F2 solid 1px;padding-top:16px;padding-bottom:16px;color:#484a4d}:host ::ng-deep .table td:last-child{border-right:0}:host ::ng-deep .table thead th{color:#b2b5bf}:host ::ng-deep .table thead th *,:host ::ng-deep .table tbody td *{display:block}@media (max-width: 800px){:host ::ng-deep .table tbody td{border-bottom:none;border-right:#F0F1F2 solid 1px;padding:8px 15px}:host ::ng-deep .table td:last-child{border-right:#F0F1F2 solid 1px}:host ::ng-deep .table-responsive{display:block;position:relative;width:100%}:host ::ng-deep .table-responsive thead,:host ::ng-deep .table-responsive tbody,:host ::ng-deep .table-responsive th,:host ::ng-deep .table-responsive td,:host ::ng-deep .table-responsive tr{display:block}:host ::ng-deep .table-responsive td,:host ::ng-deep .table-responsive th{height:50px}:host ::ng-deep .table td{height:50}:host ::ng-deep .table-responsive thead{float:left}:host ::ng-deep .table-responsive tbody{width:auto;position:relative;overflow-x:auto;-webkit-overflow-scrolling:touch;white-space:nowrap}:host ::ng-deep .table-responsive tbody tr{display:inline-block}}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-table',
                    templateUrl: './table.component.html',
                    styleUrls: ['./table.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { thead: [{
                type: Input
            }], tbody: [{
                type: Input
            }], className: [{
                type: Input
            }], style: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1saWIvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBT3pELE1BQU0sT0FBTyxjQUFjO0lBV3pCO1FBVFMsVUFBSyxHQUFjLEVBQUUsQ0FBQTtRQUNyQixVQUFLLEdBQWMsRUFBRSxDQUFBO1FBRXJCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsVUFBSyxHQUFXLEVBQUUsQ0FBQztJQUlaLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OzJHQWRVLGNBQWM7K0ZBQWQsY0FBYyxxSUNQM0IsK21CQThCQTsyRkR2QmEsY0FBYztrQkFMMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsV0FBVyxFQUFFLHdCQUF3QjtvQkFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ3JDOzBFQUdVLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRUcsU0FBUztzQkFBakIsS0FBSztnQkFFRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0aGVhZDogb2JqZWN0IFtdID0gW11cbiAgQElucHV0KCkgdGJvZHk6IG9iamVjdCBbXSA9IFtdXG5cbiAgQElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoKSBzdHlsZTogb2JqZWN0ID0ge307XG5cblxuICBcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8IS0tIDxwPnRhYmxlIHdvcmtzITwvcD5cbiAtLT5cblxuPHRhYmxlXG4gIFtuZ0NsYXNzXT1cIltcbiAgJ3RhYmxlJyxcbiAgJ3RhYmxlLXJlc3BvbnNpdmUnLFxuICBjbGFzc05hbWVcbiAgXVwiXG4gIFtuZ1N0eWxlXT1cInN0eWxlXCJcbj5cbiAgPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgIDwhLS0ge3RoZWFkLm1hcCgoaXRlbSwgaW5kZXgpID0+IDx0aCBrZXk9e2luZGV4fT57aXRlbX08L3RoPiApfSAtLT5cbiAgICAgIDwhLS0gPHRoIGtleT17aW5kZXh9PntpdGVtfTwvdGg+IC0tPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvdHI+XG4gIDwvdGhlYWQ+XG4gIDx0Ym9keT5cbiAgICA8IS0tIHtcbiAgICAgIHRib2R5Lm1hcCgoaXRlbSwgaW5kZXgpID0+XG4gICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICB7aXRlbS5tYXAoKGksIGluZCkgPT4gPHRkIGtleT17aW5kfT57aX08L3RkPiApfVxuICAgICAgICA8L3RyPlxuICAgICAgKX0gLS0+XG4gICAgPCEtLSA8dHI+IC0tPlxuICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0Ym9keV1cIj48L25nLWNvbnRlbnQ+XG4gICAgPCEtLSA8L3RyPiAtLT5cbiAgPC90Ym9keT5cbjwvdGFibGU+XG4iXX0=