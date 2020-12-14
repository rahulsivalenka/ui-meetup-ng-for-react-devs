// shared.module.ts
import { TextFieldComonent } from './text-field/text-field.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ToolipComponent, TextFieldComponent],
  exports: [TooltipComponent, TextFieldComonent],
  imports: [CommonModule],
})
export class SharedModule {}

// app.module.ts
import { SharedModule } from './shared.module';
@NgModule({
  imports: [
    // other imports
    SharedModule, // sub module import
  ],
})
export class AppModule {}
