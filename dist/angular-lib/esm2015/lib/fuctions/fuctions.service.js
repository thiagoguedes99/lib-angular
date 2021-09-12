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
    isMobile(date = '') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVjdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvZnVjdGlvbnMvZnVjdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLG1DQUFtQztBQUNuQyxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxRQUFRLE1BQU0sYUFBYSxDQUFDO0FBQ25DLE9BQU8sUUFBUSxNQUFNLGFBQWEsQ0FBQzs7QUFLbkMsTUFBTSxPQUFPLGVBQWU7SUFFMUIsZ0JBQWdCLENBQUM7SUFFakIsSUFBSSxDQUFDLE9BQWUsRUFBRTtRQUNwQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBRUQscUdBQXFHO0lBQ3JHLFFBQVEsQ0FBQyxPQUFlLEVBQUU7UUFDeEIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUVELHNGQUFzRjtJQUN0RixRQUFRLENBQUMsT0FBZSxFQUFFO1FBQ3hCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7OzRHQWhCVSxlQUFlO2dIQUFmLGVBQWUsY0FGZCxNQUFNOzJGQUVQLGVBQWU7a0JBSDNCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBpbXBvcnQgeyBteURhdGUgfSBmcm9tICcuL2RhdGUnO1xuaW1wb3J0IG15RGF0ZSBmcm9tICcuL2RhdGUnO1xuaW1wb3J0IGZ1bGxEYXRlIGZyb20gJy4vZnVsbC1kYXRlJztcbmltcG9ydCBpc01vYmlsZSBmcm9tICcuL2lzLW1vYmlsZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZ1Y3Rpb25zU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBkYXRlKGRhdGU6IHN0cmluZyA9ICcnKSB7XG4gICAgcmV0dXJuIG15RGF0ZShkYXRlKVxuICB9XG4gIFxuICAvKiogUmVjZWJlIGEgZGF0YSBlbSBmb3JtYXRvIGFtZXJpY2FubyBlIGRldm9sdGUgYSBkYXRhIGVtIGZvcm1hdG8gYnJhc2lsZWlybyBjb20gZGVzY3Jpw6fDo28gZG8gbcOqcyAqL1xuICBmdWxsRGF0ZShkYXRlOiBzdHJpbmcgPSAnJykge1xuICAgIHJldHVybiBmdWxsRGF0ZShkYXRlKVxuICB9XG5cbiAgLyoqIFZhbGlkYSBzZSBvIGRldmljZSB0ZW0gdW0gdGVsYSB0YW1hbmhvIG1vYmlsZSwgdGFtYW5obyBkZWZhdWx0IDk2MHB4IGRlIGxhcmd1cmEgKi9cbiAgaXNNb2JpbGUoZGF0ZTogc3RyaW5nID0gJycpIHtcbiAgICByZXR1cm4gaXNNb2JpbGUoZGF0ZSlcbiAgfVxuXG5cbn1cbiJdfQ==