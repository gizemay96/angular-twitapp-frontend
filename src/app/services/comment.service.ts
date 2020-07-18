import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../types/comment.type';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  comments: Comment[];

  constructor(private http: HttpClient) {}

  loadComments() {
    return this.http.get(`${env.commentsApiURL}?_sort=created_at:DESC`);
  }

  createComment(newComment) {
    const token = window.localStorage.getItem('token');
    if (!token) return;

    return this.http
      .post(`${env.commentsApiURL}`, newComment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe((response: Comment[]) => {
        this.comments = response;
      });
  }

  likeComment(likeComment: Comment) {
    const token = window.localStorage.getItem('token');
    if (!token) return;

    this.http
      .put(`${env.commentsApiURL}/${likeComment.id}`, likeComment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe((response) => this.comments);
  }

  reComment(reComment: Comment) {
    const token = window.localStorage.getItem('token');
    if (!token) return;

    this.http
      .put(`${env.commentsApiURL}/${reComment.id}`, reComment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe((response) => this.comments);
  }
}
