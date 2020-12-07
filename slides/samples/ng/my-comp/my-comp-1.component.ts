import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  AfterViewChecked,
  AfterContentChecked,
  Input,
} from '@angular/core';

@Component({
  selector: 'my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.scss'],
})
export class MyCompComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy {
  @Input() name: string;

  @Input() age: number;

  count = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.name) {
      // name has changed
    }

    if (changes.age) {
      // age has changed
    }

    // Doesn't work as count is not an input
    // (i.e., not decorated with @Input())
    if (changes.count || changes.name) {
      // does not execute
    }
  }

  ngOnInit(): void {
    // Do something on
    // initialization
  }

  ngAfterViewInit(): void {
    // Code here
  }

  ngAfterContentInit(): void {
    // Code here
  }

  ngDoCheck(): void {
    // Code here
  }

  ngAfterViewChecked(): void {
    // Code here
  }

  ngAfterContentChecked(): void {
    // Code here
  }

  ngOnDestroy(): void {
    // Code here
  }
}
