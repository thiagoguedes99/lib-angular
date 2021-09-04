import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { CircleProgressComponent } from './circle-progress.component';



@NgModule({
  declarations: [
    CircleProgressComponent
  ],
  imports: [
    CommonModule,

    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  exports: [
    CircleProgressComponent
  ]
})

export class CircleProgressModule { }
