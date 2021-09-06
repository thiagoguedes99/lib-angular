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

  ngOnInit(): void {
    console.log('ngOnInit Icon inicio')
    console.log(this.name)
    console.log('ngOnInit Icon final')
  }

}
