import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgApexchartsModule } from 'ng-apexcharts';

import { AngularLibComponent } from './angular-lib.component';
import { ColComponent } from './components/grid/col/col.component';
import { ContainerComponent } from './components/grid/container/container.component';
import { ChartCollumnComponent } from './components/chart-collumn/chart-collumn.component';
import { CardComponent } from './components/card/card.component';
import { AlertComponent } from './components/alert/alert.component';
import { TextComponent } from './components/text/text.component';

// import { CircleProgressModule } from './circle-progress/circle-progress.module';



@NgModule({
  declarations: [
    AngularLibComponent,
    ColComponent,
    ContainerComponent,
    ChartCollumnComponent,
    CardComponent,
    AlertComponent,
    TextComponent,
  ],
  imports: [
    CommonModule,
    NgApexchartsModule
    // CircleProgressModule
  ],
  exports: [
    AngularLibComponent,
    ColComponent,
    ContainerComponent,
    ChartCollumnComponent,
    CardComponent,
    AlertComponent,
    TextComponent
    // CircleProgressModule
  ]
})
export class AngularLibModule { }
