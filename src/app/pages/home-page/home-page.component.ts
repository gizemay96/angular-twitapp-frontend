import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { Post } from 'src/app/types/post.type';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  baseApiURL = 'http://localhost:1337';
  posts: Post;
  constructor(
    private postService: PostService,
    private userService: UserService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  get users() {
    return this.userService.getCurrentUser();
  }

  getPosts() {
    this.postService.loadPost()
      .subscribe((response: Post) => {
        this.posts = response;
        this.cdRef.detectChanges();
      });
  }

  like(post: Post) {
    post.likeCount++;
    this.postService.likePost(post);
  }

  retweet(post: Post) {
    post.retweetCount++;
    this.postService.rePost(post);
  }

}
