import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./icons/person/person.component";
import * as i2 from "./icons/refresh/refresh.component";
import * as i3 from "./icons/cart/cart.component";
import * as i4 from "./icons/verification/verification.component";
import * as i5 from "./icons/atention/atention.component";
import * as i6 from "@angular/common";
export class IconComponent {
    constructor() {
        this.name = '';
        this.style = {};
    }
    ngOnInit() {
        console.log('ngOnInit Icon inicio');
        console.log(this.name);
        console.log('ngOnInit Icon final');
    }
}
IconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
IconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: IconComponent, selector: "lib-icon", inputs: { name: "name", style: "style" }, ngImport: i0, template: "<lib-person [style]=\"style\" *ngIf=\"name === 'person'\"></lib-person>\n\n<lib-refresh [style]=\"style\" *ngIf=\"name === 'refresh'\"></lib-refresh>\n\n<lib-cart [style]=\"style\" *ngIf=\"name === 'cart'\"></lib-cart>\n\n<lib-verification [style]=\"style\" *ngIf=\"name === 'verification'\"></lib-verification>\n\n<lib-atention [style]=\"style\" *ngIf=\"name === 'atention'\"></lib-atention>", styles: [""], components: [{ type: i1.PersonComponent, selector: "lib-person", inputs: ["style"] }, { type: i2.RefreshComponent, selector: "lib-refresh" }, { type: i3.CartComponent, selector: "lib-cart" }, { type: i4.VerificationComponent, selector: "lib-verification" }, { type: i5.AtentionComponent, selector: "lib-atention", inputs: ["style"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-icon',
                    templateUrl: './icon.component.html',
                    styleUrls: ['./icon.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { name: [{
                type: Input
            }], style: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBT3pELE1BQU0sT0FBTyxhQUFhO0lBTXhCO1FBSlMsU0FBSSxHQUFXLEVBQUUsQ0FBQTtRQUVqQixVQUFLLEdBQVcsRUFBRSxDQUFDO0lBRWIsQ0FBQztJQUVoQixRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUNwQyxDQUFDOzswR0FaVSxhQUFhOzhGQUFiLGFBQWEsMEZDUDFCLDBZQVF5RTsyRkRENUQsYUFBYTtrQkFMekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsV0FBVyxFQUFFLHVCQUF1QjtvQkFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ3BDOzBFQUdVLElBQUk7c0JBQVosS0FBSztnQkFFRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ljb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnXG5cbiAgQElucHV0KCkgc3R5bGU6IG9iamVjdCA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnbmdPbkluaXQgSWNvbiBpbmljaW8nKVxuICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSlcbiAgICBjb25zb2xlLmxvZygnbmdPbkluaXQgSWNvbiBmaW5hbCcpXG4gIH1cblxufVxuIiwiPGxpYi1wZXJzb24gW3N0eWxlXT1cInN0eWxlXCIgKm5nSWY9XCJuYW1lID09PSAncGVyc29uJ1wiPjwvbGliLXBlcnNvbj5cblxuPGxpYi1yZWZyZXNoIFtzdHlsZV09XCJzdHlsZVwiICpuZ0lmPVwibmFtZSA9PT0gJ3JlZnJlc2gnXCI+PC9saWItcmVmcmVzaD5cblxuPGxpYi1jYXJ0IFtzdHlsZV09XCJzdHlsZVwiICpuZ0lmPVwibmFtZSA9PT0gJ2NhcnQnXCI+PC9saWItY2FydD5cblxuPGxpYi12ZXJpZmljYXRpb24gW3N0eWxlXT1cInN0eWxlXCIgKm5nSWY9XCJuYW1lID09PSAndmVyaWZpY2F0aW9uJ1wiPjwvbGliLXZlcmlmaWNhdGlvbj5cblxuPGxpYi1hdGVudGlvbiBbc3R5bGVdPVwic3R5bGVcIiAqbmdJZj1cIm5hbWUgPT09ICdhdGVudGlvbidcIj48L2xpYi1hdGVudGlvbj4iXX0=