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
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PostsModule {}

// app-routing.module.ts
const routes: Routes = [
  {
    path: 'posts',
    loadChildren: import('./posts/posts.module').then(m => m.PostsModule),
  },
  // Other root route definitions
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppModule {}
