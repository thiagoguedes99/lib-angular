import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.css']
})
export class ColComponent implements OnInit {

  @Input() xs: string = '';
  @Input() xsPush: string = '';
  @Input() xsHidden: string = '';

  @Input() sm: string = '';
  @Input() smPush: string = '';
  @Input() smHidden: string = '';

  @Input() md: string = '';
  @Input() mdPush: string = '';
  @Input() mdHidden: string = '';

  @Input() lg: string = '';
  @Input() lgPush: string = '';
  @Input() lgHidden: string = '';

  @Input() xl: string = '';
  @Input() xlPush: string = '';
  @Input() xlHidden: string = '';

  @Input() noPadding: string = '';

  @Input() className: string = '';

  @Input() style: object = {};


  constructor() { }

  ngOnInit(): void {
  }

}
