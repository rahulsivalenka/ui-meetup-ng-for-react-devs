import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MyCompComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
