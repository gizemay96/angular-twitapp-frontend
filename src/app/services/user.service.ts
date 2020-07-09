import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:1337/users'
  private users: User[];
  private currentUser: User;

  constructor(
    private http: HttpClient
  ) { }

  setCurrentUser(user:User = null) {
    this.currentUser = user
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getUser(id) {
    return this.users.find((user) => user.id == id);
  }

  getUsers() {
    return this.users;
  }

  tryToLogin() {
    const token = window.localStorage.getItem('token')
    if(!token) return;

     this.http.get(`${this.baseUrl}/me`,{
       headers:{
         Authorization:`Bearer ${token}`
       }
     })
     .subscribe((response: User) => {
       this.currentUser = response
     })

  }

  editUser(editForm) {
    const token = window.localStorage.getItem('token')
    if(!token) return;

   this.http.put(`${this.baseUrl}/${editForm.id}`,editForm , {
     headers:{
      Authorization:`Bearer ${token}`
     }
   })
   .subscribe ((response:User) => {
     this.currentUser = response
   })
  }
}
