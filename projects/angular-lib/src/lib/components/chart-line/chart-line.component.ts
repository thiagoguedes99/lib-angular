import { Component, OnInit, ViewChild, Input } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexMarkers,
  ApexGrid
} from "ng-apexcharts";

type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: any;
};

type dataChart = {
  date: string,
  data: string | number,
} []

@Component({
  selector: 'lib-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.css']
})

export class ChartLineComponent implements OnInit {
  @ViewChild("chart") chart: any;
  chartOptions: Partial<ChartOptions> | any;

  @Input() height: string | number = '266'
  @Input() title: string = ''
  @Input() data: dataChart | any

  monthNames: string[] = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ]

  constructor() {
    this.chart = ChartComponent;
  }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          data: this.data.map((item: string | number | any) => item.data)
        }
      ],
      chart: {
        height: this.height,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: this.title,
        align: "left"
      },
      tooltip: {
        custom: (e: object) => this.CustomToolTip(e, this.monthNames)
      },
      xaxis: {
        type: "datetime",
        categories: this.data.map((item: string | number | any) => new Date(item.date.replace('-', '/')).getTime()),
      }
    };

  }

  CustomToolTip({series, seriesIndex, dataPointIndex, w}: any, monthNames: string[]) {
    const date = new Date(w.config.xaxis.categories[dataPointIndex])

      return `<div class="chart-line__tooltip">
      <p class="chart-line__tooltip__title">${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}</p>
      <span class="color: #B2B5BF;">Valor: </span> <span>${series[seriesIndex][dataPointIndex]}</span>
      </div>`
  }

}
