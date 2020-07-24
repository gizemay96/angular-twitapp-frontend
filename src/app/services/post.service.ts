import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../types/post.type';
import { PostRequestModel } from '../types/postRequestModel.type';
import { environment as env } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  post: Post[];
  userPosts: Post[];

  constructor(private http: HttpClient) {}

  loadPost() {
    return this.http.get(`${env.tweetsApiURL}?_sort=created_at:DESC`);
  }

  getUserPosts(userId: number): Observable<any> {
    return this.http
      .get(`${env.tweetsApiURL}?user=${userId}&&_sort=created_at:DESC
     `);
  }

  likePost(likedTweet: Post) {
    const token = window.localStorage.getItem('token');
    if (!token) return;

    this.http
      .put(`${env.tweetsApiURL}/${likedTweet.id}`, likedTweet, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe((response) => this.post);
  }

  rePost(reTweet: Post) {
    const token = window.localStorage.getItem('token');
    if (!token) return;

    this.http
      .put(`${env.tweetsApiURL}/${reTweet.id}`, reTweet, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe((response) => this.post);
  }

  createPost(newTweet: Post) {
    const token = window.localStorage.getItem('token');
    if (!token) return;

    return this.http.post(`${env.tweetsApiURL}`, newTweet, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  savePostImg(file) {
    const form = new FormData();
    form.append('files', file);

    return this.http.post(env.uploadApiURL, form);
  }
}
