import { Component, Injectable, NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// app.module.ts
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    // rest of the imports
  ],
  // declarations, bootstrap, providers
})
export class AppModule {}

// my-comp.component.ts
@Component({
  selector: 'app-my-comp',
  template: `
    <form (ngSubmit)="onSubmit()" #myForm="ngForm">
      <div>
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          [(ngModel)]="model.name"
          name="name"
          #name="ngModel"
        />
        <div [hidden]="name.valid || name.pristine">Name is required</div>
      </div>

      <button type="submit" [disabled]="!myForm.form.valid">Submit</button>
    </form>
  `,
})
export class MyCompComponent implements OnInit {
  model = {
    name: '',
  };

  onSubmit() {
    console.log('form submitted with values', this.model);
  }
}
