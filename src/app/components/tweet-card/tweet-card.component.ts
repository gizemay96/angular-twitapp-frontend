import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/types/post.type';
import { environment as env} from 'src/environments/environment';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss'],
})
export class TweetCardComponent implements OnInit {
  @Input() posts: Post;
  @Input() users;
  @Output() likeTweet = new EventEmitter<Post>();
  @Output() reTweet = new EventEmitter<Post>();

  isLike: boolean = false;
  isReTweet: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  likePost(post: Post) {
    this.likeTweet.emit(post);
    this.isLike = true;
  }

  reTweetPost(post: Post) {
    this.reTweet.emit(post);
    this.isReTweet = true;
  }

  getAvatarImg(id) {
    return this.posts[id].user.profileImg ?
    `${env.baseApiURL}${this.posts[id].user.profileImg.url}` :
    'assets/avatar-placeholder.png'
    }
  
}
