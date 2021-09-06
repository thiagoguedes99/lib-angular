import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-pointer-info',
  templateUrl: './pointer-info.component.html',
  styleUrls: ['./pointer-info.component.css']
})
export class PointerInfoComponent implements OnInit {

  @Input() color: string = ''
  @Input() text: string = ''
  @Input() type: 'small' | 'midium' | 'large' = 'midium';

  @Input() className: string = '';
  @Input() style: object = {};


  constructor() { }

  ngOnInit(): void {
  }

}
