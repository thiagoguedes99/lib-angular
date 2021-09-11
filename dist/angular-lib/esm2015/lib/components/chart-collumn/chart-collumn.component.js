import { Component, ViewChild, Input } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import * as i0 from "@angular/core";
import * as i1 from "ng-apexcharts";
export class ChartCollumnComponent {
    constructor() {
        this.isHorizontal = false;
        this.isYLegend = false;
        this.height = '266';
        this.chart = ChartComponent;
    }
    ngOnInit() {
        this.chartOptions = {
            series: [
                {
                    data: this.data.map((item) => item.data)
                }
            ],
            chart: {
                height: this.height,
                type: "bar"
            },
            colors: this.data.map((item) => item.color),
            plotOptions: {
                bar: {
                    columnWidth: "45%",
                    distributed: true,
                    horizontal: this.isHorizontal
                }
            },
            tooltip: {
                custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                    return `<div class="chart-collumn__tooltip">
            <p class="chart-collumn__tooltip__title">${w.config.xaxis.categories[dataPointIndex].join(' ')}</p>
            <span class="chart-collumn__tooltip__bullet" style="color: ${w.config.colors[dataPointIndex]};"></span>
            <span class="color: #B2B5BF;">Valor: </span> <span>${series[seriesIndex][dataPointIndex]}</span>
            </div>`;
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
                categories: this.data.map((item) => item.name.split(' ')),
                labels: {
                    style: {
                        fontSize: "12px"
                    }
                }
            }
        };
    }
}
ChartCollumnComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ChartCollumnComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChartCollumnComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: ChartCollumnComponent, selector: "lib-chart-collumn", inputs: { isHorizontal: "isHorizontal", isYLegend: "isYLegend", height: "height", data: "data" }, viewQueries: [{ propertyName: "chart", first: true, predicate: ["chart"], descendants: true }], ngImport: i0, template: "<div id=\"chart\">\n  <apx-chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [dataLabels]=\"chartOptions.dataLabels\"\n    [plotOptions]=\"chartOptions.plotOptions\"\n    [yaxis]=\"chartOptions.yaxis\"\n    [xaxis]=\"chartOptions.xaxis\"\n    [legend]=\"chartOptions.legend\"\n    [colors]=\"chartOptions.colors\"\n    [grid]=\"chartOptions.grid\"\n    [tooltip]=\"chartOptions.tooltip\"\n  ></apx-chart>\n</div>\n\n<!-- <div class=\"chart-collumn__tooltip\"></div>\n\n<lib-card></lib-card> -->\n", styles: [":host ::ng-deep .chart-collumn__tooltip{padding:8px}:host ::ng-deep .chart-collumn__tooltip__title{font-style:normal;font-weight:bold;font-size:16px;line-height:120%;color:#484a4d;margin:0 0 8px}:host ::ng-deep .chart-collumn__tooltip__bullet:before{content:\"\\2022\";font-weight:bold;margin-right:5px}\n"], components: [{ type: i1.ChartComponent, selector: "apx-chart", inputs: ["autoUpdateSeries", "chart", "annotations", "colors", "dataLabels", "series", "stroke", "labels", "legend", "markers", "noData", "fill", "tooltip", "plotOptions", "responsive", "xaxis", "yaxis", "grid", "states", "title", "subtitle", "theme"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ChartCollumnComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-chart-collumn',
                    templateUrl: './chart-collumn.component.html',
                    styleUrls: ['./chart-collumn.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { chart: [{
                type: ViewChild,
                args: ["chart"]
            }], isHorizontal: [{
                type: Input
            }], isYLegend: [{
                type: Input
            }], height: [{
                type: Input
            }], data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtY29sbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY2hhcnQtY29sbHVtbi9jaGFydC1jb2xsdW1uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC1jb2xsdW1uL2NoYXJ0LWNvbGx1bW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFHTCxjQUFjLEVBTWYsTUFBTSxlQUFlLENBQUM7OztBQXFDdkIsTUFBTSxPQUFPLHFCQUFxQjtJQVNoQztRQUxTLGlCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGNBQVMsR0FBWSxLQUFLLENBQUE7UUFDMUIsV0FBTSxHQUFvQixLQUFLLENBQUE7UUFJdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7SUFDOUIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2xCLE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUEyQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUNoRTthQUNGO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxFQUFFLEtBQUs7YUFDWjtZQUNELE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQTJCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDbEUsV0FBVyxFQUFFO2dCQUNYLEdBQUcsRUFBRTtvQkFDSCxXQUFXLEVBQUUsS0FBSztvQkFDbEIsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWTtpQkFDOUI7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsVUFBUyxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBTTtvQkFDMUQsT0FBTzt1REFDb0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7eUVBQ2pDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztpRUFDdkMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsQ0FBQzttQkFDakYsQ0FBQTtnQkFDWCxDQUFDO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsT0FBTyxFQUFFLEtBQUs7YUFDZjtZQUNELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsS0FBSzthQUNaO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxLQUFLO2FBQ1o7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQ3JCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQTJCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoRixNQUFNLEVBQUU7b0JBQ04sS0FBSyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxNQUFNO3FCQUNqQjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUVKLENBQUM7O2tIQS9EVSxxQkFBcUI7c0dBQXJCLHFCQUFxQiwyUENoRGxDLHFoQkFrQkE7MkZEOEJhLHFCQUFxQjtrQkFMakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixXQUFXLEVBQUUsZ0NBQWdDO29CQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztpQkFDN0M7MEVBRXFCLEtBQUs7c0JBQXhCLFNBQVM7dUJBQUMsT0FBTztnQkFHVCxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIEFwZXhDaGFydCxcbiAgQXBleEF4aXNDaGFydFNlcmllcyxcbiAgQ2hhcnRDb21wb25lbnQsXG4gIEFwZXhEYXRhTGFiZWxzLFxuICBBcGV4UGxvdE9wdGlvbnMsXG4gIEFwZXhZQXhpcyxcbiAgQXBleExlZ2VuZCxcbiAgQXBleEdyaWRcbn0gZnJvbSBcIm5nLWFwZXhjaGFydHNcIjtcblxudHlwZSBBcGV4WEF4aXMgPSB7XG4gIHR5cGU/OiBcImNhdGVnb3J5XCIgfCBcImRhdGV0aW1lXCIgfCBcIm51bWVyaWNcIjtcbiAgY2F0ZWdvcmllcz86IGFueTtcbiAgbGFiZWxzPzoge1xuICAgIHN0eWxlPzoge1xuICAgICAgY29sb3JzPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICBmb250U2l6ZT86IHN0cmluZztcbiAgICB9O1xuICB9O1xufTtcblxudHlwZSBDaGFydE9wdGlvbnMgPSB7XG4gIHNlcmllczogQXBleEF4aXNDaGFydFNlcmllcztcbiAgY2hhcnQ6IEFwZXhDaGFydDtcbiAgZGF0YUxhYmVsczogQXBleERhdGFMYWJlbHM7XG4gIHBsb3RPcHRpb25zOiBBcGV4UGxvdE9wdGlvbnM7XG4gIHlheGlzOiBBcGV4WUF4aXM7XG4gIHhheGlzOiBBcGV4WEF4aXM7XG4gIGdyaWQ6IEFwZXhHcmlkO1xuICBjb2xvcnM6IHN0cmluZ1tdO1xuICBsZWdlbmQ6IEFwZXhMZWdlbmQ7XG4gIHRvb2x0aXA6IGFueTtcbn07XG5cbnR5cGUgZGF0YUNoYXJ0ID0ge1xuICBuYW1lPzogc3RyaW5nLFxuICBkYXRhOiBzdHJpbmcgfCBudW1iZXIsXG4gIGNvbG9yOiBzdHJpbmcsXG59IFtdXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jaGFydC1jb2xsdW1uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXJ0LWNvbGx1bW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFydC1jb2xsdW1uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbGx1bW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKFwiY2hhcnRcIikgY2hhcnQ6IGFueVxuICBjaGFydE9wdGlvbnM6IFBhcnRpYWw8Q2hhcnRPcHRpb25zPiB8IGFueTtcblxuICBASW5wdXQoKSBpc0hvcml6b250YWw6IGJvb2xlYW4gPSBmYWxzZVxuICBASW5wdXQoKSBpc1lMZWdlbmQ6IGJvb2xlYW4gPSBmYWxzZVxuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlciA9ICcyNjYnXG4gIEBJbnB1dCgpIGRhdGE6IGRhdGFDaGFydCB8IGFueVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2hhcnQgPSBDaGFydENvbXBvbmVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhcnRPcHRpb25zID0ge1xuICAgICAgc2VyaWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEubWFwKChpdGVtOiBzdHJpbmcgfCBudW1iZXIgfCBhbnkpID0+IGl0ZW0uZGF0YSlcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGNoYXJ0OiB7XG4gICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgIHR5cGU6IFwiYmFyXCJcbiAgICAgIH0sXG4gICAgICBjb2xvcnM6IHRoaXMuZGF0YS5tYXAoKGl0ZW06IHN0cmluZyB8IG51bWJlciB8IGFueSkgPT4gaXRlbS5jb2xvciksXG4gICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICBiYXI6IHtcbiAgICAgICAgICBjb2x1bW5XaWR0aDogXCI0NSVcIixcbiAgICAgICAgICBkaXN0cmlidXRlZDogdHJ1ZSxcbiAgICAgICAgICBob3Jpem9udGFsOiB0aGlzLmlzSG9yaXpvbnRhbFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9vbHRpcDoge1xuICAgICAgICBjdXN0b206IGZ1bmN0aW9uKHtzZXJpZXMsIHNlcmllc0luZGV4LCBkYXRhUG9pbnRJbmRleCwgd306IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY2hhcnQtY29sbHVtbl9fdG9vbHRpcFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjaGFydC1jb2xsdW1uX190b29sdGlwX190aXRsZVwiPiR7dy5jb25maWcueGF4aXMuY2F0ZWdvcmllc1tkYXRhUG9pbnRJbmRleF0uam9pbignICcpfTwvcD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hhcnQtY29sbHVtbl9fdG9vbHRpcF9fYnVsbGV0XCIgc3R5bGU9XCJjb2xvcjogJHt3LmNvbmZpZy5jb2xvcnNbZGF0YVBvaW50SW5kZXhdfTtcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbG9yOiAjQjJCNUJGO1wiPlZhbG9yOiA8L3NwYW4+IDxzcGFuPiR7c2VyaWVzW3Nlcmllc0luZGV4XVtkYXRhUG9pbnRJbmRleF19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgIH0sXG4gICAgICB5YXhpczoge1xuICAgICAgICBzaG93OiB0aGlzLmlzWUxlZ2VuZFxuICAgICAgfSxcbiAgICAgIHhheGlzOiB7XG4gICAgICAgIGNhdGVnb3JpZXM6IHRoaXMuZGF0YS5tYXAoKGl0ZW06IHN0cmluZyB8IG51bWJlciB8IGFueSkgPT4gaXRlbS5uYW1lLnNwbGl0KCcgJykpLFxuICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICB9XG5cbn1cbiIsIjxkaXYgaWQ9XCJjaGFydFwiPlxuICA8YXB4LWNoYXJ0XG4gICAgW3Nlcmllc109XCJjaGFydE9wdGlvbnMuc2VyaWVzXCJcbiAgICBbY2hhcnRdPVwiY2hhcnRPcHRpb25zLmNoYXJ0XCJcbiAgICBbZGF0YUxhYmVsc109XCJjaGFydE9wdGlvbnMuZGF0YUxhYmVsc1wiXG4gICAgW3Bsb3RPcHRpb25zXT1cImNoYXJ0T3B0aW9ucy5wbG90T3B0aW9uc1wiXG4gICAgW3lheGlzXT1cImNoYXJ0T3B0aW9ucy55YXhpc1wiXG4gICAgW3hheGlzXT1cImNoYXJ0T3B0aW9ucy54YXhpc1wiXG4gICAgW2xlZ2VuZF09XCJjaGFydE9wdGlvbnMubGVnZW5kXCJcbiAgICBbY29sb3JzXT1cImNoYXJ0T3B0aW9ucy5jb2xvcnNcIlxuICAgIFtncmlkXT1cImNoYXJ0T3B0aW9ucy5ncmlkXCJcbiAgICBbdG9vbHRpcF09XCJjaGFydE9wdGlvbnMudG9vbHRpcFwiXG4gID48L2FweC1jaGFydD5cbjwvZGl2PlxuXG48IS0tIDxkaXYgY2xhc3M9XCJjaGFydC1jb2xsdW1uX190b29sdGlwXCI+PC9kaXY+XG5cbjxsaWItY2FyZD48L2xpYi1jYXJkPiAtLT5cbiJdfQ==