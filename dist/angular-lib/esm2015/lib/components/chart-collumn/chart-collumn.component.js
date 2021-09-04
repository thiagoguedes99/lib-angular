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
                height: 350,
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
ChartCollumnComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: ChartCollumnComponent, selector: "lib-chart-collumn", inputs: { isHorizontal: "isHorizontal", isYLegend: "isYLegend", data: "data" }, viewQueries: [{ propertyName: "chart", first: true, predicate: ["chart"], descendants: true }], ngImport: i0, template: "<div id=\"chart\">\n  <apx-chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [dataLabels]=\"chartOptions.dataLabels\"\n    [plotOptions]=\"chartOptions.plotOptions\"\n    [yaxis]=\"chartOptions.yaxis\"\n    [xaxis]=\"chartOptions.xaxis\"\n    [legend]=\"chartOptions.legend\"\n    [colors]=\"chartOptions.colors\"\n    [grid]=\"chartOptions.grid\"\n    [tooltip]=\"chartOptions.tooltip\" \n  ></apx-chart>\n</div>\n\n<div class=\"chart-collumn__tooltip\"></div>\n\n<lib-card></lib-card>\n", styles: [":host ::ng-deep .chart-collumn__tooltip{padding:8px}:host ::ng-deep .chart-collumn__tooltip__title{font-style:normal;font-weight:bold;font-size:16px;line-height:120%;color:#484a4d;margin:0 0 8px}:host ::ng-deep .chart-collumn__tooltip__bullet:before{content:\"\\2022\";font-weight:bold;margin-right:5px}\n"], components: [{ type: i1.ChartComponent, selector: "apx-chart", inputs: ["autoUpdateSeries", "chart", "annotations", "colors", "dataLabels", "series", "stroke", "labels", "legend", "markers", "noData", "fill", "tooltip", "plotOptions", "responsive", "xaxis", "yaxis", "grid", "states", "title", "subtitle", "theme"] }, { type: i2.CardComponent, selector: "lib-card", inputs: ["className", "style"] }] });
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
            }], data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtY29sbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY2hhcnQtY29sbHVtbi9jaGFydC1jb2xsdW1uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC1jb2xsdW1uL2NoYXJ0LWNvbGx1bW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXBFLE9BQU8sRUFHTCxjQUFjLEVBTWYsTUFBTSxlQUFlLENBQUM7Ozs7QUFxQ3ZCLE1BQU0sT0FBTyxxQkFBcUI7SUFTaEM7UUFMQSxrREFBa0Q7UUFDekMsaUJBQVksR0FBWSxLQUFLLENBQUE7UUFDN0IsY0FBUyxHQUFZLEtBQUssQ0FBQTtRQUlqQyxJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztRQUM1Qiw4QkFBOEI7UUFFOUIsd0JBQXdCO1FBQ3hCLGNBQWM7UUFDZCxRQUFRO1FBQ1IsK0JBQStCO1FBQy9CLDJCQUEyQjtRQUMzQixRQUFRO1FBQ1IsV0FBVztRQUNYLGdDQUFnQztRQUNoQyxrREFBa0Q7UUFDbEQsV0FBVztRQUNYLE9BQU87UUFDUCxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsMkNBQTJDO1FBQzNDLHlDQUF5QztRQUN6QyxhQUFhO1FBQ2IsV0FBVztRQUNYLE9BQU87UUFDUCxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNo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QkFrQkE7MkZEZ0NhLHFCQUFxQjtrQkFMakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixXQUFXLEVBQUUsZ0NBQWdDO29CQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztpQkFDN0M7MEVBRXFCLEtBQUs7c0JBQXhCLFNBQVM7dUJBQUMsT0FBTztnQkFJVCxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2lyY2xlUHJvZ3Jlc3NDb21wb25lbnQgfSBmcm9tICcuLi9jaXJjbGUtcHJvZ3Jlc3MvY2lyY2xlLXByb2dyZXNzLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7XG4gIEFwZXhDaGFydCxcbiAgQXBleEF4aXNDaGFydFNlcmllcyxcbiAgQ2hhcnRDb21wb25lbnQsXG4gIEFwZXhEYXRhTGFiZWxzLFxuICBBcGV4UGxvdE9wdGlvbnMsXG4gIEFwZXhZQXhpcyxcbiAgQXBleExlZ2VuZCxcbiAgQXBleEdyaWRcbn0gZnJvbSBcIm5nLWFwZXhjaGFydHNcIjtcblxudHlwZSBBcGV4WEF4aXMgPSB7XG4gIHR5cGU/OiBcImNhdGVnb3J5XCIgfCBcImRhdGV0aW1lXCIgfCBcIm51bWVyaWNcIjtcbiAgY2F0ZWdvcmllcz86IGFueTtcbiAgbGFiZWxzPzoge1xuICAgIHN0eWxlPzoge1xuICAgICAgY29sb3JzPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICBmb250U2l6ZT86IHN0cmluZztcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQ2hhcnRPcHRpb25zID0ge1xuICBzZXJpZXM6IEFwZXhBeGlzQ2hhcnRTZXJpZXM7XG4gIGNoYXJ0OiBBcGV4Q2hhcnQ7XG4gIGRhdGFMYWJlbHM6IEFwZXhEYXRhTGFiZWxzO1xuICBwbG90T3B0aW9uczogQXBleFBsb3RPcHRpb25zO1xuICB5YXhpczogQXBleFlBeGlzO1xuICB4YXhpczogQXBleFhBeGlzO1xuICBncmlkOiBBcGV4R3JpZDtcbiAgY29sb3JzOiBzdHJpbmdbXTtcbiAgbGVnZW5kOiBBcGV4TGVnZW5kO1xuICB0b29sdGlwOiBhbnk7XG59O1xuXG5leHBvcnQgdHlwZSBkYXRhQ2hhcnQgPSB7XG4gIG5hbWU/OiBzdHJpbmcsXG4gIGRhdGE6IHN0cmluZyB8IG51bWJlcixcbiAgY29sb3I6IHN0cmluZyxcbn0gW11cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNoYXJ0LWNvbGx1bW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhcnQtY29sbHVtbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYXJ0LWNvbGx1bW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0Q29sbHVtbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJjaGFydFwiKSBjaGFydDogYW55XG4gIGNoYXJ0T3B0aW9uczogUGFydGlhbDxDaGFydE9wdGlvbnM+IHwgYW55O1xuXG4gIC8vIEBJbnB1dCgpIGlzSG9yaXpvbnRhbDogYm9vbGVhbiB8IHN0cmluZyA9IGZhbHNlXG4gIEBJbnB1dCgpIGlzSG9yaXpvbnRhbDogYm9vbGVhbiA9IGZhbHNlXG4gIEBJbnB1dCgpIGlzWUxlZ2VuZDogYm9vbGVhbiA9IGZhbHNlXG4gIEBJbnB1dCgpIGRhdGE6IGRhdGFDaGFydCB8IGFueVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2hhcnQgPSBDaGFydENvbXBvbmVudDtcbiAgICAvLyB0aGlzLmRhdGFDaGFydCA9IGRhdGFDaGFydDtcblxuICAgIC8vIHRoaXMuY2hhcnRPcHRpb25zID0ge1xuICAgIC8vICAgc2VyaWVzOiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAvLyBuYW1lOiBcImRpc3RpYnV0ZWRcIixcbiAgICAvLyAgICAgICBkYXRhOiBbMjEsIDIyLCAxMF1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICAvLyB7XG4gICAgLy8gICAgIC8vICAgbmFtZTogXCJkaXN0aWJ1dGVkMlwiLFxuICAgIC8vICAgICAvLyAgIGRhdGE6IFsyMSwgMjIsIDEwLCAyOCwgMTYsIDIxLCAxMywgMzBdXG4gICAgLy8gICAgIC8vIH1cbiAgICAvLyAgIF0sXG4gICAgLy8gICBjaGFydDoge1xuICAgIC8vICAgICBoZWlnaHQ6IDM1MCxcbiAgICAvLyAgICAgdHlwZTogXCJiYXJcIlxuICAgIC8vICAgICAvLyBldmVudHM6IHtcbiAgICAvLyAgICAgLy8gICBjbGljazogZnVuY3Rpb24gKGNoYXJ0LCB3LCBlKSB7XG4gICAgLy8gICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhjaGFydCwgdywgZSlcbiAgICAvLyAgICAgLy8gICB9XG4gICAgLy8gICAgIC8vIH1cbiAgICAvLyAgIH0sXG4gICAgLy8gICBjb2xvcnM6IFtcbiAgICAvLyAgICAgXCIjMDA5NUQ5XCIsXG4gICAgLy8gICAgIFwiIzVBODkyRVwiLFxuICAgIC8vICAgICBcIiNDQjIyRDdcIixcbiAgICAvLyAgICAgXCIjRjY0QTAwXCIsXG4gICAgLy8gICAgIFwiIzM1NUM3RFwiLFxuICAgIC8vICAgICBcIiNBRTdCMTVcIixcbiAgICAvLyAgICAgXCIjMzNBNDlEXCIsXG4gICAgLy8gICAgIFwiIzYyNDdERVwiXG4gICAgLy8gICBdLFxuICAgIC8vICAgcGxvdE9wdGlvbnM6IHtcbiAgICAvLyAgICAgYmFyOiB7XG4gICAgLy8gICAgICAgY29sdW1uV2lkdGg6IFwiNDUlXCIsXG4gICAgLy8gICAgICAgZGlzdHJpYnV0ZWQ6IHRydWUsXG4gICAgLy8gICAgICAgLy8gaG9yaXpvbnRhbDogQm9vbGVhbih0aGlzLmlzSG9yaXpvbnRhbClcbiAgICAvLyAgICAgICBob3Jpem9udGFsOiB0aGlzLmlzSG9yaXpvbnRhbFxuICAgIC8vICAgICB9XG4gICAgLy8gICB9LFxuICAgIC8vICAgZGF0YUxhYmVsczoge1xuICAgIC8vICAgICBlbmFibGVkOiBmYWxzZVxuICAgIC8vICAgfSxcbiAgICAvLyAgIGxlZ2VuZDoge1xuICAgIC8vICAgICBzaG93OiBmYWxzZVxuICAgIC8vICAgICAvLyBzaG93OiB0cnVlXG4gICAgLy8gICB9LFxuICAgIC8vICAgZ3JpZDoge1xuICAgIC8vICAgICBzaG93OiBmYWxzZVxuICAgIC8vICAgfSxcbiAgICAvLyAgIHlheGlzOiB7XG4gICAgLy8gICAgIHNob3c6IHRydWVcbiAgICAvLyAgIH0sXG4gICAgLy8gICB4YXhpczoge1xuICAgIC8vICAgICAvLyBzaG93OiBmYWxzZSxcbiAgICAvLyAgICAgY2F0ZWdvcmllczogW1xuICAgIC8vICAgICAgIC8vIFwiU291dGggS29yZWFcIixcbiAgICAvLyAgICAgICBcIkV4Y2Vsw6puY2lhIG9wZXJhY2lvbmFsXCIsXG4gICAgLy8gICAgICAgLy8gW1wiSm9oblwiLCBcIkRvZVwiXSxcbiAgICAvLyAgICAgICBbXCJKb2VcIiwgXCJTbWl0aFwiXSxcbiAgICAvLyAgICAgICBbXCJKYWtlXCIsIFwiV2lsbGlhbXNcIl1cbiAgICAvLyAgICAgXSxcbiAgICAvLyAgICAgbGFiZWxzOiB7XG4gICAgLy8gICAgICAgc3R5bGU6IHtcbiAgICAvLyAgICAgICAgIGNvbG9yczogW1xuICAgIC8vICAgICAgICAgICBcIiMwMDhGRkJcIixcbiAgICAvLyAgICAgICAgICAgXCIjMDBFMzk2XCIsXG4gICAgLy8gICAgICAgICAgIFwiI0ZFQjAxOVwiLFxuICAgIC8vICAgICAgICAgICBcIiNGRjQ1NjBcIixcbiAgICAvLyAgICAgICAgICAgXCIjNzc1REQwXCIsXG4gICAgLy8gICAgICAgICAgIFwiIzU0NkU3QVwiLFxuICAgIC8vICAgICAgICAgICBcIiMyNmE2OWFcIixcbiAgICAvLyAgICAgICAgICAgXCIjRDEwQ0U4XCJcbiAgICAvLyAgICAgICAgIF0sXG4gICAgLy8gICAgICAgICBmb250U2l6ZTogXCIxMnB4XCJcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9O1xuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNoYXJ0T3B0aW9ucylcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlzSG9yaXpvbnRhbClcblxuICAgIHRoaXMuY2hhcnRPcHRpb25zID0ge1xuICAgICAgc2VyaWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBuYW1lOiBcImRpc3RpYnV0ZWRcIixcblxuICAgICAgICAgIC8vIGRhdGE6IFsyMSwgMjIsIDEwXVxuICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YS5tYXAoKGl0ZW06IHN0cmluZyB8IG51bWJlciB8IGFueSkgPT4gaXRlbS5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBuYW1lOiBcImRpc3RpYnV0ZWQyXCIsXG4gICAgICAgIC8vICAgZGF0YTogWzIxLCAyMiwgMTAsIDI4LCAxNiwgMjEsIDEzLCAzMF1cbiAgICAgICAgLy8gfVxuICAgICAgXSxcbiAgICAgIGNoYXJ0OiB7XG4gICAgICAgIGhlaWdodDogMzUwLFxuICAgICAgICB0eXBlOiBcImJhclwiXG4gICAgICAgIC8vIGV2ZW50czoge1xuICAgICAgICAvLyAgIGNsaWNrOiBmdW5jdGlvbiAoY2hhcnQsIHcsIGUpIHtcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGNoYXJ0LCB3LCBlKVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgfSxcbiAgICAgIC8vIGNvbG9yczogW1xuICAgICAgLy8gICBcIiMwMDk1RDlcIixcbiAgICAgIC8vICAgXCIjNUE4OTJFXCIsXG4gICAgICAvLyAgIFwiI0NCMjJEN1wiLFxuICAgICAgLy8gICBcIiNGNjRBMDBcIixcbiAgICAgIC8vICAgXCIjMzU1QzdEXCIsXG4gICAgICAvLyAgIFwiI0FFN0IxNVwiLFxuICAgICAgLy8gICBcIiMzM0E0OURcIixcbiAgICAgIC8vICAgXCIjNjI0N0RFXCJcbiAgICAgIC8vIF0sXG4gICAgICBjb2xvcnM6IHRoaXMuZGF0YS5tYXAoKGl0ZW06IHN0cmluZyB8IG51bWJlciB8IGFueSkgPT4gaXRlbS5jb2xvciksXG4gICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICBiYXI6IHtcbiAgICAgICAgICBjb2x1bW5XaWR0aDogXCI0NSVcIixcbiAgICAgICAgICBkaXN0cmlidXRlZDogdHJ1ZSxcbiAgICAgICAgICAvLyBob3Jpem9udGFsOiBCb29sZWFuKHRoaXMuaXNIb3Jpem9udGFsKVxuICAgICAgICAgIGhvcml6b250YWw6IHRoaXMuaXNIb3Jpem9udGFsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b29sdGlwOiB7XG4gICAgICAgIGN1c3RvbTogZnVuY3Rpb24oe3Nlcmllcywgc2VyaWVzSW5kZXgsIGRhdGFQb2ludEluZGV4LCB3fTogYW55KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coc2VyaWVzKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHNlcmllc0luZGV4KVxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFQb2ludEluZGV4KVxuICAgICAgICAgIGNvbnNvbGUubG9nKHcpXG4gICAgICAgICAgLy8gcmV0dXJuICc8ZGl2IGNsYXNzPVwiYXJyb3dfYm94XCI+JyArXG4gICAgICAgICAgLy8gICAnPHA+JyArIHcuY29uZmlnLnhheGlzLmNhdGVnb3JpZXNbZGF0YVBvaW50SW5kZXhdLmpvaW4oJyAnKSArICc8L3A+JyArXG4gICAgICAgICAgLy8gICAnPHNwYW4gc3R5bGU9XCJjb2xvcjogJHtjb2xvcn07PicgKyB3LmNvbmZpZy5jb2xvcnMgKyAnPC9zcGFuPicgK1xuICAgICAgICAgIC8vICAgJzxzcGFuPicgKyBzZXJpZXNbc2VyaWVzSW5kZXhdW2RhdGFQb2ludEluZGV4XSArICc8L3NwYW4+JyArXG4gICAgICAgICAgLy8gICAnPC9kaXY+J1xuXG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjaGFydC1jb2xsdW1uX190b29sdGlwXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNoYXJ0LWNvbGx1bW5fX3Rvb2x0aXBfX3RpdGxlXCI+JHt3LmNvbmZpZy54YXhpcy5jYXRlZ29yaWVzW2RhdGFQb2ludEluZGV4XS5qb2luKCcgJyl9PC9wPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGFydC1jb2xsdW1uX190b29sdGlwX19idWxsZXRcIiBzdHlsZT1cImNvbG9yOiAke3cuY29uZmlnLmNvbG9yc1tkYXRhUG9pbnRJbmRleF19O1wiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sb3I6ICNCMkI1QkY7XCI+VmFsb3I6IDwvc3Bhbj4gPHNwYW4+JHtzZXJpZXNbc2VyaWVzSW5kZXhdW2RhdGFQb2ludEluZGV4XX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5gXG5cbiAgICAgICAgICAgIC8vIHJldHVybiBgPGxpYi1jYXJkPjwvbGliLWNhcmQ+YFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3VzdG9uOiBDaXJjbGVQcm9ncmVzc0NvbXBvbmVudFxuICAgICAgfSxcbiAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgLy8gc2hvdzogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgIH0sXG4gICAgICB5YXhpczoge1xuICAgICAgICBzaG93OiB0aGlzLmlzWUxlZ2VuZFxuICAgICAgfSxcbiAgICAgIHhheGlzOiB7XG4gICAgICAgIC8vIHNob3c6IGZhbHNlLFxuICAgICAgICAvLyBjYXRlZ29yaWVzOiBbXG4gICAgICAgIC8vICAgLy8gXCJTb3V0aCBLb3JlYVwiLFxuICAgICAgICAvLyAgIFwiRXhjZWzDqm5jaWEgb3BlcmFjaW9uYWxcIixcbiAgICAgICAgLy8gICAvLyBbXCJKb2huXCIsIFwiRG9lXCJdLFxuICAgICAgICAvLyAgIFtcIkpvZVwiLCBcIlNtaXRoXCJdLFxuICAgICAgICAvLyAgIFtcIkpha2VcIiwgXCJXaWxsaWFtc1wiXVxuICAgICAgICAvLyBdLFxuICAgICAgICBjYXRlZ29yaWVzOiB0aGlzLmRhdGEubWFwKChpdGVtOiBzdHJpbmcgfCBudW1iZXIgfCBhbnkpID0+IGl0ZW0ubmFtZS5zcGxpdCgnICcpKSxcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIC8vIGNvbG9yczogW1xuICAgICAgICAgICAgLy8gICBcIiMwMDhGRkJcIixcbiAgICAgICAgICAgIC8vICAgXCIjMDBFMzk2XCIsXG4gICAgICAgICAgICAvLyAgIFwiI0ZFQjAxOVwiLFxuICAgICAgICAgICAgLy8gICBcIiNGRjQ1NjBcIixcbiAgICAgICAgICAgIC8vICAgXCIjNzc1REQwXCIsXG4gICAgICAgICAgICAvLyAgIFwiIzU0NkU3QVwiLFxuICAgICAgICAgICAgLy8gICBcIiMyNmE2OWFcIixcbiAgICAgICAgICAgIC8vICAgXCIjRDEwQ0U4XCJcbiAgICAgICAgICAgIC8vIF0sXG4gICAgICAgICAgICAvLyBjb2xvcnM6IHRoaXMuZGF0YS5tYXAoKGl0ZW06IHN0cmluZyB8IG51bWJlciB8IGFueSkgPT4gaXRlbS5jb2xvciksXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2codGhpcy5jaGFydE9wdGlvbnMpXG4gICAgY29uc29sZS5sb2codGhpcy5pc0hvcml6b250YWwpXG5cblxuICB9XG5cbn1cbiIsIjxkaXYgaWQ9XCJjaGFydFwiPlxuICA8YXB4LWNoYXJ0XG4gICAgW3Nlcmllc109XCJjaGFydE9wdGlvbnMuc2VyaWVzXCJcbiAgICBbY2hhcnRdPVwiY2hhcnRPcHRpb25zLmNoYXJ0XCJcbiAgICBbZGF0YUxhYmVsc109XCJjaGFydE9wdGlvbnMuZGF0YUxhYmVsc1wiXG4gICAgW3Bsb3RPcHRpb25zXT1cImNoYXJ0T3B0aW9ucy5wbG90T3B0aW9uc1wiXG4gICAgW3lheGlzXT1cImNoYXJ0T3B0aW9ucy55YXhpc1wiXG4gICAgW3hheGlzXT1cImNoYXJ0T3B0aW9ucy54YXhpc1wiXG4gICAgW2xlZ2VuZF09XCJjaGFydE9wdGlvbnMubGVnZW5kXCJcbiAgICBbY29sb3JzXT1cImNoYXJ0T3B0aW9ucy5jb2xvcnNcIlxuICAgIFtncmlkXT1cImNoYXJ0T3B0aW9ucy5ncmlkXCJcbiAgICBbdG9vbHRpcF09XCJjaGFydE9wdGlvbnMudG9vbHRpcFwiIFxuICA+PC9hcHgtY2hhcnQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNoYXJ0LWNvbGx1bW5fX3Rvb2x0aXBcIj48L2Rpdj5cblxuPGxpYi1jYXJkPjwvbGliLWNhcmQ+XG4iXX0=