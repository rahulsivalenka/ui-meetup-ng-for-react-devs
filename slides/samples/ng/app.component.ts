import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      Cart: {cartService.count}
    </div>  
  `
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public cartService: CartService) {}
}
