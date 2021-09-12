import { Component, OnInit, Input, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend
} from "ng-apexcharts";

type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  colors: string[];
};

type dataChart = {
  name?: string,
  data: string | number,
  color: string,
} []

@Component({
  selector: 'lib-chart-donut',
  templateUrl: './chart-donut.component.html',
  styleUrls: ['./chart-donut.component.css']
})
export class ChartDonutComponent implements OnInit {
  @ViewChild("chart") chart: any;
  chartOptions: Partial<ChartOptions> | any;

  @Input() data: dataChart | any = [];

  totalData: string | number = 0;

  constructor() {
    this.chart = ChartComponent;
  }

  ngOnInit(): void {
    this.totalData = this.data
                      .map((item: string | number | any) => item.data)
                      .reduce((previousValue: any, currentValue: any) => Number(previousValue) + Number(currentValue))

    this.chartOptions = {
      series: this.data.map((item: string | number | any) => Number(item.data)),
      chart: {
        width: 380,
        type: "donut"
      },
      labels: this.data.map((item: string | number | any) => item.name),
      fill: {
        colors: this.data.map((item: string | number | any) => item.color)
      },
      dataLabels: {
        enabled: false
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
          }
        }
      ]
    };

  }

}
