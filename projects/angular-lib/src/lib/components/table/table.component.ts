import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() className: string = '';

  @Input() style: object = {};


  constructor() { }

  ngOnInit(): void {
  }

}
