import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularLibComponent } from './angular-lib.component';
import { ColComponent } from './components/grid/col/col.component';
import { ContainerComponent } from './components/grid/container/container.component';

// import { CircleProgressModule } from './circle-progress/circle-progress.module';



@NgModule({
  declarations: [
    AngularLibComponent,
    ColComponent,
    ContainerComponent,
  ],
  imports: [
    CommonModule,
    // CircleProgressModule
  ],
  exports: [
    AngularLibComponent,
    ColComponent,
    ContainerComponent
    // CircleProgressModule
  ]
})
export class AngularLibModule { }
