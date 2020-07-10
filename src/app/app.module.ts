import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TwitInputComponent } from './components/twit-input/twit-input.component';
import { CommentsPageComponent } from './pages/comments-page/comments-page.component';
import { CommentFormPageComponent } from './pages/comment-form-page/comment-form-page.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { TweetCardComponent } from './components/tweet-card/tweet-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    HomePageComponent,
    TwitInputComponent,
    CommentsPageComponent,
    CommentFormPageComponent,
    CommentFormComponent,
    TweetCardComponent,
    LoginFormComponent,
    NavbarComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
