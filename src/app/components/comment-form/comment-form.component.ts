import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../types/comment.type';
import { Post } from '../../types/post.type';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  posts:Post;
  postId: Number = +(this.route.snapshot.paramMap.get('id'));


  comment = {
    title:'',
    text:''
  }

  constructor(
    private userService: UserService,
    private postService: PostService,
    private commentService: CommentService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getPosts()
  }

  get users () {
    return this.userService.getCurrentUser()
   }

   getPosts () {
    this.postService.loadPost()
    .subscribe((response:Post[]) => this.posts = response.find((post) => post.id == this.postId))
    
  }

  sendComment() {
    const newComment:Comment = {
      id:null,
      title:this.comment.title,
      text:this.comment.text,
      user:this.users,
      post:this.posts,
      created_at:'',
      updated_at:''
    };


    this.commentService.createComment(newComment)
  }

}
