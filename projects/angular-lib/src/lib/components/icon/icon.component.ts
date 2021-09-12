import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input() name: string = ''

  @Input() style: object = {};

  constructor() {}

  ngOnInit(): void { }

}
