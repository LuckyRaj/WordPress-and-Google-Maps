import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WordpressPostsComponent } from '../components/wordpress-posts/wordpress-posts.component';
import { PostComponent } from '../components/wordpress-posts/post/post.component';
import { GoogleMapsComponent } from '../components/google-maps/google-maps.component';



const routes: Routes = [
  {
    path:'posts', 
    component: WordpressPostsComponent
  },
  {
    path: 'posts/:id',
    component: PostComponent
  },
  {
    path: 'google-maps',
    component: GoogleMapsComponent
  },
  {
    path:'*',
    redirectTo: 'posts',
    pathMatch: 'full'
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
