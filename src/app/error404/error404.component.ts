import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  template: `
    <h1>
      Error 404! Not found
    </h1>
  `,
  styles: [
  ]
})
export class Error404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
