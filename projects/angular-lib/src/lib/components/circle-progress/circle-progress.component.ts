import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.css']
})
export class CircleProgressComponent implements OnInit {

  @Input() percent: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  subtitleFormat(percent: number): string {
    return `${percent}%`;
  }


}
