import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import myDate from './date';
import { FormatService } from './format.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  // providers: [FormatService],
  exports: [
    FormatService
  ]
})
export class FuctionsModule { }
