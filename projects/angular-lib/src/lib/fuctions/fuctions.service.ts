import { Injectable } from '@angular/core';

// import { myDate } from './date';
import myDate from './date';
import fullDate from './full-date';
import isMobile from './is-mobile';

@Injectable({
  providedIn: 'root'
})
export class FuctionsService {

  constructor() { }

  date(date: string = '') {
    return myDate(date)
  }
  
  /** Recebe a data em formato americano e devolte a data em formato brasileiro com descrição do mês */
  fullDate(date: string = '') {
    return fullDate(date)
  }

  /** Valida se o device tem um tela tamanho mobile, tamanho default 960px de largura */
  isMobile(date: string = '') {
    return isMobile(date)
  }


}
