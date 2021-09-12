import { Component, Input, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import * as i0 from "@angular/core";
import * as i1 from "ng-apexcharts";
export class ChartDonutComponent {
    constructor() {
        this.data = [];
        this.totalData = 0;
        this.chart = ChartComponent;
    }
    ngOnInit() {
        this.totalData = this.data
            .map((item) => item.data)
            .reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue));
        this.chartOptions = {
            series: this.data.map((item) => Number(item.data)),
            chart: {
                width: 380,
                type: "donut"
            },
            labels: this.data.map((item) => item.name),
            fill: {
                colors: this.data.map((item) => item.color)
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
ChartDonutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ChartDonutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChartDonutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: ChartDonutComponent, selector: "lib-chart-donut", inputs: { data: "data" }, viewQueries: [{ propertyName: "chart", first: true, predicate: ["chart"], descendants: true }], ngImport: i0, template: "<div id=\"chart\" class=\"chart-donut__container\">\n\n  <p class=\"chart-donut__total\">\n    <span>{{ totalData }}</span>\n    <span class=\"chart-donut__total__text\">Hist\u00F3rias</span>\n  </p>\n\n  <apx-chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [labels]=\"chartOptions.labels\"\n    [fill]=\"chartOptions.fill\"\n    [dataLabels]=\"chartOptions.dataLabels\"\n    [responsive]=\"chartOptions.responsive\"\n  ></apx-chart>\n</div>\n", styles: [":host ::ng-deep .apexcharts-legend{display:none}.chart-donut__container{position:relative;display:inline-flex}.chart-donut__total{position:absolute;display:inline-flex;flex-direction:column;align-items:center;transform:translate(-58%,-100%);top:50%;left:50%}.chart-donut__total__text{font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:20px;color:#89837f}\n"], components: [{ type: i1.ChartComponent, selector: "apx-chart", inputs: ["autoUpdateSeries", "chart", "annotations", "colors", "dataLabels", "series", "stroke", "labels", "legend", "markers", "noData", "fill", "tooltip", "plotOptions", "responsive", "xaxis", "yaxis", "grid", "states", "title", "subtitle", "theme"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ChartDonutComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-chart-donut',
                    templateUrl: './chart-donut.component.html',
                    styleUrls: ['./chart-donut.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { chart: [{
                type: ViewChild,
                args: ["chart"]
            }], data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtZG9udXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NoYXJ0LWRvbnV0L2NoYXJ0LWRvbnV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC1kb251dC9jaGFydC1kb251dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUNMLGNBQWMsRUFPZixNQUFNLGVBQWUsQ0FBQzs7O0FBd0J2QixNQUFNLE9BQU8sbUJBQW1CO0lBUTlCO1FBSlMsU0FBSSxHQUFvQixFQUFFLENBQUM7UUFFcEMsY0FBUyxHQUFvQixDQUFDLENBQUM7UUFHN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7SUFDOUIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJO2FBQ1AsR0FBRyxDQUFDLENBQUMsSUFBMkIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMvQyxNQUFNLENBQUMsQ0FBQyxhQUFrQixFQUFFLFlBQWlCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtRQUVsSCxJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2xCLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQTJCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekUsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRSxPQUFPO2FBQ2Q7WUFDRCxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUEyQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2pFLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUEyQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ25FO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFFRCxVQUFVLEVBQUU7Z0JBQ1Y7b0JBQ0UsVUFBVSxFQUFFLEdBQUc7b0JBQ2YsT0FBTyxFQUFFO3dCQUNQLEtBQUssRUFBRTs0QkFDTCxLQUFLLEVBQUUsR0FBRzt5QkFDWDtxQkFDRjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUVKLENBQUM7O2dIQTNDVSxtQkFBbUI7b0dBQW5CLG1CQUFtQixpTENsQ2hDLGtlQWdCQTsyRkRrQmEsbUJBQW1CO2tCQUwvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFdBQVcsRUFBRSw4QkFBOEI7b0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2lCQUMzQzswRUFFcUIsS0FBSztzQkFBeEIsU0FBUzt1QkFBQyxPQUFPO2dCQUdULElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIENoYXJ0Q29tcG9uZW50LFxuICBBcGV4Tm9uQXhpc0NoYXJ0U2VyaWVzLFxuICBBcGV4UmVzcG9uc2l2ZSxcbiAgQXBleENoYXJ0LFxuICBBcGV4RmlsbCxcbiAgQXBleERhdGFMYWJlbHMsXG4gIEFwZXhMZWdlbmRcbn0gZnJvbSBcIm5nLWFwZXhjaGFydHNcIjtcblxudHlwZSBDaGFydE9wdGlvbnMgPSB7XG4gIHNlcmllczogQXBleE5vbkF4aXNDaGFydFNlcmllcztcbiAgY2hhcnQ6IEFwZXhDaGFydDtcbiAgcmVzcG9uc2l2ZTogQXBleFJlc3BvbnNpdmVbXTtcbiAgbGFiZWxzOiBhbnk7XG4gIGZpbGw6IEFwZXhGaWxsO1xuICBsZWdlbmQ6IEFwZXhMZWdlbmQ7XG4gIGRhdGFMYWJlbHM6IEFwZXhEYXRhTGFiZWxzO1xuICBjb2xvcnM6IHN0cmluZ1tdO1xufTtcblxudHlwZSBkYXRhQ2hhcnQgPSB7XG4gIG5hbWU/OiBzdHJpbmcsXG4gIGRhdGE6IHN0cmluZyB8IG51bWJlcixcbiAgY29sb3I6IHN0cmluZyxcbn0gW11cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNoYXJ0LWRvbnV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXJ0LWRvbnV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhcnQtZG9udXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0RG9udXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKFwiY2hhcnRcIikgY2hhcnQ6IGFueTtcbiAgY2hhcnRPcHRpb25zOiBQYXJ0aWFsPENoYXJ0T3B0aW9ucz4gfCBhbnk7XG5cbiAgQElucHV0KCkgZGF0YTogZGF0YUNoYXJ0IHwgYW55ID0gW107XG5cbiAgdG90YWxEYXRhOiBzdHJpbmcgfCBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2hhcnQgPSBDaGFydENvbXBvbmVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudG90YWxEYXRhID0gdGhpcy5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcCgoaXRlbTogc3RyaW5nIHwgbnVtYmVyIHwgYW55KSA9PiBpdGVtLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgocHJldmlvdXNWYWx1ZTogYW55LCBjdXJyZW50VmFsdWU6IGFueSkgPT4gTnVtYmVyKHByZXZpb3VzVmFsdWUpICsgTnVtYmVyKGN1cnJlbnRWYWx1ZSkpXG5cbiAgICB0aGlzLmNoYXJ0T3B0aW9ucyA9IHtcbiAgICAgIHNlcmllczogdGhpcy5kYXRhLm1hcCgoaXRlbTogc3RyaW5nIHwgbnVtYmVyIHwgYW55KSA9PiBOdW1iZXIoaXRlbS5kYXRhKSksXG4gICAgICBjaGFydDoge1xuICAgICAgICB3aWR0aDogMzgwLFxuICAgICAgICB0eXBlOiBcImRvbnV0XCJcbiAgICAgIH0sXG4gICAgICBsYWJlbHM6IHRoaXMuZGF0YS5tYXAoKGl0ZW06IHN0cmluZyB8IG51bWJlciB8IGFueSkgPT4gaXRlbS5uYW1lKSxcbiAgICAgIGZpbGw6IHtcbiAgICAgICAgY29sb3JzOiB0aGlzLmRhdGEubWFwKChpdGVtOiBzdHJpbmcgfCBudW1iZXIgfCBhbnkpID0+IGl0ZW0uY29sb3IpXG4gICAgICB9LFxuICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcblxuICB9XG5cbn1cbiIsIjxkaXYgaWQ9XCJjaGFydFwiIGNsYXNzPVwiY2hhcnQtZG9udXRfX2NvbnRhaW5lclwiPlxuXG4gIDxwIGNsYXNzPVwiY2hhcnQtZG9udXRfX3RvdGFsXCI+XG4gICAgPHNwYW4+e3sgdG90YWxEYXRhIH19PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiY2hhcnQtZG9udXRfX3RvdGFsX190ZXh0XCI+SGlzdMOzcmlhczwvc3Bhbj5cbiAgPC9wPlxuXG4gIDxhcHgtY2hhcnRcbiAgICBbc2VyaWVzXT1cImNoYXJ0T3B0aW9ucy5zZXJpZXNcIlxuICAgIFtjaGFydF09XCJjaGFydE9wdGlvbnMuY2hhcnRcIlxuICAgIFtsYWJlbHNdPVwiY2hhcnRPcHRpb25zLmxhYmVsc1wiXG4gICAgW2ZpbGxdPVwiY2hhcnRPcHRpb25zLmZpbGxcIlxuICAgIFtkYXRhTGFiZWxzXT1cImNoYXJ0T3B0aW9ucy5kYXRhTGFiZWxzXCJcbiAgICBbcmVzcG9uc2l2ZV09XCJjaGFydE9wdGlvbnMucmVzcG9uc2l2ZVwiXG4gID48L2FweC1jaGFydD5cbjwvZGl2PlxuIl19