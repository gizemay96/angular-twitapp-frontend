import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../types/post.type';
import { PostRequestModel } from '../types/postRequestModel.type';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  post: Post[];
  baseUrl = 'http://localhost:1337/posts';

  constructor(private http: HttpClient) {}

  loadPost() {
    return this.http.get(`${this.baseUrl}`);
  }

  likePost(likedTweet: Post) {
    const token = window.localStorage.getItem('token');
    if (!token) return;

    this.http.put(`${this.baseUrl}/${likedTweet.id}`, likedTweet , {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .subscribe(response => this.post);
  }

  rePost(reTweet:Post) {
    const token = window.localStorage.getItem('token');
    if (!token) return;

    this.http.put(`${this.baseUrl}/${reTweet.id}`, reTweet , {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .subscribe(response => this.post);
  }

  createPost(newTweet: Post) {
    const token = window.localStorage.getItem('token');
    if (!token) return;

    return this.http.post(`${this.baseUrl}`, newTweet, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
