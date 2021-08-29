import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-circle-progress";
export class CircleProgressComponent {
    constructor() {
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
        this.percent = 0;
    }
    ngOnInit() {
    }
    subtitleFormat(percent) {
        return `${percent}%`;
    }
}
CircleProgressComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CircleProgressComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: CircleProgressComponent, selector: "lib-circle-progress", inputs: { percent: "percent" }, ngImport: i0, template: "<!-- <p>circle-progress works!</p>\n\n<circle-progress\n  [percent]=\"85\"\n  [radius]=\"100\"\n  [outerStrokeWidth]=\"16\"\n  [innerStrokeWidth]=\"8\"\n  [outerStrokeColor]=\"'#78C000'\"\n  [innerStrokeColor]=\"'#C7E596'\"\n  [animation]=\"true\"\n  [animationDuration]=\"300\"\n></circle-progress> -->\n\n<!-- <circle-progress\n  name=\"E\"\n  [options]=\"optionsE\"\n  [renderOnClick]=\"false\"\n  class=\"copy\"\n  ></circle-progress> -->\n\n  <circle-progress\n    [percent]='percent'\n    [radius]=\"60\"\n    [outerStrokeWidth]=\"10\"\n    [innerStrokeWidth]=\"20\"\n    [space]=\"-20\"\n    [outerStrokeColor]=\"'#4882c2'\"\n    [innerStrokeColor]=\"'#e7e8ea'\"\n    [showBackground]=\"false\"\n    [title]=\"subtitleFormat(percent)\"\n    [animateTitle]=\"false\"\n    [showSubtitle]=\"false\"\n    [showUnits]=\"false\"\n    [clockwise]=\"false\"\n    [animationDuration]=\"1000\"\n    [startFromZero]=\"false\"\n    [outerStrokeGradient]=\"true\"\n    [outerStrokeGradientStopColor]=\"'#53a9ff'\"\n    [lazy]=\"true\"\n    [outerStrokeWidth]=\"20\"\n    [outerStrokeLinecap]=\"'butt'\"\n  ></circle-progress>", styles: [""], components: [{ type: i1.CircleProgressComponent, selector: "circle-progress", inputs: ["name", "class", "backgroundGradient", "backgroundColor", "backgroundGradientStopColor", "backgroundOpacity", "backgroundStroke", "backgroundStrokeWidth", "backgroundPadding", "radius", "space", "percent", "toFixed", "maxPercent", "renderOnClick", "units", "unitsFontSize", "unitsFontWeight", "unitsColor", "outerStrokeGradient", "outerStrokeWidth", "outerStrokeColor", "outerStrokeGradientStopColor", "outerStrokeLinecap", "innerStrokeColor", "innerStrokeWidth", "titleFormat", "title", "titleColor", "titleFontSize", "titleFontWeight", "subtitleFormat", "subtitle", "subtitleColor", "subtitleFontSize", "subtitleFontWeight", "imageSrc", "imageHeight", "imageWidth", "animation", "animateTitle", "animateSubtitle", "animationDuration", "showTitle", "showSubtitle", "showUnits", "showImage", "showBackground", "showInnerStroke", "clockwise", "responsive", "startFromZero", "showZeroOuterStroke", "lazy", "options"], outputs: ["onClick"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: CircleProgressComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-circle-progress',
                    templateUrl: './circle-progress.component.html',
                    styleUrls: ['./circle-progress.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { percent: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLXByb2dyZXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY2lyY2xlLXByb2dyZXNzL2NpcmNsZS1wcm9ncmVzcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWxpYi9zcmMvbGliL2NpcmNsZS1wcm9ncmVzcy9jaXJjbGUtcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sdUJBQXVCO0lBMkJsQztRQXpCQSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQiwwQkFBMEI7UUFDMUIsMEJBQTBCO1FBQzFCLGdCQUFnQjtRQUNoQixpQ0FBaUM7UUFDakMsaUNBQWlDO1FBQ2pDLDJCQUEyQjtRQUMzQixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLDBCQUEwQjtRQUMxQiwrQkFBK0I7UUFDL0IsNkNBQTZDO1FBQzdDLGdCQUFnQjtRQUNoQixtREFBbUQ7UUFDbkQsNEJBQTRCO1FBQzVCLE1BQU07UUFDTixJQUFJO1FBRUssWUFBTyxHQUFXLENBQUMsQ0FBQztJQUViLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxjQUFjLENBQUMsT0FBZTtRQUM1QixPQUFPLEdBQUcsT0FBTyxHQUFHLENBQUM7SUFDdkIsQ0FBQzs7b0hBbENVLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLDJGQ1BwQyxpbUNBeUNxQjsyRkRsQ1IsdUJBQXVCO2tCQUxuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7b0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2lCQUMvQzswRUEwQlUsT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jaXJjbGUtcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2lyY2xlLXByb2dyZXNzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2lyY2xlLXByb2dyZXNzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaXJjbGVQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLy8gb3B0aW9uc0UgPSB7XG4gIC8vICAgcGVyY2VudDogNzUsXG4gIC8vICAgcmFkaXVzOiA2MCxcbiAgLy8gICBvdXRlclN0cm9rZVdpZHRoOiAxMCxcbiAgLy8gICBpbm5lclN0cm9rZVdpZHRoOiAxMCxcbiAgLy8gICBzcGFjZTogLTEwLFxuICAvLyAgIG91dGVyU3Ryb2tlQ29sb3I6IFwiIzQ4ODJjMlwiLFxuICAvLyAgIGlubmVyU3Ryb2tlQ29sb3I6IFwiI2U3ZThlYVwiLFxuICAvLyAgIHNob3dCYWNrZ3JvdW5kOiBmYWxzZSxcbiAgLy8gICB0aXRsZTogJ1VJJyxcbiAgLy8gICBhbmltYXRlVGl0bGU6IGZhbHNlLFxuICAvLyAgIHNob3dVbml0czogZmFsc2UsXG4gIC8vICAgY2xvY2t3aXNlOiBmYWxzZSxcbiAgLy8gICBhbmltYXRpb25EdXJhdGlvbjogMTAwMCxcbiAgLy8gICBzdGFydEZyb21aZXJvOiBmYWxzZSxcbiAgLy8gICBvdXRlclN0cm9rZUdyYWRpZW50OiB0cnVlLFxuICAvLyAgIG91dGVyU3Ryb2tlR3JhZGllbnRTdG9wQ29sb3I6ICcjNTNhOWZmJyxcbiAgLy8gICBsYXp5OiB0cnVlLFxuICAvLyAgIHN1YnRpdGxlRm9ybWF0OiAocGVyY2VudDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgLy8gICAgIHJldHVybiBgJHtwZXJjZW50fSVgO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIEBJbnB1dCgpIHBlcmNlbnQ6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHN1YnRpdGxlRm9ybWF0KHBlcmNlbnQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3BlcmNlbnR9JWA7XG4gIH1cblxuXG59XG4iLCI8IS0tIDxwPmNpcmNsZS1wcm9ncmVzcyB3b3JrcyE8L3A+XG5cbjxjaXJjbGUtcHJvZ3Jlc3NcbiAgW3BlcmNlbnRdPVwiODVcIlxuICBbcmFkaXVzXT1cIjEwMFwiXG4gIFtvdXRlclN0cm9rZVdpZHRoXT1cIjE2XCJcbiAgW2lubmVyU3Ryb2tlV2lkdGhdPVwiOFwiXG4gIFtvdXRlclN0cm9rZUNvbG9yXT1cIicjNzhDMDAwJ1wiXG4gIFtpbm5lclN0cm9rZUNvbG9yXT1cIicjQzdFNTk2J1wiXG4gIFthbmltYXRpb25dPVwidHJ1ZVwiXG4gIFthbmltYXRpb25EdXJhdGlvbl09XCIzMDBcIlxuPjwvY2lyY2xlLXByb2dyZXNzPiAtLT5cblxuPCEtLSA8Y2lyY2xlLXByb2dyZXNzXG4gIG5hbWU9XCJFXCJcbiAgW29wdGlvbnNdPVwib3B0aW9uc0VcIlxuICBbcmVuZGVyT25DbGlja109XCJmYWxzZVwiXG4gIGNsYXNzPVwiY29weVwiXG4gID48L2NpcmNsZS1wcm9ncmVzcz4gLS0+XG5cbiAgPGNpcmNsZS1wcm9ncmVzc1xuICAgIFtwZXJjZW50XT0ncGVyY2VudCdcbiAgICBbcmFkaXVzXT1cIjYwXCJcbiAgICBbb3V0ZXJTdHJva2VXaWR0aF09XCIxMFwiXG4gICAgW2lubmVyU3Ryb2tlV2lkdGhdPVwiMjBcIlxuICAgIFtzcGFjZV09XCItMjBcIlxuICAgIFtvdXRlclN0cm9rZUNvbG9yXT1cIicjNDg4MmMyJ1wiXG4gICAgW2lubmVyU3Ryb2tlQ29sb3JdPVwiJyNlN2U4ZWEnXCJcbiAgICBbc2hvd0JhY2tncm91bmRdPVwiZmFsc2VcIlxuICAgIFt0aXRsZV09XCJzdWJ0aXRsZUZvcm1hdChwZXJjZW50KVwiXG4gICAgW2FuaW1hdGVUaXRsZV09XCJmYWxzZVwiXG4gICAgW3Nob3dTdWJ0aXRsZV09XCJmYWxzZVwiXG4gICAgW3Nob3dVbml0c109XCJmYWxzZVwiXG4gICAgW2Nsb2Nrd2lzZV09XCJmYWxzZVwiXG4gICAgW2FuaW1hdGlvbkR1cmF0aW9uXT1cIjEwMDBcIlxuICAgIFtzdGFydEZyb21aZXJvXT1cImZhbHNlXCJcbiAgICBbb3V0ZXJTdHJva2VHcmFkaWVudF09XCJ0cnVlXCJcbiAgICBbb3V0ZXJTdHJva2VHcmFkaWVudFN0b3BDb2xvcl09XCInIzUzYTlmZidcIlxuICAgIFtsYXp5XT1cInRydWVcIlxuICAgIFtvdXRlclN0cm9rZVdpZHRoXT1cIjIwXCJcbiAgICBbb3V0ZXJTdHJva2VMaW5lY2FwXT1cIididXR0J1wiXG4gID48L2NpcmNsZS1wcm9ncmVzcz4iXX0=