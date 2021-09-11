import { OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexTitleSubtitle, ApexStroke, ApexMarkers, ApexGrid } from "ng-apexcharts";
import * as i0 from "@angular/core";
declare type ChartOptions = {
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
declare type dataChart = {
    date: string;
    data: string | number;
}[];
export declare class ChartLineComponent implements OnInit {
    chart: any;
    chartOptions: Partial<ChartOptions> | any;
    height: string | number;
    data: dataChart | any;
    monthNames: string[];
    constructor();
    ngOnInit(): void;
    CustomToolTip({ series, seriesIndex, dataPointIndex, w }: any, monthNames: string[]): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartLineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChartLineComponent, "lib-chart-line", never, { "height": "height"; "data": "data"; }, {}, never, never>;
}
export {};
