import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  @Input() className: string = '';

  @Input() style: object = {};

  constructor() { }

  ngOnInit(): void {
  }

}
