import { Component } from '@angular/core';

import { FormatService } from '../../../angular-lib/src/public-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-lib-showcase';
  colStyle = {
    backgroundColor: Math.random() > 0.5 ? 'blue' : 'red',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '4px',
    textAlign: 'center',
    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.03)',
    justifyContent: 'center',
  };

  constructor(private formatService: FormatService) { }

  ngOnInit(): void {
    console.log(this.formatService.date('2020-08-17'))
    console.log(this.formatService.fullDate('2020-08-17'))
  }
}
