import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CommentsPageComponent } from './pages/comments-page/comments-page.component';
import { CommentFormPageComponent } from './pages/comment-form-page/comment-form-page.component';


const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"profile", component:ProfilePageComponent},
  {path:"tweet/:id", component: CommentsPageComponent},
  {path:"commentform/tweet/:id", component: CommentFormPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
