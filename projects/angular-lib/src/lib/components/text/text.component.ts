import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() type: 'small' | 'normal' | 'large' = 'normal';
  @Input() state: 'normal' | 'bold'  = 'normal';

  @Input() className: string = '';

  @Input() style: object = {};

  constructor() { }

  ngOnInit(): void {
  }

}
