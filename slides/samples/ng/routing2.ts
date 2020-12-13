// app.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// other imports

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'posts/edit/:postId',
    component: EditPostComponent,
  },
  {
    path: 'posts',
    component: PostsListComponent,
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppModule {}
