import { Injectable } from '@angular/core';

// import { myDate } from './date';
import myDate from './date';
import fullDate from './full-date';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  constructor() { }

  date(date: string = '') {
    return myDate(date)
  }
  
  /** Recebe a data em formato americano e devolte a data em formato brasileiro com descrição do mês */
  fullDate(date: string = '') {
    return fullDate(date)
  }
  

}
