import { OnInit } from '@angular/core';
import { ApexChart, ApexAxisChartSeries, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexLegend, ApexGrid } from "ng-apexcharts";
import * as i0 from "@angular/core";
declare type ApexXAxis = {
    type?: "category" | "datetime" | "numeric";
    categories?: any;
    labels?: {
        style?: {
            colors?: string | string[];
            fontSize?: string;
        };
    };
};
declare type ChartOptions = {
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
declare type dataChart = {
    name?: string;
    data: string | number;
    color: string;
}[];
export declare class ChartCollumnComponent implements OnInit {
    chart: any;
    chartOptions: Partial<ChartOptions> | any;
    isHorizontal: boolean;
    isYLegend: boolean;
    height: string | number;
    data: dataChart | any;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartCollumnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChartCollumnComponent, "lib-chart-collumn", never, { "isHorizontal": "isHorizontal"; "isYLegend": "isYLegend"; "height": "height"; "data": "data"; }, {}, never, never>;
}
export {};
