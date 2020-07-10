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

  createComment(newComment) {
    const token = window.localStorage.getItem('token')
    if(!token) return;

    return this.http.post(`${this.baseUrl}`,newComment,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .subscribe((response: Comment[]) => {
      this.comments = response
    })
  }

}
