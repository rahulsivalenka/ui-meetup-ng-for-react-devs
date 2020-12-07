import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <div class="root">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    // ...
  ],
})
export class ListComponent {}
