import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CircleProgressComponent } from './circle-progress.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-circle-progress";
export class CircleProgressModule {
}
CircleProgressModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CircleProgressModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressModule, declarations: [CircleProgressComponent], imports: [CommonModule, i1.NgCircleProgressModule], exports: [CircleProgressComponent] });
CircleProgressModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressModule, imports: [[
            CommonModule,
            NgCircleProgressModule.forRoot({
                // set defaults here
                radius: 100,
                outerStrokeWidth: 16,
                innerStrokeWidth: 8,
                outerStrokeColor: "#78C000",
                innerStrokeColor: "#C7E596",
                animationDuration: 300,
            })
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CircleProgressComponent
                    ],
                    imports: [
                        CommonModule,
                        NgCircleProgressModule.forRoot({
                            // set defaults here
                            radius: 100,
                            outerStrokeWidth: 16,
                            innerStrokeWidth: 8,
                            outerStrokeColor: "#78C000",
                            innerStrokeColor: "#C7E596",
                            animationDuration: 300,
                        })
                    ],
                    exports: [
                        CircleProgressComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLXByb2dyZXNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY2lyY2xlLXByb2dyZXNzL2NpcmNsZS1wcm9ncmVzcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQXlCdEUsTUFBTSxPQUFPLG9CQUFvQjs7aUhBQXBCLG9CQUFvQjtrSEFBcEIsb0JBQW9CLGlCQW5CN0IsdUJBQXVCLGFBR3ZCLFlBQVksd0NBYVosdUJBQXVCO2tIQUdkLG9CQUFvQixZQWpCdEI7WUFDUCxZQUFZO1lBRVosc0JBQXNCLENBQUMsT0FBTyxDQUFDO2dCQUM3QixvQkFBb0I7Z0JBQ3BCLE1BQU0sRUFBRSxHQUFHO2dCQUNYLGdCQUFnQixFQUFFLEVBQUU7Z0JBQ3BCLGdCQUFnQixFQUFFLENBQUM7Z0JBQ25CLGdCQUFnQixFQUFFLFNBQVM7Z0JBQzNCLGdCQUFnQixFQUFFLFNBQVM7Z0JBQzNCLGlCQUFpQixFQUFFLEdBQUc7YUFDdkIsQ0FBQztTQUNIOzJGQUtVLG9CQUFvQjtrQkFyQmhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHVCQUF1QjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBRVosc0JBQXNCLENBQUMsT0FBTyxDQUFDOzRCQUM3QixvQkFBb0I7NEJBQ3BCLE1BQU0sRUFBRSxHQUFHOzRCQUNYLGdCQUFnQixFQUFFLEVBQUU7NEJBQ3BCLGdCQUFnQixFQUFFLENBQUM7NEJBQ25CLGdCQUFnQixFQUFFLFNBQVM7NEJBQzNCLGdCQUFnQixFQUFFLFNBQVM7NEJBQzNCLGlCQUFpQixFQUFFLEdBQUc7eUJBQ3ZCLENBQUM7cUJBQ0g7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHVCQUF1QjtxQkFDeEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTmdDaXJjbGVQcm9ncmVzc01vZHVsZSB9IGZyb20gJ25nLWNpcmNsZS1wcm9ncmVzcyc7XG5cbmltcG9ydCB7IENpcmNsZVByb2dyZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9jaXJjbGUtcHJvZ3Jlc3MuY29tcG9uZW50JztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENpcmNsZVByb2dyZXNzQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG5cbiAgICBOZ0NpcmNsZVByb2dyZXNzTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgLy8gc2V0IGRlZmF1bHRzIGhlcmVcbiAgICAgIHJhZGl1czogMTAwLFxuICAgICAgb3V0ZXJTdHJva2VXaWR0aDogMTYsXG4gICAgICBpbm5lclN0cm9rZVdpZHRoOiA4LFxuICAgICAgb3V0ZXJTdHJva2VDb2xvcjogXCIjNzhDMDAwXCIsXG4gICAgICBpbm5lclN0cm9rZUNvbG9yOiBcIiNDN0U1OTZcIixcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAzMDAsXG4gICAgfSlcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENpcmNsZVByb2dyZXNzQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2lyY2xlUHJvZ3Jlc3NNb2R1bGUgeyB9XG4iXX0=