import { Injectable } from '@angular/core';
// import { myDate } from './date';
import myDate from './date';
import fullDate from './full-date';
import * as i0 from "@angular/core";
export class FormatService {
    constructor() { }
    date(date = '') {
        return myDate(date);
    }
    /** Recebe a data em formato americano e devolte a data em formato brasileiro com descrição do mês */
    fullDate(date = '') {
        return fullDate(date);
    }
}
FormatService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: FormatService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FormatService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: FormatService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: FormatService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWxpYi9zcmMvbGliL2Z1Y3Rpb25zL2Zvcm1hdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsbUNBQW1DO0FBQ25DLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLFFBQVEsTUFBTSxhQUFhLENBQUM7O0FBS25DLE1BQU0sT0FBTyxhQUFhO0lBRXhCLGdCQUFnQixDQUFDO0lBRWpCLElBQUksQ0FBQyxPQUFlLEVBQUU7UUFDcEIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDckIsQ0FBQztJQUVELHFHQUFxRztJQUNyRyxRQUFRLENBQUMsT0FBZSxFQUFFO1FBQ3hCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7OzBHQVhVLGFBQWE7OEdBQWIsYUFBYSxjQUZaLE1BQU07MkZBRVAsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGltcG9ydCB7IG15RGF0ZSB9IGZyb20gJy4vZGF0ZSc7XG5pbXBvcnQgbXlEYXRlIGZyb20gJy4vZGF0ZSc7XG5pbXBvcnQgZnVsbERhdGUgZnJvbSAnLi9mdWxsLWRhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtYXRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGRhdGUoZGF0ZTogc3RyaW5nID0gJycpIHtcbiAgICByZXR1cm4gbXlEYXRlKGRhdGUpXG4gIH1cbiAgXG4gIC8qKiBSZWNlYmUgYSBkYXRhIGVtIGZvcm1hdG8gYW1lcmljYW5vIGUgZGV2b2x0ZSBhIGRhdGEgZW0gZm9ybWF0byBicmFzaWxlaXJvIGNvbSBkZXNjcmnDp8OjbyBkbyBtw6pzICovXG4gIGZ1bGxEYXRlKGRhdGU6IHN0cmluZyA9ICcnKSB7XG4gICAgcmV0dXJuIGZ1bGxEYXRlKGRhdGUpXG4gIH1cbiAgXG5cbn1cbiJdfQ==