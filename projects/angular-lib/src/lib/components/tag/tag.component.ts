import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input() color: string = ''
  @Input() text: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
