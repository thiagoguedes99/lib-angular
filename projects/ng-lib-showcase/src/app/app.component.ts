import { Component } from '@angular/core';

import { FormatService } from '../../../angular-lib/src/public-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-lib-showcase';

  constructor(private formatService: FormatService) { }

  ngOnInit(): void {
    console.log(this.formatService.date('2020-08-17'))
    console.log(this.formatService.fullDate('2020-08-17'))
  }
}
