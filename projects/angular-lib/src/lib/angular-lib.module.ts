import { NgModule } from '@angular/core';
import { AngularLibComponent } from './angular-lib.component';

import { CircleProgressModule } from './circle-progress/circle-progress.module';



@NgModule({
  declarations: [
    AngularLibComponent,
  ],
  imports: [
  ],
  exports: [
    AngularLibComponent,
    CircleProgressModule
  ]
})
export class AngularLibModule { }
