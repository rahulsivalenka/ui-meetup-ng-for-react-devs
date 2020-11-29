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
  Output,
  EventEmitter,
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

  @Output() nameChange = new EventEmitter<string>();

  count: number = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    // Do something on
    // initialization
  }

  ngDoCheck(): void {
    // Code here
  }

  ngAfterViewInit(): void {
    // Code here
  }

  ngAfterViewChecked(): void {
    // Code here
  }

  ngAfterContentInit(): void {
    // Code here
  }

  ngAfterContentChecked(): void {
    // Code here
  }

  ngOnDestroy(): void {
    // Code here
  }

  onNameChangeClick() {
    const newName = getRandomName();
    this.nameChange.emit(newName);
  }

  increment() {
    this.count = this.count + 1;
  }
}
