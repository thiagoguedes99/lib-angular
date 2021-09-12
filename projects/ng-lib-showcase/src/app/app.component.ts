import { Component } from '@angular/core';

import { FuctionsService } from '../../../angular-lib/src/public-api';

type dataChart = {
  name?: string,
  data: string | number,
  color: string,
} []

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

  isHorizontal = true
  isYLegend = true
  dataChart: dataChart | any

  person: string = 'person'
  refresh: string = 'refresh'

  myThead = [
    'titluo 1',
    'titluo 2',
    'titluo 3',
  ]

  myBody = [
    ['cont 1', 'cont 1', 'cont 1'],
    ['cont 2', 'cont 2', 'cont 2'],
    ['cont 3', 'cont 3', 'cont 3'],
  ]

  myStyle = { display: 'flex' }

  dataChartLine = [
    {
      date: '2019-01-01',
      data: 10
    },
    {
      date: '2020-03-05',
      data: 90
    },
    {
      date: '2020-06-09',
      data: 30
    },
    {
      date: '2020-08-15',
      data: 70
    },
    {
      date: '2021-10-20',
      data: 50
    },
  ]

  constructor(private fuctionsService: FuctionsService) { }

  ngOnInit(): void {
    console.log(this.fuctionsService.date('2020-08-17'))
    console.log(this.fuctionsService.fullDate('2020-08-17'))

    this.dataChart = [
      {
        name: 'teste1 test',
        data: '55',
        color: '#33A49D'
      },
      {
        name: 'teste2',
        data: '73',
        color: '#FF008A'
      },
      {
        name: 'teste3',
        data: '97',
        color: '#6A3E3E'
      }
    ]
  }
}
