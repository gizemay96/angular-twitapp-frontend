import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { User } from 'src/app/types/user.type';
import { Post } from 'src/app/types/post.type';
import { PostRequestModel } from 'src/app/types/postRequestModel.type';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  posts:Post[];
  show: boolean = false;
  constructor(
    private userService : UserService,
    private postService : PostService,
  ) { 

  }

  ngOnInit(): void {
    this.getUserPosts();
  }

  get users() {
    return this.userService.getCurrentUser();
  }

  getUserPosts() {
   this.postService.loadPost()
    .subscribe((response:Post[]) => this.posts = response.filter((post) => post.user.id == this.users.id))
  }

  editForm() {
    this.show = true;
  }

  closeEditForm() {
    this.show = false;
  }

}
