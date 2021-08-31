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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLXByb2dyZXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9jaXJjbGUtcHJvZ3Jlc3MvY2lyY2xlLXByb2dyZXNzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbGliL3NyYy9saWIvY29tcG9uZW50cy9jaXJjbGUtcHJvZ3Jlc3MvY2lyY2xlLXByb2dyZXNzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPekQsTUFBTSxPQUFPLHVCQUF1QjtJQTJCbEM7UUF6QkEsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsMEJBQTBCO1FBQzFCLDBCQUEwQjtRQUMxQixnQkFBZ0I7UUFDaEIsaUNBQWlDO1FBQ2pDLGlDQUFpQztRQUNqQywyQkFBMkI7UUFDM0IsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLDZCQUE2QjtRQUM3QiwwQkFBMEI7UUFDMUIsK0JBQStCO1FBQy9CLDZDQUE2QztRQUM3QyxnQkFBZ0I7UUFDaEIsbURBQW1EO1FBQ25ELDRCQUE0QjtRQUM1QixNQUFNO1FBQ04sSUFBSTtRQUVLLFlBQU8sR0FBVyxDQUFDLENBQUM7SUFFYixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsY0FBYyxDQUFDLE9BQWU7UUFDNUIsT0FBTyxHQUFHLE9BQU8sR0FBRyxDQUFDO0lBQ3ZCLENBQUM7O29IQWxDVSx1QkFBdUI7d0dBQXZCLHVCQUF1QiwyRkNQcEMsaW1DQXlDcUI7MkZEbENSLHVCQUF1QjtrQkFMbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixXQUFXLEVBQUUsa0NBQWtDO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztpQkFDL0M7MEVBMEJVLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY2lyY2xlLXByb2dyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NpcmNsZS1wcm9ncmVzcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NpcmNsZS1wcm9ncmVzcy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2lyY2xlUHJvZ3Jlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIG9wdGlvbnNFID0ge1xuICAvLyAgIHBlcmNlbnQ6IDc1LFxuICAvLyAgIHJhZGl1czogNjAsXG4gIC8vICAgb3V0ZXJTdHJva2VXaWR0aDogMTAsXG4gIC8vICAgaW5uZXJTdHJva2VXaWR0aDogMTAsXG4gIC8vICAgc3BhY2U6IC0xMCxcbiAgLy8gICBvdXRlclN0cm9rZUNvbG9yOiBcIiM0ODgyYzJcIixcbiAgLy8gICBpbm5lclN0cm9rZUNvbG9yOiBcIiNlN2U4ZWFcIixcbiAgLy8gICBzaG93QmFja2dyb3VuZDogZmFsc2UsXG4gIC8vICAgdGl0bGU6ICdVSScsXG4gIC8vICAgYW5pbWF0ZVRpdGxlOiBmYWxzZSxcbiAgLy8gICBzaG93VW5pdHM6IGZhbHNlLFxuICAvLyAgIGNsb2Nrd2lzZTogZmFsc2UsXG4gIC8vICAgYW5pbWF0aW9uRHVyYXRpb246IDEwMDAsXG4gIC8vICAgc3RhcnRGcm9tWmVybzogZmFsc2UsXG4gIC8vICAgb3V0ZXJTdHJva2VHcmFkaWVudDogdHJ1ZSxcbiAgLy8gICBvdXRlclN0cm9rZUdyYWRpZW50U3RvcENvbG9yOiAnIzUzYTlmZicsXG4gIC8vICAgbGF6eTogdHJ1ZSxcbiAgLy8gICBzdWJ0aXRsZUZvcm1hdDogKHBlcmNlbnQ6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIC8vICAgICByZXR1cm4gYCR7cGVyY2VudH0lYDtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBASW5wdXQoKSBwZXJjZW50OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBzdWJ0aXRsZUZvcm1hdChwZXJjZW50OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtwZXJjZW50fSVgO1xuICB9XG5cblxufVxuIiwiPCEtLSA8cD5jaXJjbGUtcHJvZ3Jlc3Mgd29ya3MhPC9wPlxuXG48Y2lyY2xlLXByb2dyZXNzXG4gIFtwZXJjZW50XT1cIjg1XCJcbiAgW3JhZGl1c109XCIxMDBcIlxuICBbb3V0ZXJTdHJva2VXaWR0aF09XCIxNlwiXG4gIFtpbm5lclN0cm9rZVdpZHRoXT1cIjhcIlxuICBbb3V0ZXJTdHJva2VDb2xvcl09XCInIzc4QzAwMCdcIlxuICBbaW5uZXJTdHJva2VDb2xvcl09XCInI0M3RTU5NidcIlxuICBbYW5pbWF0aW9uXT1cInRydWVcIlxuICBbYW5pbWF0aW9uRHVyYXRpb25dPVwiMzAwXCJcbj48L2NpcmNsZS1wcm9ncmVzcz4gLS0+XG5cbjwhLS0gPGNpcmNsZS1wcm9ncmVzc1xuICBuYW1lPVwiRVwiXG4gIFtvcHRpb25zXT1cIm9wdGlvbnNFXCJcbiAgW3JlbmRlck9uQ2xpY2tdPVwiZmFsc2VcIlxuICBjbGFzcz1cImNvcHlcIlxuICA+PC9jaXJjbGUtcHJvZ3Jlc3M+IC0tPlxuXG4gIDxjaXJjbGUtcHJvZ3Jlc3NcbiAgICBbcGVyY2VudF09J3BlcmNlbnQnXG4gICAgW3JhZGl1c109XCI2MFwiXG4gICAgW291dGVyU3Ryb2tlV2lkdGhdPVwiMTBcIlxuICAgIFtpbm5lclN0cm9rZVdpZHRoXT1cIjIwXCJcbiAgICBbc3BhY2VdPVwiLTIwXCJcbiAgICBbb3V0ZXJTdHJva2VDb2xvcl09XCInIzQ4ODJjMidcIlxuICAgIFtpbm5lclN0cm9rZUNvbG9yXT1cIicjZTdlOGVhJ1wiXG4gICAgW3Nob3dCYWNrZ3JvdW5kXT1cImZhbHNlXCJcbiAgICBbdGl0bGVdPVwic3VidGl0bGVGb3JtYXQocGVyY2VudClcIlxuICAgIFthbmltYXRlVGl0bGVdPVwiZmFsc2VcIlxuICAgIFtzaG93U3VidGl0bGVdPVwiZmFsc2VcIlxuICAgIFtzaG93VW5pdHNdPVwiZmFsc2VcIlxuICAgIFtjbG9ja3dpc2VdPVwiZmFsc2VcIlxuICAgIFthbmltYXRpb25EdXJhdGlvbl09XCIxMDAwXCJcbiAgICBbc3RhcnRGcm9tWmVyb109XCJmYWxzZVwiXG4gICAgW291dGVyU3Ryb2tlR3JhZGllbnRdPVwidHJ1ZVwiXG4gICAgW291dGVyU3Ryb2tlR3JhZGllbnRTdG9wQ29sb3JdPVwiJyM1M2E5ZmYnXCJcbiAgICBbbGF6eV09XCJ0cnVlXCJcbiAgICBbb3V0ZXJTdHJva2VXaWR0aF09XCIyMFwiXG4gICAgW291dGVyU3Ryb2tlTGluZWNhcF09XCInYnV0dCdcIlxuICA+PC9jaXJjbGUtcHJvZ3Jlc3M+Il19