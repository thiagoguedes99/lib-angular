import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ContainerComponent {
    constructor() {
        this.full = false;
        this.className = '';
        this.style = {};
    }
    ngOnInit() {
    }
}
ContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: ContainerComponent, selector: "lib-container", inputs: { full: "full", className: "className", style: "style" }, ngImport: i0, template: "<main\n  [ngClass]=\"[\n    'container',\n    full ? 'container__full' : '',\n    className\n  ]\"\n  [ngStyle]=\"style\"\n>\n  <ng-content></ng-content>\n</main>", styles: [".container{min-height:calc(100vh - 440px);margin-right:16px;margin-left:16px}@media (min-width: 720px){.container{margin-right:24px;margin-left:24px}}@media (min-width: 960px){.container{margin-right:40px;margin-left:40px}}@media (min-width: 1280px){.container{margin-right:40px;margin-left:40px}}@media (min-width: 1600px){.container{max-width:1600px;margin:0 auto;&__full{max-width:100%;margin-right:72px;margin-left:72px}}}.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.clearfix:before,.clearfix:after,.container:before,.container:after,.container-fluid:before,.container-fluid:after,.row:before,.row:after{display:table;content:\" \"}.clearfix:after,.container:after,.container-fluid:after,.row:after{clear:both}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-container',
                    templateUrl: './container.component.html',
                    styleUrls: ['./container.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { full: [{
                type: Input
            }], className: [{
                type: Input
            }], style: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9ncmlkL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1saWIvc3JjL2xpYi9jb21wb25lbnRzL2dyaWQvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBT3pELE1BQU0sT0FBTyxrQkFBa0I7SUFNN0I7UUFKUyxTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsVUFBSyxHQUFXLEVBQUUsQ0FBQztJQUVaLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OytHQVRVLGtCQUFrQjttR0FBbEIsa0JBQWtCLHVIQ1AvQixvS0FTTzsyRkRGTSxrQkFBa0I7a0JBTDlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7b0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2lCQUN6QzswRUFHVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb250YWluZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZnVsbDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBzdHlsZTogb2JqZWN0ID0ge307XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8bWFpblxuICBbbmdDbGFzc109XCJbXG4gICAgJ2NvbnRhaW5lcicsXG4gICAgZnVsbCA/ICdjb250YWluZXJfX2Z1bGwnIDogJycsXG4gICAgY2xhc3NOYW1lXG4gIF1cIlxuICBbbmdTdHlsZV09XCJzdHlsZVwiXG4+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbWFpbj4iXX0=