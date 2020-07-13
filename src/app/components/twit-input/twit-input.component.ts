import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/types/post.type';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-twit-input',
  templateUrl: './twit-input.component.html',
  styleUrls: ['./twit-input.component.scss'],
})
export class TwitInputComponent implements OnInit {
  tweet = {
    title: '',
    text: '',
  };

  @Output() outputGetPost = new EventEmitter<void>();

  constructor(
    private postService: PostService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get users() {
    return this.userService.getCurrentUser();
  }

  sendTweet() {
    const newTweet: Post = {
      id: null,
      title: this.tweet.title,
      text: this.tweet.text,
      user: this.users,
      created_at: null,
      updated_at: null,
      likeCount: 0,
      retweetCount: 0,
    };
    this.postService.createPost(newTweet).subscribe((response: Post[]) => {
      this.outputGetPost.emit();
    });

    (this.tweet.title = ''), (this.tweet.text = '');
  }

  get AvatarImg() {
    if(this.users) {
      return this.users ?
      this.users.profileImgURL :
      'assets/avatar-placeholder.png'
    } 
  }
}
