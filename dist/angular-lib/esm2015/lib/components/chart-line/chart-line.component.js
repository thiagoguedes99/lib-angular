import { Component, ViewChild, Input } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import * as i0 from "@angular/core";
import * as i1 from "ng-apexcharts";
export class ChartLineComponent {
    constructor() {
        this.height = '266';
        this.title = '';
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
                text: this.title,
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
ChartLineComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: ChartLineComponent, selector: "lib-chart-line", inputs: { height: "height", title: "title", data: "data" }, viewQueries: [{ propertyName: "chart", first: true, predicate: ["chart"], descendants: true }], ngImport: i0, template: "<div id=\"chart\">\n  <apx-chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [xaxis]=\"chartOptions.xaxis\"\n    [dataLabels]=\"chartOptions.dataLabels\"\n    [grid]=\"chartOptions.grid\"\n    [stroke]=\"chartOptions.stroke\"\n    [title]=\"chartOptions.title\"\n    [tooltip]=\"chartOptions.tooltip\"\n  ></apx-chart>\n</div>", styles: [":host ::ng-deep .chart-line__tooltip{padding:8px}:host ::ng-deep .chart-line__tooltip__title{font-style:normal;font-weight:bold;font-size:16px;line-height:120%;color:#484a4d;margin:0 0 8px}\n"], components: [{ type: i1.ChartComponent, selector: "apx-chart", inputs: ["autoUpdateSeries", "chart", "annotations", "colors", "dataLabels", "series", "stroke", "labels", "legend", "markers", "noData", "fill", "tooltip", "plotOptions", "responsive", "xaxis", "yaxis", "grid", "states", "title", "subtitle", "theme"] }] });
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
            }], title: [{
                type: Input
            }], data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtbGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY2hhcnQtbGluZS9jaGFydC1saW5lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC1saW5lL2NoYXJ0LWxpbmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFDTCxjQUFjLEVBU2YsTUFBTSxlQUFlLENBQUM7OztBQXlCdkIsTUFBTSxPQUFPLGtCQUFrQjtJQXVCN0I7UUFuQlMsV0FBTSxHQUFvQixLQUFLLENBQUE7UUFDL0IsVUFBSyxHQUFXLEVBQUUsQ0FBQTtRQUczQixlQUFVLEdBQWE7WUFDckIsU0FBUztZQUNULFdBQVc7WUFDWCxPQUFPO1lBQ1AsT0FBTztZQUNQLE1BQU07WUFDTixPQUFPO1lBQ1AsT0FBTztZQUNQLFFBQVE7WUFDUixVQUFVO1lBQ1YsU0FBUztZQUNULFVBQVU7WUFDVixVQUFVO1NBQ1gsQ0FBQTtRQUdDLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO0lBQzlCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRztZQUNsQixNQUFNLEVBQUU7Z0JBQ047b0JBQ0UsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBMkIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDaEU7YUFDRjtZQUNELEtBQUssRUFBRTtnQkFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUsS0FBSztpQkFDZjthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxVQUFVO2FBQ2xCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDaEIsS0FBSyxFQUFFLE1BQU07YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDOUQ7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQTJCLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzVHO1NBQ0YsQ0FBQztJQUVKLENBQUM7SUFFRCxhQUFhLENBQUMsRUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQU0sRUFBRSxVQUFvQjtRQUMvRSxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTtRQUU5RCxPQUFPOzhDQUNpQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7MkRBQ3RELE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxjQUFjLENBQUM7YUFDakYsQ0FBQTtJQUNYLENBQUM7OytHQWxFVSxrQkFBa0I7bUdBQWxCLGtCQUFrQixrTkNyQy9CLDJXQVdNOzJGRDBCTyxrQkFBa0I7a0JBTjlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsV0FBVyxFQUFFLDZCQUE2QjtvQkFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7aUJBQzFDOzBFQUdxQixLQUFLO3NCQUF4QixTQUFTO3VCQUFDLE9BQU87Z0JBR1QsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBDaGFydENvbXBvbmVudCxcbiAgQXBleEF4aXNDaGFydFNlcmllcyxcbiAgQXBleENoYXJ0LFxuICBBcGV4WEF4aXMsXG4gIEFwZXhEYXRhTGFiZWxzLFxuICBBcGV4VGl0bGVTdWJ0aXRsZSxcbiAgQXBleFN0cm9rZSxcbiAgQXBleE1hcmtlcnMsXG4gIEFwZXhHcmlkXG59IGZyb20gXCJuZy1hcGV4Y2hhcnRzXCI7XG5cbnR5cGUgQ2hhcnRPcHRpb25zID0ge1xuICBzZXJpZXM6IEFwZXhBeGlzQ2hhcnRTZXJpZXM7XG4gIGNoYXJ0OiBBcGV4Q2hhcnQ7XG4gIHhheGlzOiBBcGV4WEF4aXM7XG4gIGRhdGFMYWJlbHM6IEFwZXhEYXRhTGFiZWxzO1xuICBtYXJrZXJzOiBBcGV4TWFya2VycztcbiAgZ3JpZDogQXBleEdyaWQ7XG4gIHN0cm9rZTogQXBleFN0cm9rZTtcbiAgdGl0bGU6IEFwZXhUaXRsZVN1YnRpdGxlO1xuICB0b29sdGlwOiBhbnk7XG59O1xuXG50eXBlIGRhdGFDaGFydCA9IHtcbiAgZGF0ZTogc3RyaW5nLFxuICBkYXRhOiBzdHJpbmcgfCBudW1iZXIsXG59IFtdXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jaGFydC1saW5lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXJ0LWxpbmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFydC1saW5lLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIENoYXJ0TGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJjaGFydFwiKSBjaGFydDogYW55O1xuICBjaGFydE9wdGlvbnM6IFBhcnRpYWw8Q2hhcnRPcHRpb25zPiB8IGFueTtcblxuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlciA9ICcyNjYnXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJ1xuICBASW5wdXQoKSBkYXRhOiBkYXRhQ2hhcnQgfCBhbnlcblxuICBtb250aE5hbWVzOiBzdHJpbmdbXSA9IFtcbiAgICAnamFuZWlybycsXG4gICAgJ2ZldmVyZWlybycsXG4gICAgJ21hcsOnbycsXG4gICAgJ2FicmlsJyxcbiAgICAnbWFpbycsXG4gICAgJ2p1bmhvJyxcbiAgICAnanVsaG8nLFxuICAgICdhZ29zdG8nLFxuICAgICdzZXRlbWJybycsXG4gICAgJ291dHVicm8nLFxuICAgICdub3ZlbWJybycsXG4gICAgJ2RlemVtYnJvJyxcbiAgXVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2hhcnQgPSBDaGFydENvbXBvbmVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhcnRPcHRpb25zID0ge1xuICAgICAgc2VyaWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEubWFwKChpdGVtOiBzdHJpbmcgfCBudW1iZXIgfCBhbnkpID0+IGl0ZW0uZGF0YSlcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGNoYXJ0OiB7XG4gICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgIHR5cGU6IFwibGluZVwiLFxuICAgICAgICB6b29tOiB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN0cm9rZToge1xuICAgICAgICBjdXJ2ZTogXCJzdHJhaWdodFwiXG4gICAgICB9LFxuICAgICAgdGl0bGU6IHtcbiAgICAgICAgdGV4dDogdGhpcy50aXRsZSxcbiAgICAgICAgYWxpZ246IFwibGVmdFwiXG4gICAgICB9LFxuICAgICAgdG9vbHRpcDoge1xuICAgICAgICBjdXN0b206IChlOiBvYmplY3QpID0+IHRoaXMuQ3VzdG9tVG9vbFRpcChlLCB0aGlzLm1vbnRoTmFtZXMpXG4gICAgICB9LFxuICAgICAgeGF4aXM6IHtcbiAgICAgICAgdHlwZTogXCJkYXRldGltZVwiLFxuICAgICAgICBjYXRlZ29yaWVzOiB0aGlzLmRhdGEubWFwKChpdGVtOiBzdHJpbmcgfCBudW1iZXIgfCBhbnkpID0+IG5ldyBEYXRlKGl0ZW0uZGF0ZS5yZXBsYWNlKCctJywgJy8nKSkuZ2V0VGltZSgpKSxcbiAgICAgIH1cbiAgICB9O1xuXG4gIH1cblxuICBDdXN0b21Ub29sVGlwKHtzZXJpZXMsIHNlcmllc0luZGV4LCBkYXRhUG9pbnRJbmRleCwgd306IGFueSwgbW9udGhOYW1lczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUody5jb25maWcueGF4aXMuY2F0ZWdvcmllc1tkYXRhUG9pbnRJbmRleF0pXG5cbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNoYXJ0LWxpbmVfX3Rvb2x0aXBcIj5cbiAgICAgIDxwIGNsYXNzPVwiY2hhcnQtbGluZV9fdG9vbHRpcF9fdGl0bGVcIj4ke2RhdGUuZ2V0RGF0ZSgpfSAke21vbnRoTmFtZXNbZGF0ZS5nZXRNb250aCgpXX0gJHtkYXRlLmdldEZ1bGxZZWFyKCl9PC9wPlxuICAgICAgPHNwYW4gY2xhc3M9XCJjb2xvcjogI0IyQjVCRjtcIj5WYWxvcjogPC9zcGFuPiA8c3Bhbj4ke3Nlcmllc1tzZXJpZXNJbmRleF1bZGF0YVBvaW50SW5kZXhdfTwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgfVxuXG59XG4iLCI8ZGl2IGlkPVwiY2hhcnRcIj5cbiAgPGFweC1jaGFydFxuICAgIFtzZXJpZXNdPVwiY2hhcnRPcHRpb25zLnNlcmllc1wiXG4gICAgW2NoYXJ0XT1cImNoYXJ0T3B0aW9ucy5jaGFydFwiXG4gICAgW3hheGlzXT1cImNoYXJ0T3B0aW9ucy54YXhpc1wiXG4gICAgW2RhdGFMYWJlbHNdPVwiY2hhcnRPcHRpb25zLmRhdGFMYWJlbHNcIlxuICAgIFtncmlkXT1cImNoYXJ0T3B0aW9ucy5ncmlkXCJcbiAgICBbc3Ryb2tlXT1cImNoYXJ0T3B0aW9ucy5zdHJva2VcIlxuICAgIFt0aXRsZV09XCJjaGFydE9wdGlvbnMudGl0bGVcIlxuICAgIFt0b29sdGlwXT1cImNoYXJ0T3B0aW9ucy50b29sdGlwXCJcbiAgPjwvYXB4LWNoYXJ0PlxuPC9kaXY+Il19