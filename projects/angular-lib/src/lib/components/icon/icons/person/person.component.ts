import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-person',
  // templateUrl: './person.component.html',
  // template: `<p>person works! 2</p>`,
  template: `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="16" height="16" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 16 0)" fill="url(#pattern0)"/>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0" transform="translate(-0.17795 -0.227273) scale(0.0222437 0.0227273)"/>
        </pattern>
        <image id="image0" width="59" height="62" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA+CAYAAACV6GMAAAACeUlEQVRoBe1ZPcrCQBDNBWy8hFiIldhaaS1YeAUPYWFno6WVYKNg5Q3ECwgqgoIiVjYiYmEj/szHCwjfF+LnamZCSGYgaHbfTObNW9fdjUURMitCXEnJhlVtVVaVDUEFdBiHQERXCqqsa1lC0KjKhkBEVwqqrGtZQtDoq7KXy4Umkwn1ej0aDAY0nU7per36VkZfyD4eDxoOh5TJZMiyrD8X2tAHjLSJkwUJKBmLxahSqdBqtaL7/W5f+I429AEjTVic7Gw2o2QySfV63XXIYhijDxhgJU2U7O12o2q1SsVikY7H40se6AMGWPhImSjZ0+lEpVKJms3m2/yBARY+UiZK9nA4UKFQoG63+zZ/YICFj5SJko2UspH6zWI4RmY2BtlI/c8+CUdiBfV7Zv29NsaKCetktPllorOxXyRMn6NkTStlisP6d7vd0mg0cr3Q58dWT1TZ8/lMrVaLUqnUn22dc5uHe2CAhY+UiZFdLpeUz+cpHo9TrVaj+XzuOhlhglqv1zYGWPjAV8JEyC4WC8pms/ZOZrPZGOcNLHY/8EUMbmMnu9/v7YTL5TLh+6cGH/iC9Df+/z2PnWy73aZ0Ou1JGaiKGIjFaaxkn5vwRqPh6YgFS0zEeLfp/7QQrGTH4zElEgnCp1fjjPXMhZVsv9+nXC5Hu93uGf/rT8RALMTkMlaynKcNn5xymBZDyZpWyolTZZ0VMbzXYWxYqFcw9t+s2yLfS5vJMewrcs52VrI4Ou10OvbrDLzS8HohFuehOStZZyWDdq9kg6YIVz6qLFclgxZHlQ2aIlz5qLJclQxaHFU2aIpw5aPKclUyaHFU2aApwpVPpJT9AYdKlzjjKB/VAAAAAElFTkSuQmCC"/>
      </defs>
    </svg>
  `,
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
