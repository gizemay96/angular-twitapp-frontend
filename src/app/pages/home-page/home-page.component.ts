import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { Post } from 'src/app/types/post.type';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private postService: PostService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  get users () {
   return  this.userService.getUser()
  }

  get posts () {
   this.postService.getPost();
   return this.postService.posts;
    
  }
  

}
