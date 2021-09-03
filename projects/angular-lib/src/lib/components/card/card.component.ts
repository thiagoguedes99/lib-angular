import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() className: string = '';

  @Input() style: object = {};

  constructor() { }

  ngOnInit(): void {
  }

}
