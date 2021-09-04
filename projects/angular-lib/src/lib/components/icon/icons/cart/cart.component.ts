import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-cart',
  template: `
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.70592 12C3.96642 12 3.36809 12.6 3.36809 13.3333C3.36809 14.0666 3.96642 14.6666 4.70592 14.6666C5.44542 14.6666 6.05047 14.0666 6.05047 13.3333C6.05047 12.6 5.44542 12 4.70592 12ZM0.672272 1.33331V2.66665H2.01682L4.43701 7.72665L3.52944 9.35998C3.42188 9.54665 3.36137 9.76665 3.36137 9.99998C3.36137 10.7333 3.96642 11.3333 4.70592 11.3333H12.7732V9.99998H4.98828C4.89416 9.99998 4.82021 9.92665 4.82021 9.83331L4.84038 9.75331L5.44542 8.66665H10.4539C10.9581 8.66665 11.4018 8.39331 11.6304 7.97998L14.0371 3.65331C14.0909 3.55998 14.1178 3.44665 14.1178 3.33331C14.1178 2.96665 13.8152 2.66665 13.4455 2.66665H3.50255L2.87061 1.33331H0.672272ZM11.4287 12C10.6892 12 10.0908 12.6 10.0908 13.3333C10.0908 14.0666 10.6892 14.6666 11.4287 14.6666C12.1682 14.6666 12.7732 14.0666 12.7732 13.3333C12.7732 12.6 12.1682 12 11.4287 12Z" fill="#323232"/>
    </svg>
  `,
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
