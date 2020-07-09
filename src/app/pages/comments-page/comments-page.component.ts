import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../types/post.type'
import { Comment } from '../../types/comment.type';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.scss']
})
export class CommentsPageComponent implements OnInit {
  comments: Comment[];
  posts:Post[];
  postId: Number = +(this.route.snapshot.paramMap.get('id'));

  constructor(
    private commentService: CommentService,
    private postService: PostService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit(): void { 
    this.getPosts();
    this.getComments();
  }

  getPosts () {
    this.postService.loadPost()
    .subscribe((response:Post[]) => this.posts = response.filter((post) => post.id == this.postId))
    
  }

  get users () {
    return this.userService.getCurrentUser();
  }

  getComments() {
   this.commentService.loadComments()
    .subscribe((response:Comment[]) => this.comments = response.filter((comment) => comment.post.id == this.postId))
  }

}
