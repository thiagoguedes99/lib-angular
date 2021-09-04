import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-verification',
  template: `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.0667 7.1928L10.12 6.25403L7.29333 9.06373L5.88 7.65557L4.93333 8.59434L7.29333 10.9347L11.0667 7.1928Z" fill="#323232"/>
      <path d="M12.6667 2.64441H3.33333C2.59333 2.64441 2 3.2394 2 3.96662V11.8999C2 12.6271 2.59333 13.2221 3.33333 13.2221H12.6667C13.4 13.2221 14 12.6271 14 11.8999V3.96662C14 3.2394 13.4067 2.64441 12.6667 2.64441ZM12.6667 11.8999H3.33333V5.28883H12.6667V11.8999Z" fill="#323232"/>
    </svg>  
  `,
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
