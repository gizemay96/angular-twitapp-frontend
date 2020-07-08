import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../types/post.type';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl = 'http://localhost:1337/posts'
  posts:Post;

  constructor(
    private http: HttpClient
  ) { }




  getPost() {
   return this.http.get(`${this.baseUrl}`)
   .subscribe((response: Post) => {
     this.posts = response
   })
  }
}
