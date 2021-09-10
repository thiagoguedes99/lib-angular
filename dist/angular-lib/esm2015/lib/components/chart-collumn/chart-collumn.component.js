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
ChartCollumnComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: ChartCollumnComponent, selector: "lib-chart-collumn", inputs: { isHorizontal: "isHorizontal", isYLegend: "isYLegend", height: "height", data: "data" }, viewQueries: [{ propertyName: "chart", first: true, predicate: ["chart"], descendants: true }], ngImport: i0, template: "<div id=\"chart\">\n  <apx-chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [dataLabels]=\"chartOptions.dataLabels\"\n    [plotOptions]=\"chartOptions.plotOptions\"\n    [yaxis]=\"chartOptions.yaxis\"\n    [xaxis]=\"chartOptions.xaxis\"\n    [legend]=\"chartOptions.legend\"\n    [colors]=\"chartOptions.colors\"\n    [grid]=\"chartOptions.grid\"\n    [tooltip]=\"chartOptions.tooltip\" \n  ></apx-chart>\n</div>\n\n<!-- <div class=\"chart-collumn__tooltip\"></div>\n\n<lib-card></lib-card> -->\n", styles: [":host ::ng-deep .chart-collumn__tooltip{padding:8px}:host ::ng-deep .chart-collumn__tooltip__title{font-style:normal;font-weight:bold;font-size:16px;line-height:120%;color:#484a4d;margin:0 0 8px}:host ::ng-deep .chart-collumn__tooltip__bullet:before{content:\"\\2022\";font-weight:bold;margin-right:5px}\n"], components: [{ type: i1.ChartComponent, selector: "apx-chart", inputs: ["autoUpdateSeries", "chart", "annotations", "colors", "dataLabels", "series", "stroke", "labels", "legend", "markers", "noData", "fill", "tooltip", "plotOptions", "responsive", "xaxis", "yaxis", "grid", "states", "title", "subtitle", "theme"] }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtY29sbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY2hhcnQtY29sbHVtbi9jaGFydC1jb2xsdW1uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC1jb2xsdW1uL2NoYXJ0LWNvbGx1bW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFHTCxjQUFjLEVBTWYsTUFBTSxlQUFlLENBQUM7OztBQXFDdkIsTUFBTSxPQUFPLHFCQUFxQjtJQVNoQztRQUxTLGlCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGNBQVMsR0FBWSxLQUFLLENBQUE7UUFDMUIsV0FBTSxHQUFvQixLQUFLLENBQUE7UUFJdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7SUFDOUIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2xCLE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUEyQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUNoRTthQUNGO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxFQUFFLEtBQUs7YUFDWjtZQUNELE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQTJCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDbEUsV0FBVyxFQUFFO2dCQUNYLEdBQUcsRUFBRTtvQkFDSCxXQUFXLEVBQUUsS0FBSztvQkFDbEIsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWTtpQkFDOUI7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsVUFBUyxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBTTtvQkFDMUQsT0FBTzt1REFDb0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7eUVBQ2pDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztpRUFDdkMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsQ0FBQzttQkFDakYsQ0FBQTtnQkFDWCxDQUFDO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsT0FBTyxFQUFFLEtBQUs7YUFDZjtZQUNELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsS0FBSzthQUNaO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxLQUFLO2FBQ1o7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQ3JCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQTJCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoRixNQUFNLEVBQUU7b0JBQ04sS0FBSyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxNQUFNO3FCQUNqQjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUVKLENBQUM7O2tIQS9EVSxxQkFBcUI7c0dBQXJCLHFCQUFxQiwyUENoRGxDLHNoQkFrQkE7MkZEOEJhLHFCQUFxQjtrQkFMakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixXQUFXLEVBQUUsZ0NBQWdDO29CQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztpQkFDN0M7MEVBRXFCLEtBQUs7c0JBQXhCLFNBQVM7dUJBQUMsT0FBTztnQkFHVCxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIEFwZXhDaGFydCxcbiAgQXBleEF4aXNDaGFydFNlcmllcyxcbiAgQ2hhcnRDb21wb25lbnQsXG4gIEFwZXhEYXRhTGFiZWxzLFxuICBBcGV4UGxvdE9wdGlvbnMsXG4gIEFwZXhZQXhpcyxcbiAgQXBleExlZ2VuZCxcbiAgQXBleEdyaWRcbn0gZnJvbSBcIm5nLWFwZXhjaGFydHNcIjtcblxudHlwZSBBcGV4WEF4aXMgPSB7XG4gIHR5cGU/OiBcImNhdGVnb3J5XCIgfCBcImRhdGV0aW1lXCIgfCBcIm51bWVyaWNcIjtcbiAgY2F0ZWdvcmllcz86IGFueTtcbiAgbGFiZWxzPzoge1xuICAgIHN0eWxlPzoge1xuICAgICAgY29sb3JzPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICBmb250U2l6ZT86IHN0cmluZztcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQ2hhcnRPcHRpb25zID0ge1xuICBzZXJpZXM6IEFwZXhBeGlzQ2hhcnRTZXJpZXM7XG4gIGNoYXJ0OiBBcGV4Q2hhcnQ7XG4gIGRhdGFMYWJlbHM6IEFwZXhEYXRhTGFiZWxzO1xuICBwbG90T3B0aW9uczogQXBleFBsb3RPcHRpb25zO1xuICB5YXhpczogQXBleFlBeGlzO1xuICB4YXhpczogQXBleFhBeGlzO1xuICBncmlkOiBBcGV4R3JpZDtcbiAgY29sb3JzOiBzdHJpbmdbXTtcbiAgbGVnZW5kOiBBcGV4TGVnZW5kO1xuICB0b29sdGlwOiBhbnk7XG59O1xuXG5leHBvcnQgdHlwZSBkYXRhQ2hhcnQgPSB7XG4gIG5hbWU/OiBzdHJpbmcsXG4gIGRhdGE6IHN0cmluZyB8IG51bWJlcixcbiAgY29sb3I6IHN0cmluZyxcbn0gW11cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNoYXJ0LWNvbGx1bW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhcnQtY29sbHVtbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYXJ0LWNvbGx1bW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0Q29sbHVtbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJjaGFydFwiKSBjaGFydDogYW55XG4gIGNoYXJ0T3B0aW9uczogUGFydGlhbDxDaGFydE9wdGlvbnM+IHwgYW55O1xuXG4gIEBJbnB1dCgpIGlzSG9yaXpvbnRhbDogYm9vbGVhbiA9IGZhbHNlXG4gIEBJbnB1dCgpIGlzWUxlZ2VuZDogYm9vbGVhbiA9IGZhbHNlXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyID0gJzI2NidcbiAgQElucHV0KCkgZGF0YTogZGF0YUNoYXJ0IHwgYW55XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jaGFydCA9IENoYXJ0Q29tcG9uZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFydE9wdGlvbnMgPSB7XG4gICAgICBzZXJpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YS5tYXAoKGl0ZW06IHN0cmluZyB8IG51bWJlciB8IGFueSkgPT4gaXRlbS5kYXRhKVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgY2hhcnQ6IHtcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgICAgdHlwZTogXCJiYXJcIlxuICAgICAgfSxcbiAgICAgIGNvbG9yczogdGhpcy5kYXRhLm1hcCgoaXRlbTogc3RyaW5nIHwgbnVtYmVyIHwgYW55KSA9PiBpdGVtLmNvbG9yKSxcbiAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgIGJhcjoge1xuICAgICAgICAgIGNvbHVtbldpZHRoOiBcIjQ1JVwiLFxuICAgICAgICAgIGRpc3RyaWJ1dGVkOiB0cnVlLFxuICAgICAgICAgIGhvcml6b250YWw6IHRoaXMuaXNIb3Jpem9udGFsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b29sdGlwOiB7XG4gICAgICAgIGN1c3RvbTogZnVuY3Rpb24oe3Nlcmllcywgc2VyaWVzSW5kZXgsIGRhdGFQb2ludEluZGV4LCB3fTogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjaGFydC1jb2xsdW1uX190b29sdGlwXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNoYXJ0LWNvbGx1bW5fX3Rvb2x0aXBfX3RpdGxlXCI+JHt3LmNvbmZpZy54YXhpcy5jYXRlZ29yaWVzW2RhdGFQb2ludEluZGV4XS5qb2luKCcgJyl9PC9wPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGFydC1jb2xsdW1uX190b29sdGlwX19idWxsZXRcIiBzdHlsZT1cImNvbG9yOiAke3cuY29uZmlnLmNvbG9yc1tkYXRhUG9pbnRJbmRleF19O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sb3I6ICNCMkI1QkY7XCI+VmFsb3I6IDwvc3Bhbj4gPHNwYW4+JHtzZXJpZXNbc2VyaWVzSW5kZXhdW2RhdGFQb2ludEluZGV4XX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbGVnZW5kOiB7XG4gICAgICAgIHNob3c6IGZhbHNlXG4gICAgICB9LFxuICAgICAgZ3JpZDoge1xuICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHlheGlzOiB7XG4gICAgICAgIHNob3c6IHRoaXMuaXNZTGVnZW5kXG4gICAgICB9LFxuICAgICAgeGF4aXM6IHtcbiAgICAgICAgY2F0ZWdvcmllczogdGhpcy5kYXRhLm1hcCgoaXRlbTogc3RyaW5nIHwgbnVtYmVyIHwgYW55KSA9PiBpdGVtLm5hbWUuc3BsaXQoJyAnKSksXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gIH1cblxufVxuIiwiPGRpdiBpZD1cImNoYXJ0XCI+XG4gIDxhcHgtY2hhcnRcbiAgICBbc2VyaWVzXT1cImNoYXJ0T3B0aW9ucy5zZXJpZXNcIlxuICAgIFtjaGFydF09XCJjaGFydE9wdGlvbnMuY2hhcnRcIlxuICAgIFtkYXRhTGFiZWxzXT1cImNoYXJ0T3B0aW9ucy5kYXRhTGFiZWxzXCJcbiAgICBbcGxvdE9wdGlvbnNdPVwiY2hhcnRPcHRpb25zLnBsb3RPcHRpb25zXCJcbiAgICBbeWF4aXNdPVwiY2hhcnRPcHRpb25zLnlheGlzXCJcbiAgICBbeGF4aXNdPVwiY2hhcnRPcHRpb25zLnhheGlzXCJcbiAgICBbbGVnZW5kXT1cImNoYXJ0T3B0aW9ucy5sZWdlbmRcIlxuICAgIFtjb2xvcnNdPVwiY2hhcnRPcHRpb25zLmNvbG9yc1wiXG4gICAgW2dyaWRdPVwiY2hhcnRPcHRpb25zLmdyaWRcIlxuICAgIFt0b29sdGlwXT1cImNoYXJ0T3B0aW9ucy50b29sdGlwXCIgXG4gID48L2FweC1jaGFydD5cbjwvZGl2PlxuXG48IS0tIDxkaXYgY2xhc3M9XCJjaGFydC1jb2xsdW1uX190b29sdGlwXCI+PC9kaXY+XG5cbjxsaWItY2FyZD48L2xpYi1jYXJkPiAtLT5cbiJdfQ==