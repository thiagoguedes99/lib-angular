import { Component, Input, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import * as i0 from "@angular/core";
import * as i1 from "ng-apexcharts";
export class ChartDonutComponent {
    constructor() {
        this.height = '266';
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
                // width: 380,
                width: this.height,
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
                            width: this.height
                        },
                    }
                }
            ]
        };
    }
}
ChartDonutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ChartDonutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChartDonutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: ChartDonutComponent, selector: "lib-chart-donut", inputs: { height: "height", data: "data" }, viewQueries: [{ propertyName: "chart", first: true, predicate: ["chart"], descendants: true }], ngImport: i0, template: "<div id=\"chart\" class=\"chart-donut__container\">\n\n  <p class=\"chart-donut__total\">\n    <span>{{ totalData }}</span>\n    <span class=\"chart-donut__total__text\">Hist\u00F3rias</span>\n  </p>\n\n  <apx-chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [labels]=\"chartOptions.labels\"\n    [fill]=\"chartOptions.fill\"\n    [dataLabels]=\"chartOptions.dataLabels\"\n    [responsive]=\"chartOptions.responsive\"\n  ></apx-chart>\n</div>\n", styles: [":host ::ng-deep .apexcharts-legend{display:none}.chart-donut__container{position:relative;display:inline-flex}.chart-donut__total{position:absolute;display:inline-flex;flex-direction:column;align-items:center;transform:translate(-50%,-50%);top:50%;left:50%}.chart-donut__total__text{font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:20px;color:#89837f}\n"], components: [{ type: i1.ChartComponent, selector: "apx-chart", inputs: ["autoUpdateSeries", "chart", "annotations", "colors", "dataLabels", "series", "stroke", "labels", "legend", "markers", "noData", "fill", "tooltip", "plotOptions", "responsive", "xaxis", "yaxis", "grid", "states", "title", "subtitle", "theme"] }] });
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
            }], height: [{
                type: Input
            }], data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtZG9udXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NoYXJ0LWRvbnV0L2NoYXJ0LWRvbnV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC1kb251dC9jaGFydC1kb251dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUNMLGNBQWMsRUFPZixNQUFNLGVBQWUsQ0FBQzs7O0FBd0J2QixNQUFNLE9BQU8sbUJBQW1CO0lBUzlCO1FBTFMsV0FBTSxHQUFvQixLQUFLLENBQUE7UUFDL0IsU0FBSSxHQUFvQixFQUFFLENBQUM7UUFFcEMsY0FBUyxHQUFvQixDQUFDLENBQUM7UUFHN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7SUFDOUIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJO2FBQ1AsR0FBRyxDQUFDLENBQUMsSUFBMkIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMvQyxNQUFNLENBQUMsQ0FBQyxhQUFrQixFQUFFLFlBQWlCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtRQUVsSCxJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2xCLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQTJCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekUsS0FBSyxFQUFFO2dCQUNMLGNBQWM7Z0JBQ2QsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNsQixJQUFJLEVBQUUsT0FBTzthQUNkO1lBQ0QsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBMkIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNqRSxJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBMkIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNuRTtZQUNELFVBQVUsRUFBRTtnQkFDVixPQUFPLEVBQUUsS0FBSzthQUNmO1lBRUQsVUFBVSxFQUFFO2dCQUNWO29CQUNFLFVBQVUsRUFBRSxHQUFHO29CQUNmLE9BQU8sRUFBRTt3QkFDUCxLQUFLLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO3lCQUNuQjtxQkFDRjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUVKLENBQUM7O2dIQTdDVSxtQkFBbUI7b0dBQW5CLG1CQUFtQixtTUNsQ2hDLGtlQWdCQTsyRkRrQmEsbUJBQW1CO2tCQUwvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFdBQVcsRUFBRSw4QkFBOEI7b0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2lCQUMzQzswRUFFcUIsS0FBSztzQkFBeEIsU0FBUzt1QkFBQyxPQUFPO2dCQUdULE1BQU07c0JBQWQsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBDaGFydENvbXBvbmVudCxcbiAgQXBleE5vbkF4aXNDaGFydFNlcmllcyxcbiAgQXBleFJlc3BvbnNpdmUsXG4gIEFwZXhDaGFydCxcbiAgQXBleEZpbGwsXG4gIEFwZXhEYXRhTGFiZWxzLFxuICBBcGV4TGVnZW5kXG59IGZyb20gXCJuZy1hcGV4Y2hhcnRzXCI7XG5cbnR5cGUgQ2hhcnRPcHRpb25zID0ge1xuICBzZXJpZXM6IEFwZXhOb25BeGlzQ2hhcnRTZXJpZXM7XG4gIGNoYXJ0OiBBcGV4Q2hhcnQ7XG4gIHJlc3BvbnNpdmU6IEFwZXhSZXNwb25zaXZlW107XG4gIGxhYmVsczogYW55O1xuICBmaWxsOiBBcGV4RmlsbDtcbiAgbGVnZW5kOiBBcGV4TGVnZW5kO1xuICBkYXRhTGFiZWxzOiBBcGV4RGF0YUxhYmVscztcbiAgY29sb3JzOiBzdHJpbmdbXTtcbn07XG5cbnR5cGUgZGF0YUNoYXJ0ID0ge1xuICBuYW1lPzogc3RyaW5nLFxuICBkYXRhOiBzdHJpbmcgfCBudW1iZXIsXG4gIGNvbG9yOiBzdHJpbmcsXG59IFtdXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jaGFydC1kb251dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFydC1kb251dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYXJ0LWRvbnV0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFydERvbnV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcImNoYXJ0XCIpIGNoYXJ0OiBhbnk7XG4gIGNoYXJ0T3B0aW9uczogUGFydGlhbDxDaGFydE9wdGlvbnM+IHwgYW55O1xuXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyID0gJzI2NidcbiAgQElucHV0KCkgZGF0YTogZGF0YUNoYXJ0IHwgYW55ID0gW107XG5cbiAgdG90YWxEYXRhOiBzdHJpbmcgfCBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2hhcnQgPSBDaGFydENvbXBvbmVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudG90YWxEYXRhID0gdGhpcy5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcCgoaXRlbTogc3RyaW5nIHwgbnVtYmVyIHwgYW55KSA9PiBpdGVtLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgocHJldmlvdXNWYWx1ZTogYW55LCBjdXJyZW50VmFsdWU6IGFueSkgPT4gTnVtYmVyKHByZXZpb3VzVmFsdWUpICsgTnVtYmVyKGN1cnJlbnRWYWx1ZSkpXG5cbiAgICB0aGlzLmNoYXJ0T3B0aW9ucyA9IHtcbiAgICAgIHNlcmllczogdGhpcy5kYXRhLm1hcCgoaXRlbTogc3RyaW5nIHwgbnVtYmVyIHwgYW55KSA9PiBOdW1iZXIoaXRlbS5kYXRhKSksXG4gICAgICBjaGFydDoge1xuICAgICAgICAvLyB3aWR0aDogMzgwLFxuICAgICAgICB3aWR0aDogdGhpcy5oZWlnaHQsXG4gICAgICAgIHR5cGU6IFwiZG9udXRcIlxuICAgICAgfSxcbiAgICAgIGxhYmVsczogdGhpcy5kYXRhLm1hcCgoaXRlbTogc3RyaW5nIHwgbnVtYmVyIHwgYW55KSA9PiBpdGVtLm5hbWUpLFxuICAgICAgZmlsbDoge1xuICAgICAgICBjb2xvcnM6IHRoaXMuZGF0YS5tYXAoKGl0ZW06IHN0cmluZyB8IG51bWJlciB8IGFueSkgPT4gaXRlbS5jb2xvcilcbiAgICAgIH0sXG4gICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuaGVpZ2h0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG5cbiAgfVxuXG59XG4iLCI8ZGl2IGlkPVwiY2hhcnRcIiBjbGFzcz1cImNoYXJ0LWRvbnV0X19jb250YWluZXJcIj5cblxuICA8cCBjbGFzcz1cImNoYXJ0LWRvbnV0X190b3RhbFwiPlxuICAgIDxzcGFuPnt7IHRvdGFsRGF0YSB9fTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImNoYXJ0LWRvbnV0X190b3RhbF9fdGV4dFwiPkhpc3TDs3JpYXM8L3NwYW4+XG4gIDwvcD5cblxuICA8YXB4LWNoYXJ0XG4gICAgW3Nlcmllc109XCJjaGFydE9wdGlvbnMuc2VyaWVzXCJcbiAgICBbY2hhcnRdPVwiY2hhcnRPcHRpb25zLmNoYXJ0XCJcbiAgICBbbGFiZWxzXT1cImNoYXJ0T3B0aW9ucy5sYWJlbHNcIlxuICAgIFtmaWxsXT1cImNoYXJ0T3B0aW9ucy5maWxsXCJcbiAgICBbZGF0YUxhYmVsc109XCJjaGFydE9wdGlvbnMuZGF0YUxhYmVsc1wiXG4gICAgW3Jlc3BvbnNpdmVdPVwiY2hhcnRPcHRpb25zLnJlc3BvbnNpdmVcIlxuICA+PC9hcHgtY2hhcnQ+XG48L2Rpdj5cbiJdfQ==