import { OnInit } from '@angular/core';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart, ApexFill, ApexDataLabels, ApexLegend } from "ng-apexcharts";
import * as i0 from "@angular/core";
declare type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    fill: ApexFill;
    legend: ApexLegend;
    dataLabels: ApexDataLabels;
    colors: string[];
};
declare type dataChart = {
    name?: string;
    data: string | number;
    color: string;
}[];
export declare class ChartDonutComponent implements OnInit {
    chart: any;
    chartOptions: Partial<ChartOptions> | any;
    data: dataChart | any;
    totalData: string | number;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartDonutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChartDonutComponent, "lib-chart-donut", never, { "data": "data"; }, {}, never, never>;
}
export {};
