import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../types/post.type';
import { PostRequestModel } from '../types/postRequestModel.type';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl = 'http://localhost:1337/posts'
  posts:Post[];
  //request:PostRequestModel;

  constructor(
    private http: HttpClient
  ) { }

 loadPost() {
   return this.http.get(`${this.baseUrl}`);
 }
 
  getPost() {
   return this.posts;
  }

  // getPostFilter(request: PostRequestModel) {
  //   if (request !=undefined && request != null) {
  //     if(request.userId != null){
  //       let responsePost : Post[];
  //       responsePost = this.posts.filter(post => post.user.id == request.userId);
  //       return responsePost;
  //     }    
  //   }
  //  }


  createPost (newTweet) {
    const token = window.localStorage.getItem('token')
    if(!token) return;

    return this.http.post(`${this.baseUrl}`,newTweet,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .subscribe((response: Post[]) => {
      this.posts = response
    })
    
  }
}
