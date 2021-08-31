import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() full: boolean = false;
  @Input() className: string = '';
  @Input() style: object = {};

  constructor() { }

  ngOnInit(): void {
  }

}
