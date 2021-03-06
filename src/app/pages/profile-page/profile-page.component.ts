import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { User } from 'src/app/types/user.type';
import { Post } from 'src/app/types/post.type';
import { PostRequestModel } from 'src/app/types/postRequestModel.type';
import { emit } from 'process';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  //userPosts:Post[];
  posts: Post[];
  show: boolean = false;
  //changePost: boolean = false;
  constructor(
    private userService: UserService,
    private postService: PostService,
    private cdRef: ChangeDetectorRef
  ) {}
  
  get users() {
    return this.userService.getCurrentUser();
  }


  get profileImg() {
   if(this.users){
    return this.users.profileImgURL; 
   }else {
     return "assets/avatar-placeholder.png"
   }
  }

  


  get userPosts() {
    //this.changePost = true;
    // this.postService
    // .loadPost()
    // .subscribe(
    //   (response: Post[]) =>
    //   {this.posts = response.filter(
    //     (post) => post.user.id == this.users.id
    //     );}
    //   );

    return this.userService.getMyPosts()
  }



  ngOnInit(): void {
    this.userService.tryToLogin()
    //this.getUserPosts();
  }


  editForm() {
    this.show = true;
  }

  closeEditForm() {
    this.show = false;
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
