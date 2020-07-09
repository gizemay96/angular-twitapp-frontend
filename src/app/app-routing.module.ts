import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CommentsPageComponent } from './pages/comments-page/comments-page.component';
import { CommentFormPageComponent } from './pages/comment-form-page/comment-form-page.component';


const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"login", component:LoginPageComponent},
  {path:"register", component:RegisterPageComponent},
  {path:"profile", component:ProfilePageComponent},
  {path:"tweet/:id", component: CommentsPageComponent},
  {path:"commentform/tweet/:id", component: CommentFormPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
