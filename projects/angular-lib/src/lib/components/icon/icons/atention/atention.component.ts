import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-atention',
  template: `
    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg" [ngStyle]="style">
      <path d="M0 19H22L11 0L0 19ZM12 16H10V14H12V16ZM12 12H10V8H12V12Z" fill="#B71C1C"/>
    </svg>  
  `,
  styleUrls: ['./atention.component.css']
})
export class AtentionComponent implements OnInit {

  @Input() style: object = {};

  constructor() { }

  ngOnInit(): void {
  }

}
