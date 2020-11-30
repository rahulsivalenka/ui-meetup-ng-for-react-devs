import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
