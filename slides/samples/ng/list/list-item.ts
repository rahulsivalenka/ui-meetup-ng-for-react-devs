import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  template: `
    <div class="item">
      <div
        class="item-icon"
        style="--url: url('{{imageUrl}}')"
      />
      <div class="item-content">{{name}}</div>
    </div>
  `,
  styles: [
    // ...
  ],
})
export class ListItemComponent {
  @Input() name: string;

  @Input() imageUrl: string;
}
