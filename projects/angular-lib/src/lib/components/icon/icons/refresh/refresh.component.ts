import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-refresh',
  template: `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <path d="M7.99999 3.96666V5.94998L10.6667 3.30555L7.99999 0.661133V2.64445C5.05332 2.64445 2.66666 5.01121 2.66666 7.93329C2.66666 8.97123 2.97332 9.93644 3.49332 10.7496L4.46666 9.78439C4.16666 9.23567 3.99999 8.60101 3.99999 7.93329C3.99999 5.74503 5.79332 3.96666 7.99999 3.96666ZM12.5067 5.11698L11.5333 6.0822C11.8267 6.63752 12 7.26557 12 7.93329C12 10.1215 10.2067 11.8999 7.99999 11.8999V9.91661L5.33332 12.561L7.99999 15.2054V13.2221C10.9467 13.2221 13.3333 10.8554 13.3333 7.93329C13.3333 6.89536 13.0267 5.93014 12.5067 5.11698Z" fill="#323232"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="16" height="15.8665" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `,
  // template: `
  //   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  //   <rect width="16" height="16" transform="matrix(1 0 0 -1 0 16)" fill="url(#pattern0)"/>
  //     <defs>
  //       <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
  //         <use xlink:href="#image0" transform="translate(-0.0909091) scale(0.0218531 0.0227273)"/>
  //       </pattern>
  //       <image id="image0" width="52" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAyCAYAAAATIfj2AAAEJklEQVRoBe2Yyyt+QRjH33/AxkJZKSVZSJIsbCixESmSBdlISUpISIoIZSUWsiBkIaJk4VLIxqVcEqJcchdCcsnl++s7/c6by9E7M+95T9KZejvnPefMPPN5LjPPMy78seb6YzxwgH67RR0LORayWQOOy9mscGVxllvo/Pwc/f39yM3NRWRkJFwul/j5+/sjKSkJtbW1WFhYwMvLi/JkZTpYAvT+/o6VlRXk5OTAz88PnHxGRgbq6+vR1taGgYEBNDY2oqyszA0ZHh6O9vZ23N/fy8xT+huvga6urlBeXi5AkpOTMTExgefn5x8nQPijoyMBGxQUhOjoaExNTYHPrWheAW1vbyMxMREREREYHx/H29ub0pwuLi5QWloqlNHZ2WnqhtfX18jMzMTo6KjU2NpAW1tbiI2NRVpaGvb396WEmX3EWOrq6kJgYCCam5u/QU1OTiIsLAyrq6tm3b890wI6OztDamqq+PHe20Z36+vrQ0BAgLga7vf09ISioiKxwMjGmjIQNVpZWYmYmBhsbGx4y+Luz3G5cNB9jXHX19eFdQYHB93febpRBpqZmQGDeXh42NPYpu9fX1+xvLws3PRrzDFeuDqWlJSA1mFcxcXF4fj42HQss4dKQIYLcHm+vb01G8/jM/ZjkHN/opVbW1txenrqXuUYM1TY2NiYiM/q6mpQCbJNCYgLAV1CxQXMJkLL0K3q6uoQGhoq4Ljkc0M+ODhAdnY2goODBdj8/LzZED8+UwLq7e1VdoEfJf9/wdhZW1tDVVWVAODGzMWBFiTY3d2dpyE+vZcGotkrKipQUFCAx8fHT4NY9YdwTIuKi4sFHGNItUkDUVPUWENDg6oMW7+XBrq8vBTJJd3uNzcHqLu72+cGYo6XkJAAHW+QttDDwwPy8/NRU1Pj3jN8Rba5uQmWF3Nzc8oipIE4MheE9PR03NzcKAtS6cDMPSoqCjs7OyrdxLdKQKqZr/JsAJEVMDtgxSubkH6UowR0cnIifLulpcVnbre7uytSIp09iGBKQEzrOzo6RPrDNMjqxs2bNVF8fLyoanXGVwKiAB6CpKSkoLCwEFworGyLi4siQ+jp6dH2AGUgAkxPTyMkJORTMeYtmFE05uXlacWOIV8LiDkXXYNJJLX5ta4xBpe98tCEFTBLem9dWQuIE/0IxbM2nRWJMUk3I4gVMJyXNpABxbMA4ziK+wdBZRpXTOP4i0kvizwrmldAxgT29vbEISNrGO7wTU1NWFpaEhuwceDBs7rDw0OMjIwgKytLHF2xuKNCWAlb1SwB4mQ4cVahRi1jHAGbXY3qVMdNPYFbBvRREN2O1pidncXQ0JA4DmaWwcMRq5f6j3J57xOgr0Ls/O8A2altHVmOhXS0Zmcfx0J2altHlmMhHa3Z2cexkJ3a1pH15yz0D0gIEVAcOsGWAAAAAElFTkSuQmCC"/>
  //     </defs>
  //   </svg>   
  // `,
  styleUrls: ['./refresh.component.css']
})

export class RefreshComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
