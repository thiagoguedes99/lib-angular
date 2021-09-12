import * as i0 from "@angular/core";
export declare class FuctionsService {
    constructor();
    date(date?: string): string;
    /** Recebe a data em formato americano e devolte a data em formato brasileiro com descrição do mês */
    fullDate(date?: string): string;
    /** Valida se o device tem um tela tamanho mobile, tamanho default 960px de largura */
    isMobile(date: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<FuctionsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FuctionsService>;
}
