import { Component, ViewChild, Input } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import * as i0 from "@angular/core";
import * as i1 from "ng-apexcharts";
export class ChartLineComponent {
    constructor() {
        this.height = '266';
        this.monthNames = [
            'janeiro',
            'fevereiro',
            'março',
            'abril',
            'maio',
            'junho',
            'julho',
            'agosto',
            'setembro',
            'outubro',
            'novembro',
            'dezembro',
        ];
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
                type: "line",
                zoom: {
                    enabled: false
                }
            },
            stroke: {
                curve: "straight"
            },
            title: {
                text: "Product Trends by Month",
                align: "left"
            },
            tooltip: {
                custom: (e) => this.CustomToolTip(e, this.monthNames)
            },
            xaxis: {
                type: "datetime",
                categories: this.data.map((item) => new Date(item.date.replace('-', '/')).getTime()),
            }
        };
    }
    CustomToolTip({ series, seriesIndex, dataPointIndex, w }, monthNames) {
        const date = new Date(w.config.xaxis.categories[dataPointIndex]);
        return `<div class="chart-line__tooltip">
      <p class="chart-line__tooltip__title">${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}</p>
      <span class="color: #B2B5BF;">Valor: </span> <span>${series[seriesIndex][dataPointIndex]}</span>
      </div>`;
    }
}
ChartLineComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ChartLineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChartLineComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: ChartLineComponent, selector: "lib-chart-line", inputs: { height: "height", data: "data" }, viewQueries: [{ propertyName: "chart", first: true, predicate: ["chart"], descendants: true }], ngImport: i0, template: "<div id=\"chart\">\n  <apx-chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [xaxis]=\"chartOptions.xaxis\"\n    [dataLabels]=\"chartOptions.dataLabels\"\n    [grid]=\"chartOptions.grid\"\n    [stroke]=\"chartOptions.stroke\"\n    [title]=\"chartOptions.title\"\n    [tooltip]=\"chartOptions.tooltip\"\n  ></apx-chart>\n</div>", styles: [":host ::ng-deep .chart-line__tooltip{padding:8px}:host ::ng-deep .chart-line__tooltip__title{font-style:normal;font-weight:bold;font-size:16px;line-height:120%;color:#484a4d;margin:0 0 8px}\n"], components: [{ type: i1.ChartComponent, selector: "apx-chart", inputs: ["autoUpdateSeries", "chart", "annotations", "colors", "dataLabels", "series", "stroke", "labels", "legend", "markers", "noData", "fill", "tooltip", "plotOptions", "responsive", "xaxis", "yaxis", "grid", "states", "title", "subtitle", "theme"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ChartLineComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-chart-line',
                    templateUrl: './chart-line.component.html',
                    styleUrls: ['./chart-line.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { chart: [{
                type: ViewChild,
                args: ["chart"]
            }], height: [{
                type: Input
            }], data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtbGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY2hhcnQtbGluZS9jaGFydC1saW5lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC1saW5lL2NoYXJ0LWxpbmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFDTCxjQUFjLEVBU2YsTUFBTSxlQUFlLENBQUM7OztBQXlCdkIsTUFBTSxPQUFPLGtCQUFrQjtJQXNCN0I7UUFsQlMsV0FBTSxHQUFvQixLQUFLLENBQUE7UUFHeEMsZUFBVSxHQUFhO1lBQ3JCLFNBQVM7WUFDVCxXQUFXO1lBQ1gsT0FBTztZQUNQLE9BQU87WUFDUCxNQUFNO1lBQ04sT0FBTztZQUNQLE9BQU87WUFDUCxRQUFRO1lBQ1IsVUFBVTtZQUNWLFNBQVM7WUFDVCxVQUFVO1lBQ1YsVUFBVTtTQUNYLENBQUE7UUFHQyxJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztJQUM5QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDbEIsTUFBTSxFQUFFO2dCQUNOO29CQUNFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQTJCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ2hFO2FBQ0Y7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLEtBQUs7aUJBQ2Y7YUFDRjtZQUNELE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUUsVUFBVTthQUNsQjtZQUNELEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUseUJBQXlCO2dCQUMvQixLQUFLLEVBQUUsTUFBTTthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLE1BQU0sRUFBRSxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUM5RDtZQUNELEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBMkIsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDNUc7U0FDRixDQUFDO0lBRUosQ0FBQztJQUVELGFBQWEsQ0FBQyxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBTSxFQUFFLFVBQW9CO1FBQy9FLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFBO1FBRTlELE9BQU87OENBQ2lDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTsyREFDdEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsQ0FBQzthQUNqRixDQUFBO0lBQ1gsQ0FBQzs7K0dBakVVLGtCQUFrQjttR0FBbEIsa0JBQWtCLGtNQ3JDL0IsMldBV007MkZEMEJPLGtCQUFrQjtrQkFOOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixXQUFXLEVBQUUsNkJBQTZCO29CQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztpQkFDMUM7MEVBR3FCLEtBQUs7c0JBQXhCLFNBQVM7dUJBQUMsT0FBTztnQkFHVCxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQ2hhcnRDb21wb25lbnQsXG4gIEFwZXhBeGlzQ2hhcnRTZXJpZXMsXG4gIEFwZXhDaGFydCxcbiAgQXBleFhBeGlzLFxuICBBcGV4RGF0YUxhYmVscyxcbiAgQXBleFRpdGxlU3VidGl0bGUsXG4gIEFwZXhTdHJva2UsXG4gIEFwZXhNYXJrZXJzLFxuICBBcGV4R3JpZFxufSBmcm9tIFwibmctYXBleGNoYXJ0c1wiO1xuXG50eXBlIENoYXJ0T3B0aW9ucyA9IHtcbiAgc2VyaWVzOiBBcGV4QXhpc0NoYXJ0U2VyaWVzO1xuICBjaGFydDogQXBleENoYXJ0O1xuICB4YXhpczogQXBleFhBeGlzO1xuICBkYXRhTGFiZWxzOiBBcGV4RGF0YUxhYmVscztcbiAgbWFya2VyczogQXBleE1hcmtlcnM7XG4gIGdyaWQ6IEFwZXhHcmlkO1xuICBzdHJva2U6IEFwZXhTdHJva2U7XG4gIHRpdGxlOiBBcGV4VGl0bGVTdWJ0aXRsZTtcbiAgdG9vbHRpcDogYW55O1xufTtcblxudHlwZSBkYXRhQ2hhcnQgPSB7XG4gIGRhdGU6IHN0cmluZyxcbiAgZGF0YTogc3RyaW5nIHwgbnVtYmVyLFxufSBbXVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY2hhcnQtbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFydC1saW5lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhcnQtbGluZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDaGFydExpbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKFwiY2hhcnRcIikgY2hhcnQ6IGFueTtcbiAgY2hhcnRPcHRpb25zOiBQYXJ0aWFsPENoYXJ0T3B0aW9ucz4gfCBhbnk7XG5cbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXIgPSAnMjY2J1xuICBASW5wdXQoKSBkYXRhOiBkYXRhQ2hhcnQgfCBhbnlcblxuICBtb250aE5hbWVzOiBzdHJpbmdbXSA9IFtcbiAgICAnamFuZWlybycsXG4gICAgJ2ZldmVyZWlybycsXG4gICAgJ21hcsOnbycsXG4gICAgJ2FicmlsJyxcbiAgICAnbWFpbycsXG4gICAgJ2p1bmhvJyxcbiAgICAnanVsaG8nLFxuICAgICdhZ29zdG8nLFxuICAgICdzZXRlbWJybycsXG4gICAgJ291dHVicm8nLFxuICAgICdub3ZlbWJybycsXG4gICAgJ2RlemVtYnJvJyxcbiAgXVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2hhcnQgPSBDaGFydENvbXBvbmVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhcnRPcHRpb25zID0ge1xuICAgICAgc2VyaWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEubWFwKChpdGVtOiBzdHJpbmcgfCBudW1iZXIgfCBhbnkpID0+IGl0ZW0uZGF0YSlcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGNoYXJ0OiB7XG4gICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgIHR5cGU6IFwibGluZVwiLFxuICAgICAgICB6b29tOiB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN0cm9rZToge1xuICAgICAgICBjdXJ2ZTogXCJzdHJhaWdodFwiXG4gICAgICB9LFxuICAgICAgdGl0bGU6IHtcbiAgICAgICAgdGV4dDogXCJQcm9kdWN0IFRyZW5kcyBieSBNb250aFwiLFxuICAgICAgICBhbGlnbjogXCJsZWZ0XCJcbiAgICAgIH0sXG4gICAgICB0b29sdGlwOiB7XG4gICAgICAgIGN1c3RvbTogKGU6IG9iamVjdCkgPT4gdGhpcy5DdXN0b21Ub29sVGlwKGUsIHRoaXMubW9udGhOYW1lcylcbiAgICAgIH0sXG4gICAgICB4YXhpczoge1xuICAgICAgICB0eXBlOiBcImRhdGV0aW1lXCIsXG4gICAgICAgIGNhdGVnb3JpZXM6IHRoaXMuZGF0YS5tYXAoKGl0ZW06IHN0cmluZyB8IG51bWJlciB8IGFueSkgPT4gbmV3IERhdGUoaXRlbS5kYXRlLnJlcGxhY2UoJy0nLCAnLycpKS5nZXRUaW1lKCkpLFxuICAgICAgfVxuICAgIH07XG5cbiAgfVxuXG4gIEN1c3RvbVRvb2xUaXAoe3Nlcmllcywgc2VyaWVzSW5kZXgsIGRhdGFQb2ludEluZGV4LCB3fTogYW55LCBtb250aE5hbWVzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh3LmNvbmZpZy54YXhpcy5jYXRlZ29yaWVzW2RhdGFQb2ludEluZGV4XSlcblxuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY2hhcnQtbGluZV9fdG9vbHRpcFwiPlxuICAgICAgPHAgY2xhc3M9XCJjaGFydC1saW5lX190b29sdGlwX190aXRsZVwiPiR7ZGF0ZS5nZXREYXRlKCl9ICR7bW9udGhOYW1lc1tkYXRlLmdldE1vbnRoKCldfSAke2RhdGUuZ2V0RnVsbFllYXIoKX08L3A+XG4gICAgICA8c3BhbiBjbGFzcz1cImNvbG9yOiAjQjJCNUJGO1wiPlZhbG9yOiA8L3NwYW4+IDxzcGFuPiR7c2VyaWVzW3Nlcmllc0luZGV4XVtkYXRhUG9pbnRJbmRleF19PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICB9XG5cbn1cbiIsIjxkaXYgaWQ9XCJjaGFydFwiPlxuICA8YXB4LWNoYXJ0XG4gICAgW3Nlcmllc109XCJjaGFydE9wdGlvbnMuc2VyaWVzXCJcbiAgICBbY2hhcnRdPVwiY2hhcnRPcHRpb25zLmNoYXJ0XCJcbiAgICBbeGF4aXNdPVwiY2hhcnRPcHRpb25zLnhheGlzXCJcbiAgICBbZGF0YUxhYmVsc109XCJjaGFydE9wdGlvbnMuZGF0YUxhYmVsc1wiXG4gICAgW2dyaWRdPVwiY2hhcnRPcHRpb25zLmdyaWRcIlxuICAgIFtzdHJva2VdPVwiY2hhcnRPcHRpb25zLnN0cm9rZVwiXG4gICAgW3RpdGxlXT1cImNoYXJ0T3B0aW9ucy50aXRsZVwiXG4gICAgW3Rvb2x0aXBdPVwiY2hhcnRPcHRpb25zLnRvb2x0aXBcIlxuICA+PC9hcHgtY2hhcnQ+XG48L2Rpdj4iXX0=