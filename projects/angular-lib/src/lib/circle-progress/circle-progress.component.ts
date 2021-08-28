import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.css']
})
export class CircleProgressComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
