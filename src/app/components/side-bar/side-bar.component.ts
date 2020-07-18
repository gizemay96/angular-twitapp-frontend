import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/types/user.type';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/types/post.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  posts:Post[];
  users:User[];

  constructor(
    private userService: UserService,
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.getPosts();
    this.getUsers();
  }

  getUsers () {
    return this.userService.getUsers()
    .subscribe((response:User[]) => this.users = response )
  }

  get currentUser() {
    return this.userService.getCurrentUser();
  }

  getPosts() {
    this.postService.loadPost()
      .subscribe((response: Post[]) => {
        this.posts = response;
      });
  }

}
