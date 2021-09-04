import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularLibComponent } from './angular-lib.component';
import { ColComponent } from './components/grid/col/col.component';
import { ContainerComponent } from './components/grid/container/container.component';
import { ChartCollumnComponent } from './components/chart-collumn/chart-collumn.component';
import { CardComponent } from './components/card/card.component';
import { AlertComponent } from './components/alert/alert.component';
import { TextComponent } from './components/text/text.component';
import { IconModule } from './components/icon/icon.module';
import * as i0 from "@angular/core";
export class AngularLibModule {
}
AngularLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AngularLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, declarations: [AngularLibComponent,
        ColComponent,
        ContainerComponent,
        ChartCollumnComponent,
        CardComponent,
        AlertComponent,
        TextComponent], imports: [CommonModule,
        NgApexchartsModule], exports: [AngularLibComponent,
        ContainerComponent,
        ColComponent,
        ChartCollumnComponent,
        CardComponent,
        AlertComponent,
        TextComponent,
        IconModule] });
AngularLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, imports: [[
            CommonModule,
            NgApexchartsModule,
        ], IconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: AngularLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AngularLibComponent,
                        ColComponent,
                        ContainerComponent,
                        ChartCollumnComponent,
                        CardComponent,
                        AlertComponent,
                        TextComponent,
                    ],
                    imports: [
                        CommonModule,
                        NgApexchartsModule,
                    ],
                    exports: [
                        AngularLibComponent,
                        ContainerComponent,
                        ColComponent,
                        ChartCollumnComponent,
                        CardComponent,
                        AlertComponent,
                        TextComponent,
                        IconModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1saWIvc3JjL2xpYi9hbmd1bGFyLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNyRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBOEIzRCxNQUFNLE9BQU8sZ0JBQWdCOzs2R0FBaEIsZ0JBQWdCOzhHQUFoQixnQkFBZ0IsaUJBeEJ6QixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsYUFBYTtRQUNiLGNBQWM7UUFDZCxhQUFhLGFBR2IsWUFBWTtRQUNaLGtCQUFrQixhQUdsQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsYUFBYTtRQUNiLGNBQWM7UUFDZCxhQUFhO1FBQ2IsVUFBVTs4R0FJRCxnQkFBZ0IsWUFoQmxCO1lBQ1AsWUFBWTtZQUNaLGtCQUFrQjtTQUNuQixFQVNDLFVBQVU7MkZBSUQsZ0JBQWdCO2tCQTFCNUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLGtCQUFrQjt3QkFDbEIscUJBQXFCO3dCQUNyQixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsYUFBYTtxQkFDZDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsWUFBWTt3QkFDWixxQkFBcUI7d0JBQ3JCLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLFVBQVU7cUJBQ1g7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTmdBcGV4Y2hhcnRzTW9kdWxlIH0gZnJvbSAnbmctYXBleGNoYXJ0cyc7XG5cbmltcG9ydCB7IEFuZ3VsYXJMaWJDb21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXItbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ3JpZC9jb2wvY29sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ3JpZC9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydENvbGx1bW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hhcnQtY29sbHVtbi9jaGFydC1jb2xsdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWxlcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dC90ZXh0LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvaWNvbi9pY29uLm1vZHVsZSc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBbmd1bGFyTGliQ29tcG9uZW50LFxuICAgIENvbENvbXBvbmVudCxcbiAgICBDb250YWluZXJDb21wb25lbnQsXG4gICAgQ2hhcnRDb2xsdW1uQ29tcG9uZW50LFxuICAgIENhcmRDb21wb25lbnQsXG4gICAgQWxlcnRDb21wb25lbnQsXG4gICAgVGV4dENvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOZ0FwZXhjaGFydHNNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBbmd1bGFyTGliQ29tcG9uZW50LFxuICAgIENvbnRhaW5lckNvbXBvbmVudCxcbiAgICBDb2xDb21wb25lbnQsXG4gICAgQ2hhcnRDb2xsdW1uQ29tcG9uZW50LFxuICAgIENhcmRDb21wb25lbnQsXG4gICAgQWxlcnRDb21wb25lbnQsXG4gICAgVGV4dENvbXBvbmVudCxcbiAgICBJY29uTW9kdWxlXG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBbmd1bGFyTGliTW9kdWxlIHsgfVxuIl19