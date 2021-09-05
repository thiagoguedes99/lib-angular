import { Component, ViewChild, Input } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import * as i0 from "@angular/core";
import * as i1 from "ng-apexcharts";
import * as i2 from "../card/card.component";
export class ChartCollumnComponent {
    constructor() {
        // @Input() isHorizontal: boolean | string = false
        this.isHorizontal = false;
        this.isYLegend = false;
        this.height = '266';
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
    ngOnInit() {
        console.log(this.chartOptions);
        console.log(this.isHorizontal);
        this.chartOptions = {
            series: [
                {
                    // name: "distibuted",
                    // data: [21, 22, 10]
                    data: this.data.map((item) => item.data)
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
            colors: this.data.map((item) => item.color),
            plotOptions: {
                bar: {
                    columnWidth: "45%",
                    distributed: true,
                    // horizontal: Boolean(this.isHorizontal)
                    horizontal: this.isHorizontal
                }
            },
            tooltip: {
                custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                    console.log(series);
                    console.log(seriesIndex);
                    console.log(dataPointIndex);
                    console.log(w);
                    // return '<div class="arrow_box">' +
                    //   '<p>' + w.config.xaxis.categories[dataPointIndex].join(' ') + '</p>' +
                    //   '<span style="color: ${color};>' + w.config.colors + '</span>' +
                    //   '<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
                    //   '</div>'
                    return `<div class="chart-collumn__tooltip">
            <p class="chart-collumn__tooltip__title">${w.config.xaxis.categories[dataPointIndex].join(' ')}</p>
            <span class="chart-collumn__tooltip__bullet" style="color: ${w.config.colors[dataPointIndex]};"></span>
            <span class="color: #B2B5BF;">Valor: </span> <span>${series[seriesIndex][dataPointIndex]}</span>
            </div>`;
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
                categories: this.data.map((item) => item.name.split(' ')),
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
        console.log(this.chartOptions);
        console.log(this.isHorizontal);
    }
}
ChartCollumnComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: ChartCollumnComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChartCollumnComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: ChartCollumnComponent, selector: "lib-chart-collumn", inputs: { isHorizontal: "isHorizontal", isYLegend: "isYLegend", height: "height", data: "data" }, viewQueries: [{ propertyName: "chart", first: true, predicate: ["chart"], descendants: true }], ngImport: i0, template: "<div id=\"chart\">\n  <apx-chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [dataLabels]=\"chartOptions.dataLabels\"\n    [plotOptions]=\"chartOptions.plotOptions\"\n    [yaxis]=\"chartOptions.yaxis\"\n    [xaxis]=\"chartOptions.xaxis\"\n    [legend]=\"chartOptions.legend\"\n    [colors]=\"chartOptions.colors\"\n    [grid]=\"chartOptions.grid\"\n    [tooltip]=\"chartOptions.tooltip\" \n  ></apx-chart>\n</div>\n\n<div class=\"chart-collumn__tooltip\"></div>\n\n<lib-card></lib-card>\n", styles: [":host ::ng-deep .chart-collumn__tooltip{padding:8px}:host ::ng-deep .chart-collumn__tooltip__title{font-style:normal;font-weight:bold;font-size:16px;line-height:120%;color:#484a4d;margin:0 0 8px}:host ::ng-deep .chart-collumn__tooltip__bullet:before{content:\"\\2022\";font-weight:bold;margin-right:5px}\n"], components: [{ type: i1.ChartComponent, selector: "apx-chart", inputs: ["autoUpdateSeries", "chart", "annotations", "colors", "dataLabels", "series", "stroke", "labels", "legend", "markers", "noData", "fill", "tooltip", "plotOptions", "responsive", "xaxis", "yaxis", "grid", "states", "title", "subtitle", "theme"] }, { type: i2.CardComponent, selector: "lib-card", inputs: ["className", "style"] }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtY29sbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY2hhcnQtY29sbHVtbi9jaGFydC1jb2xsdW1uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC1jb2xsdW1uL2NoYXJ0LWNvbGx1bW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXBFLE9BQU8sRUFHTCxjQUFjLEVBTWYsTUFBTSxlQUFlLENBQUM7Ozs7QUFxQ3ZCLE1BQU0sT0FBTyxxQkFBcUI7SUFVaEM7UUFOQSxrREFBa0Q7UUFDekMsaUJBQVksR0FBWSxLQUFLLENBQUE7UUFDN0IsY0FBUyxHQUFZLEtBQUssQ0FBQTtRQUMxQixXQUFNLEdBQW9CLEtBQUssQ0FBQTtRQUl0QyxJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztRQUM1Qiw4QkFBOEI7UUFFOUIsd0JBQXdCO1FBQ3hCLGNBQWM7UUFDZCxRQUFRO1FBQ1IsK0JBQStCO1FBQy9CLDJCQUEyQjtRQUMzQixRQUFRO1FBQ1IsV0FBVztRQUNYLGdDQUFnQztRQUNoQyxrREFBa0Q7UUFDbEQsV0FBVztRQUNYLE9BQU87UUFDUCxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsMkNBQTJDO1FBQzNDLHlDQUF5QztRQUN6QyxhQUFhO1FBQ2IsV0FBVztRQUNYLE9BQU87UUFDUCxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFD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QTtJQUdoQyxDQUFDOztrSEFqTlUscUJBQXFCO3NHQUFyQixxQkFBcUIsMlBDbERsQyw2Z0JBa0JBOzJGRGdDYSxxQkFBcUI7a0JBTGpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsV0FBVyxFQUFFLGdDQUFnQztvQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7aUJBQzdDOzBFQUVxQixLQUFLO3NCQUF4QixTQUFTO3VCQUFDLE9BQU87Z0JBSVQsWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDaXJjbGVQcm9ncmVzc0NvbXBvbmVudCB9IGZyb20gJy4uL2NpcmNsZS1wcm9ncmVzcy9jaXJjbGUtcHJvZ3Jlc3MuY29tcG9uZW50JztcblxuaW1wb3J0IHtcbiAgQXBleENoYXJ0LFxuICBBcGV4QXhpc0NoYXJ0U2VyaWVzLFxuICBDaGFydENvbXBvbmVudCxcbiAgQXBleERhdGFMYWJlbHMsXG4gIEFwZXhQbG90T3B0aW9ucyxcbiAgQXBleFlBeGlzLFxuICBBcGV4TGVnZW5kLFxuICBBcGV4R3JpZFxufSBmcm9tIFwibmctYXBleGNoYXJ0c1wiO1xuXG50eXBlIEFwZXhYQXhpcyA9IHtcbiAgdHlwZT86IFwiY2F0ZWdvcnlcIiB8IFwiZGF0ZXRpbWVcIiB8IFwibnVtZXJpY1wiO1xuICBjYXRlZ29yaWVzPzogYW55O1xuICBsYWJlbHM/OiB7XG4gICAgc3R5bGU/OiB7XG4gICAgICBjb2xvcnM/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIGZvbnRTaXplPzogc3RyaW5nO1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnQgdHlwZSBDaGFydE9wdGlvbnMgPSB7XG4gIHNlcmllczogQXBleEF4aXNDaGFydFNlcmllcztcbiAgY2hhcnQ6IEFwZXhDaGFydDtcbiAgZGF0YUxhYmVsczogQXBleERhdGFMYWJlbHM7XG4gIHBsb3RPcHRpb25zOiBBcGV4UGxvdE9wdGlvbnM7XG4gIHlheGlzOiBBcGV4WUF4aXM7XG4gIHhheGlzOiBBcGV4WEF4aXM7XG4gIGdyaWQ6IEFwZXhHcmlkO1xuICBjb2xvcnM6IHN0cmluZ1tdO1xuICBsZWdlbmQ6IEFwZXhMZWdlbmQ7XG4gIHRvb2x0aXA6IGFueTtcbn07XG5cbmV4cG9ydCB0eXBlIGRhdGFDaGFydCA9IHtcbiAgbmFtZT86IHN0cmluZyxcbiAgZGF0YTogc3RyaW5nIHwgbnVtYmVyLFxuICBjb2xvcjogc3RyaW5nLFxufSBbXVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY2hhcnQtY29sbHVtbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFydC1jb2xsdW1uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhcnQtY29sbHVtbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRDb2xsdW1uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcImNoYXJ0XCIpIGNoYXJ0OiBhbnlcbiAgY2hhcnRPcHRpb25zOiBQYXJ0aWFsPENoYXJ0T3B0aW9ucz4gfCBhbnk7XG5cbiAgLy8gQElucHV0KCkgaXNIb3Jpem9udGFsOiBib29sZWFuIHwgc3RyaW5nID0gZmFsc2VcbiAgQElucHV0KCkgaXNIb3Jpem9udGFsOiBib29sZWFuID0gZmFsc2VcbiAgQElucHV0KCkgaXNZTGVnZW5kOiBib29sZWFuID0gZmFsc2VcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXIgPSAnMjY2J1xuICBASW5wdXQoKSBkYXRhOiBkYXRhQ2hhcnQgfCBhbnlcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNoYXJ0ID0gQ2hhcnRDb21wb25lbnQ7XG4gICAgLy8gdGhpcy5kYXRhQ2hhcnQgPSBkYXRhQ2hhcnQ7XG5cbiAgICAvLyB0aGlzLmNoYXJ0T3B0aW9ucyA9IHtcbiAgICAvLyAgIHNlcmllczogW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgLy8gbmFtZTogXCJkaXN0aWJ1dGVkXCIsXG4gICAgLy8gICAgICAgZGF0YTogWzIxLCAyMiwgMTBdXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgLy8ge1xuICAgIC8vICAgICAvLyAgIG5hbWU6IFwiZGlzdGlidXRlZDJcIixcbiAgICAvLyAgICAgLy8gICBkYXRhOiBbMjEsIDIyLCAxMCwgMjgsIDE2LCAyMSwgMTMsIDMwXVxuICAgIC8vICAgICAvLyB9XG4gICAgLy8gICBdLFxuICAgIC8vICAgY2hhcnQ6IHtcbiAgICAvLyAgICAgaGVpZ2h0OiAzNTAsXG4gICAgLy8gICAgIHR5cGU6IFwiYmFyXCJcbiAgICAvLyAgICAgLy8gZXZlbnRzOiB7XG4gICAgLy8gICAgIC8vICAgY2xpY2s6IGZ1bmN0aW9uIChjaGFydCwgdywgZSkge1xuICAgIC8vICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coY2hhcnQsIHcsIGUpXG4gICAgLy8gICAgIC8vICAgfVxuICAgIC8vICAgICAvLyB9XG4gICAgLy8gICB9LFxuICAgIC8vICAgY29sb3JzOiBbXG4gICAgLy8gICAgIFwiIzAwOTVEOVwiLFxuICAgIC8vICAgICBcIiM1QTg5MkVcIixcbiAgICAvLyAgICAgXCIjQ0IyMkQ3XCIsXG4gICAgLy8gICAgIFwiI0Y2NEEwMFwiLFxuICAgIC8vICAgICBcIiMzNTVDN0RcIixcbiAgICAvLyAgICAgXCIjQUU3QjE1XCIsXG4gICAgLy8gICAgIFwiIzMzQTQ5RFwiLFxuICAgIC8vICAgICBcIiM2MjQ3REVcIlxuICAgIC8vICAgXSxcbiAgICAvLyAgIHBsb3RPcHRpb25zOiB7XG4gICAgLy8gICAgIGJhcjoge1xuICAgIC8vICAgICAgIGNvbHVtbldpZHRoOiBcIjQ1JVwiLFxuICAgIC8vICAgICAgIGRpc3RyaWJ1dGVkOiB0cnVlLFxuICAgIC8vICAgICAgIC8vIGhvcml6b250YWw6IEJvb2xlYW4odGhpcy5pc0hvcml6b250YWwpXG4gICAgLy8gICAgICAgaG9yaXpvbnRhbDogdGhpcy5pc0hvcml6b250YWxcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSxcbiAgICAvLyAgIGRhdGFMYWJlbHM6IHtcbiAgICAvLyAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAvLyAgIH0sXG4gICAgLy8gICBsZWdlbmQ6IHtcbiAgICAvLyAgICAgc2hvdzogZmFsc2VcbiAgICAvLyAgICAgLy8gc2hvdzogdHJ1ZVxuICAgIC8vICAgfSxcbiAgICAvLyAgIGdyaWQ6IHtcbiAgICAvLyAgICAgc2hvdzogZmFsc2VcbiAgICAvLyAgIH0sXG4gICAgLy8gICB5YXhpczoge1xuICAgIC8vICAgICBzaG93OiB0cnVlXG4gICAgLy8gICB9LFxuICAgIC8vICAgeGF4aXM6IHtcbiAgICAvLyAgICAgLy8gc2hvdzogZmFsc2UsXG4gICAgLy8gICAgIGNhdGVnb3JpZXM6IFtcbiAgICAvLyAgICAgICAvLyBcIlNvdXRoIEtvcmVhXCIsXG4gICAgLy8gICAgICAgXCJFeGNlbMOqbmNpYSBvcGVyYWNpb25hbFwiLFxuICAgIC8vICAgICAgIC8vIFtcIkpvaG5cIiwgXCJEb2VcIl0sXG4gICAgLy8gICAgICAgW1wiSm9lXCIsIFwiU21pdGhcIl0sXG4gICAgLy8gICAgICAgW1wiSmFrZVwiLCBcIldpbGxpYW1zXCJdXG4gICAgLy8gICAgIF0sXG4gICAgLy8gICAgIGxhYmVsczoge1xuICAgIC8vICAgICAgIHN0eWxlOiB7XG4gICAgLy8gICAgICAgICBjb2xvcnM6IFtcbiAgICAvLyAgICAgICAgICAgXCIjMDA4RkZCXCIsXG4gICAgLy8gICAgICAgICAgIFwiIzAwRTM5NlwiLFxuICAgIC8vICAgICAgICAgICBcIiNGRUIwMTlcIixcbiAgICAvLyAgICAgICAgICAgXCIjRkY0NTYwXCIsXG4gICAgLy8gICAgICAgICAgIFwiIzc3NUREMFwiLFxuICAgIC8vICAgICAgICAgICBcIiM1NDZFN0FcIixcbiAgICAvLyAgICAgICAgICAgXCIjMjZhNjlhXCIsXG4gICAgLy8gICAgICAgICAgIFwiI0QxMENFOFwiXG4gICAgLy8gICAgICAgICBdLFxuICAgIC8vICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfTtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2codGhpcy5jaGFydE9wdGlvbnMpXG4gICAgY29uc29sZS5sb2codGhpcy5pc0hvcml6b250YWwpXG5cbiAgICB0aGlzLmNoYXJ0T3B0aW9ucyA9IHtcbiAgICAgIHNlcmllczogW1xuICAgICAgICB7XG4gICAgICAgICAgLy8gbmFtZTogXCJkaXN0aWJ1dGVkXCIsXG5cbiAgICAgICAgICAvLyBkYXRhOiBbMjEsIDIyLCAxMF1cbiAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEubWFwKChpdGVtOiBzdHJpbmcgfCBudW1iZXIgfCBhbnkpID0+IGl0ZW0uZGF0YSlcbiAgICAgICAgfVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgbmFtZTogXCJkaXN0aWJ1dGVkMlwiLFxuICAgICAgICAvLyAgIGRhdGE6IFsyMSwgMjIsIDEwLCAyOCwgMTYsIDIxLCAxMywgMzBdXG4gICAgICAgIC8vIH1cbiAgICAgIF0sXG4gICAgICBjaGFydDoge1xuICAgICAgICAvLyBoZWlnaHQ6ICcyMDAnLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgICB0eXBlOiBcImJhclwiXG4gICAgICAgIC8vIGV2ZW50czoge1xuICAgICAgICAvLyAgIGNsaWNrOiBmdW5jdGlvbiAoY2hhcnQsIHcsIGUpIHtcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGNoYXJ0LCB3LCBlKVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgfSxcbiAgICAgIC8vIGNvbG9yczogW1xuICAgICAgLy8gICBcIiMwMDk1RDlcIixcbiAgICAgIC8vICAgXCIjNUE4OTJFXCIsXG4gICAgICAvLyAgIFwiI0NCMjJEN1wiLFxuICAgICAgLy8gICBcIiNGNjRBMDBcIixcbiAgICAgIC8vICAgXCIjMzU1QzdEXCIsXG4gICAgICAvLyAgIFwiI0FFN0IxNVwiLFxuICAgICAgLy8gICBcIiMzM0E0OURcIixcbiAgICAgIC8vICAgXCIjNjI0N0RFXCJcbiAgICAgIC8vIF0sXG4gICAgICBjb2xvcnM6IHRoaXMuZGF0YS5tYXAoKGl0ZW06IHN0cmluZyB8IG51bWJlciB8IGFueSkgPT4gaXRlbS5jb2xvciksXG4gICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICBiYXI6IHtcbiAgICAgICAgICBjb2x1bW5XaWR0aDogXCI0NSVcIixcbiAgICAgICAgICBkaXN0cmlidXRlZDogdHJ1ZSxcbiAgICAgICAgICAvLyBob3Jpem9udGFsOiBCb29sZWFuKHRoaXMuaXNIb3Jpem9udGFsKVxuICAgICAgICAgIGhvcml6b250YWw6IHRoaXMuaXNIb3Jpem9udGFsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b29sdGlwOiB7XG4gICAgICAgIGN1c3RvbTogZnVuY3Rpb24oe3Nlcmllcywgc2VyaWVzSW5kZXgsIGRhdGFQb2ludEluZGV4LCB3fTogYW55KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coc2VyaWVzKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHNlcmllc0luZGV4KVxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFQb2ludEluZGV4KVxuICAgICAgICAgIGNvbnNvbGUubG9nKHcpXG4gICAgICAgICAgLy8gcmV0dXJuICc8ZGl2IGNsYXNzPVwiYXJyb3dfYm94XCI+JyArXG4gICAgICAgICAgLy8gICAnPHA+JyArIHcuY29uZmlnLnhheGlzLmNhdGVnb3JpZXNbZGF0YVBvaW50SW5kZXhdLmpvaW4oJyAnKSArICc8L3A+JyArXG4gICAgICAgICAgLy8gICAnPHNwYW4gc3R5bGU9XCJjb2xvcjogJHtjb2xvcn07PicgKyB3LmNvbmZpZy5jb2xvcnMgKyAnPC9zcGFuPicgK1xuICAgICAgICAgIC8vICAgJzxzcGFuPicgKyBzZXJpZXNbc2VyaWVzSW5kZXhdW2RhdGFQb2ludEluZGV4XSArICc8L3NwYW4+JyArXG4gICAgICAgICAgLy8gICAnPC9kaXY+J1xuXG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjaGFydC1jb2xsdW1uX190b29sdGlwXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNoYXJ0LWNvbGx1bW5fX3Rvb2x0aXBfX3RpdGxlXCI+JHt3LmNvbmZpZy54YXhpcy5jYXRlZ29yaWVzW2RhdGFQb2ludEluZGV4XS5qb2luKCcgJyl9PC9wPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGFydC1jb2xsdW1uX190b29sdGlwX19idWxsZXRcIiBzdHlsZT1cImNvbG9yOiAke3cuY29uZmlnLmNvbG9yc1tkYXRhUG9pbnRJbmRleF19O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sb3I6ICNCMkI1QkY7XCI+VmFsb3I6IDwvc3Bhbj4gPHNwYW4+JHtzZXJpZXNbc2VyaWVzSW5kZXhdW2RhdGFQb2ludEluZGV4XX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5gXG5cbiAgICAgICAgICAgIC8vIHJldHVybiBgPGxpYi1jYXJkPjwvbGliLWNhcmQ+YFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3VzdG9uOiBDaXJjbGVQcm9ncmVzc0NvbXBvbmVudFxuICAgICAgfSxcbiAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgLy8gc2hvdzogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgIH0sXG4gICAgICB5YXhpczoge1xuICAgICAgICBzaG93OiB0aGlzLmlzWUxlZ2VuZFxuICAgICAgfSxcbiAgICAgIHhheGlzOiB7XG4gICAgICAgIC8vIHNob3c6IGZhbHNlLFxuICAgICAgICAvLyBjYXRlZ29yaWVzOiBbXG4gICAgICAgIC8vICAgLy8gXCJTb3V0aCBLb3JlYVwiLFxuICAgICAgICAvLyAgIFwiRXhjZWzDqm5jaWEgb3BlcmFjaW9uYWxcIixcbiAgICAgICAgLy8gICAvLyBbXCJKb2huXCIsIFwiRG9lXCJdLFxuICAgICAgICAvLyAgIFtcIkpvZVwiLCBcIlNtaXRoXCJdLFxuICAgICAgICAvLyAgIFtcIkpha2VcIiwgXCJXaWxsaWFtc1wiXVxuICAgICAgICAvLyBdLFxuICAgICAgICBjYXRlZ29yaWVzOiB0aGlzLmRhdGEubWFwKChpdGVtOiBzdHJpbmcgfCBudW1iZXIgfCBhbnkpID0+IGl0ZW0ubmFtZS5zcGxpdCgnICcpKSxcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIC8vIGNvbG9yczogW1xuICAgICAgICAgICAgLy8gICBcIiMwMDhGRkJcIixcbiAgICAgICAgICAgIC8vICAgXCIjMDBFMzk2XCIsXG4gICAgICAgICAgICAvLyAgIFwiI0ZFQjAxOVwiLFxuICAgICAgICAgICAgLy8gICBcIiNGRjQ1NjBcIixcbiAgICAgICAgICAgIC8vICAgXCIjNzc1REQwXCIsXG4gICAgICAgICAgICAvLyAgIFwiIzU0NkU3QVwiLFxuICAgICAgICAgICAgLy8gICBcIiMyNmE2OWFcIixcbiAgICAgICAgICAgIC8vICAgXCIjRDEwQ0U4XCJcbiAgICAgICAgICAgIC8vIF0sXG4gICAgICAgICAgICAvLyBjb2xvcnM6IHRoaXMuZGF0YS5tYXAoKGl0ZW06IHN0cmluZyB8IG51bWJlciB8IGFueSkgPT4gaXRlbS5jb2xvciksXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2codGhpcy5jaGFydE9wdGlvbnMpXG4gICAgY29uc29sZS5sb2codGhpcy5pc0hvcml6b250YWwpXG5cblxuICB9XG5cbn1cbiIsIjxkaXYgaWQ9XCJjaGFydFwiPlxuICA8YXB4LWNoYXJ0XG4gICAgW3Nlcmllc109XCJjaGFydE9wdGlvbnMuc2VyaWVzXCJcbiAgICBbY2hhcnRdPVwiY2hhcnRPcHRpb25zLmNoYXJ0XCJcbiAgICBbZGF0YUxhYmVsc109XCJjaGFydE9wdGlvbnMuZGF0YUxhYmVsc1wiXG4gICAgW3Bsb3RPcHRpb25zXT1cImNoYXJ0T3B0aW9ucy5wbG90T3B0aW9uc1wiXG4gICAgW3lheGlzXT1cImNoYXJ0T3B0aW9ucy55YXhpc1wiXG4gICAgW3hheGlzXT1cImNoYXJ0T3B0aW9ucy54YXhpc1wiXG4gICAgW2xlZ2VuZF09XCJjaGFydE9wdGlvbnMubGVnZW5kXCJcbiAgICBbY29sb3JzXT1cImNoYXJ0T3B0aW9ucy5jb2xvcnNcIlxuICAgIFtncmlkXT1cImNoYXJ0T3B0aW9ucy5ncmlkXCJcbiAgICBbdG9vbHRpcF09XCJjaGFydE9wdGlvbnMudG9vbHRpcFwiIFxuICA+PC9hcHgtY2hhcnQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNoYXJ0LWNvbGx1bW5fX3Rvb2x0aXBcIj48L2Rpdj5cblxuPGxpYi1jYXJkPjwvbGliLWNhcmQ+XG4iXX0=