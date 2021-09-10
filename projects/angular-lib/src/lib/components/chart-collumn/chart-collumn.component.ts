import { Component, ViewChild, OnInit, Input } from '@angular/core';

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
  tooltip: any;
};

export type dataChart = {
  name?: string,
  data: string | number,
  color: string,
} []

@Component({
  selector: 'lib-chart-collumn',
  templateUrl: './chart-collumn.component.html',
  styleUrls: ['./chart-collumn.component.css']
})
export class ChartCollumnComponent implements OnInit {
  @ViewChild("chart") chart: any
  chartOptions: Partial<ChartOptions> | any;

  @Input() isHorizontal: boolean = false
  @Input() isYLegend: boolean = false
  @Input() height: string | number = '266'
  @Input() data: dataChart | any

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
        type: "bar"
      },
      colors: this.data.map((item: string | number | any) => item.color),
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
          horizontal: this.isHorizontal
        }
      },
      tooltip: {
        custom: function({series, seriesIndex, dataPointIndex, w}: any) {
            return `<div class="chart-collumn__tooltip">
            <p class="chart-collumn__tooltip__title">${w.config.xaxis.categories[dataPointIndex].join(' ')}</p>
            <span class="chart-collumn__tooltip__bullet" style="color: ${w.config.colors[dataPointIndex]};"></span>
            <span class="color: #B2B5BF;">Valor: </span> <span>${series[seriesIndex][dataPointIndex]}</span>
            </div>`
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      yaxis: {
        show: this.isYLegend
      },
      xaxis: {
        categories: this.data.map((item: string | number | any) => item.name.split(' ')),
        labels: {
          style: {
            fontSize: "12px"
          }
        }
      }
    };

  }

}
