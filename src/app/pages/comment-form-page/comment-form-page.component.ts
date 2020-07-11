import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { Post } from 'src/app/types/post.type';

@Component({
  selector: 'app-comment-form-page',
  templateUrl: './comment-form-page.component.html',
  styleUrls: ['./comment-form-page.component.scss'],
})
export class CommentFormPageComponent implements OnInit {
  posts: Post[];
  postId: Number = +this.route.snapshot.paramMap.get('id');

  constructor(
    private postService: PostService,
    private userService: UserService,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  get users() {
    return this.userService.getCurrentUser();
  }

  getPosts() {
    this.postService.loadPost().subscribe((response: Post[]) => {
      this.posts = response.filter((post) => post.id == this.postId);
      this.cdRef.detectChanges();
    });
  }

  like(post:Post) {
    post.likeCount ++;
    this.postService.likePost(post);
  }
}
