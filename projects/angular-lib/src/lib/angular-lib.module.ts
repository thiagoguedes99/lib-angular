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
import { IconComponent } from './components/icon/icon.component';
import { PersonComponent } from './components/icon/icons/person/person.component';

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
    IconComponent,
    PersonComponent,
  ],
  imports: [
    CommonModule,
    NgApexchartsModule
    // CircleProgressModule
  ],
  exports: [
    AngularLibComponent,
    ContainerComponent,
    ColComponent,
    ChartCollumnComponent,
    CardComponent,
    AlertComponent,
    TextComponent,
    IconComponent
    // CircleProgressModule
  ]
})
export class AngularLibModule { }
