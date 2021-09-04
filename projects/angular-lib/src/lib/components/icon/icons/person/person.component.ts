import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-person',
  template: `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6667 1.98334H9.88C9.6 1.21646 8.86667 0.661133 8 0.661133C7.13333 0.661133 6.4 1.21646 6.12 1.98334H3.33333C2.6 1.98334 2 2.57834 2 3.30555V12.561C2 13.2882 2.6 13.8832 3.33333 13.8832H12.6667C13.4 13.8832 14 13.2882 14 12.561V3.30555C14 2.57834 13.4 1.98334 12.6667 1.98334ZM8 1.98334C8.36667 1.98334 8.66667 2.28084 8.66667 2.64445C8.66667 3.00806 8.36667 3.30555 8 3.30555C7.63333 3.30555 7.33333 3.00806 7.33333 2.64445C7.33333 2.28084 7.63333 1.98334 8 1.98334ZM8 4.62776C9.10667 4.62776 10 5.51365 10 6.61108C10 7.70852 9.10667 8.5944 8 8.5944C6.89333 8.5944 6 7.70852 6 6.61108C6 5.51365 6.89333 4.62776 8 4.62776ZM12 12.561H4V11.6355C4 10.3133 6.66667 9.58605 8 9.58605C9.33333 9.58605 12 10.3133 12 11.6355V12.561Z" fill="#323232"/>
    </svg>
  `,
  // template: `
  //   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  //     <rect width="16" height="16" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 16 0)" fill="url(#pattern1)"/>
  //     <defs>
  //       <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
  //         <use xlink:href="#image1" transform="translate(-0.17795 -0.227273) scale(0.0222437 0.0227273)"/>
  //       </pattern>
  //       <image id="image1" width="59" height="62" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA+CAYAAACV6GMAAAACeUlEQVRoBe1ZPcrCQBDNBWy8hFiIldhaaS1YeAUPYWFno6WVYKNg5Q3ECwgqgoIiVjYiYmEj/szHCwjfF+LnamZCSGYgaHbfTObNW9fdjUURMitCXEnJhlVtVVaVDUEFdBiHQERXCqqsa1lC0KjKhkBEVwqqrGtZQtDoq7KXy4Umkwn1ej0aDAY0nU7per36VkZfyD4eDxoOh5TJZMiyrD8X2tAHjLSJkwUJKBmLxahSqdBqtaL7/W5f+I429AEjTVic7Gw2o2QySfV63XXIYhijDxhgJU2U7O12o2q1SsVikY7H40se6AMGWPhImSjZ0+lEpVKJms3m2/yBARY+UiZK9nA4UKFQoG63+zZ/YICFj5SJko2UspH6zWI4RmY2BtlI/c8+CUdiBfV7Zv29NsaKCetktPllorOxXyRMn6NkTStlisP6d7vd0mg0cr3Q58dWT1TZ8/lMrVaLUqnUn22dc5uHe2CAhY+UiZFdLpeUz+cpHo9TrVaj+XzuOhlhglqv1zYGWPjAV8JEyC4WC8pms/ZOZrPZGOcNLHY/8EUMbmMnu9/v7YTL5TLh+6cGH/iC9Df+/z2PnWy73aZ0Ou1JGaiKGIjFaaxkn5vwRqPh6YgFS0zEeLfp/7QQrGTH4zElEgnCp1fjjPXMhZVsv9+nXC5Hu93uGf/rT8RALMTkMlaynKcNn5xymBZDyZpWyolTZZ0VMbzXYWxYqFcw9t+s2yLfS5vJMewrcs52VrI4Ou10OvbrDLzS8HohFuehOStZZyWDdq9kg6YIVz6qLFclgxZHlQ2aIlz5qLJclQxaHFU2aIpw5aPKclUyaHFU2aApwpVPpJT9AYdKlzjjKB/VAAAAAElFTkSuQmCC"/>
  //     </defs>
  //   </svg>
  // `,
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
