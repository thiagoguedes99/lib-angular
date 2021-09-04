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
import { PointerInfoComponent } from './components/pointer-info/pointer-info.component';
import { TagComponent } from './components/tag/tag.component';
import { TableComponent } from './components/table/table.component';
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
        TextComponent,
        PointerInfoComponent,
        TagComponent,
        TableComponent], imports: [CommonModule,
        NgApexchartsModule], exports: [AngularLibComponent,
        ContainerComponent,
        ColComponent,
        ChartCollumnComponent,
        CardComponent,
        AlertComponent,
        TextComponent,
        IconModule,
        PointerInfoComponent,
        TagComponent,
        TableComponent] });
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
                        PointerInfoComponent,
                        TagComponent,
                        TableComponent,
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
                        IconModule,
                        PointerInfoComponent,
                        TagComponent,
                        TableComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1saWIvc3JjL2xpYi9hbmd1bGFyLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNyRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFvQ3BFLE1BQU0sT0FBTyxnQkFBZ0I7OzZHQUFoQixnQkFBZ0I7OEdBQWhCLGdCQUFnQixpQkE5QnpCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IsY0FBYztRQUNkLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsWUFBWTtRQUNaLGNBQWMsYUFHZCxZQUFZO1FBQ1osa0JBQWtCLGFBR2xCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IsY0FBYztRQUNkLGFBQWE7UUFDYixVQUFVO1FBQ1Ysb0JBQW9CO1FBQ3BCLFlBQVk7UUFDWixjQUFjOzhHQUlMLGdCQUFnQixZQW5CbEI7WUFDUCxZQUFZO1lBQ1osa0JBQWtCO1NBQ25CLEVBU0MsVUFBVTsyRkFPRCxnQkFBZ0I7a0JBaEM1QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixxQkFBcUI7d0JBQ3JCLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLG9CQUFvQjt3QkFDcEIsWUFBWTt3QkFDWixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsVUFBVTt3QkFDVixvQkFBb0I7d0JBQ3BCLFlBQVk7d0JBQ1osY0FBYztxQkFDZjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBOZ0FwZXhjaGFydHNNb2R1bGUgfSBmcm9tICduZy1hcGV4Y2hhcnRzJztcblxuaW1wb3J0IHsgQW5ndWxhckxpYkNvbXBvbmVudCB9IGZyb20gJy4vYW5ndWxhci1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ncmlkL2NvbC9jb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ncmlkL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0Q29sbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGFydC1jb2xsdW1uL2NoYXJ0LWNvbGx1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZXh0L3RleHQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IFBvaW50ZXJJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BvaW50ZXItaW5mby9wb2ludGVyLWluZm8uY29tcG9uZW50JztcbmltcG9ydCB7IFRhZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWcvdGFnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQW5ndWxhckxpYkNvbXBvbmVudCxcbiAgICBDb2xDb21wb25lbnQsXG4gICAgQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIENoYXJ0Q29sbHVtbkNvbXBvbmVudCxcbiAgICBDYXJkQ29tcG9uZW50LFxuICAgIEFsZXJ0Q29tcG9uZW50LFxuICAgIFRleHRDb21wb25lbnQsXG4gICAgUG9pbnRlckluZm9Db21wb25lbnQsXG4gICAgVGFnQ29tcG9uZW50LFxuICAgIFRhYmxlQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE5nQXBleGNoYXJ0c01vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFuZ3VsYXJMaWJDb21wb25lbnQsXG4gICAgQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIENvbENvbXBvbmVudCxcbiAgICBDaGFydENvbGx1bW5Db21wb25lbnQsXG4gICAgQ2FyZENvbXBvbmVudCxcbiAgICBBbGVydENvbXBvbmVudCxcbiAgICBUZXh0Q29tcG9uZW50LFxuICAgIEljb25Nb2R1bGUsXG4gICAgUG9pbnRlckluZm9Db21wb25lbnQsXG4gICAgVGFnQ29tcG9uZW50LFxuICAgIFRhYmxlQ29tcG9uZW50XG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBbmd1bGFyTGliTW9kdWxlIHsgfVxuIl19