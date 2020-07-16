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
  imgClose = false;
  selectedFile: File;
  fileUrl: string | ArrayBuffer;
  tweet = {
    title: '',
    text: '',
    postImg: null,
  };

  @Output() outputGetPost = new EventEmitter<void>();

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  get users() {
    return this.userService.getCurrentUser();
  }

  sendTweet() {
    if (this.selectedFile) {
      this.postService.savePostImg(this.selectedFile).subscribe((response) => {
        this.tweet.postImg = response[0];

        const newTweet: Post = {
          id: null,
          title: this.tweet.title,
          text: this.tweet.text,
          user: this.users,
          created_at: null,
          updated_at: null,
          likeCount: 0,
          retweetCount: 0,
          postImg: this.tweet.postImg,
        };
        this.postService.createPost(newTweet).subscribe((response: Post[]) => {
          this.outputGetPost.emit();
          this.fileUrl = '';
          this.selectedFile = null;
        });
      });
    } else {
      const newTweet: Post = {
        id: null,
        title: this.tweet.title,
        text: this.tweet.text,
        user: this.users,
        created_at: null,
        updated_at: null,
        likeCount: 0,
        retweetCount: 0,
        postImg: null,
      };
      this.postService.createPost(newTweet).subscribe((response: Post[]) => {
        this.outputGetPost.emit();
      });
    }
  }

  get AvatarImg() {
    if (this.users) {
      return this.users
        ? this.users.profileImgURL
        : 'assets/avatar-placeholder.png';
    }
  }

  selectFile(event) {
    if (event.target.files[0]) {
      this.selectedFile = event.target.files[0];

      const reader = new FileReader();

      reader.onload = (e) => {
        this.fileUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  closeImg() {
    this.fileUrl = '';
    this.selectedFile = null;
  }
}
