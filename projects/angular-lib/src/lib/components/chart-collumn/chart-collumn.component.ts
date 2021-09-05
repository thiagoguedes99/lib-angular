import { Component, ViewChild, OnInit, Input } from '@angular/core';

import { CircleProgressComponent } from '../circle-progress/circle-progress.component';

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

  // @Input() isHorizontal: boolean | string = false
  @Input() isHorizontal: boolean = false
  @Input() isYLegend: boolean = false
  @Input() height: string | number = '266'
  @Input() data: dataChart | any

  constructor() {
    this.chart = ChartComponent;
    // this.dataChart = dataChart;

    // this.chartOptions = {
    //   series: [
    //     {
    //       // name: "distibuted",
    //       data: [21, 22, 10]
    //     }
    //     // {
    //     //   name: "distibuted2",
    //     //   data: [21, 22, 10, 28, 16, 21, 13, 30]
    //     // }
    //   ],
    //   chart: {
    //     height: 350,
    //     type: "bar"
    //     // events: {
    //     //   click: function (chart, w, e) {
    //     //     // console.log(chart, w, e)
    //     //   }
    //     // }
    //   },
    //   colors: [
    //     "#0095D9",
    //     "#5A892E",
    //     "#CB22D7",
    //     "#F64A00",
    //     "#355C7D",
    //     "#AE7B15",
    //     "#33A49D",
    //     "#6247DE"
    //   ],
    //   plotOptions: {
    //     bar: {
    //       columnWidth: "45%",
    //       distributed: true,
    //       // horizontal: Boolean(this.isHorizontal)
    //       horizontal: this.isHorizontal
    //     }
    //   },
    //   dataLabels: {
    //     enabled: false
    //   },
    //   legend: {
    //     show: false
    //     // show: true
    //   },
    //   grid: {
    //     show: false
    //   },
    //   yaxis: {
    //     show: true
    //   },
    //   xaxis: {
    //     // show: false,
    //     categories: [
    //       // "South Korea",
    //       "Excelência operacional",
    //       // ["John", "Doe"],
    //       ["Joe", "Smith"],
    //       ["Jake", "Williams"]
    //     ],
    //     labels: {
    //       style: {
    //         colors: [
    //           "#008FFB",
    //           "#00E396",
    //           "#FEB019",
    //           "#FF4560",
    //           "#775DD0",
    //           "#546E7A",
    //           "#26a69a",
    //           "#D10CE8"
    //         ],
    //         fontSize: "12px"
    //       }
    //     }
    //   }
    // };

  }

  ngOnInit(): void {
    console.log(this.chartOptions)
    console.log(this.isHorizontal)

    this.chartOptions = {
      series: [
        {
          // name: "distibuted",

          // data: [21, 22, 10]
          data: this.data.map((item: string | number | any) => item.data)
        }
        // {
        //   name: "distibuted2",
        //   data: [21, 22, 10, 28, 16, 21, 13, 30]
        // }
      ],
      chart: {
        // height: '200',
        height: this.height,
        type: "bar"
        // events: {
        //   click: function (chart, w, e) {
        //     // console.log(chart, w, e)
        //   }
        // }
      },
      // colors: [
      //   "#0095D9",
      //   "#5A892E",
      //   "#CB22D7",
      //   "#F64A00",
      //   "#355C7D",
      //   "#AE7B15",
      //   "#33A49D",
      //   "#6247DE"
      // ],
      colors: this.data.map((item: string | number | any) => item.color),
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
          // horizontal: Boolean(this.isHorizontal)
          horizontal: this.isHorizontal
        }
      },
      tooltip: {
        custom: function({series, seriesIndex, dataPointIndex, w}: any) {
          console.log(series)
          console.log(seriesIndex)
          console.log(dataPointIndex)
          console.log(w)
          // return '<div class="arrow_box">' +
          //   '<p>' + w.config.xaxis.categories[dataPointIndex].join(' ') + '</p>' +
          //   '<span style="color: ${color};>' + w.config.colors + '</span>' +
          //   '<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
          //   '</div>'

            return `<div class="chart-collumn__tooltip">
            <p class="chart-collumn__tooltip__title">${w.config.xaxis.categories[dataPointIndex].join(' ')}</p>
            <span class="chart-collumn__tooltip__bullet" style="color: ${w.config.colors[dataPointIndex]};"></span>
            <span class="color: #B2B5BF;">Valor: </span> <span>${series[seriesIndex][dataPointIndex]}</span>
            </div>`

            // return `<lib-card></lib-card>`
        }

        // custon: CircleProgressComponent
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
        // show: true
      },
      grid: {
        show: false
      },
      yaxis: {
        show: this.isYLegend
      },
      xaxis: {
        // show: false,
        // categories: [
        //   // "South Korea",
        //   "Excelência operacional",
        //   // ["John", "Doe"],
        //   ["Joe", "Smith"],
        //   ["Jake", "Williams"]
        // ],
        categories: this.data.map((item: string | number | any) => item.name.split(' ')),
        labels: {
          style: {
            // colors: [
            //   "#008FFB",
            //   "#00E396",
            //   "#FEB019",
            //   "#FF4560",
            //   "#775DD0",
            //   "#546E7A",
            //   "#26a69a",
            //   "#D10CE8"
            // ],
            // colors: this.data.map((item: string | number | any) => item.color),
            fontSize: "12px"
          }
        }
      }
    };

    console.log(this.chartOptions)
    console.log(this.isHorizontal)


  }

}
