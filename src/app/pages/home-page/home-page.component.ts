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
  posts:Post[];
  constructor(
    private postService: PostService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  get users () {
   return this.userService.getCurrentUser()
  }

    getPosts () {
      this.postService.loadPost()
      .subscribe((response:Post[]) => this.posts = response)
    } 

}
