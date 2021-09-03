import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() color: 'green' | 'red' | 'blue' | 'yellow' = 'green';

  @Input() className: string = '';

  @Input() style: object = {};

  constructor() { }

  ngOnInit(): void {
  }

}
