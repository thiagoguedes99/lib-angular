import { Injectable } from '@angular/core';
// import { myDate } from './date';
import myDate from './date';
import fullDate from './full-date';
import isMobile from './is-mobile';
import * as i0 from "@angular/core";
export class FuctionsService {
    constructor() { }
    date(date = '') {
        return myDate(date);
    }
    /** Recebe a data em formato americano e devolte a data em formato brasileiro com descrição do mês */
    fullDate(date = '') {
        return fullDate(date);
    }
    /** Valida se o device tem um tela tamanho mobile, tamanho default 960px de largura */
    isMobile(date) {
        return isMobile(date);
    }
}
FuctionsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: FuctionsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FuctionsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: FuctionsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: FuctionsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVjdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvZnVjdGlvbnMvZnVjdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLG1DQUFtQztBQUNuQyxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxRQUFRLE1BQU0sYUFBYSxDQUFDO0FBQ25DLE9BQU8sUUFBUSxNQUFNLGFBQWEsQ0FBQzs7QUFLbkMsTUFBTSxPQUFPLGVBQWU7SUFFMUIsZ0JBQWdCLENBQUM7SUFFakIsSUFBSSxDQUFDLE9BQWUsRUFBRTtRQUNwQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBRUQscUdBQXFHO0lBQ3JHLFFBQVEsQ0FBQyxPQUFlLEVBQUU7UUFDeEIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUVELHNGQUFzRjtJQUN0RixRQUFRLENBQUMsSUFBYTtRQUNwQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2QixDQUFDOzs0R0FoQlUsZUFBZTtnSEFBZixlQUFlLGNBRmQsTUFBTTsyRkFFUCxlQUFlO2tCQUgzQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gaW1wb3J0IHsgbXlEYXRlIH0gZnJvbSAnLi9kYXRlJztcbmltcG9ydCBteURhdGUgZnJvbSAnLi9kYXRlJztcbmltcG9ydCBmdWxsRGF0ZSBmcm9tICcuL2Z1bGwtZGF0ZSc7XG5pbXBvcnQgaXNNb2JpbGUgZnJvbSAnLi9pcy1tb2JpbGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGdWN0aW9uc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZGF0ZShkYXRlOiBzdHJpbmcgPSAnJykge1xuICAgIHJldHVybiBteURhdGUoZGF0ZSlcbiAgfVxuICBcbiAgLyoqIFJlY2ViZSBhIGRhdGEgZW0gZm9ybWF0byBhbWVyaWNhbm8gZSBkZXZvbHRlIGEgZGF0YSBlbSBmb3JtYXRvIGJyYXNpbGVpcm8gY29tIGRlc2NyacOnw6NvIGRvIG3DqnMgKi9cbiAgZnVsbERhdGUoZGF0ZTogc3RyaW5nID0gJycpIHtcbiAgICByZXR1cm4gZnVsbERhdGUoZGF0ZSlcbiAgfVxuXG4gIC8qKiBWYWxpZGEgc2UgbyBkZXZpY2UgdGVtIHVtIHRlbGEgdGFtYW5obyBtb2JpbGUsIHRhbWFuaG8gZGVmYXVsdCA5NjBweCBkZSBsYXJndXJhICovXG4gIGlzTW9iaWxlKGRhdGU/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gaXNNb2JpbGUoZGF0ZSlcbiAgfVxuXG5cbn1cbiJdfQ==