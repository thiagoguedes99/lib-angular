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
    }
    ngOnInit() {
        console.log('ngOnInit Icon inicio');
        console.log(this.name);
        console.log('ngOnInit Icon final');
    }
}
IconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
IconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: IconComponent, selector: "lib-icon", inputs: { name: "name" }, ngImport: i0, template: "<lib-person *ngIf=\"name === 'person'\"></lib-person>\n\n<lib-refresh *ngIf=\"name === 'refresh'\"></lib-refresh>\n\n<lib-cart *ngIf=\"name === 'cart'\"></lib-cart>\n\n<lib-verification *ngIf=\"name === 'verification'\"></lib-verification>\n\n<lib-atention *ngIf=\"name === 'atention'\"></lib-atention>", styles: [""], components: [{ type: i1.PersonComponent, selector: "lib-person" }, { type: i2.RefreshComponent, selector: "lib-refresh" }, { type: i3.CartComponent, selector: "lib-cart" }, { type: i4.VerificationComponent, selector: "lib-verification" }, { type: i5.AtentionComponent, selector: "lib-atention" }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-icon',
                    templateUrl: './icon.component.html',
                    styleUrls: ['./icon.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { name: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBT3pELE1BQU0sT0FBTyxhQUFhO0lBSXhCO1FBRlMsU0FBSSxHQUFXLEVBQUUsQ0FBQTtJQUVYLENBQUM7SUFFaEIsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUE7SUFDcEMsQ0FBQzs7MEdBVlUsYUFBYTs4RkFBYixhQUFhLDBFQ1AxQixnVEFReUQ7MkZERDVDLGFBQWE7a0JBTHpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7b0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNwQzswRUFHVSxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ljb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnXG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCduZ09uSW5pdCBJY29uIGluaWNpbycpXG4gICAgY29uc29sZS5sb2codGhpcy5uYW1lKVxuICAgIGNvbnNvbGUubG9nKCduZ09uSW5pdCBJY29uIGZpbmFsJylcbiAgfVxuXG59XG4iLCI8bGliLXBlcnNvbiAqbmdJZj1cIm5hbWUgPT09ICdwZXJzb24nXCI+PC9saWItcGVyc29uPlxuXG48bGliLXJlZnJlc2ggKm5nSWY9XCJuYW1lID09PSAncmVmcmVzaCdcIj48L2xpYi1yZWZyZXNoPlxuXG48bGliLWNhcnQgKm5nSWY9XCJuYW1lID09PSAnY2FydCdcIj48L2xpYi1jYXJ0PlxuXG48bGliLXZlcmlmaWNhdGlvbiAqbmdJZj1cIm5hbWUgPT09ICd2ZXJpZmljYXRpb24nXCI+PC9saWItdmVyaWZpY2F0aW9uPlxuXG48bGliLWF0ZW50aW9uICpuZ0lmPVwibmFtZSA9PT0gJ2F0ZW50aW9uJ1wiPjwvbGliLWF0ZW50aW9uPiJdfQ==