import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-circle-progress";
export class CircleProgressComponent {
    // optionsE = {
    //   percent: 75,
    //   radius: 60,
    //   outerStrokeWidth: 10,
    //   innerStrokeWidth: 10,
    //   space: -10,
    //   outerStrokeColor: "#4882c2",
    //   innerStrokeColor: "#e7e8ea",
    //   showBackground: false,
    //   title: 'UI',
    //   animateTitle: false,
    //   showUnits: false,
    //   clockwise: false,
    //   animationDuration: 1000,
    //   startFromZero: false,
    //   outerStrokeGradient: true,
    //   outerStrokeGradientStopColor: '#53a9ff',
    //   lazy: true,
    //   subtitleFormat: (percent: number): string => {
    //     return `${percent}%`;
    //   }
    // }
    constructor() { }
    ngOnInit() {
    }
}
CircleProgressComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CircleProgressComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CircleProgressComponent, selector: "lib-circle-progress", ngImport: i0, template: "<p>circle-progress works!</p>\n\n<circle-progress\n  [percent]=\"85\"\n  [radius]=\"100\"\n  [outerStrokeWidth]=\"16\"\n  [innerStrokeWidth]=\"8\"\n  [outerStrokeColor]=\"'#78C000'\"\n  [innerStrokeColor]=\"'#C7E596'\"\n  [animation]=\"true\"\n  [animationDuration]=\"300\"\n></circle-progress>\n\n<!-- <circle-progress\n  name=\"E\"\n  [options]=\"optionsE\"\n  [renderOnClick]=\"false\"\n  class=\"copy\"\n  ></circle-progress> -->\n\n  <circle-progress\n\n  [percent]=\"75\"\n  [radius]=\"60\"\n  [outerStrokeWidth]=\"10\"\n  [innerStrokeWidth]=\"10\"\n  [space]=\"-10\"\n  [outerStrokeColor]=\"'#4882c2'\"\n  [innerStrokeColor]=\"'#e7e8ea'\"\n  [showBackground]=\"false\"\n  [title]=\"'UI'\"\n  [animateTitle]=\"false\"\n  [showUnits]=\"false\"\n  [clockwise]=\"false\"\n  [animationDuration]=\"1000\"\n  [startFromZero]=\"false\"\n  [outerStrokeGradient]=\"true\"\n  [outerStrokeGradientStopColor]=\"'#53a9ff'\"\n  [lazy]=\"true\"\n  ></circle-progress>", styles: [""], components: [{ type: i1.CircleProgressComponent, selector: "circle-progress", inputs: ["name", "class", "backgroundGradient", "backgroundColor", "backgroundGradientStopColor", "backgroundOpacity", "backgroundStroke", "backgroundStrokeWidth", "backgroundPadding", "radius", "space", "percent", "toFixed", "maxPercent", "renderOnClick", "units", "unitsFontSize", "unitsFontWeight", "unitsColor", "outerStrokeGradient", "outerStrokeWidth", "outerStrokeColor", "outerStrokeGradientStopColor", "outerStrokeLinecap", "innerStrokeColor", "innerStrokeWidth", "titleFormat", "title", "titleColor", "titleFontSize", "titleFontWeight", "subtitleFormat", "subtitle", "subtitleColor", "subtitleFontSize", "subtitleFontWeight", "imageSrc", "imageHeight", "imageWidth", "animation", "animateTitle", "animateSubtitle", "animationDuration", "showTitle", "showSubtitle", "showUnits", "showImage", "showBackground", "showInnerStroke", "clockwise", "responsive", "startFromZero", "showZeroOuterStroke", "lazy", "options"], outputs: ["onClick"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-circle-progress',
                    templateUrl: './circle-progress.component.html',
                    styleUrls: ['./circle-progress.component.css']
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLXByb2dyZXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY2lyY2xlLXByb2dyZXNzL2NpcmNsZS1wcm9ncmVzcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWxpYi9zcmMvbGliL2NpcmNsZS1wcm9ncmVzcy9jaXJjbGUtcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBT2xELE1BQU0sT0FBTyx1QkFBdUI7SUFFbEMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLDZDQUE2QztJQUM3QyxnQkFBZ0I7SUFDaEIsbURBQW1EO0lBQ25ELDRCQUE0QjtJQUM1QixNQUFNO0lBQ04sSUFBSTtJQUVKLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOztvSEE1QlUsdUJBQXVCO3dHQUF2Qix1QkFBdUIsMkRDUHBDLGc4QkF1Q3FCOzJGRGhDUix1QkFBdUI7a0JBTG5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsV0FBVyxFQUFFLGtDQUFrQztvQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNpcmNsZS1wcm9ncmVzcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaXJjbGUtcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaXJjbGUtcHJvZ3Jlc3MuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENpcmNsZVByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvLyBvcHRpb25zRSA9IHtcbiAgLy8gICBwZXJjZW50OiA3NSxcbiAgLy8gICByYWRpdXM6IDYwLFxuICAvLyAgIG91dGVyU3Ryb2tlV2lkdGg6IDEwLFxuICAvLyAgIGlubmVyU3Ryb2tlV2lkdGg6IDEwLFxuICAvLyAgIHNwYWNlOiAtMTAsXG4gIC8vICAgb3V0ZXJTdHJva2VDb2xvcjogXCIjNDg4MmMyXCIsXG4gIC8vICAgaW5uZXJTdHJva2VDb2xvcjogXCIjZTdlOGVhXCIsXG4gIC8vICAgc2hvd0JhY2tncm91bmQ6IGZhbHNlLFxuICAvLyAgIHRpdGxlOiAnVUknLFxuICAvLyAgIGFuaW1hdGVUaXRsZTogZmFsc2UsXG4gIC8vICAgc2hvd1VuaXRzOiBmYWxzZSxcbiAgLy8gICBjbG9ja3dpc2U6IGZhbHNlLFxuICAvLyAgIGFuaW1hdGlvbkR1cmF0aW9uOiAxMDAwLFxuICAvLyAgIHN0YXJ0RnJvbVplcm86IGZhbHNlLFxuICAvLyAgIG91dGVyU3Ryb2tlR3JhZGllbnQ6IHRydWUsXG4gIC8vICAgb3V0ZXJTdHJva2VHcmFkaWVudFN0b3BDb2xvcjogJyM1M2E5ZmYnLFxuICAvLyAgIGxhenk6IHRydWUsXG4gIC8vICAgc3VidGl0bGVGb3JtYXQ6IChwZXJjZW50OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAvLyAgICAgcmV0dXJuIGAke3BlcmNlbnR9JWA7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8cD5jaXJjbGUtcHJvZ3Jlc3Mgd29ya3MhPC9wPlxuXG48Y2lyY2xlLXByb2dyZXNzXG4gIFtwZXJjZW50XT1cIjg1XCJcbiAgW3JhZGl1c109XCIxMDBcIlxuICBbb3V0ZXJTdHJva2VXaWR0aF09XCIxNlwiXG4gIFtpbm5lclN0cm9rZVdpZHRoXT1cIjhcIlxuICBbb3V0ZXJTdHJva2VDb2xvcl09XCInIzc4QzAwMCdcIlxuICBbaW5uZXJTdHJva2VDb2xvcl09XCInI0M3RTU5NidcIlxuICBbYW5pbWF0aW9uXT1cInRydWVcIlxuICBbYW5pbWF0aW9uRHVyYXRpb25dPVwiMzAwXCJcbj48L2NpcmNsZS1wcm9ncmVzcz5cblxuPCEtLSA8Y2lyY2xlLXByb2dyZXNzXG4gIG5hbWU9XCJFXCJcbiAgW29wdGlvbnNdPVwib3B0aW9uc0VcIlxuICBbcmVuZGVyT25DbGlja109XCJmYWxzZVwiXG4gIGNsYXNzPVwiY29weVwiXG4gID48L2NpcmNsZS1wcm9ncmVzcz4gLS0+XG5cbiAgPGNpcmNsZS1wcm9ncmVzc1xuXG4gIFtwZXJjZW50XT1cIjc1XCJcbiAgW3JhZGl1c109XCI2MFwiXG4gIFtvdXRlclN0cm9rZVdpZHRoXT1cIjEwXCJcbiAgW2lubmVyU3Ryb2tlV2lkdGhdPVwiMTBcIlxuICBbc3BhY2VdPVwiLTEwXCJcbiAgW291dGVyU3Ryb2tlQ29sb3JdPVwiJyM0ODgyYzInXCJcbiAgW2lubmVyU3Ryb2tlQ29sb3JdPVwiJyNlN2U4ZWEnXCJcbiAgW3Nob3dCYWNrZ3JvdW5kXT1cImZhbHNlXCJcbiAgW3RpdGxlXT1cIidVSSdcIlxuICBbYW5pbWF0ZVRpdGxlXT1cImZhbHNlXCJcbiAgW3Nob3dVbml0c109XCJmYWxzZVwiXG4gIFtjbG9ja3dpc2VdPVwiZmFsc2VcIlxuICBbYW5pbWF0aW9uRHVyYXRpb25dPVwiMTAwMFwiXG4gIFtzdGFydEZyb21aZXJvXT1cImZhbHNlXCJcbiAgW291dGVyU3Ryb2tlR3JhZGllbnRdPVwidHJ1ZVwiXG4gIFtvdXRlclN0cm9rZUdyYWRpZW50U3RvcENvbG9yXT1cIicjNTNhOWZmJ1wiXG4gIFtsYXp5XT1cInRydWVcIlxuICA+PC9jaXJjbGUtcHJvZ3Jlc3M+Il19