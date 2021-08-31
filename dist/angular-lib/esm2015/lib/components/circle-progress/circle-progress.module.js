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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLXByb2dyZXNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9jaXJjbGUtcHJvZ3Jlc3MvY2lyY2xlLXByb2dyZXNzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBeUJ0RSxNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO2tIQUFwQixvQkFBb0IsaUJBbkI3Qix1QkFBdUIsYUFHdkIsWUFBWSx3Q0FhWix1QkFBdUI7a0hBR2Qsb0JBQW9CLFlBakJ0QjtZQUNQLFlBQVk7WUFFWixzQkFBc0IsQ0FBQyxPQUFPLENBQUM7Z0JBQzdCLG9CQUFvQjtnQkFDcEIsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsZ0JBQWdCLEVBQUUsRUFBRTtnQkFDcEIsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDbkIsZ0JBQWdCLEVBQUUsU0FBUztnQkFDM0IsZ0JBQWdCLEVBQUUsU0FBUztnQkFDM0IsaUJBQWlCLEVBQUUsR0FBRzthQUN2QixDQUFDO1NBQ0g7MkZBS1Usb0JBQW9CO2tCQXJCaEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osdUJBQXVCO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFFWixzQkFBc0IsQ0FBQyxPQUFPLENBQUM7NEJBQzdCLG9CQUFvQjs0QkFDcEIsTUFBTSxFQUFFLEdBQUc7NEJBQ1gsZ0JBQWdCLEVBQUUsRUFBRTs0QkFDcEIsZ0JBQWdCLEVBQUUsQ0FBQzs0QkFDbkIsZ0JBQWdCLEVBQUUsU0FBUzs0QkFDM0IsZ0JBQWdCLEVBQUUsU0FBUzs0QkFDM0IsaUJBQWlCLEVBQUUsR0FBRzt5QkFDdkIsQ0FBQztxQkFDSDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsdUJBQXVCO3FCQUN4QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBOZ0NpcmNsZVByb2dyZXNzTW9kdWxlIH0gZnJvbSAnbmctY2lyY2xlLXByb2dyZXNzJztcblxuaW1wb3J0IHsgQ2lyY2xlUHJvZ3Jlc3NDb21wb25lbnQgfSBmcm9tICcuL2NpcmNsZS1wcm9ncmVzcy5jb21wb25lbnQnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2lyY2xlUHJvZ3Jlc3NDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcblxuICAgIE5nQ2lyY2xlUHJvZ3Jlc3NNb2R1bGUuZm9yUm9vdCh7XG4gICAgICAvLyBzZXQgZGVmYXVsdHMgaGVyZVxuICAgICAgcmFkaXVzOiAxMDAsXG4gICAgICBvdXRlclN0cm9rZVdpZHRoOiAxNixcbiAgICAgIGlubmVyU3Ryb2tlV2lkdGg6IDgsXG4gICAgICBvdXRlclN0cm9rZUNvbG9yOiBcIiM3OEMwMDBcIixcbiAgICAgIGlubmVyU3Ryb2tlQ29sb3I6IFwiI0M3RTU5NlwiLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDMwMCxcbiAgICB9KVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2lyY2xlUHJvZ3Jlc3NDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaXJjbGVQcm9ncmVzc01vZHVsZSB7IH1cbiJdfQ==