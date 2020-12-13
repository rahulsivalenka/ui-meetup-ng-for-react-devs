// app.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const childRoutes: Routes = [
  // route definitions here
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(childRoutes)],
})
export class ChildModule {}
