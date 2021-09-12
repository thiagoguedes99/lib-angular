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

import { IconModule } from './components/icon/icon.module';
import { PointerInfoComponent } from './components/pointer-info/pointer-info.component';
import { TagComponent } from './components/tag/tag.component';
import { TableComponent } from './components/table/table.component';
import { ChartLineComponent } from './components/chart-line/chart-line.component';
import { ChartDonutComponent } from './components/chart-donut/chart-donut.component';



@NgModule({
  declarations: [
    AngularLibComponent,
    ColComponent,
    ContainerComponent,
    ChartCollumnComponent,
    CardComponent,
    AlertComponent,
    TextComponent,
    PointerInfoComponent,
    TagComponent,
    TableComponent,
    ChartLineComponent,
    ChartDonutComponent,
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
  ],
  exports: [
    AngularLibComponent,
    ContainerComponent,
    ColComponent,
    ChartCollumnComponent,
    CardComponent,
    AlertComponent,
    TextComponent,
    IconModule,
    PointerInfoComponent,
    TagComponent,
    TableComponent,
    ChartLineComponent,
    ChartDonutComponent
  ]
})

export class AngularLibModule { }
