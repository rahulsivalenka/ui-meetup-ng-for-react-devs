// app.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// other imports

const routes: Routes = [
  {
    path: 'details/:postId',
    component: PostDetailsComponent,
  },
  {
    path: 'edit/:postId',
    component: EditPostComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: PostsListComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PostsModule {}
