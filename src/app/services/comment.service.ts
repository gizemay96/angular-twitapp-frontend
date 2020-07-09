import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../types/comment.type';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseUrl = 'http://localhost:1337/comments';
  comments:Comment[];

  constructor(
    private http: HttpClient
  ) { }

  loadComments() {
    return this.http.get(`${this.baseUrl}`);
  }


  // getComments(postId) {
  //   let comment:Comment[];
  //   comment = this.comments.filter((comment) => comment.post.id == postId);
  //   return comment;
  // }
}
