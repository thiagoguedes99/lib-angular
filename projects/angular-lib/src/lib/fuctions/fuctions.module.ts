import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import myDate from './date';
import { FuctionsService } from './fuctions.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  // providers: [FormatService],
  exports: [
    FuctionsService
  ]
})
export class FuctionsModule { }
