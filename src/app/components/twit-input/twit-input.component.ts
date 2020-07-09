import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/types/post.type';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-twit-input',
  templateUrl: './twit-input.component.html',
  styleUrls: ['./twit-input.component.scss']
})
export class TwitInputComponent implements OnInit {
  tweet = {
    title:'',
    text:''
  }

  constructor(
    private postService: PostService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    
  }

  get users () {
   return this.userService.getCurrentUser()
  }

  sendTweet() {
    const newTweet:Post = {
      id:null,
      title: this.tweet.title,
      text: this.tweet.text,
      user:this.users,
      created_at:null,
      updated_at:null
    };
    this.postService.createPost(newTweet)
      
    
  }

}
