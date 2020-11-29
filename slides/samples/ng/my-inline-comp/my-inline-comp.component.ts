import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
    <div>
      <h1>My Angular Inline Template</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  `,
  styles: [
    `
      div {
        color: red;
      }
    `,
  ],
})
export class MyCompComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
